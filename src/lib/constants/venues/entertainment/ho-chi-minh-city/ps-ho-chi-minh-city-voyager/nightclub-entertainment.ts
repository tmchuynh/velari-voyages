// Nightclub entertainment shows
// This file contains nightclub entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const nightclubEntertainment: Entertainment[] = [
  {
    id: "2c16fd2c-cf83-4c6a-b9b4-59008a489178",
    category: "Nightclub",
    name: "Live DJ Sets",
    description: "High-energy dance party with professional DJs",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "Live DJ Sets performance times"
    },
    contact: {
      contactNumber: "+1-781-866-2432",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ff2e440e-6c15-440a-b6cd-e8570bc511c6",
      title: "Live DJ Sets",
      description: "High-energy dance party with professional DJs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "111 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "Live DJ Sets performance times"
        }],
      performers: [        {
                "id": "f7c52aa0-205b-4bbe-8af3-9225c3fb862b",
                "name": "Nora Wells",
                "role": "MC",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/46.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "MC"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Mark Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-1053",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Noah Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-789",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Gary Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-976",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Zachary Jennings",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-322",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Isabella Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-509",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Ronald Graham",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-135",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Tyler Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-859",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Rachel Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-330",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "6faa676b-cd3b-4de7-818b-7cfb0c20fe77",
              "name": "Glow Accessories",
              "description": "LED bracelets and necklaces",
              "price": 5,
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
    id: "2c16fd2c-cf83-4c6a-b9b4-59008a489178",
    category: "Nightclub",
    name: "Masquerade Ball",
    description: "Neon-themed party with glow sticks and UV lighting",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Masquerade Ball performance times"
    },
    contact: {
      contactNumber: "+1-825-944-3193",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "014dd60e-dc27-4881-806e-0b309ef724d2",
      title: "Masquerade Ball",
      description: "Neon-themed party with glow sticks and UV lighting",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "113 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Masquerade Ball performance times"
        }],
      performers: [        {
                "id": "e9b91d10-a83a-455a-ba91-81944dbc96fc",
                "name": "Bella Dean",
                "role": "MC",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/75.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "DJ",
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
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Christopher Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-438",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Hannah Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-1052",
        },
        {
          quote: "The Masquerade Ball party was incredible! Danced until the early morning hours.",
          author: "Stephen Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-142",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Gabriella Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-474",
        },
        {
          quote: "The Masquerade Ball party was incredible! Danced until the early morning hours.",
          author: "Dorothy Hudson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-945",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Sebastian Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-762",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Gabriel Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-823",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Isabella Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-307",
        },
        {
          quote: "The Masquerade Ball party was incredible! Danced until the early morning hours.",
          author: "Chen Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-62",
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
    isPopular: true
  },
  {
    id: "2c16fd2c-cf83-4c6a-b9b4-59008a489178",
    category: "Nightclub",
    name: "Live DJ Sets",
    description: "Elegant masquerade ball with formal attire",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Live DJ Sets performance times"
    },
    contact: {
      contactNumber: "+1-286-862-7153",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0ded4805-f1b5-41bb-8163-8764bef53090",
      title: "Live DJ Sets",
      description: "Elegant masquerade ball with formal attire",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "112 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Live DJ Sets performance times"
        }],
      performers: [        {
                "id": "8ea15006-f3b7-43f9-b5ac-17a9fb073e7e",
                "name": "Laura Campbell",
                "role": "Dance Instructor",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/19.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          author: "Nicole Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-845",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Chen Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-877",
        },
        {
          quote: "The Live DJ Sets party was incredible! Danced until the early morning hours.",
          author: "Rachel Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-673",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Jonathan Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-936",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Alice Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-767",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Carlos Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "10",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "aa782b81-7e25-491f-a13a-ec17f5ce261c",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 23,
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
    id: "2c16fd2c-cf83-4c6a-b9b4-59008a489178",
    category: "Nightclub",
    name: "Masquerade Ball",
    description: "Latin music and dance with authentic rhythms",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Masquerade Ball performance times"
    },
    contact: {
      contactNumber: "+1-393-829-3067",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9ee292d6-e99c-4ef0-bee3-53ee76122f8a",
      title: "Masquerade Ball",
      description: "Latin music and dance with authentic rhythms",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "82 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Masquerade Ball performance times"
        }],
      performers: [        {
                "id": "fd65c3de-8fb0-44e1-9a5c-7f87ff2ddf66",
                "name": "Tyler Maxwell",
                "role": "DJ",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/45.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Sarah Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "1",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "George Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-818",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Bella Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-557",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Stephanie Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-584",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Mia Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-936",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Robert Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-472",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Lisa Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-475",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Isabella Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-784",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5d420e00-18e4-4f3e-8d2e-3f42036a7b1d",
              "name": "Club T-Shirt",
              "description": "Official nightclub merchandise",
              "price": 28,
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
    isPopular: true
  },
  {
    id: "2c16fd2c-cf83-4c6a-b9b4-59008a489178",
    category: "Nightclub",
    name: "Live DJ Sets",
    description: "Latin music and dance with authentic rhythms",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "Live DJ Sets performance times"
    },
    contact: {
      contactNumber: "+1-927-955-2678",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "84a62455-afbe-446a-a2fb-126f78c49861",
      title: "Live DJ Sets",
      description: "Latin music and dance with authentic rhythms",
      tickets: {
        isRequired: false,
        price: 15,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "98 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "Live DJ Sets performance times"
        }],
      performers: [        {
                "id": "3b7c1ba1-8722-43d2-8fab-227f702591a4",
                "name": "Elizabeth Ellis",
                "role": "DJ",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/49.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
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
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Lily Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-369",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Juan Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-875",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Janet Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-984",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Sofia Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-367",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Nora Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-295",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Thabo Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-198",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Sofia Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-483",
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
    id: "2c16fd2c-cf83-4c6a-b9b4-59008a489178",
    category: "Nightclub",
    name: "Glow Party",
    description: "Themed dance parties with costumes and special decorations",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Glow Party performance times"
    },
    contact: {
      contactNumber: "+1-785-158-5267",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "44e34d4a-6773-49c4-8b66-70715837b48e",
      title: "Glow Party",
      description: "Themed dance parties with costumes and special decorations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "83 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Glow Party performance times"
        }],
      performers: [        {
                "id": "9a4f175a-dc04-401e-a69c-65f7f3130bb5",
                "name": "Emma Chambers",
                "role": "DJ",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/6.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Nora Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-1069",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Adam Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-217",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Liam Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-945",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Angela Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-1052",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Rajesh Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-711",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Louis Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-705",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Bobby Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-16",
        },
        {
          quote: "The Glow Party party was incredible! Danced until the early morning hours.",
          author: "Stephen Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-1042",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1fdc9fc3-6d74-4013-99b6-9fb760b72457",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
              "price": 18,
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
  },
  {
    id: "2c16fd2c-cf83-4c6a-b9b4-59008a489178",
    category: "Nightclub",
    name: "Cocktails & Dancing",
    description: "Latin music and dance with authentic rhythms",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Cocktails & Dancing performance times"
    },
    contact: {
      contactNumber: "+1-914-516-3645",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0fd154e4-9784-4a33-90cc-7ccb14ddec15",
      title: "Cocktails & Dancing",
      description: "Latin music and dance with authentic rhythms",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "101 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Cocktails & Dancing performance times"
        }],
      performers: [        {
                "id": "d58073b3-df71-41ab-9523-d799269c0080",
                "name": "Stephanie Lawson",
                "role": "Lighting Technician",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/40.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          author: "Brenda Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-633",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Bryan Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-526",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Emily Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-111",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Harper Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-828",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Sarah Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-254",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Gabriel Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-64",
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
  },
  {
    id: "2c16fd2c-cf83-4c6a-b9b4-59008a489178",
    category: "Nightclub",
    name: "Cocktails & Dancing",
    description: "High-energy dance party with professional DJs",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Cocktails & Dancing performance times"
    },
    contact: {
      contactNumber: "+1-479-988-5816",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d07e73b7-f9e8-4b08-9126-f36ac4df5843",
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
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Cocktails & Dancing performance times"
        }],
      performers: [        {
                "id": "5c4e2b78-30bf-4a9d-a10b-443d94088ebe",
                "name": "Gregory Nash",
                "role": "Dance Instructor",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/68.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
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
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Valentina Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-362",
        },
        {
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Savannah Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-215",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Madelyn Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-282",
        },
        {
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Allison Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-776",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Chen Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-27",
        },
        {
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Layla Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-475",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Russell Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-825",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c0b1602d-b7c4-4618-94b1-6d0d408bb25a",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
              "price": 19,
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
    id: "2c16fd2c-cf83-4c6a-b9b4-59008a489178",
    category: "Nightclub",
    name: "Cocktails & Dancing",
    description: "Classic hits from the 70s, 80s, and 90s",
    imageUrl: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "Cocktails & Dancing performance times"
    },
    contact: {
      contactNumber: "+1-467-609-5017",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ee0a859e-ba32-4fb0-ad3c-b01676cb5415",
      title: "Cocktails & Dancing",
      description: "Classic hits from the 70s, 80s, and 90s",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "120 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "Cocktails & Dancing performance times"
        }],
      performers: [        {
                "id": "ec8a2281-8b95-458a-bec4-7ec92c9b651d",
                "name": "Kenneth Douglas",
                "role": "MC",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/53.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "MC",
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
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Ashley Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-973",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Caroline Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-282",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Timothy Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-538",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Ethan Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-626",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Jeffrey Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-638",
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
    isPopular: true
  }
];
