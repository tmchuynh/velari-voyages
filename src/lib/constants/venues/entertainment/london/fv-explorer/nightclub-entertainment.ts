// Nightclub entertainment shows
// This file contains nightclub entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const nightclubEntertainment: Entertainment[] = [
  {
    id: "ceebd6d9-ee74-4ffd-8f0e-ea864621ba59",
    category: "Nightclub",
    name: "DJ Dance Party",
    description: "Sophisticated evening of cocktails and social dancing",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "DJ Dance Party performance times"
    },
    contact: {
      contactNumber: "+1-657-262-3931",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8452a256-94f9-403a-8dd6-8862d6bb18c1",
      title: "DJ Dance Party",
      description: "Sophisticated evening of cocktails and social dancing",
      tickets: {
        isRequired: true,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "DJ Dance Party performance times"
        }],
      performers: [        {
                "id": "b3c7839e-9483-46e6-bea0-22687d3297d9",
                "name": "Antonio Montgomery",
                "role": "Dance Instructor",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/60.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "The DJ Dance Party party was incredible! Danced until the early morning hours.",
          author: "Tyler Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-591",
        },
        {
          quote: "The DJ Dance Party party was incredible! Danced until the early morning hours.",
          author: "Jordan Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-755",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Alice Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-124",
        },
        {
          quote: "The DJ Dance Party party was incredible! Danced until the early morning hours.",
          author: "Madelyn Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-225",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Leah Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-47",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Kimberly Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-52",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Jonathan Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-191",
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
    id: "ceebd6d9-ee74-4ffd-8f0e-ea864621ba59",
    category: "Nightclub",
    name: "Theme Party Night",
    description: "Electronic dance music with amazing light shows",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Theme Party Night performance times"
    },
    contact: {
      contactNumber: "+1-316-281-6236",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6a5bbbe4-22e6-4be9-949e-e0f6bd79531e",
      title: "Theme Party Night",
      description: "Electronic dance music with amazing light shows",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Theme Party Night performance times"
        }],
      performers: [        {
                "id": "56ed570d-0d87-40cc-8909-839a906b8a57",
                "name": "Ethan Mason",
                "role": "Dance Instructor",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/19.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Event Coordinator",
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
          author: "Emma Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-953",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Jason Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-1082",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Melissa Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-548",
        },
        {
          quote: "The Theme Party Night party was incredible! Danced until the early morning hours.",
          author: "Patrick Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-188",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Lucas Hunter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-913",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Sarah Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-714",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Genesis Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-222",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Kenneth Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-507",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Frank Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-137",
        }
      ],
      hasVIPSeating: true,
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
    id: "ceebd6d9-ee74-4ffd-8f0e-ea864621ba59",
    category: "Nightclub",
    name: "Retro Dance Night",
    description: "Elegant masquerade ball with formal attire",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "Retro Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-697-137-3256",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e7d2bb49-0004-4a74-87e3-4e800c0e9bc9",
      title: "Retro Dance Night",
      description: "Elegant masquerade ball with formal attire",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "97 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "Retro Dance Night performance times"
        }],
      performers: [        {
                "id": "cf723743-e713-456b-83cc-322e43b41dd2",
                "name": "Joan Hawkins",
                "role": "Lighting Technician",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/30.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Dance Instructor",
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
          author: "Barbara Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-572",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Thabo Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-856",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Dylan Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-44",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Bobby Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-120",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Aaron Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-266",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Janet Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-408",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Hannah Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-46",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Michael Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-258",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a4046c50-a382-4242-8fbd-2da2df93af70",
              "name": "Glow Accessories",
              "description": "LED bracelets and necklaces",
              "price": 7,
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
    id: "ceebd6d9-ee74-4ffd-8f0e-ea864621ba59",
    category: "Nightclub",
    name: "Dance Floor Competition",
    description: "Dance competitions with prizes and recognition",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Dance Floor Competition performance times"
    },
    contact: {
      contactNumber: "+1-840-259-7431",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "be1dd3d6-8d9b-43a5-91e2-7d7d16c9674e",
      title: "Dance Floor Competition",
      description: "Dance competitions with prizes and recognition",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "93 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Dance Floor Competition performance times"
        }],
      performers: [        {
                "id": "577d6a9f-57f6-43d6-8181-f4010e143b0a",
                "name": "Jose West",
                "role": "Lighting Technician",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/78.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Dance Instructor",
                        "Event Coordinator",
                        "Lighting Technician"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Scarlett Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-226",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Lisa Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-459",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Patricia Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-450",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Angela Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-809",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Joshua Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-409",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Timothy Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-973",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Chloe Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-427",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Daniel Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-314",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Victor Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-952",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "2328b70e-0558-4b43-b1c2-1b704fcdecf7",
              "name": "Club T-Shirt",
              "description": "Official nightclub merchandise",
              "price": 29,
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
    id: "ceebd6d9-ee74-4ffd-8f0e-ea864621ba59",
    category: "Nightclub",
    name: "Latin Dance Club",
    description: "Classic hits from the 70s, 80s, and 90s",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Latin Dance Club performance times"
    },
    contact: {
      contactNumber: "+1-290-143-4082",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4a888f8b-0ce0-4af1-90d4-08b14893c751",
      title: "Latin Dance Club",
      description: "Classic hits from the 70s, 80s, and 90s",
      tickets: {
        isRequired: true,
        price: 21,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Latin Dance Club performance times"
        }],
      performers: [        {
                "id": "4a94b5b7-df2a-4e92-a040-5d876a426fbe",
                "name": "Patrick Douglas",
                "role": "Event Coordinator",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/79.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          author: "Olivia Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-987",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Jack Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-960",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Leah Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-719",
        },
        {
          quote: "The Latin Dance Club party was incredible! Danced until the early morning hours.",
          author: "Johnny Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-1078",
        },
        {
          quote: "The Latin Dance Club party was incredible! Danced until the early morning hours.",
          author: "Patricia Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-858",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Arthur Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-765",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Emma Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-299",
        },
        {
          quote: "The Latin Dance Club party was incredible! Danced until the early morning hours.",
          author: "Louis Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-941",
        }
      ],
      hasVIPSeating: true,
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
    isPopular: true
  },
  {
    id: "ceebd6d9-ee74-4ffd-8f0e-ea864621ba59",
    category: "Nightclub",
    name: "VIP Club Experience",
    description: "Professional DJs spinning the latest tracks",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "VIP Club Experience performance times"
    },
    contact: {
      contactNumber: "+1-843-495-7817",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "969a649a-abb0-4a88-8a84-9b9c8a60cde7",
      title: "VIP Club Experience",
      description: "Professional DJs spinning the latest tracks",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "VIP Club Experience performance times"
        }],
      performers: [        {
                "id": "3cd5b660-9e59-41a6-b089-3d276553d114",
                "name": "Claire Hamilton",
                "role": "Dance Instructor",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/24.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
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
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Abigail Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-142",
        },
        {
          quote: "The VIP Club Experience party was incredible! Danced until the early morning hours.",
          author: "Avery Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-887",
        },
        {
          quote: "The VIP Club Experience party was incredible! Danced until the early morning hours.",
          author: "Thabo Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-1030",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Virginia Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-810",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Naomi Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-77",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Adeline Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-901",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Isabella Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-299",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Maya Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-1063",
        },
        {
          quote: "The VIP Club Experience party was incredible! Danced until the early morning hours.",
          author: "Jeffrey Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-532",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Abigail Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-864",
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
    isPopular: true
  },
  {
    id: "ceebd6d9-ee74-4ffd-8f0e-ea864621ba59",
    category: "Nightclub",
    name: "Theme Party Night",
    description: "Elegant masquerade ball with formal attire",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Theme Party Night performance times"
    },
    contact: {
      contactNumber: "+1-230-870-5265",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "84543b07-1160-49c6-af88-a587ed97430e",
      title: "Theme Party Night",
      description: "Elegant masquerade ball with formal attire",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "85 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Theme Party Night performance times"
        }],
      performers: [        {
                "id": "444a9c13-8493-4b2e-929b-e92a01ffe275",
                "name": "Joshua Palmer",
                "role": "MC",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/29.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
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
          author: "Genesis Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-276",
        },
        {
          quote: "The Theme Party Night party was incredible! Danced until the early morning hours.",
          author: "Aiden Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-403",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Elizabeth Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-553",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Diego Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-244",
        },
        {
          quote: "The Theme Party Night party was incredible! Danced until the early morning hours.",
          author: "Claire Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-456",
        },
        {
          quote: "The Theme Party Night party was incredible! Danced until the early morning hours.",
          author: "Amanda Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-564",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "df56f85c-f216-40aa-baf5-fe7b60e004b6",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 20,
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
    id: "ceebd6d9-ee74-4ffd-8f0e-ea864621ba59",
    category: "Nightclub",
    name: "VIP Club Experience",
    description: "Professional DJs spinning the latest tracks",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "VIP Club Experience performance times"
    },
    contact: {
      contactNumber: "+1-882-373-5222",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d592b12c-0dda-43c5-b911-37555ef4a195",
      title: "VIP Club Experience",
      description: "Professional DJs spinning the latest tracks",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "117 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "VIP Club Experience performance times"
        }],
      performers: [        {
                "id": "08266f1d-55d2-4748-9e89-de7cec837354",
                "name": "Victoria Morgan",
                "role": "Event Coordinator",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/44.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Kevin Charlotte",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-824",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Robert Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-838",
        },
        {
          quote: "The VIP Club Experience party was incredible! Danced until the early morning hours.",
          author: "Genesis Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-533",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Pamela Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-418",
        },
        {
          quote: "The VIP Club Experience party was incredible! Danced until the early morning hours.",
          author: "Amina Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-1041",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Eleanor Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-556",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b8f5d77b-0222-445d-8de2-4e79631aa808",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 10,
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
    id: "ceebd6d9-ee74-4ffd-8f0e-ea864621ba59",
    category: "Nightclub",
    name: "DJ Dance Party",
    description: "Dance to your own beat with wireless headphone technology",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "DJ Dance Party performance times"
    },
    contact: {
      contactNumber: "+1-512-541-8369",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "800a42d1-8358-48a6-aca1-9296490d3c30",
      title: "DJ Dance Party",
      description: "Dance to your own beat with wireless headphone technology",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "72 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "DJ Dance Party performance times"
        }],
      performers: [        {
                "id": "400ccdfb-7600-4869-bf41-39f8579931f1",
                "name": "Sofia Spencer",
                "role": "Dance Instructor",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/81.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Douglas Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-945",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Albert Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-447",
        },
        {
          quote: "The DJ Dance Party party was incredible! Danced until the early morning hours.",
          author: "Raymond Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-655",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Gabriel Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-504",
        },
        {
          quote: "The DJ Dance Party party was incredible! Danced until the early morning hours.",
          author: "Philip Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-760",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "64487e90-cfb0-44e7-93b8-224c511488c1",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 14,
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
  }
];
