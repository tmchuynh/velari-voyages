// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "afa47798-1db8-4124-b6d9-94ee40c08bf4",
    category: "Dancing",
    name: "Cultural Dance Journey",
    description: "Modern contemporary dance expressing emotion through movement",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Cultural Dance Journey performance times"
    },
    contact: {
      contactNumber: "+1-876-650-4223",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "da14b6ed-cea7-4659-b13f-7b8059619c99",
      title: "Cultural Dance Journey",
      description: "Modern contemporary dance expressing emotion through movement",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "82 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Cultural Dance Journey performance times"
        }],
      performers: [        {
                "id": "9a3a7ed6-9280-4e9c-8871-5e9797dc82d4",
                "name": "Keith Curtis",
                "role": "Tap Dancer",
                "bio": "Professional hip-hop dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/62.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Hip-Hop Dancer",
                        "Ballroom Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Peter Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-868",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Pamela Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-5",
        },
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Darrell Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-403",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Valentina Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-1066",
        },
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Joe Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-315",
        },
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Kennedy Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-665",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Vincent Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-33",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Diego Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-661",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: false
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
    id: "afa47798-1db8-4124-b6d9-94ee40c08bf4",
    category: "Dancing",
    name: "Swing Dance Social",
    description: "Traditional folk dances from various cultures",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Swing Dance Social performance times"
    },
    contact: {
      contactNumber: "+1-430-920-9021",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "23745679-b717-4979-b542-5b912dcecae1",
      title: "Swing Dance Social",
      description: "Traditional folk dances from various cultures",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "88 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Swing Dance Social performance times"
        }],
      performers: [        {
                "id": "75af698a-78ae-4386-93b1-d63af9d6b36e",
                "name": "Albert West",
                "role": "Contemporary Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/22.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Latin Dancer",
                        "Ballroom Dancer",
                        "Choreographer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Madelyn Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-1002",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Larry Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-268",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Thabo Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-286",
        },
        {
          quote: "I learned so much during the Swing Dance Social workshop. The instructors were patient and skilled.",
          author: "Sean Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-1077",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Ellie Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-834",
        },
        {
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Scarlett Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-262",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "06de7a6b-5571-4db7-9933-976cd70490b9",
              "name": "Choreography Book",
              "description": "Step-by-step dance instructions",
              "price": 22,
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
    isPopular: true
  },
  {
    id: "afa47798-1db8-4124-b6d9-94ee40c08bf4",
    category: "Dancing",
    name: "International Folk Dances",
    description: "Modern contemporary dance expressing emotion through movement",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "International Folk Dances performance times"
    },
    contact: {
      contactNumber: "+1-982-306-2052",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "984bd7ae-5f79-473a-9241-7857d1623720",
      title: "International Folk Dances",
      description: "Modern contemporary dance expressing emotion through movement",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "International Folk Dances performance times"
        }],
      performers: [        {
                "id": "58cadad5-dfc4-416b-af2a-3fb3527723f5",
                "name": "Sebastian Hall",
                "role": "Latin Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/43.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Choreographer",
                        "Hip-Hop Dancer",
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
          author: "Bobby Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-134",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Amina Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-174",
        },
        {
          quote: "I learned so much during the International Folk Dances workshop. The instructors were patient and skilled.",
          author: "Luis Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-53",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Kevin Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-251",
        },
        {
          quote: "I learned so much during the International Folk Dances workshop. The instructors were patient and skilled.",
          author: "Samuel Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-849",
        },
        {
          quote: "I learned so much during the International Folk Dances workshop. The instructors were patient and skilled.",
          author: "Henry Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-956",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Thomas Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-639",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Betty Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-280",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "fbb6f18b-901d-427a-ba27-778f4d7913df",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
              "price": 13,
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
    id: "afa47798-1db8-4124-b6d9-94ee40c08bf4",
    category: "Dancing",
    name: "Ballroom Spectacular",
    description: "Professional dancers performing spectacular choreographed routines",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Ballroom Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-324-803-5850",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "84c059e0-b2bb-4654-a71d-eff5cb2f2ce7",
      title: "Ballroom Spectacular",
      description: "Professional dancers performing spectacular choreographed routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "86 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Ballroom Spectacular performance times"
        }],
      performers: [        {
                "id": "905b9f20-7237-4a4f-bbdc-e0576740643d",
                "name": "Jeremy Wells",
                "role": "Contemporary Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/64.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Ballet Dancer",
                        "Contemporary Dancer",
                        "Choreographer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Arthur Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-1077",
        },
        {
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Valentina Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-1002",
        },
        {
          quote: "I haven't danced like this in years! The Ballroom Spectacular event was so much fun.",
          author: "Eric Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-302",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Sophia Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-78",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Louis Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-67",
        },
        {
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Michael Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-605",
        },
        {
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Robert Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-438",
        },
        {
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Nancy Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-1019",
        },
        {
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Alexander Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-47",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Pamela Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-344",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Should I bring special dance shoes?",
        answer: "Comfortable shoes are recommended, but not required. Dance shoes are available for purchase in our onboard shops.",
      },
      {
        question: "Are dance lessons included in the cruise fare?",
        answer: "Most group dance lessons and social dancing events are complimentary. Private lessons may have an additional charge.",
      },
      {
        question: "Do I need dance experience to participate?",
        answer: "Not at all! Our dance events welcome all skill levels. We offer beginner-friendly sessions and professional instruction.",
      }
    ],
    isPopular: false
  },
  {
    id: "afa47798-1db8-4124-b6d9-94ee40c08bf4",
    category: "Dancing",
    name: "International Folk Dances",
    description: "Contemporary hip-hop choreography with street dance elements",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "International Folk Dances performance times"
    },
    contact: {
      contactNumber: "+1-730-920-2546",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e51c5233-d51d-46ac-8c16-929d58dfe5b9",
      title: "International Folk Dances",
      description: "Contemporary hip-hop choreography with street dance elements",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "International Folk Dances performance times"
        }],
      performers: [        {
                "id": "a1ee46a6-ab6a-4998-a17a-22f6f24caef6",
                "name": "Aiden Clark",
                "role": "Tap Dancer",
                "bio": "Professional jazz dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/4.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Contemporary Dancer",
                        "Ballroom Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I haven't danced like this in years! The International Folk Dances event was so much fun.",
          author: "Thabo Price",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-381",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Jose Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-648",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Russell Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-919",
        },
        {
          quote: "I learned so much during the International Folk Dances workshop. The instructors were patient and skilled.",
          author: "Steven Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-130",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Victor Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-331",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Paul Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-761",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "82206e10-e748-4bfb-ab1f-c9c9a47cabb8",
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
    id: "afa47798-1db8-4124-b6d9-94ee40c08bf4",
    category: "Dancing",
    name: "Ballroom Spectacular",
    description: "Contemporary hip-hop choreography with street dance elements",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Ballroom Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-339-234-2111",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b595474e-c862-4a5d-8852-bd397b6f8ace",
      title: "Ballroom Spectacular",
      description: "Contemporary hip-hop choreography with street dance elements",
      tickets: {
        isRequired: true,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Ballroom Spectacular performance times"
        }],
      performers: [        {
                "id": "16e20306-6230-40a7-a805-0bc51d9729c3",
                "name": "Kenneth Hudson",
                "role": "Latin Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/28.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Choreographer",
                        "Ballroom Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Mary Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-718",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Rachel Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-650",
        },
        {
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Harper Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-678",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Christopher Palmer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-706",
        },
        {
          quote: "I haven't danced like this in years! The Ballroom Spectacular event was so much fun.",
          author: "Olivia Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-118",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "George Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-547",
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
    id: "afa47798-1db8-4124-b6d9-94ee40c08bf4",
    category: "Dancing",
    name: "Hip-Hop Showcase",
    description: "Guest participation dance competition with exciting prizes",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Hip-Hop Showcase performance times"
    },
    contact: {
      contactNumber: "+1-767-276-7140",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "149d1edb-0ba5-4356-8446-dc9672f820e2",
      title: "Hip-Hop Showcase",
      description: "Guest participation dance competition with exciting prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Hip-Hop Showcase performance times"
        }],
      performers: [        {
                "id": "db885822-30e5-4008-93de-7ecd9dcb3548",
                "name": "Abigail Keller",
                "role": "Ballroom Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/38.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Jazz Dancer",
                        "Latin Dancer",
                        "Tap Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Jeffrey Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-779",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Laura Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-143",
        },
        {
          quote: "I haven't danced like this in years! The Hip-Hop Showcase event was so much fun.",
          author: "Gabriella Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-329",
        },
        {
          quote: "I learned so much during the Hip-Hop Showcase workshop. The instructors were patient and skilled.",
          author: "Richard Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-1082",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Amanda Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-116",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1a9ab16a-fcc7-4cdc-a7f4-fffe3eff7cbf",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
              "price": 11,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Are dance lessons included in the cruise fare?",
        answer: "Most group dance lessons and social dancing events are complimentary. Private lessons may have an additional charge.",
      },
      {
        question: "Do I need dance experience to participate?",
        answer: "Not at all! Our dance events welcome all skill levels. We offer beginner-friendly sessions and professional instruction.",
      },
      {
        question: "Should I bring special dance shoes?",
        answer: "Comfortable shoes are recommended, but not required. Dance shoes are available for purchase in our onboard shops.",
      }
    ],
    isPopular: true
  }
];
