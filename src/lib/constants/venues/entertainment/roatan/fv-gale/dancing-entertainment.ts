// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "a47737a2-a168-441d-ab4c-6f09cbb0a491",
    category: "Dancing",
    name: "Dance Through the Decades",
    description: "A celebration of dance traditions from around the world",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Dance Through the Decades performance times"
    },
    contact: {
      contactNumber: "+1-288-749-4458",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fac739f4-c16b-4258-b42f-da45dafac09a",
      title: "Dance Through the Decades",
      description: "A celebration of dance traditions from around the world",
      tickets: {
        isRequired: false,
        price: 18,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Dance Through the Decades performance times"
        }],
      performers: [        {
                "id": "cd7c4493-248d-4f0b-a867-a77e9654d973",
                "name": "Nomsa Morgan",
                "role": "Tap Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/75.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Ballet Dancer",
                        "Contemporary Dancer",
                        "Jazz Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Benjamin Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-328",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Mateo Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-28",
        },
        {
          quote: "I haven't danced like this in years! The Dance Through the Decades event was so much fun.",
          author: "Christopher Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-150",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Alice Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-38",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Wei Dixon",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-674",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Do I need dance experience to participate?",
        answer: "Not at all! Our dance events welcome all skill levels. We offer beginner-friendly sessions and professional instruction.",
      },
      {
        question: "Are dance lessons included in the cruise fare?",
        answer: "Most group dance lessons and social dancing events are complimentary. Private lessons may have an additional charge.",
      },
      {
        question: "Should I bring special dance shoes?",
        answer: "Comfortable shoes are recommended, but not required. Dance shoes are available for purchase in our onboard shops.",
      }
    ],
    isPopular: true
  },
  {
    id: "a47737a2-a168-441d-ab4c-6f09cbb0a491",
    category: "Dancing",
    name: "Contemporary Movement",
    description: "Traditional folk dances from various cultures",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Contemporary Movement performance times"
    },
    contact: {
      contactNumber: "+1-249-687-9857",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "061b5441-655a-4956-a608-36e1bc2a9d07",
      title: "Contemporary Movement",
      description: "Traditional folk dances from various cultures",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "115 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Contemporary Movement performance times"
        }],
      performers: [        {
                "id": "446f51af-1996-4b37-a517-a3fcbae54c71",
                "name": "Dorothy West",
                "role": "Ballet Dancer",
                "bio": "Professional contemporary dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/48.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Ballet Dancer",
                        "Ballroom Dancer",
                        "Jazz Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Olivia Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-643",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Sofia Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-1056",
        },
        {
          quote: "I haven't danced like this in years! The Contemporary Movement event was so much fun.",
          author: "Zoe Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-907",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Helen Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "0",
        },
        {
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Nicole Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-769",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Justin Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-69",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Eric Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-864",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Jerry Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-91",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Steven Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-729",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Should I bring special dance shoes?",
        answer: "Comfortable shoes are recommended, but not required. Dance shoes are available for purchase in our onboard shops.",
      },
      {
        question: "Do I need dance experience to participate?",
        answer: "Not at all! Our dance events welcome all skill levels. We offer beginner-friendly sessions and professional instruction.",
      },
      {
        question: "Are dance lessons included in the cruise fare?",
        answer: "Most group dance lessons and social dancing events are complimentary. Private lessons may have an additional charge.",
      }
    ],
    isPopular: true
  },
  {
    id: "a47737a2-a168-441d-ab4c-6f09cbb0a491",
    category: "Dancing",
    name: "International Folk Dances",
    description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "International Folk Dances performance times"
    },
    contact: {
      contactNumber: "+1-244-945-1014",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "dab1d632-a997-475a-b262-4f75e5057d81",
      title: "International Folk Dances",
      description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "International Folk Dances performance times"
        }],
      performers: [        {
                "id": "a5ff2493-f7f0-4432-8c4b-9fbc6f02c065",
                "name": "Daniel Ellis",
                "role": "Choreographer",
                "bio": "Professional jazz dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/18.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Latin Dancer",
                        "Jazz Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Lisa Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-971",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Valentina Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-35",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Maria Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-931",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Ethan Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-742",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Deborah Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-782",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Alexander Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-268",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Billy West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-505",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Ryan Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-661",
        },
        {
          quote: "I haven't danced like this in years! The International Folk Dances event was so much fun.",
          author: "Julie Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-546",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Sandra Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-202",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0f290bdd-03e2-4981-8a60-1c4479d0d120",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
              "price": 25,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Are dance lessons included in the cruise fare?",
        answer: "Most group dance lessons and social dancing events are complimentary. Private lessons may have an additional charge.",
      },
      {
        question: "Should I bring special dance shoes?",
        answer: "Comfortable shoes are recommended, but not required. Dance shoes are available for purchase in our onboard shops.",
      },
      {
        question: "Do I need dance experience to participate?",
        answer: "Not at all! Our dance events welcome all skill levels. We offer beginner-friendly sessions and professional instruction.",
      }
    ],
    isPopular: false
  },
  {
    id: "a47737a2-a168-441d-ab4c-6f09cbb0a491",
    category: "Dancing",
    name: "Partner Dance Workshop",
    description: "Modern contemporary dance expressing emotion through movement",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Partner Dance Workshop performance times"
    },
    contact: {
      contactNumber: "+1-850-204-5405",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ae7bc5fb-d0fc-4e18-bc62-201aa30b6b91",
      title: "Partner Dance Workshop",
      description: "Modern contemporary dance expressing emotion through movement",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Partner Dance Workshop performance times"
        }],
      performers: [        {
                "id": "6e74c3f9-f768-4a16-a373-98ca728fdd8a",
                "name": "Victoria Fox",
                "role": "Latin Dancer",
                "bio": "Professional jazz dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/36.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Contemporary Dancer",
                        "Ballet Dancer",
                        "Ballroom Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I haven't danced like this in years! The Partner Dance Workshop event was so much fun.",
          author: "Bruce Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-452",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Zoe Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-579",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Aria Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-753",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Sophia Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-995",
        },
        {
          quote: "I learned so much during the Partner Dance Workshop workshop. The instructors were patient and skilled.",
          author: "Timothy Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-997",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Carol Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-79",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Elena Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-598",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "a94d9988-5622-48c6-b8c6-9bf7a4dd82b9",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
              "price": 12,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Are dance lessons included in the cruise fare?",
        answer: "Most group dance lessons and social dancing events are complimentary. Private lessons may have an additional charge.",
      },
      {
        question: "Should I bring special dance shoes?",
        answer: "Comfortable shoes are recommended, but not required. Dance shoes are available for purchase in our onboard shops.",
      },
      {
        question: "Do I need dance experience to participate?",
        answer: "Not at all! Our dance events welcome all skill levels. We offer beginner-friendly sessions and professional instruction.",
      }
    ],
    isPopular: false
  },
  {
    id: "a47737a2-a168-441d-ab4c-6f09cbb0a491",
    category: "Dancing",
    name: "Dance Competition",
    description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Dance Competition performance times"
    },
    contact: {
      contactNumber: "+1-635-327-6105",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3f8705bb-bea8-4b08-be04-3723b3f71a38",
      title: "Dance Competition",
      description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Dance Competition performance times"
        }],
      performers: [        {
                "id": "89077bff-7968-43ef-89a3-311d4fe08921",
                "name": "Hannah Carpenter",
                "role": "Jazz Dancer",
                "bio": "Professional contemporary dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/77.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Ballet Dancer",
                        "Contemporary Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Zola Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-1071",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Jane Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-686",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Liam Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-235",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Ella Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-768",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Gerald Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-200",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Mateo Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-970",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Sofia Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-1073",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Luis Graves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-787",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Do I need dance experience to participate?",
        answer: "Not at all! Our dance events welcome all skill levels. We offer beginner-friendly sessions and professional instruction.",
      },
      {
        question: "Should I bring special dance shoes?",
        answer: "Comfortable shoes are recommended, but not required. Dance shoes are available for purchase in our onboard shops.",
      },
      {
        question: "Are dance lessons included in the cruise fare?",
        answer: "Most group dance lessons and social dancing events are complimentary. Private lessons may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "a47737a2-a168-441d-ab4c-6f09cbb0a491",
    category: "Dancing",
    name: "Cultural Dance Journey",
    description: "Professional dancers performing spectacular choreographed routines",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Cultural Dance Journey performance times"
    },
    contact: {
      contactNumber: "+1-405-222-1936",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f6bd5f15-2718-45ef-b13a-9b39c202ffb0",
      title: "Cultural Dance Journey",
      description: "Professional dancers performing spectacular choreographed routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "111 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Cultural Dance Journey performance times"
        }],
      performers: [        {
                "id": "aa26a5f2-e7c4-4b73-8f16-a784624f0cb3",
                "name": "Linda Henderson",
                "role": "Contemporary Dancer",
                "bio": "Professional hip-hop dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/40.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Ballet Dancer",
                        "Latin Dancer",
                        "Jazz Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Jessica Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-379",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Susan Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-1062",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Lisa Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-1024",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Henry Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-68",
        },
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Thandiwe Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-916",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Kinsley Hudson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-1048",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Jordan Henderson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-910",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Jennifer Hudson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-698",
        },
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Javier Fletcher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-810",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Sean Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-796",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Do I need dance experience to participate?",
        answer: "Not at all! Our dance events welcome all skill levels. We offer beginner-friendly sessions and professional instruction.",
      },
      {
        question: "Should I bring special dance shoes?",
        answer: "Comfortable shoes are recommended, but not required. Dance shoes are available for purchase in our onboard shops.",
      },
      {
        question: "Are dance lessons included in the cruise fare?",
        answer: "Most group dance lessons and social dancing events are complimentary. Private lessons may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "a47737a2-a168-441d-ab4c-6f09cbb0a491",
    category: "Dancing",
    name: "Cultural Dance Journey",
    description: "Broadway-style dance numbers from famous musicals",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Cultural Dance Journey performance times"
    },
    contact: {
      contactNumber: "+1-577-775-6243",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "903eb7c3-e615-49cf-a6b4-5e8cd3ea40fe",
      title: "Cultural Dance Journey",
      description: "Broadway-style dance numbers from famous musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "117 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Cultural Dance Journey performance times"
        }],
      performers: [        {
                "id": "b7c680bf-f2f0-423d-903b-8b3ef17df355",
                "name": "Valentina Holloway",
                "role": "Jazz Dancer",
                "bio": "Professional tap dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/73.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Ballroom Dancer",
                        "Contemporary Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Christine Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "-653",
        },
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Jeremy Reed",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-945",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Isabella Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-463",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Elizabeth Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-713",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Terry Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-229",
        },
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Savannah Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-958",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Edward Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-718",
        },
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Amy Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-660",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a59b1f2a-8c93-4755-ab28-92019d341543",
              "name": "Choreography Book",
              "description": "Step-by-step dance instructions",
              "price": 27,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need dance experience to participate?",
        answer: "Not at all! Our dance events welcome all skill levels. We offer beginner-friendly sessions and professional instruction.",
      },
      {
        question: "Should I bring special dance shoes?",
        answer: "Comfortable shoes are recommended, but not required. Dance shoes are available for purchase in our onboard shops.",
      },
      {
        question: "Are dance lessons included in the cruise fare?",
        answer: "Most group dance lessons and social dancing events are complimentary. Private lessons may have an additional charge.",
      }
    ],
    isPopular: false
  },
  {
    id: "a47737a2-a168-441d-ab4c-6f09cbb0a491",
    category: "Dancing",
    name: "International Folk Dances",
    description: "Learn partner dances with professional instruction",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "International Folk Dances performance times"
    },
    contact: {
      contactNumber: "+1-218-481-1693",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "df8389cf-1add-444b-9a9a-54be8ad4ad54",
      title: "International Folk Dances",
      description: "Learn partner dances with professional instruction",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "90 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "International Folk Dances performance times"
        }],
      performers: [        {
                "id": "c6c0be13-8727-4da5-8884-108eb206b0ae",
                "name": "Gabriel Gibson",
                "role": "Ballet Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/47.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Ballet Dancer",
                        "Contemporary Dancer",
                        "Hip-Hop Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Lawrence Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-801",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Samantha Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-689",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Patrick Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-769",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Timothy Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-629",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Gerald Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-644",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Brenda Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-137",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Kinsley Payne",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-705",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Willie Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-985",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Do I need dance experience to participate?",
        answer: "Not at all! Our dance events welcome all skill levels. We offer beginner-friendly sessions and professional instruction.",
      },
      {
        question: "Are dance lessons included in the cruise fare?",
        answer: "Most group dance lessons and social dancing events are complimentary. Private lessons may have an additional charge.",
      },
      {
        question: "Should I bring special dance shoes?",
        answer: "Comfortable shoes are recommended, but not required. Dance shoes are available for purchase in our onboard shops.",
      }
    ],
    isPopular: false
  }
];
