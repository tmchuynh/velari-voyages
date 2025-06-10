// Nightclub entertainment shows
// This file contains nightclub entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const nightclubEntertainment: Entertainment[] = [
  {
    id: "3f876dfb-a5d3-4272-beb2-1da2c0764bcb",
    category: "Nightclub",
    name: "Theme Party Night",
    description: "Professional DJs spinning the latest tracks",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "03:00",
          "duration": "6 hours",
          "description": "Theme Party Night performance times"
    },
    contact: {
      contactNumber: "+1-737-692-2253",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "32c911a1-606f-4de6-9d01-793658b9b43a",
      title: "Theme Party Night",
      description: "Professional DJs spinning the latest tracks",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "03:00",
                "duration": "6 hours",
                "description": "Theme Party Night performance times"
        }],
      performers: [        {
                "id": "f3e0b509-0498-49de-b9cc-4fb0aab99cbc",
                "name": "Walter Hawkins",
                "role": "Lighting Technician",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/18.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
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
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Dorothy Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-707",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Lerato Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-271",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Nomsa Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-429",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Stella Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-126",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Wei Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-370",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Katherine Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-199",
        },
        {
          quote: "The Theme Party Night party was incredible! Danced until the early morning hours.",
          author: "Justin Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-608",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Allison Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-534",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Vincent Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-843",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Valentina Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-966",
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
    id: "3f876dfb-a5d3-4272-beb2-1da2c0764bcb",
    category: "Nightclub",
    name: "Silent Disco",
    description: "Classic hits from the 70s, 80s, and 90s",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Silent Disco performance times"
    },
    contact: {
      contactNumber: "+1-459-206-9974",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a421c565-41be-45bb-93db-1165d96557cd",
      title: "Silent Disco",
      description: "Classic hits from the 70s, 80s, and 90s",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Silent Disco performance times"
        }],
      performers: [        {
                "id": "d34ee6d9-cf91-4799-84dc-9d17afff3253",
                "name": "Sean Olivia",
                "role": "Dance Instructor",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/80.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "The Silent Disco party was incredible! Danced until the early morning hours.",
          author: "Lily Spencer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-140",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Emma Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-216",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Kinsley Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-495",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Caroline Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-450",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Robert Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-328",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Austin Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-814",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Liam Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-452",
        },
        {
          quote: "The Silent Disco party was incredible! Danced until the early morning hours.",
          author: "Edward Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-778",
        },
        {
          quote: "The Silent Disco party was incredible! Danced until the early morning hours.",
          author: "Timothy Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-1011",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Maya Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-752",
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
    id: "3f876dfb-a5d3-4272-beb2-1da2c0764bcb",
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
      contactNumber: "+1-415-217-6920",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "959cd76b-abf0-4c92-ac85-888cb910924c",
      title: "Theme Party Night",
      description: "Electronic dance music with amazing light shows",
      tickets: {
        isRequired: false,
        price: 41,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "88 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Theme Party Night performance times"
        }],
      performers: [        {
                "id": "d3c5df04-c922-42ae-932b-61aaac51c0a0",
                "name": "Dennis Clark",
                "role": "Event Coordinator",
                "bio": "Professional mc with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/63.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Jessica Chambers",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-977",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Caroline Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-324",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Noah Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-926",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Eleanor West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-463",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Gabriel Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-942",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Jack Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-133",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Brooklyn Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-661",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Joshua Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-293",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Linda Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-299",
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
    id: "3f876dfb-a5d3-4272-beb2-1da2c0764bcb",
    category: "Nightclub",
    name: "Dance Floor Competition",
    description: "High-energy dance party with professional DJs",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "03:00",
          "duration": "5 hours",
          "description": "Dance Floor Competition performance times"
    },
    contact: {
      contactNumber: "+1-829-705-6041",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "46aed8e5-a931-4cd8-9f4b-843a08f3c360",
      title: "Dance Floor Competition",
      description: "High-energy dance party with professional DJs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "74 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "03:00",
                "duration": "5 hours",
                "description": "Dance Floor Competition performance times"
        }],
      performers: [        {
                "id": "3ebdbc6c-a85f-4a91-9345-13673d6fc971",
                "name": "Matthew Coleman",
                "role": "DJ",
                "bio": "Professional event coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/70.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Ethan Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-876",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Kyle Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-656",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Victor Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-523",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Lily Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-163",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Julie Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-300",
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
    id: "3f876dfb-a5d3-4272-beb2-1da2c0764bcb",
    category: "Nightclub",
    name: "Latin Dance Club",
    description: "Themed dance parties with costumes and special decorations",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "02:00",
          "duration": "5 hours",
          "description": "Latin Dance Club performance times"
    },
    contact: {
      contactNumber: "+1-758-947-8675",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6b6f1bb3-f64e-45eb-9b9c-4fa28fc7079f",
      title: "Latin Dance Club",
      description: "Themed dance parties with costumes and special decorations",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "82 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "02:00",
                "duration": "5 hours",
                "description": "Latin Dance Club performance times"
        }],
      performers: [        {
                "id": "51c6ee71-89df-4a02-94eb-49ce0fa4993a",
                "name": "Darrell Murray",
                "role": "Event Coordinator",
                "bio": "Professional dance instructor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/16.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Joan Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-478",
        },
        {
          quote: "The Latin Dance Club party was incredible! Danced until the early morning hours.",
          author: "Tyler Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-563",
        },
        {
          quote: "The Latin Dance Club party was incredible! Danced until the early morning hours.",
          author: "Pamela Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-1054",
        },
        {
          quote: "The Latin Dance Club party was incredible! Danced until the early morning hours.",
          author: "Stephanie Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-512",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Rajesh Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-395",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Kinsley Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-983",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Katherine West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-995",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Jack Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-475",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Rachel Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-914",
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
    id: "3f876dfb-a5d3-4272-beb2-1da2c0764bcb",
    category: "Nightclub",
    name: "Electronic Dance Music",
    description: "Exclusive VIP nightclub experience with premium service",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "21:00",
          "end": "04:00",
          "duration": "7 hours",
          "description": "Electronic Dance Music performance times"
    },
    contact: {
      contactNumber: "+1-527-273-3525",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5a41ee0d-b7c5-4df7-b30c-ebc62ea00a02",
      title: "Electronic Dance Music",
      description: "Exclusive VIP nightclub experience with premium service",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "83 minutes",
      schedule: [        {
                "start": "21:00",
                "end": "04:00",
                "duration": "7 hours",
                "description": "Electronic Dance Music performance times"
        }],
      performers: [        {
                "id": "93696279-1748-49c6-892c-8145d9629f79",
                "name": "Anthony Hamilton",
                "role": "MC",
                "bio": "Professional lighting technician with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/41.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Event Coordinator",
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
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Brian Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-674",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Layla Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-99",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Billy Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-515",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Grace Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-320",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Deborah Dunn",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-980",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Bella Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-601",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Angela Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-667",
        },
        {
          quote: "Best night out on the ship! The nightclub scene here is world-class.",
          author: "Sean Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-716",
        },
        {
          quote: "The Electronic Dance Music party was incredible! Danced until the early morning hours.",
          author: "Jose Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-1075",
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
    isPopular: true
  },
  {
    id: "3f876dfb-a5d3-4272-beb2-1da2c0764bcb",
    category: "Nightclub",
    name: "Cocktails & Dancing",
    description: "Sophisticated evening of cocktails and social dancing",
    image: "/images/entertainment/nightclub-show.jpg",
    hours:     {
          "start": "22:00",
          "end": "04:00",
          "duration": "6 hours",
          "description": "Cocktails & Dancing performance times"
    },
    contact: {
      contactNumber: "+1-928-386-8526",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bce7c631-4352-454d-85cf-6d590d433976",
      title: "Cocktails & Dancing",
      description: "Sophisticated evening of cocktails and social dancing",
      tickets: {
        isRequired: false,
        price: 32,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "22:00",
                "end": "04:00",
                "duration": "6 hours",
                "description": "Cocktails & Dancing performance times"
        }],
      performers: [        {
                "id": "7f4339ba-1ebc-4747-a88c-9f035d3f2f57",
                "name": "Raymond Spencer",
                "role": "MC",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/61.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Lighting Technician",
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
          author: "Joe Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-1074",
        },
        {
          quote: "The DJ undefined undefined really knew how to keep the dance floor packed all night!",
          author: "Elena Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-667",
        },
        {
          quote: "The Cocktails & Dancing party was incredible! Danced until the early morning hours.",
          author: "Benjamin Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-977",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Jack Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-33",
        },
        {
          quote: "Fantastic sound system and the perfect mix of music. Had an amazing time!",
          author: "Terry Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-240",
        },
        {
          quote: "Great music, amazing lights, and such a fun atmosphere. Perfect nightclub experience.",
          author: "Hannah Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-295",
        },
        {
          quote: "The energy was contagious and the music selection was spot-on. Loved every minute.",
          author: "Kinsley Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-197",
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
  }
];
