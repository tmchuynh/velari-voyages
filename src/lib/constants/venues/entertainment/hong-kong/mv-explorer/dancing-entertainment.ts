// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "6e91cfa4-2949-4f0b-a201-c4f272f6334c",
    category: "Dancing",
    name: "Ballroom Spectacular",
    description: "Broadway-style dance numbers from famous musicals",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Ballroom Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-876-542-1462",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e1343c3a-ddb2-4e9d-bb2b-4bc3528b3513",
      title: "Ballroom Spectacular",
      description: "Broadway-style dance numbers from famous musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Ballroom Spectacular performance times"
        }],
      performers: [        {
                "id": "d511d065-afcf-4581-9667-4c10cfbba39c",
                "name": "Jeffrey Reeves",
                "role": "Ballroom Dancer",
                "bio": "Professional contemporary dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/9.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Ballroom Dancer",
                        "Hip-Hop Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Jeffrey Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-393",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Caroline Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-201",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Alexander Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-17",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Avery Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-64",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Carol Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-673",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
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
    id: "6e91cfa4-2949-4f0b-a201-c4f272f6334c",
    category: "Dancing",
    name: "Contemporary Movement",
    description: "Professional dancers performing spectacular choreographed routines",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Contemporary Movement performance times"
    },
    contact: {
      contactNumber: "+1-716-370-7201",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3fa5cf56-af6a-4424-b064-a6305688f7a8",
      title: "Contemporary Movement",
      description: "Professional dancers performing spectacular choreographed routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "65 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Contemporary Movement performance times"
        }],
      performers: [        {
                "id": "58a073ef-fc5e-4217-bda9-3c9f6f9dd506",
                "name": "Robert Hunter",
                "role": "Tap Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/54.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Contemporary Dancer",
                        "Ballet Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I haven't danced like this in years! The Contemporary Movement event was so much fun.",
          author: "Jessica Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-714",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Lisa Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-726",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Stephen Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-206",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Isabella Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-383",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Julie Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-5",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Brenda Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-401",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Nora Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-592",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Randy Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-336",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "John Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-818",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "cb84a9a3-c336-4abc-98f5-79cf48fffd7b",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
              "price": 19,
              "currency": "USD"
      }
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
    id: "6e91cfa4-2949-4f0b-a201-c4f272f6334c",
    category: "Dancing",
    name: "Partner Dance Workshop",
    description: "Dance styles spanning from the 1920s to today",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Partner Dance Workshop performance times"
    },
    contact: {
      contactNumber: "+1-311-280-1954",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "87ff92b6-39bd-4559-9605-29b7101d6f59",
      title: "Partner Dance Workshop",
      description: "Dance styles spanning from the 1920s to today",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Partner Dance Workshop performance times"
        }],
      performers: [        {
                "id": "4f0afa36-1667-466d-84aa-13f7cb9d74fb",
                "name": "Zachary Ellis",
                "role": "Contemporary Dancer",
                "bio": "Professional hip-hop dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/46.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Jazz Dancer",
                        "Latin Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I learned so much during the Partner Dance Workshop workshop. The instructors were patient and skilled.",
          author: "Mark Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-215",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Gabriel Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-90",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Dylan Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-1069",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Eugene Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-144",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Audrey Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-381",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Oliver Holloway",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-567",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Mark Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-390",
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
    id: "6e91cfa4-2949-4f0b-a201-c4f272f6334c",
    category: "Dancing",
    name: "Cultural Dance Journey",
    description: "Professional dancers performing spectacular choreographed routines",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Cultural Dance Journey performance times"
    },
    contact: {
      contactNumber: "+1-414-801-3923",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e9ca8e5e-90b3-4282-8631-13431eea3ed1",
      title: "Cultural Dance Journey",
      description: "Professional dancers performing spectacular choreographed routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Cultural Dance Journey performance times"
        }],
      performers: [        {
                "id": "05d8f4f8-adad-4095-9d8d-7d382c464cbf",
                "name": "Samuel Curtis",
                "role": "Ballet Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/53.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Tap Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Kimberly Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-1082",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Joan Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-220",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Isabella Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-99",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "John Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-1028",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Ryan Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-184",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Victoria Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-290",
        },
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Thomas Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-536",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Gabriel Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-1036",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "23619b0b-83af-467e-9743-fba13dc82d75",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
              "price": 23,
              "currency": "USD"
      }
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
    isPopular: false
  },
  {
    id: "6e91cfa4-2949-4f0b-a201-c4f272f6334c",
    category: "Dancing",
    name: "Broadway Dance Revue",
    description: "A celebration of dance traditions from around the world",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Broadway Dance Revue performance times"
    },
    contact: {
      contactNumber: "+1-810-942-9636",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d92baa8b-f011-4010-9ee5-ff28659971c6",
      title: "Broadway Dance Revue",
      description: "A celebration of dance traditions from around the world",
      tickets: {
        isRequired: false,
        price: 35,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "76 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Broadway Dance Revue performance times"
        }],
      performers: [        {
                "id": "eaf4e6a3-9ed6-4b41-bc70-3749ca5c6f0c",
                "name": "Allison Sutton",
                "role": "Contemporary Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/60.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Ballroom Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Alexander Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-1027",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Larry Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-154",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Valentina Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-476",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Olivia Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-322",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Nora Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-54",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Marcus Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-532",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Sandra Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-258",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Mateo Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-485",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
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
    id: "6e91cfa4-2949-4f0b-a201-c4f272f6334c",
    category: "Dancing",
    name: "Partner Dance Workshop",
    description: "Guest participation dance competition with exciting prizes",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Partner Dance Workshop performance times"
    },
    contact: {
      contactNumber: "+1-557-983-9671",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "209426ab-3af8-4bd7-82d6-263fbd6c19f4",
      title: "Partner Dance Workshop",
      description: "Guest participation dance competition with exciting prizes",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "72 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Partner Dance Workshop performance times"
        }],
      performers: [        {
                "id": "98868920-d5c8-4acd-abc6-9358e265a3a2",
                "name": "Douglas Lawson",
                "role": "Ballroom Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/62.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Tap Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Joshua Collins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-319",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Christopher Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-129",
        },
        {
          quote: "I haven't danced like this in years! The Partner Dance Workshop event was so much fun.",
          author: "Brian Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-268",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Madelyn Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-696",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Chen Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-931",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Aria Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-837",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Alexander Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-66",
        },
        {
          quote: "I haven't danced like this in years! The Partner Dance Workshop event was so much fun.",
          author: "Amina Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-434",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Victoria Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-227",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9d9aa2d9-1415-4529-a577-cf49e5c1fccf",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
              "price": 19,
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
    id: "6e91cfa4-2949-4f0b-a201-c4f272f6334c",
    category: "Dancing",
    name: "Latin Dance Night",
    description: "Passionate Latin dances including salsa, bachata, and merengue",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Latin Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-345-173-6871",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4c8b1fae-d385-46bf-89c6-64d9353acf20",
      title: "Latin Dance Night",
      description: "Passionate Latin dances including salsa, bachata, and merengue",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "83 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Latin Dance Night performance times"
        }],
      performers: [        {
                "id": "5d71a4d8-3564-4b30-b6f8-67be7a7ac975",
                "name": "Liam Cooper",
                "role": "Latin Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/1.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Jazz Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I haven't danced like this in years! The Latin Dance Night event was so much fun.",
          author: "Amina Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-284",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Ralph Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-615",
        },
        {
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Olivia West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-340",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Joshua Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-724",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Nomsa Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-903",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Kennedy Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-746",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Sophia Hunter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-100",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c8ce1c25-6a37-4660-aae9-4a230b5bee26",
              "name": "Choreography Book",
              "description": "Step-by-step dance instructions",
              "price": 21,
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
  }
];
