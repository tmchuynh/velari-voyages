// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "9fe523d5-08c1-4c20-a08f-476a8f57ba67",
    category: "Dancing",
    name: "International Folk Dances",
    description: "Professional dancers performing spectacular choreographed routines",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "International Folk Dances performance times"
    },
    contact: {
      contactNumber: "+1-498-600-9718",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "00a4b0d6-381f-44ed-9c82-50b7354b4bb6",
      title: "International Folk Dances",
      description: "Professional dancers performing spectacular choreographed routines",
      tickets: {
        isRequired: true,
        price: 24,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "104 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "International Folk Dances performance times"
        }],
      performers: [        {
                "id": "ca18422b-f9a5-4c0c-b7bc-510c79c8ca1e",
                "name": "Billy Clark",
                "role": "Latin Dancer",
                "bio": "Professional tap dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/75.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Jazz Dancer",
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
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Caroline Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-553",
        },
        {
          quote: "I haven't danced like this in years! The International Folk Dances event was so much fun.",
          author: "Sophia Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-829",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Helen Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-869",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Patricia Spencer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-1052",
        },
        {
          quote: "I haven't danced like this in years! The International Folk Dances event was so much fun.",
          author: "Angela Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-584",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Ella Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-735",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Gabriel Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-573",
        },
        {
          quote: "I learned so much during the International Folk Dances workshop. The instructors were patient and skilled.",
          author: "Maya Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-134",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Jeffrey Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-785",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d186abfe-68ba-44f7-b189-74b65e5fd161",
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
    id: "9fe523d5-08c1-4c20-a08f-476a8f57ba67",
    category: "Dancing",
    name: "Professional Dance Showcase",
    description: "Contemporary hip-hop choreography with street dance elements",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Professional Dance Showcase performance times"
    },
    contact: {
      contactNumber: "+1-814-541-6100",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "dec989c7-556e-42ea-bc90-59ec00ad016e",
      title: "Professional Dance Showcase",
      description: "Contemporary hip-hop choreography with street dance elements",
      tickets: {
        isRequired: false,
        price: 40,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "69 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Professional Dance Showcase performance times"
        }],
      performers: [        {
                "id": "94d87a0d-da56-4a24-b5f2-b04123078b76",
                "name": "Emily Spencer",
                "role": "Ballet Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/44.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Choreographer",
                        "Ballet Dancer",
                        "Hip-Hop Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Jesse Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-437",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Aaron Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-547",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Ella Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-988",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Ella Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-766",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Jacob Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-686",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Brenda Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-934",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Madelyn Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-1001",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Emma Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-187",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Audrey Nash",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-932",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Sophia Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-59",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
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
    id: "9fe523d5-08c1-4c20-a08f-476a8f57ba67",
    category: "Dancing",
    name: "Latin Dance Night",
    description: "Traditional folk dances from various cultures",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Latin Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-388-713-6763",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "11a71659-3114-49fe-a9f4-ff78114680dd",
      title: "Latin Dance Night",
      description: "Traditional folk dances from various cultures",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "100 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Latin Dance Night performance times"
        }],
      performers: [        {
                "id": "36be24b4-37de-4730-83e8-a82db5b44e92",
                "name": "Dylan Campbell",
                "role": "Contemporary Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/58.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
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
          author: "Harper Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-190",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Avery Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-496",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Jose Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-799",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Alice Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-38",
        },
        {
          quote: "I haven't danced like this in years! The Latin Dance Night event was so much fun.",
          author: "Julie Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-116",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Adam Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-489",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Kevin Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-119",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Jordan Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-796",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Henry Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-193",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "John Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-656",
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
    id: "9fe523d5-08c1-4c20-a08f-476a8f57ba67",
    category: "Dancing",
    name: "Dance Through the Decades",
    description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Dance Through the Decades performance times"
    },
    contact: {
      contactNumber: "+1-319-148-7697",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e4c8c13e-bc78-485c-b1e3-56aceaa292e0",
      title: "Dance Through the Decades",
      description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "111 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Dance Through the Decades performance times"
        }],
      performers: [        {
                "id": "c163dc32-86a3-4bf1-8334-7adfbe78a6ea",
                "name": "Lawrence Morgan",
                "role": "Jazz Dancer",
                "bio": "Professional jazz dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/37.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "I learned so much during the Dance Through the Decades workshop. The instructors were patient and skilled.",
          author: "Thandiwe Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-105",
        },
        {
          quote: "I learned so much during the Dance Through the Decades workshop. The instructors were patient and skilled.",
          author: "Virginia Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-742",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "James Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-955",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Marcus Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-581",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Nomsa Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-53",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Chen Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-735",
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
    id: "9fe523d5-08c1-4c20-a08f-476a8f57ba67",
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
      contactNumber: "+1-718-652-6639",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fdb853d7-0e1a-40a6-b2b8-c98fcc0bdead",
      title: "International Folk Dances",
      description: "Modern contemporary dance expressing emotion through movement",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "74 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "International Folk Dances performance times"
        }],
      performers: [        {
                "id": "90ab6744-57b9-474c-97bb-dc761cd10722",
                "name": "Charlotte Day",
                "role": "Contemporary Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/13.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Ballroom Dancer",
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
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Nathan Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-946",
        },
        {
          quote: "I haven't danced like this in years! The International Folk Dances event was so much fun.",
          author: "Victor Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-675",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Madelyn Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-905",
        },
        {
          quote: "I learned so much during the International Folk Dances workshop. The instructors were patient and skilled.",
          author: "Wei Collins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-824",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Larry Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-634",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b521f296-e170-46ea-a668-cb4e59383dc6",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
              "price": 18,
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
    id: "9fe523d5-08c1-4c20-a08f-476a8f57ba67",
    category: "Dancing",
    name: "International Folk Dances",
    description: "Modern contemporary dance expressing emotion through movement",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "International Folk Dances performance times"
    },
    contact: {
      contactNumber: "+1-775-807-7943",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3f1b36cd-15a5-4ddf-a911-900970498bb8",
      title: "International Folk Dances",
      description: "Modern contemporary dance expressing emotion through movement",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "105 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "International Folk Dances performance times"
        }],
      performers: [        {
                "id": "715e4be3-f4ab-4e45-bb8f-3d1f8a709f85",
                "name": "Diego Fletcher",
                "role": "Ballroom Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/58.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Choreographer",
                        "Latin Dancer",
                        "Ballroom Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Ella Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-107",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Bobby Payne",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-291",
        },
        {
          quote: "I learned so much during the International Folk Dances workshop. The instructors were patient and skilled.",
          author: "Christian Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-1012",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Oliver Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-359",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Audrey Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-560",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Gerald Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-569",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Joseph Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-301",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Willie Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-765",
        },
        {
          quote: "I learned so much during the International Folk Dances workshop. The instructors were patient and skilled.",
          author: "Harper Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-461",
        },
        {
          quote: "I learned so much during the International Folk Dances workshop. The instructors were patient and skilled.",
          author: "Ronald Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-474",
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
    id: "9fe523d5-08c1-4c20-a08f-476a8f57ba67",
    category: "Dancing",
    name: "Dance Competition",
    description: "Learn partner dances with professional instruction",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Dance Competition performance times"
    },
    contact: {
      contactNumber: "+1-445-966-6421",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fff8057c-4e44-4761-b698-aa01f955acc4",
      title: "Dance Competition",
      description: "Learn partner dances with professional instruction",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "84 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Dance Competition performance times"
        }],
      performers: [        {
                "id": "4d3522c6-7bba-4a7b-942c-0008ae3c52d1",
                "name": "Andrew Fisher",
                "role": "Latin Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/2.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Latin Dancer",
                        "Choreographer",
                        "Contemporary Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Lawrence Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-587",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "James Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-23",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Jane Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-58",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Miguel Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-595",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Jerry Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-842",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Marcus Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-720",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Kenneth Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-603",
        },
        {
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Juan Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-511",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Russell Hayes",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-254",
        },
        {
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Skylar Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-856",
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
    id: "9fe523d5-08c1-4c20-a08f-476a8f57ba67",
    category: "Dancing",
    name: "Latin Dance Night",
    description: "Learn partner dances with professional instruction",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Latin Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-257-520-4513",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "55477fe5-0a75-461e-9cf5-9cea218bb019",
      title: "Latin Dance Night",
      description: "Learn partner dances with professional instruction",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "75 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Latin Dance Night performance times"
        }],
      performers: [        {
                "id": "8d5ce031-fdd6-4da8-8c5f-34200ccec6e8",
                "name": "Eric Douglas",
                "role": "Hip-Hop Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/37.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Ballet Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Nathan Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-10",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Laura Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-85",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Harper Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-964",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Rebecca Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-164",
        },
        {
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Brooklyn Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-751",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b73a9ba8-8881-4f0b-a467-876a9b357a29",
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
        question: "Do I need dance experience to participate?",
        answer: "Not at all! Our dance events welcome all skill levels. We offer beginner-friendly sessions and professional instruction.",
      },
      {
        question: "Should I bring special dance shoes?",
        answer: "Comfortable shoes are recommended, but not required. Dance shoes are available for purchase in our onboard shops.",
      }
    ],
    isPopular: false
  }
];
