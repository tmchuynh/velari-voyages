// Nightclub entertainment shows
// This file contains nightclub entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const nightclubEntertainment: Entertainment[] = [
  {
    id: "15bb4a2c-5b55-456e-ba14-0b2fb23fcdf8",
    category: "Nightclub",
    name: "Silent Disco",
    description: "Exclusive VIP nightclub experience with premium service",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Silent Disco performance times"
    },
    contact: {
      contactNumber: "+1-773-903-2812",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0a723641-e99a-4d72-ac6a-1d3f5c860286",
      title: "Silent Disco",
      description: "Exclusive VIP nightclub experience with premium service",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "83 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Silent Disco performance times"
        }],
      performers: [        {
                "id": "d081c3b0-2573-4158-aa98-b5b915054966",
                "name": "Gabriel Porter",
                "role": "Dance Instructor",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/51.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "DJ",
                        "MC",
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
          author: "Peter Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-1080",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Nomsa Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-644",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Ryan Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-477",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Antonio Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-440",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Hannah Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "-207",
        },
        {
          quote: "The Silent Disco party was incredible! Danced until the early morning hours.",
          author: "Samantha Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-485",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Julie Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-610",
        },
        {
          quote: "The Silent Disco party was incredible! Danced until the early morning hours.",
          author: "Maya Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 4,
          date: "-803",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "6313e0a1-5db5-4b5f-ba64-36316a524b21",
              "name": "Club T-Shirt",
              "description": "Official nightclub merchandise",
              "price": 31,
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
    id: "15bb4a2c-5b55-456e-ba14-0b2fb23fcdf8",
    category: "Nightclub",
    name: "Live DJ Sets",
    description: "High-energy dance party with professional DJs",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Live DJ Sets performance times"
    },
    contact: {
      contactNumber: "+1-581-164-9574",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "36d876f7-2157-4ec3-b88d-cd81e60c3dee",
      title: "Live DJ Sets",
      description: "High-energy dance party with professional DJs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Live DJ Sets performance times"
        }],
      performers: [        {
                "id": "ec00f861-cb3e-4af9-aa5d-4b119b59df21",
                "name": "Thandiwe Reed",
                "role": "DJ",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/6.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Event Coordinator",
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
          quote: "The Live DJ Sets party was incredible! Danced until the early morning hours.",
          author: "Edward Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-810",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Katherine Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-364",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Johnny Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-609",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Elena Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-258",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Carol Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-449",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Diego Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-142",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ef47f37f-e5c5-475e-8a4e-b11685054ace",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 14,
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
    id: "15bb4a2c-5b55-456e-ba14-0b2fb23fcdf8",
    category: "Nightclub",
    name: "Retro Dance Night",
    description: "Exclusive VIP nightclub experience with premium service",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Retro Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-487-855-5799",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b2e901f6-4d9c-4cce-b04c-f0457c0c15d2",
      title: "Retro Dance Night",
      description: "Exclusive VIP nightclub experience with premium service",
      tickets: {
        isRequired: false,
        price: 39,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Retro Dance Night performance times"
        }],
      performers: [        {
                "id": "484ea6ec-3077-408b-9044-d39a405565f4",
                "name": "Lawrence Bennett",
                "role": "Event Coordinator",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/12.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Antonio Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-230",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Aria Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-728",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Skylar Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-396",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Katherine Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-263",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Bruce Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-291",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Leah Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-639",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Brenda Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-1071",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "01519de1-984e-4a9b-b6fc-75a775ed1a59",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 14,
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
    id: "15bb4a2c-5b55-456e-ba14-0b2fb23fcdf8",
    category: "Nightclub",
    name: "Dance Floor Competition",
    description: "Dance to your own beat with wireless headphone technology",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Dance Floor Competition performance times"
    },
    contact: {
      contactNumber: "+1-957-806-9834",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b80d9583-6058-476c-9a2b-62efdd4779e3",
      title: "Dance Floor Competition",
      description: "Dance to your own beat with wireless headphone technology",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Dance Floor Competition performance times"
        }],
      performers: [        {
                "id": "3280b4d7-43e7-4f36-bf40-5b365722e005",
                "name": "Matthew Olivia",
                "role": "Event Coordinator",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/58.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Emily Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-871",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Sarah Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-835",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Tyler Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-512",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Thomas Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-1060",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Kennedy Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-589",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Nancy Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-160",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Brandon Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-279",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Layla Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-366",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Leah Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-452",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d8fc4874-f70d-4265-a85d-1ae38aa7a2d7",
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
    id: "15bb4a2c-5b55-456e-ba14-0b2fb23fcdf8",
    category: "Nightclub",
    name: "Dance Floor Competition",
    description: "Sophisticated evening of cocktails and social dancing",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Dance Floor Competition performance times"
    },
    contact: {
      contactNumber: "+1-654-651-9985",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cae476b8-e057-4bd0-ad4c-a3dd44944d83",
      title: "Dance Floor Competition",
      description: "Sophisticated evening of cocktails and social dancing",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "118 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Dance Floor Competition performance times"
        }],
      performers: [        {
                "id": "260b7dfd-4f46-471d-a24e-f7c5c02c9786",
                "name": "Jennifer Day",
                "role": "Lighting Technician",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/20.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Lighting Technician",
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
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Jack Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-472",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Brandon Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-608",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Mateo Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-9",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Aaliyah Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-673",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Laura Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-233",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "aa7c2066-3969-4854-9cd8-d4598cfa8e46",
              "name": "Club T-Shirt",
              "description": "Official nightclub merchandise",
              "price": 32,
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
    id: "15bb4a2c-5b55-456e-ba14-0b2fb23fcdf8",
    category: "Nightclub",
    name: "Theme Party Night",
    description: "Dance competitions with prizes and recognition",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Theme Party Night performance times"
    },
    contact: {
      contactNumber: "+1-352-918-7135",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d31621c8-c130-40dc-95a1-5a435c9858d7",
      title: "Theme Party Night",
      description: "Dance competitions with prizes and recognition",
      tickets: {
        isRequired: false,
        price: 16,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "107 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Theme Party Night performance times"
        }],
      performers: [        {
                "id": "525d34cf-7d3d-4a34-b240-cc2d84f403b8",
                "name": "Roger Russell",
                "role": "Dance Instructor",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/81.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Brenda Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-890",
        },
        {
          quote: "The Theme Party Night party was incredible! Danced until the early morning hours.",
          author: "Samuel Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-898",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Hannah Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-568",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Anna Ellis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-168",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Arthur Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-27",
        },
        {
          quote: "The Theme Party Night party was incredible! Danced until the early morning hours.",
          author: "Elizabeth Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-207",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Raymond Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-236",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Avery Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "-234",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "020fdb65-2174-48f2-8abc-3768ba3574a6",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
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
  },
  {
    id: "15bb4a2c-5b55-456e-ba14-0b2fb23fcdf8",
    category: "Nightclub",
    name: "Glow Party",
    description: "Exclusive VIP nightclub experience with premium service",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Glow Party performance times"
    },
    contact: {
      contactNumber: "+1-958-453-2728",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "16dcd713-386d-4f08-b9b4-76ee7b208cea",
      title: "Glow Party",
      description: "Exclusive VIP nightclub experience with premium service",
      tickets: {
        isRequired: false,
        price: 16,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Glow Party performance times"
        }],
      performers: [        {
                "id": "1737cf71-35f4-4fb6-8bda-01e9f6b0daa0",
                "name": "Alexander Sutton",
                "role": "DJ",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/47.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Event Coordinator",
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
          quote: "The Glow Party party was incredible! Danced until the early morning hours.",
          author: "Melissa Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-254",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Thabo Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-693",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Juan Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-1003",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Wei Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-430",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Zachary Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-418",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d4803979-aca8-4986-8ae8-c8b46b18009c",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 9,
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
    id: "15bb4a2c-5b55-456e-ba14-0b2fb23fcdf8",
    category: "Nightclub",
    name: "Glow Party",
    description: "Latin music and dance with authentic rhythms",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Glow Party performance times"
    },
    contact: {
      contactNumber: "+1-920-607-7603",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "778ad81e-3610-4f45-8faa-5b5d217e9aae",
      title: "Glow Party",
      description: "Latin music and dance with authentic rhythms",
      tickets: {
        isRequired: false,
        price: 31,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Glow Party performance times"
        }],
      performers: [        {
                "id": "5ab8d479-e870-4484-b7cd-bc6992a839cf",
                "name": "Victoria Mitchell",
                "role": "DJ",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/39.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "MC",
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
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Audrey Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-117",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Marcus Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-443",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Angela Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-464",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Madelyn Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-713",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Alan Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-966",
        },
        {
          quote: "The Glow Party party was incredible! Danced until the early morning hours.",
          author: "Victoria Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-954",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "60944bcc-31b8-4ee4-9db4-8b1fd1367fc7",
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
  }
];
