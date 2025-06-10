// Nightclub entertainment shows
// This file contains nightclub entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const nightclubEntertainment: Entertainment[] = [
  {
    id: "f3f0da85-ca27-4653-a3ed-c53e787ab059",
    category: "Nightclub",
    name: "VIP Club Experience",
    description: "Electronic dance music with amazing light shows",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "VIP Club Experience performance times"
    },
    contact: {
      contactNumber: "+1-468-476-6584",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6406e19a-450a-4089-baa8-1737750c940b",
      title: "VIP Club Experience",
      description: "Electronic dance music with amazing light shows",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "98 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "VIP Club Experience performance times"
        }],
      performers: [        {
                "id": "5b5e005d-668c-4f6b-abd0-2586533d175b",
                "name": "Maria Grant",
                "role": "Dance Instructor",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/70.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "The VIP Club Experience party was incredible! Danced until the early morning hours.",
          author: "Samantha Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-611",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Robert Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-204",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Grace Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-558",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Patrick Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-164",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Janet Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-234",
        },
        {
          quote: "The VIP Club Experience party was incredible! Danced until the early morning hours.",
          author: "Susan Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 4,
          date: "-643",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Cynthia Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-525",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Jacob Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-39",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Joshua Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-1007",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "cfc2f418-6614-4f95-a7fb-b14789804a47",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 16,
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
    id: "f3f0da85-ca27-4653-a3ed-c53e787ab059",
    category: "Nightclub",
    name: "Masquerade Ball",
    description: "Neon-themed party with glow sticks and UV lighting",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Masquerade Ball performance times"
    },
    contact: {
      contactNumber: "+1-777-201-5155",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4601feb0-17aa-4b9d-ada5-c931af0fa3d5",
      title: "Masquerade Ball",
      description: "Neon-themed party with glow sticks and UV lighting",
      tickets: {
        isRequired: false,
        price: 36,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "103 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Masquerade Ball performance times"
        }],
      performers: [        {
                "id": "29657fe6-dca2-466b-910f-6cfb0a960c7a",
                "name": "Bryan Chambers",
                "role": "Event Coordinator",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/48.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
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
          author: "Riley Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-74",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Thomas Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-795",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Samantha Murray",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-797",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Amy Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-130",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Mark Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-645",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Adam Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-469",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Eleanor Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-841",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    id: "f3f0da85-ca27-4653-a3ed-c53e787ab059",
    category: "Nightclub",
    name: "VIP Club Experience",
    description: "Neon-themed party with glow sticks and UV lighting",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "VIP Club Experience performance times"
    },
    contact: {
      contactNumber: "+1-687-716-7322",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6357d221-38ce-4589-8a18-dd5de3fa73fb",
      title: "VIP Club Experience",
      description: "Neon-themed party with glow sticks and UV lighting",
      tickets: {
        isRequired: false,
        price: 34,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "85 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "VIP Club Experience performance times"
        }],
      performers: [        {
                "id": "75efd9f2-65d4-4165-aed6-c74d0c5ac95d",
                "name": "Oliver Payne",
                "role": "DJ",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/55.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Elena Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-863",
        },
        {
          quote: "The VIP Club Experience party was incredible! Danced until the early morning hours.",
          author: "Kevin Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-1002",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Christopher Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-116",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Thandiwe Nash",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-639",
        },
        {
          quote: "The VIP Club Experience party was incredible! Danced until the early morning hours.",
          author: "Victoria Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-708",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Amanda Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-5",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Genesis Dixon",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-857",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Samuel Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-1077",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Jane Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-562",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "bc549fda-6036-419f-85e7-7ae6777743a9",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 9,
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
    id: "f3f0da85-ca27-4653-a3ed-c53e787ab059",
    category: "Nightclub",
    name: "Cocktails & Dancing",
    description: "Professional DJs spinning the latest tracks",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Cocktails & Dancing performance times"
    },
    contact: {
      contactNumber: "+1-676-836-3842",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "87b512a7-c80d-4aba-97b1-681eb8bc3bda",
      title: "Cocktails & Dancing",
      description: "Professional DJs spinning the latest tracks",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "94 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Cocktails & Dancing performance times"
        }],
      performers: [        {
                "id": "e0bd3e64-2337-4d13-a6e8-af7f7b892d72",
                "name": "Sophia Parker",
                "role": "Event Coordinator",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/31.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Dance Instructor",
                        "Lighting Technician",
                        "MC"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Mary Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-704",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Lawrence Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-208",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Eleanor Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-1000",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Javier Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-620",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Nancy Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-379",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Aaliyah Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-765",
        },
        {
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Timothy Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-886",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "49b6b43c-68bf-437c-b20a-5699f0467b86",
              "name": "Glow Accessories",
              "description": "LED bracelets and necklaces",
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
    isPopular: false
  },
  {
    id: "f3f0da85-ca27-4653-a3ed-c53e787ab059",
    category: "Nightclub",
    name: "Live DJ Sets",
    description: "Classic hits from the 70s, 80s, and 90s",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Live DJ Sets performance times"
    },
    contact: {
      contactNumber: "+1-385-712-7772",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "89535d29-d32f-4207-8992-5cf338986398",
      title: "Live DJ Sets",
      description: "Classic hits from the 70s, 80s, and 90s",
      tickets: {
        isRequired: false,
        price: 39,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Live DJ Sets performance times"
        }],
      performers: [        {
                "id": "1d278386-465a-4dfa-9bca-9a892739f36d",
                "name": "Lucas Curtis",
                "role": "Lighting Technician",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/24.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "The Live DJ Sets party was incredible! Danced until the early morning hours.",
          author: "Victor Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-249",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Audrey Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-421",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Amina Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-415",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Russell Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-654",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Mary Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-321",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "81d451ab-557e-4df5-bfbb-e2a5fee48899",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 16,
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
    id: "f3f0da85-ca27-4653-a3ed-c53e787ab059",
    category: "Nightclub",
    name: "Retro Dance Night",
    description: "Elegant masquerade ball with formal attire",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Retro Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-379-993-4916",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "750fb33d-a920-434f-b5a2-48d7c72ea5ce",
      title: "Retro Dance Night",
      description: "Elegant masquerade ball with formal attire",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Retro Dance Night performance times"
        }],
      performers: [        {
                "id": "8a996414-6e07-4bfd-bf29-cd3ac4bb22fa",
                "name": "Scott Warren",
                "role": "Dance Instructor",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/10.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Event Coordinator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Brenda Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-62",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Timothy Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-192",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Jason Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-429",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Janet Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-103",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Chen Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-44",
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
    id: "f3f0da85-ca27-4653-a3ed-c53e787ab059",
    category: "Nightclub",
    name: "Dance Floor Competition",
    description: "Exclusive VIP nightclub experience with premium service",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Dance Floor Competition performance times"
    },
    contact: {
      contactNumber: "+1-905-673-5660",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a9df5e6a-810b-47e0-9532-b2d2a54258c2",
      title: "Dance Floor Competition",
      description: "Exclusive VIP nightclub experience with premium service",
      tickets: {
        isRequired: false,
        price: 44,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "82 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Dance Floor Competition performance times"
        }],
      performers: [        {
                "id": "b740b2dc-e1ba-43b8-9b0c-648c33ce6925",
                "name": "Stella Douglas",
                "role": "DJ",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/68.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "DJ",
                        "Dance Instructor",
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
          author: "Isabella Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-438",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Alexander Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-617",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Edward Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-797",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Carol Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-635",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Catherine Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-853",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Keith Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-328",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Caroline Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-963",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Jerry Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-848",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Elena Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-838",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Oliver Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-730",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a1ec7641-8795-481f-991b-015f1f760cba",
              "name": "Club T-Shirt",
              "description": "Official nightclub merchandise",
              "price": 29,
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
    id: "f3f0da85-ca27-4653-a3ed-c53e787ab059",
    category: "Nightclub",
    name: "Electronic Dance Music",
    description: "Electronic dance music with amazing light shows",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Electronic Dance Music performance times"
    },
    contact: {
      contactNumber: "+1-674-424-7347",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4d9c809b-46f7-4e78-a0d6-5d1acd1b4c0b",
      title: "Electronic Dance Music",
      description: "Electronic dance music with amazing light shows",
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
                "description": "Electronic Dance Music performance times"
        }],
      performers: [        {
                "id": "e46c4e6d-46c2-477c-864f-43af10a9ade8",
                "name": "Bryan Hayes",
                "role": "Dance Instructor",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/61.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Kevin West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-886",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Nora Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-59",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Steven Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-83",
        },
        {
          quote: "The Electronic Dance Music party was incredible! Danced until the early morning hours.",
          author: "Darrell Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-264",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Thandiwe Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-317",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Aaron Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-942",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Anna Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-876",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "59bc32a6-1616-4f88-9733-1039fb3c2793",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
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
    isPopular: false
  }
];
