// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "e11fed4e-430c-4526-88ba-2d5b14e52699",
    category: "Dancing",
    name: "Latin Dance Night",
    description: "A celebration of dance traditions from around the world",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Latin Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-685-524-4258",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c438f908-9e8d-4fb2-a83c-c136261773e3",
      title: "Latin Dance Night",
      description: "A celebration of dance traditions from around the world",
      tickets: {
        isRequired: false,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Latin Dance Night performance times"
        }],
      performers: [        {
                "id": "7ec5f6ed-b236-46f7-a46d-9710df463027",
                "name": "Miguel Olivia",
                "role": "Hip-Hop Dancer",
                "bio": "Professional contemporary dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/3.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Abigail Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-519",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Mason Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-13",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Claire Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-182",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Richard Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-604",
        },
        {
          quote: "I haven't danced like this in years! The Latin Dance Night event was so much fun.",
          author: "Zola Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-38",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Nicole Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-775",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Linda Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-258",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Eleanor Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 5,
          date: "0",
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
    id: "e11fed4e-430c-4526-88ba-2d5b14e52699",
    category: "Dancing",
    name: "Professional Dance Showcase",
    description: "Passionate Latin dances including salsa, bachata, and merengue",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Professional Dance Showcase performance times"
    },
    contact: {
      contactNumber: "+1-865-380-3671",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "20c7ae92-6630-44a5-bb84-c493ee373860",
      title: "Professional Dance Showcase",
      description: "Passionate Latin dances including salsa, bachata, and merengue",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "115 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Professional Dance Showcase performance times"
        }],
      performers: [        {
                "id": "480a15ee-0f54-4f33-be50-edcc77e70811",
                "name": "Kinsley Russell",
                "role": "Latin Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/12.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Ballet Dancer",
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
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Gabriel Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-187",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Audrey Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-1074",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Terry Dixon",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-607",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Wayne Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-436",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Maya Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-662",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Scott Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-74",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Scarlett Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-822",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Joel Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-123",
        },
        {
          quote: "I learned so much during the Professional Dance Showcase workshop. The instructors were patient and skilled.",
          author: "Harry Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-262",
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
    id: "e11fed4e-430c-4526-88ba-2d5b14e52699",
    category: "Dancing",
    name: "Swing Dance Social",
    description: "Professional dancers performing spectacular choreographed routines",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Swing Dance Social performance times"
    },
    contact: {
      contactNumber: "+1-350-725-3208",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ce2e5f55-039c-492d-8835-d8109ea29d96",
      title: "Swing Dance Social",
      description: "Professional dancers performing spectacular choreographed routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "86 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Swing Dance Social performance times"
        }],
      performers: [        {
                "id": "664cd460-2a29-4344-a0dc-f3f49614a917",
                "name": "Patricia Parker",
                "role": "Ballet Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/12.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Ballroom Dancer",
                        "Latin Dancer",
                        "Choreographer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Paul Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-1003",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Stella Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-1079",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Nora Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-835",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Rajesh Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-672",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Diego Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-881",
        },
        {
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Riley Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-459",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Sean Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-137",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Amina Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 4,
          date: "-169",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Dennis Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-404",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Tyler Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-295",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "83db1a08-c44c-4b56-b6a5-8a66edce3717",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
              "price": 7,
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
    isPopular: true
  },
  {
    id: "e11fed4e-430c-4526-88ba-2d5b14e52699",
    category: "Dancing",
    name: "Swing Dance Social",
    description: "Social swing dancing with live big band music",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Swing Dance Social performance times"
    },
    contact: {
      contactNumber: "+1-219-359-3518",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3942d418-2fda-4ec1-a0d7-d935b33183ea",
      title: "Swing Dance Social",
      description: "Social swing dancing with live big band music",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Swing Dance Social performance times"
        }],
      performers: [        {
                "id": "3867eb3b-72eb-483a-9ca9-14536adbae10",
                "name": "Ralph Hayes",
                "role": "Ballroom Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/39.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Choreographer",
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
          quote: "I learned so much during the Swing Dance Social workshop. The instructors were patient and skilled.",
          author: "Stella Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-104",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Harry Palmer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-139",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Dylan Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-570",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Albert Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-972",
        },
        {
          quote: "I learned so much during the Swing Dance Social workshop. The instructors were patient and skilled.",
          author: "Nomsa Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-335",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Christine Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-144",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Walter Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-1077",
        },
        {
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Isabella Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-714",
        },
        {
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Dylan Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-1046",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "887bfb0d-f6f5-4de7-b3c3-0de4fef02fbe",
              "name": "Choreography Book",
              "description": "Step-by-step dance instructions",
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
    isPopular: true
  },
  {
    id: "e11fed4e-430c-4526-88ba-2d5b14e52699",
    category: "Dancing",
    name: "Swing Dance Social",
    description: "Guest participation dance competition with exciting prizes",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Swing Dance Social performance times"
    },
    contact: {
      contactNumber: "+1-515-813-2656",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7dae8e75-d1c6-455f-ba46-c4929bd8aaa2",
      title: "Swing Dance Social",
      description: "Guest participation dance competition with exciting prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "98 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Swing Dance Social performance times"
        }],
      performers: [        {
                "id": "86e728d6-14aa-4604-8730-6fdf736d627b",
                "name": "David Carpenter",
                "role": "Hip-Hop Dancer",
                "bio": "Professional tap dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/78.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Ballroom Dancer",
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
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Grace Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-208",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Mark Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-908",
        },
        {
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Chen Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-567",
        },
        {
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Allison Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-915",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Bobby Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-383",
        },
        {
          quote: "I learned so much during the Swing Dance Social workshop. The instructors were patient and skilled.",
          author: "Roger Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-18",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Donna Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-848",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Avery Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-523",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Sarah Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-101",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Emma Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-53",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d0f8295b-6622-4030-b7ee-c19f4dc18a35",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
              "price": 14,
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
    id: "e11fed4e-430c-4526-88ba-2d5b14e52699",
    category: "Dancing",
    name: "Partner Dance Workshop",
    description: "Dance styles spanning from the 1920s to today",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Partner Dance Workshop performance times"
    },
    contact: {
      contactNumber: "+1-554-333-8677",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8d49dea6-f274-4ac2-914c-0b1bf7c13948",
      title: "Partner Dance Workshop",
      description: "Dance styles spanning from the 1920s to today",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "62 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Partner Dance Workshop performance times"
        }],
      performers: [        {
                "id": "c7082669-d91e-4655-bb59-62c97cc9049b",
                "name": "Olivia Foster",
                "role": "Ballroom Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/83.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Hip-Hop Dancer",
                        "Latin Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Darrell Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-33",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Ralph Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-271",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Barbara Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-154",
        },
        {
          quote: "I haven't danced like this in years! The Partner Dance Workshop event was so much fun.",
          author: "Lisa Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-680",
        },
        {
          quote: "I haven't danced like this in years! The Partner Dance Workshop event was so much fun.",
          author: "Christian Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "8",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Adam Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-144",
        },
        {
          quote: "I haven't danced like this in years! The Partner Dance Workshop event was so much fun.",
          author: "Alice Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-1019",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Sophia Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-337",
        },
        {
          quote: "I learned so much during the Partner Dance Workshop workshop. The instructors were patient and skilled.",
          author: "Joseph Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-902",
        },
        {
          quote: "I haven't danced like this in years! The Partner Dance Workshop event was so much fun.",
          author: "Jordan Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-20",
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
    isPopular: true
  },
  {
    id: "e11fed4e-430c-4526-88ba-2d5b14e52699",
    category: "Dancing",
    name: "Dance Through the Decades",
    description: "Social swing dancing with live big band music",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Dance Through the Decades performance times"
    },
    contact: {
      contactNumber: "+1-344-977-4636",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fd91a07e-3845-4ea5-bbd3-0c4d29ebbaea",
      title: "Dance Through the Decades",
      description: "Social swing dancing with live big band music",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "83 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Dance Through the Decades performance times"
        }],
      performers: [        {
                "id": "4035d161-064b-4ebd-826a-054b536c2520",
                "name": "Leah Lawson",
                "role": "Ballet Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/9.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Latin Dancer",
                        "Jazz Dancer",
                        "Ballroom Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I haven't danced like this in years! The Dance Through the Decades event was so much fun.",
          author: "Zoe Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-968",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Evelyn Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-617",
        },
        {
          quote: "I learned so much during the Dance Through the Decades workshop. The instructors were patient and skilled.",
          author: "Luis Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-548",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Alexander Jennings",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-43",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Kevin Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-109",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Anna Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-916",
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
    id: "e11fed4e-430c-4526-88ba-2d5b14e52699",
    category: "Dancing",
    name: "Dance Through the Decades",
    description: "Passionate Latin dances including salsa, bachata, and merengue",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Dance Through the Decades performance times"
    },
    contact: {
      contactNumber: "+1-459-122-1764",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "46cae4de-b75e-4a64-bf7c-b836d0ac7c53",
      title: "Dance Through the Decades",
      description: "Passionate Latin dances including salsa, bachata, and merengue",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "103 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Dance Through the Decades performance times"
        }],
      performers: [        {
                "id": "eadcddcd-6d94-49ea-8764-60949ef73710",
                "name": "Roger Palmer",
                "role": "Ballroom Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/0.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
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
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Patricia Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-1026",
        },
        {
          quote: "I haven't danced like this in years! The Dance Through the Decades event was so much fun.",
          author: "Matthew Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-1024",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Maya Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-987",
        },
        {
          quote: "I learned so much during the Dance Through the Decades workshop. The instructors were patient and skilled.",
          author: "Leah Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-922",
        },
        {
          quote: "I learned so much during the Dance Through the Decades workshop. The instructors were patient and skilled.",
          author: "Jane Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-739",
        },
        {
          quote: "I haven't danced like this in years! The Dance Through the Decades event was so much fun.",
          author: "Janet Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-826",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d09cc29d-1628-4d6c-8a48-fe24b274de81",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
              "price": 17,
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
    id: "e11fed4e-430c-4526-88ba-2d5b14e52699",
    category: "Dancing",
    name: "Broadway Dance Revue",
    description: "Guest participation dance competition with exciting prizes",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Broadway Dance Revue performance times"
    },
    contact: {
      contactNumber: "+1-321-700-6561",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "51052da1-7db4-4359-86e1-a24218c8d41c",
      title: "Broadway Dance Revue",
      description: "Guest participation dance competition with exciting prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "115 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Broadway Dance Revue performance times"
        }],
      performers: [        {
                "id": "4a877054-72d4-4ee0-b292-0a25c8e43eec",
                "name": "Alexander Mason",
                "role": "Contemporary Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/83.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Choreographer",
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
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "David Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-832",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Harry Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-82",
        },
        {
          quote: "I learned so much during the Broadway Dance Revue workshop. The instructors were patient and skilled.",
          author: "Stephanie Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-267",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Raymond Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-402",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Eugene Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-961",
        },
        {
          quote: "I haven't danced like this in years! The Broadway Dance Revue event was so much fun.",
          author: "Savannah Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-408",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Victor Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-419",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Claire Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-84",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5878a8bc-b8a0-42ac-b4c6-2fdb7772dc30",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
              "price": 24,
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
    id: "e11fed4e-430c-4526-88ba-2d5b14e52699",
    category: "Dancing",
    name: "Broadway Dance Revue",
    description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Broadway Dance Revue performance times"
    },
    contact: {
      contactNumber: "+1-972-494-9281",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6e57e77e-dcdd-4d75-8df2-01fef0a4ccc8",
      title: "Broadway Dance Revue",
      description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
      tickets: {
        isRequired: false,
        price: 33,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "95 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Broadway Dance Revue performance times"
        }],
      performers: [        {
                "id": "0e23a916-9110-4d2c-934a-161a1fbf76ed",
                "name": "Melissa Curtis",
                "role": "Ballroom Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/15.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "I haven't danced like this in years! The Broadway Dance Revue event was so much fun.",
          author: "Bobby Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-68",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Nicholas Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-255",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Samantha Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-207",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Samantha Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-902",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Bobby Dunn",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-1047",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Bryan Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-304",
        },
        {
          quote: "I haven't danced like this in years! The Broadway Dance Revue event was so much fun.",
          author: "Janet Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-382",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Adam Knight",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-590",
        },
        {
          quote: "I learned so much during the Broadway Dance Revue workshop. The instructors were patient and skilled.",
          author: "Daniel Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-201",
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
    isPopular: true
  }
];
