// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "80d8b953-8ffa-44a2-b568-f41f8608ac69",
    category: "Dancing",
    name: "Dance Competition",
    description: "Modern contemporary dance expressing emotion through movement",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Dance Competition performance times"
    },
    contact: {
      contactNumber: "+1-824-927-5612",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b447cac6-0074-492a-b075-cfefca39836d",
      title: "Dance Competition",
      description: "Modern contemporary dance expressing emotion through movement",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "89 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Dance Competition performance times"
        }],
      performers: [        {
                "id": "e9f12cb5-68e4-45ff-b81b-5bb252dd54a1",
                "name": "Zachary Foster",
                "role": "Tap Dancer",
                "bio": "Professional jazz dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/36.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Ariana Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-361",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Caroline Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-516",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Lily Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-258",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Maya Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-832",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Louis Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-502",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Peter Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "5",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Isabella Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-266",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Sophia Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-95",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "97704984-8375-4ce5-a87c-97c03130b362",
              "name": "Choreography Book",
              "description": "Step-by-step dance instructions",
              "price": 18,
              "currency": "USD"
      }
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
    id: "80d8b953-8ffa-44a2-b568-f41f8608ac69",
    category: "Dancing",
    name: "Dance Competition",
    description: "Broadway-style dance numbers from famous musicals",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Dance Competition performance times"
    },
    contact: {
      contactNumber: "+1-556-561-3222",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "45c87c4f-5c99-4cab-85db-d35ebaa974b4",
      title: "Dance Competition",
      description: "Broadway-style dance numbers from famous musicals",
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
                "description": "Dance Competition performance times"
        }],
      performers: [        {
                "id": "4f48e046-e585-4805-bc41-d6a5caa95ae5",
                "name": "Kevin Olivia",
                "role": "Jazz Dancer",
                "bio": "Professional contemporary dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/33.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Contemporary Dancer",
                        "Latin Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Emily Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 5,
          date: "-1010",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Edward Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-761",
        },
        {
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Hannah Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-944",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Sandra Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-572",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Mateo Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-515",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Eleanor Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-138",
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
    isPopular: true
  },
  {
    id: "80d8b953-8ffa-44a2-b568-f41f8608ac69",
    category: "Dancing",
    name: "Dance Competition",
    description: "Modern contemporary dance expressing emotion through movement",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Dance Competition performance times"
    },
    contact: {
      contactNumber: "+1-241-907-7789",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "40045658-befd-4d67-8379-979adebcf954",
      title: "Dance Competition",
      description: "Modern contemporary dance expressing emotion through movement",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Dance Competition performance times"
        }],
      performers: [        {
                "id": "eac4ca3c-acb1-4dbc-88d7-b303c532f6b0",
                "name": "Madelyn Hall",
                "role": "Contemporary Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/22.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
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
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Luis Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-871",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Keith Fisher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-952",
        },
        {
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Billy Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-884",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Joshua Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-485",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Aria Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-879",
        },
        {
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Caroline Keller",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-620",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Gerald Hunter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-555",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Jesse Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-844",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Elena Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-786",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d836ed10-d161-49b5-a25e-b692a5e68e9b",
              "name": "Choreography Book",
              "description": "Step-by-step dance instructions",
              "price": 30,
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
    id: "80d8b953-8ffa-44a2-b568-f41f8608ac69",
    category: "Dancing",
    name: "Professional Dance Showcase",
    description: "Contemporary hip-hop choreography with street dance elements",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Professional Dance Showcase performance times"
    },
    contact: {
      contactNumber: "+1-338-811-9767",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b93f2586-3631-4c88-b8cf-326c062e9517",
      title: "Professional Dance Showcase",
      description: "Contemporary hip-hop choreography with street dance elements",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "108 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Professional Dance Showcase performance times"
        }],
      performers: [        {
                "id": "759970ad-555f-4fdc-aeec-ceb755c44d3d",
                "name": "Aria Olivia",
                "role": "Ballroom Dancer",
                "bio": "Professional contemporary dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/84.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Choreographer",
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
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Brandon Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-62",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Nomsa Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-900",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Raymond Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-961",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Robert Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-337",
        },
        {
          quote: "I learned so much during the Professional Dance Showcase workshop. The instructors were patient and skilled.",
          author: "Scott Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "4",
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
    id: "80d8b953-8ffa-44a2-b568-f41f8608ac69",
    category: "Dancing",
    name: "International Folk Dances",
    description: "Social swing dancing with live big band music",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "International Folk Dances performance times"
    },
    contact: {
      contactNumber: "+1-472-650-2074",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d55fbc78-f8fc-4c71-a064-eea4436c3585",
      title: "International Folk Dances",
      description: "Social swing dancing with live big band music",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "97 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "International Folk Dances performance times"
        }],
      performers: [        {
                "id": "770b1d10-ed1f-4ca0-aa3d-7f844b518911",
                "name": "Philip Maxwell",
                "role": "Hip-Hop Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/3.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Latin Dancer",
                        "Ballet Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I learned so much during the International Folk Dances workshop. The instructors were patient and skilled.",
          author: "Brooklyn Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-693",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Kyle Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-1025",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Roger Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-1",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Miguel Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-818",
        },
        {
          quote: "I learned so much during the International Folk Dances workshop. The instructors were patient and skilled.",
          author: "Donna Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-1008",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9a8113f8-91ee-4a03-bf8b-3662cf5cc8f9",
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
    isPopular: false
  },
  {
    id: "80d8b953-8ffa-44a2-b568-f41f8608ac69",
    category: "Dancing",
    name: "Dance Competition",
    description: "Learn partner dances with professional instruction",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Dance Competition performance times"
    },
    contact: {
      contactNumber: "+1-390-107-3541",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ef26ad2e-ab01-4d0c-bc8d-3c41ee6e35e4",
      title: "Dance Competition",
      description: "Learn partner dances with professional instruction",
      tickets: {
        isRequired: true,
        price: 42,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "84 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Dance Competition performance times"
        }],
      performers: [        {
                "id": "a4ba3f61-b2c7-47f4-90cc-f2a0d20c95de",
                "name": "Diego Fox",
                "role": "Hip-Hop Dancer",
                "bio": "Professional hip-hop dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/30.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Wei Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-892",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Ariana Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-111",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Eleanor Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-966",
        },
        {
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Valentina Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-299",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Bryan Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-979",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Brandon Stewart",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-970",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Stella Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-448",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Noah Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-303",
        },
        {
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Noah Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-913",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Russell Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-179",
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
    isPopular: true
  },
  {
    id: "80d8b953-8ffa-44a2-b568-f41f8608ac69",
    category: "Dancing",
    name: "International Folk Dances",
    description: "Professional dancers performing spectacular choreographed routines",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "International Folk Dances performance times"
    },
    contact: {
      contactNumber: "+1-804-233-5482",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f8a9dd89-e122-41af-b73f-518e5a1d9656",
      title: "International Folk Dances",
      description: "Professional dancers performing spectacular choreographed routines",
      tickets: {
        isRequired: false,
        price: 30,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "International Folk Dances performance times"
        }],
      performers: [        {
                "id": "cb122fad-a7e4-4f28-8a09-25245ccf3b6a",
                "name": "Willie Hayes",
                "role": "Hip-Hop Dancer",
                "bio": "Professional contemporary dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/65.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Hip-Hop Dancer",
                        "Tap Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I learned so much during the International Folk Dances workshop. The instructors were patient and skilled.",
          author: "Zoe Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-953",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Javier Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-474",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Maya Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-182",
        },
        {
          quote: "I haven't danced like this in years! The International Folk Dances event was so much fun.",
          author: "Donna Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-778",
        },
        {
          quote: "I haven't danced like this in years! The International Folk Dances event was so much fun.",
          author: "Evelyn Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-298",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Margaret Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-514",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Thabo Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-628",
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
    id: "80d8b953-8ffa-44a2-b568-f41f8608ac69",
    category: "Dancing",
    name: "Swing Dance Social",
    description: "Broadway-style dance numbers from famous musicals",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Swing Dance Social performance times"
    },
    contact: {
      contactNumber: "+1-893-525-1339",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7ce904a3-9bb6-4622-b18e-d2fa0a3d7566",
      title: "Swing Dance Social",
      description: "Broadway-style dance numbers from famous musicals",
      tickets: {
        isRequired: false,
        price: 40,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Swing Dance Social performance times"
        }],
      performers: [        {
                "id": "df893bd4-2caf-475e-9371-acaf1228c62d",
                "name": "Gabriel Henderson",
                "role": "Latin Dancer",
                "bio": "Professional hip-hop dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/11.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Contemporary Dancer",
                        "Ballroom Dancer",
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
          author: "Valentina Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-731",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Jeremy Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-1049",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "George Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-977",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Deborah Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-496",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Sophia Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-557",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Scott Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-908",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Diego Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-1054",
        },
        {
          quote: "I learned so much during the Swing Dance Social workshop. The instructors were patient and skilled.",
          author: "Michael Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-1039",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "dc600ca8-dd5c-46f5-83e3-2a9867ba156a",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
              "price": 21,
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
  }
];
