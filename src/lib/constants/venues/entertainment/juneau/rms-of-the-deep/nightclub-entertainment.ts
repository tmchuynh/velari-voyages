// Nightclub entertainment shows
// This file contains nightclub entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const nightclubEntertainment: Entertainment[] = [
  {
    id: "4918dbf1-d4f0-4d66-b524-0a23a8b36864",
    category: "Nightclub",
    name: "Glow Party",
    description: "Themed dance parties with costumes and special decorations",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Glow Party performance times"
    },
    contact: {
      contactNumber: "+1-243-905-4704",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c4130028-239d-4a6d-8fb6-2940705d0103",
      title: "Glow Party",
      description: "Themed dance parties with costumes and special decorations",
      tickets: {
        isRequired: false,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "63 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Glow Party performance times"
        }],
      performers: [        {
                "id": "c70223d3-59cc-4965-b7e3-4df85cf7708c",
                "name": "Melissa Marshall",
                "role": "Event Coordinator",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/81.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "The Glow Party party was incredible! Danced until the early morning hours.",
          author: "Samantha Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-305",
        },
        {
          quote: "The Glow Party party was incredible! Danced until the early morning hours.",
          author: "Sofia Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-305",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Gary Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-222",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Kevin Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-996",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Adeline Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-234",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Tyler Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-131",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Zoe Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-496",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ec7ab7f6-a44c-4d50-a71b-8a916e26da09",
              "name": "Glow Accessories",
              "description": "LED bracelets and necklaces",
              "price": 4,
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
    id: "4918dbf1-d4f0-4d66-b524-0a23a8b36864",
    category: "Nightclub",
    name: "Cocktails & Dancing",
    description: "Dance competitions with prizes and recognition",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Cocktails & Dancing performance times"
    },
    contact: {
      contactNumber: "+1-638-981-8935",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4ef07371-8fb4-4763-aa6d-5e83fe64a12c",
      title: "Cocktails & Dancing",
      description: "Dance competitions with prizes and recognition",
      tickets: {
        isRequired: false,
        price: 40,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Cocktails & Dancing performance times"
        }],
      performers: [        {
                "id": "427f3f85-9dfb-4681-a223-f0f8a5a9f719",
                "name": "Audrey Crawford",
                "role": "DJ",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/50.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Dance Instructor",
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
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Nathan Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-385",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Jennifer Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-1050",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Joshua Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-776",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Juan Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-15",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Zola Murray",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-503",
        },
        {
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Samantha Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-839",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Albert Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-271",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Christine Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-216",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Sean Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-712",
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
    id: "4918dbf1-d4f0-4d66-b524-0a23a8b36864",
    category: "Nightclub",
    name: "Electronic Dance Music",
    description: "Sophisticated evening of cocktails and social dancing",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Electronic Dance Music performance times"
    },
    contact: {
      contactNumber: "+1-676-249-3887",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "35b56fca-0c08-4e60-b813-2813a2edda1e",
      title: "Electronic Dance Music",
      description: "Sophisticated evening of cocktails and social dancing",
      tickets: {
        isRequired: false,
        price: 39,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Electronic Dance Music performance times"
        }],
      performers: [        {
                "id": "10514dc7-4af3-4b38-ae2a-fd393c6d252b",
                "name": "Eugene Ellis",
                "role": "MC",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/83.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          author: "Elijah Hayes",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-1011",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Benjamin Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-459",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "George Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-665",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Louis Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-257",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Andrew Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-361",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Zachary Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-61",
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
    id: "4918dbf1-d4f0-4d66-b524-0a23a8b36864",
    category: "Nightclub",
    name: "Dance Floor Competition",
    description: "Elegant masquerade ball with formal attire",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "Dance Floor Competition performance times"
    },
    contact: {
      contactNumber: "+1-913-938-7424",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0a06fd7c-43ad-4aa3-934e-e1ce7a820558",
      title: "Dance Floor Competition",
      description: "Elegant masquerade ball with formal attire",
      tickets: {
        isRequired: true,
        price: 15,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "Dance Floor Competition performance times"
        }],
      performers: [        {
                "id": "ef556888-8c42-4b7e-83c7-94bf54bd0c9b",
                "name": "Mark Maxwell",
                "role": "Lighting Technician",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/48.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
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
          author: "Chen Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-491",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Samuel Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-754",
        },
        {
          quote: "The Dance Floor Competition party was incredible! Danced until the early morning hours.",
          author: "Raymond Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "10",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Abigail Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-919",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Nicole Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4,
          date: "-845",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4244899b-1139-4ec3-a66c-107bf2214824",
              "name": "DJ Mix CD",
              "description": "Tonight's DJ set on CD",
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
    id: "4918dbf1-d4f0-4d66-b524-0a23a8b36864",
    category: "Nightclub",
    name: "DJ Dance Party",
    description: "Exclusive VIP nightclub experience with premium service",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "DJ Dance Party performance times"
    },
    contact: {
      contactNumber: "+1-238-835-5417",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c9d86e72-2a4d-47a9-8107-c779e18b6e85",
      title: "DJ Dance Party",
      description: "Exclusive VIP nightclub experience with premium service",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "93 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "DJ Dance Party performance times"
        }],
      performers: [        {
                "id": "bda19f7c-6e36-4d2f-9ed0-28fd912578c6",
                "name": "Audrey Olivia",
                "role": "Dance Instructor",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/69.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Jacob Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-1052",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Alexander Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-7",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Alexander Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-1082",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "James Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-101",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Miguel Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-153",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Adeline Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-622",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Cynthia Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-1035",
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
    id: "4918dbf1-d4f0-4d66-b524-0a23a8b36864",
    category: "Nightclub",
    name: "Electronic Dance Music",
    description: "Electronic dance music with amazing light shows",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "02:00",
          "duration": "4 hours",
          "description": "Electronic Dance Music performance times"
    },
    contact: {
      contactNumber: "+1-911-152-5761",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "71e15602-2182-46b6-81b4-c126cff456ff",
      title: "Electronic Dance Music",
      description: "Electronic dance music with amazing light shows",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "02:00",
                "duration": "4 hours",
                "description": "Electronic Dance Music performance times"
        }],
      performers: [        {
                "id": "bf813483-c853-4f89-be44-b01d0c07cc01",
                "name": "Samantha Griffin",
                "role": "Event Coordinator",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/47.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "The Electronic Dance Music party was incredible! Danced until the early morning hours.",
          author: "Victor Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-128",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Kevin Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-925",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Antonio Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-158",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Bella Collins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-971",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Abigail Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-524",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Stella Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-452",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Justin Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-62",
        },
        {
          quote: "The Electronic Dance Music party was incredible! Danced until the early morning hours.",
          author: "Aaliyah Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-365",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Timothy Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-310",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "978f7baf-f53c-4b45-9966-a4f569b8f45c",
              "name": "VIP Pass Holder",
              "description": "Souvenir VIP lanyard and pass holder",
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
