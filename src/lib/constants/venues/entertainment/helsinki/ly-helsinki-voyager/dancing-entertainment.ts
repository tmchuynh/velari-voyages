// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "783a2851-2901-4876-882d-15d2fcb5f184",
    category: "Dancing",
    name: "Dance Through the Decades",
    description: "A celebration of dance traditions from around the world",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Dance Through the Decades performance times"
    },
    contact: {
      contactNumber: "+1-405-156-4259",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2317c1ac-cf76-48b6-8bc6-9960f7662440",
      title: "Dance Through the Decades",
      description: "A celebration of dance traditions from around the world",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "109 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Dance Through the Decades performance times"
        }],
      performers: [        {
                "id": "8c8df364-ca74-41ec-92c4-94cec55ce729",
                "name": "Priya Wells",
                "role": "Choreographer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/48.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Jazz Dancer",
                        "Ballet Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Keith Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-360",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Dylan Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-1069",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Nathan Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-171",
        },
        {
          quote: "I haven't danced like this in years! The Dance Through the Decades event was so much fun.",
          author: "Ashley Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-902",
        },
        {
          quote: "I haven't danced like this in years! The Dance Through the Decades event was so much fun.",
          author: "Deborah Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-55",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Joshua Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-679",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Paul Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-127",
        },
        {
          quote: "I haven't danced like this in years! The Dance Through the Decades event was so much fun.",
          author: "Maria Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-39",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ae50e9be-5707-4eb5-91ca-d873fc38fb62",
              "name": "Choreography Book",
              "description": "Step-by-step dance instructions",
              "price": 28,
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
    id: "783a2851-2901-4876-882d-15d2fcb5f184",
    category: "Dancing",
    name: "Professional Dance Showcase",
    description: "Traditional folk dances from various cultures",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Professional Dance Showcase performance times"
    },
    contact: {
      contactNumber: "+1-868-670-2930",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9c2c8549-21c0-49b8-866f-315137393f03",
      title: "Professional Dance Showcase",
      description: "Traditional folk dances from various cultures",
      tickets: {
        isRequired: false,
        price: 43,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "85 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Professional Dance Showcase performance times"
        }],
      performers: [        {
                "id": "844956e7-bd36-48be-b05d-b8ebe44f1f37",
                "name": "Jeremy Fox",
                "role": "Hip-Hop Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/56.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          author: "Arthur Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-1004",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Margaret Hayes",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-103",
        },
        {
          quote: "I haven't danced like this in years! The Professional Dance Showcase event was so much fun.",
          author: "Rachel Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-501",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Thandiwe Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-162",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "William Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-286",
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
    id: "783a2851-2901-4876-882d-15d2fcb5f184",
    category: "Dancing",
    name: "Ballroom Spectacular",
    description: "A celebration of dance traditions from around the world",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Ballroom Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-403-495-3973",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2f1d8260-d9c7-4b83-9f80-db4b01cc6a55",
      title: "Ballroom Spectacular",
      description: "A celebration of dance traditions from around the world",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "74 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Ballroom Spectacular performance times"
        }],
      performers: [        {
                "id": "6062aa30-feb8-4a49-8ab4-f25321e80eac",
                "name": "Emily Nash",
                "role": "Choreographer",
                "bio": "Professional jazz dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/13.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Tap Dancer",
                        "Latin Dancer",
                        "Contemporary Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Johnny Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-911",
        },
        {
          quote: "I haven't danced like this in years! The Ballroom Spectacular event was so much fun.",
          author: "Savannah Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-461",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Luis Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-193",
        },
        {
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Blake Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-280",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Philip Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-458",
        },
        {
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Skylar Payne",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-837",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Robert Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-444",
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
        question: "Do I need dance experience to participate?",
        answer: "Not at all! Our dance events welcome all skill levels. We offer beginner-friendly sessions and professional instruction.",
      },
      {
        question: "Should I bring special dance shoes?",
        answer: "Comfortable shoes are recommended, but not required. Dance shoes are available for purchase in our onboard shops.",
      }
    ],
    isPopular: true
  },
  {
    id: "783a2851-2901-4876-882d-15d2fcb5f184",
    category: "Dancing",
    name: "Ballroom Spectacular",
    description: "Modern contemporary dance expressing emotion through movement",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Ballroom Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-925-889-8868",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "822ae013-2d2b-4ab7-8b7f-ed67fc2b6b58",
      title: "Ballroom Spectacular",
      description: "Modern contemporary dance expressing emotion through movement",
      tickets: {
        isRequired: true,
        price: 21,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Ballroom Spectacular performance times"
        }],
      performers: [        {
                "id": "3fa27596-ef30-4a7b-bfb4-92ecf7342f19",
                "name": "Edward Cooper",
                "role": "Ballet Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/14.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Contemporary Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Nora Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-121",
        },
        {
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Abigail Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-873",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Luis Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-581",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Charlotte Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-248",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Aaliyah Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-238",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Nathan Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-421",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c7cf637d-f7e8-45cc-9f2d-1b4e484ff9d9",
              "name": "Choreography Book",
              "description": "Step-by-step dance instructions",
              "price": 26,
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
    id: "783a2851-2901-4876-882d-15d2fcb5f184",
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
      contactNumber: "+1-811-385-4242",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0b8a9e00-05af-4431-a215-728dc64a935e",
      title: "Ballroom Spectacular",
      description: "Broadway-style dance numbers from famous musicals",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "60 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Ballroom Spectacular performance times"
        }],
      performers: [        {
                "id": "d4e682db-92a7-42b1-a75b-7e1105d641ed",
                "name": "Mateo Price",
                "role": "Ballroom Dancer",
                "bio": "Professional hip-hop dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/21.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          author: "Gabriel Graves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-1073",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Lily Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-436",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Larry Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-1084",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Christopher Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-437",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Emma Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-25",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Savannah Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-1048",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Timothy Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-134",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "acdb7a19-a461-421d-bff7-75d65b4893f7",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
              "price": 26,
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
    id: "783a2851-2901-4876-882d-15d2fcb5f184",
    category: "Dancing",
    name: "Broadway Dance Revue",
    description: "Passionate Latin dances including salsa, bachata, and merengue",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Broadway Dance Revue performance times"
    },
    contact: {
      contactNumber: "+1-266-915-9374",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fbe1bf5d-3011-43d1-8fdc-03a1ed60a547",
      title: "Broadway Dance Revue",
      description: "Passionate Latin dances including salsa, bachata, and merengue",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Broadway Dance Revue performance times"
        }],
      performers: [        {
                "id": "001f99be-f137-4c8a-81a7-572ae51b141e",
                "name": "Gary Hayes",
                "role": "Choreographer",
                "bio": "Professional tap dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/30.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Ballroom Dancer",
                        "Jazz Dancer",
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
          author: "Charlotte Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-1005",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Thandiwe Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-954",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Gabriella Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-898",
        },
        {
          quote: "I haven't danced like this in years! The Broadway Dance Revue event was so much fun.",
          author: "Julie Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-648",
        },
        {
          quote: "I learned so much during the Broadway Dance Revue workshop. The instructors were patient and skilled.",
          author: "Barbara Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-1015",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Riley West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-712",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "aaa98e98-a6dc-465a-a4cf-cd74502605df",
              "name": "Choreography Book",
              "description": "Step-by-step dance instructions",
              "price": 28,
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
  },
  {
    id: "783a2851-2901-4876-882d-15d2fcb5f184",
    category: "Dancing",
    name: "Partner Dance Workshop",
    description: "Learn partner dances with professional instruction",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Partner Dance Workshop performance times"
    },
    contact: {
      contactNumber: "+1-833-621-8964",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f6feec99-ada2-47d1-a3be-2f9506606d62",
      title: "Partner Dance Workshop",
      description: "Learn partner dances with professional instruction",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "100 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Partner Dance Workshop performance times"
        }],
      performers: [        {
                "id": "efa4be25-23c6-4fb7-ae1e-363d23c7c641",
                "name": "Harry Russell",
                "role": "Tap Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/75.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Choreographer",
                        "Ballroom Dancer",
                        "Latin Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Joshua Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-867",
        },
        {
          quote: "I haven't danced like this in years! The Partner Dance Workshop event was so much fun.",
          author: "Antonio Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-784",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Ryan Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-100",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Kenneth Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-748",
        },
        {
          quote: "I learned so much during the Partner Dance Workshop workshop. The instructors were patient and skilled.",
          author: "Anna Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-523",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Terry Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-592",
        },
        {
          quote: "I haven't danced like this in years! The Partner Dance Workshop event was so much fun.",
          author: "Henry Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-128",
        },
        {
          quote: "I haven't danced like this in years! The Partner Dance Workshop event was so much fun.",
          author: "Jose Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-1069",
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
    id: "783a2851-2901-4876-882d-15d2fcb5f184",
    category: "Dancing",
    name: "Contemporary Movement",
    description: "Traditional folk dances from various cultures",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Contemporary Movement performance times"
    },
    contact: {
      contactNumber: "+1-602-673-1560",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7d5a5317-a06a-4589-b703-6effe379410b",
      title: "Contemporary Movement",
      description: "Traditional folk dances from various cultures",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "94 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Contemporary Movement performance times"
        }],
      performers: [        {
                "id": "56c41eb8-269c-40a5-8388-214a68937dc0",
                "name": "Edward Montgomery",
                "role": "Latin Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/67.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Jazz Dancer",
                        "Choreographer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Olivia Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-346",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Susan Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-448",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Nancy Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-835",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Riley Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-661",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Nicole Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-14",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Matthew Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-195",
        },
        {
          quote: "I haven't danced like this in years! The Contemporary Movement event was so much fun.",
          author: "Kimberly Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-390",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "James Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-64",
        },
        {
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Matthew Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-523",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0c935995-74ea-49f9-88d7-229fe5999554",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
              "price": 28,
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
    id: "783a2851-2901-4876-882d-15d2fcb5f184",
    category: "Dancing",
    name: "Professional Dance Showcase",
    description: "Dance styles spanning from the 1920s to today",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Professional Dance Showcase performance times"
    },
    contact: {
      contactNumber: "+1-994-128-9294",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a8931c06-fb89-4629-b3ab-7f0133e9e561",
      title: "Professional Dance Showcase",
      description: "Dance styles spanning from the 1920s to today",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "64 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Professional Dance Showcase performance times"
        }],
      performers: [        {
                "id": "0a25294b-df42-4e5b-a389-7d973b73f535",
                "name": "Caroline Marshall",
                "role": "Tap Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/30.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          author: "Alexander Spencer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-903",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Catherine Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-416",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Mason Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-338",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Gary Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-555",
        },
        {
          quote: "I learned so much during the Professional Dance Showcase workshop. The instructors were patient and skilled.",
          author: "Peter Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-80",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Zoe Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-991",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Chen Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-42",
        },
        {
          quote: "I learned so much during the Professional Dance Showcase workshop. The instructors were patient and skilled.",
          author: "Charlotte Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-865",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f42cc1be-f942-44f6-a535-b5ce55ee3f76",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
              "price": 8,
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
    isPopular: true
  }
];
