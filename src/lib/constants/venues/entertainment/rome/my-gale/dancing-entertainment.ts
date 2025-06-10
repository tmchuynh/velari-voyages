// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "f208b458-8ae4-4458-a894-38229a1345c8",
    category: "Dancing",
    name: "Swing Dance Social",
    description: "Traditional folk dances from various cultures",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Swing Dance Social performance times"
    },
    contact: {
      contactNumber: "+1-264-382-1329",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2e59181e-0bac-4ab1-b015-bf6c6d1bfd61",
      title: "Swing Dance Social",
      description: "Traditional folk dances from various cultures",
      tickets: {
        isRequired: true,
        price: 42,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "60 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Swing Dance Social performance times"
        }],
      performers: [        {
                "id": "83b699bb-af5a-4947-9f57-0b395437bfaa",
                "name": "Joseph Collins",
                "role": "Ballet Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/36.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Avery Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-862",
        },
        {
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Pamela Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-782",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "John Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 5,
          date: "-501",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Joel Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-886",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Sebastian Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-795",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Christine Payne",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-1051",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Charlotte Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-189",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b84bb6d1-40d7-41b6-91f4-3789ee9b61ca",
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
    isPopular: false
  },
  {
    id: "f208b458-8ae4-4458-a894-38229a1345c8",
    category: "Dancing",
    name: "Latin Dance Night",
    description: "A celebration of dance traditions from around the world",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Latin Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-776-688-5668",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "907ccbb0-1d40-4052-ac7b-0c5ab4d0ae43",
      title: "Latin Dance Night",
      description: "A celebration of dance traditions from around the world",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "113 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Latin Dance Night performance times"
        }],
      performers: [        {
                "id": "42891e7d-548d-4a01-88b9-b2365f23752f",
                "name": "Kyle Hawkins",
                "role": "Choreographer",
                "bio": "Professional jazz dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/18.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "I haven't danced like this in years! The Latin Dance Night event was so much fun.",
          author: "Chloe Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-827",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Jeffrey West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-959",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Thabo Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-30",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Robert Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-117",
        },
        {
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Dorothy Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-709",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Sofia Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-842",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Julie Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-750",
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
    id: "f208b458-8ae4-4458-a894-38229a1345c8",
    category: "Dancing",
    name: "Hip-Hop Showcase",
    description: "Modern contemporary dance expressing emotion through movement",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Hip-Hop Showcase performance times"
    },
    contact: {
      contactNumber: "+1-688-127-9423",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ff70d29b-ff95-4de8-884a-b3183130591e",
      title: "Hip-Hop Showcase",
      description: "Modern contemporary dance expressing emotion through movement",
      tickets: {
        isRequired: false,
        price: 38,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "116 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Hip-Hop Showcase performance times"
        }],
      performers: [        {
                "id": "615ce36b-4c44-43e0-b3eb-95a2c2b173b2",
                "name": "Janet Carpenter",
                "role": "Latin Dancer",
                "bio": "Professional hip-hop dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/0.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Lerato Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-1075",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Bella Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-933",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Evelyn Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-479",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Russell Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-100",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Sofia Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-472",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c6ff8f8b-4c84-4d59-b52d-4f073633adeb",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
              "price": 15,
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
    id: "f208b458-8ae4-4458-a894-38229a1345c8",
    category: "Dancing",
    name: "Hip-Hop Showcase",
    description: "Traditional folk dances from various cultures",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Hip-Hop Showcase performance times"
    },
    contact: {
      contactNumber: "+1-629-789-1431",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bf92c679-b46f-4096-a43f-c55dade51fba",
      title: "Hip-Hop Showcase",
      description: "Traditional folk dances from various cultures",
      tickets: {
        isRequired: true,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "88 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Hip-Hop Showcase performance times"
        }],
      performers: [        {
                "id": "4c51972c-4788-4227-bd89-4df3d04fc6a0",
                "name": "Matthew Lawson",
                "role": "Tap Dancer",
                "bio": "Professional jazz dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/57.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Jazz Dancer",
                        "Tap Dancer",
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
          author: "Jack Price",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-274",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Madelyn Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-811",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Amina Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-905",
        },
        {
          quote: "I learned so much during the Hip-Hop Showcase workshop. The instructors were patient and skilled.",
          author: "Dylan Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-778",
        },
        {
          quote: "I haven't danced like this in years! The Hip-Hop Showcase event was so much fun.",
          author: "Jack Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-566",
        },
        {
          quote: "I haven't danced like this in years! The Hip-Hop Showcase event was so much fun.",
          author: "Samuel Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-924",
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
    isPopular: true
  },
  {
    id: "f208b458-8ae4-4458-a894-38229a1345c8",
    category: "Dancing",
    name: "Professional Dance Showcase",
    description: "A celebration of dance traditions from around the world",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Professional Dance Showcase performance times"
    },
    contact: {
      contactNumber: "+1-250-470-6817",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f85c8844-21a7-4dcc-9be2-cf4931d4c0aa",
      title: "Professional Dance Showcase",
      description: "A celebration of dance traditions from around the world",
      tickets: {
        isRequired: false,
        price: 22,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Professional Dance Showcase performance times"
        }],
      performers: [        {
                "id": "cb378715-70da-4f2b-84e2-46b5acd7e92a",
                "name": "Joseph Lawson",
                "role": "Jazz Dancer",
                "bio": "Professional contemporary dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/63.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          author: "Avery Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-810",
        },
        {
          quote: "I haven't danced like this in years! The Professional Dance Showcase event was so much fun.",
          author: "Eugene Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-172",
        },
        {
          quote: "I haven't danced like this in years! The Professional Dance Showcase event was so much fun.",
          author: "Logan Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-588",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Leah Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-131",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Eleanor Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-432",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Timothy West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-593",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Sandra Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-269",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "8243cb49-a6e0-409e-b2c4-dda9f557d87c",
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
    id: "f208b458-8ae4-4458-a894-38229a1345c8",
    category: "Dancing",
    name: "International Folk Dances",
    description: "Traditional folk dances from various cultures",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "International Folk Dances performance times"
    },
    contact: {
      contactNumber: "+1-873-140-6545",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b0cd32fd-36fe-46e0-aebd-be961a47be7f",
      title: "International Folk Dances",
      description: "Traditional folk dances from various cultures",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "83 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "International Folk Dances performance times"
        }],
      performers: [        {
                "id": "b37767e6-cd51-4d5f-bf42-95a1fb4f4cf1",
                "name": "Jonathan Lawson",
                "role": "Hip-Hop Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/44.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Naomi Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-900",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Charlotte Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-510",
        },
        {
          quote: "I haven't danced like this in years! The International Folk Dances event was so much fun.",
          author: "Allison Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-73",
        },
        {
          quote: "I haven't danced like this in years! The International Folk Dances event was so much fun.",
          author: "Rachel Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-30",
        },
        {
          quote: "I haven't danced like this in years! The International Folk Dances event was so much fun.",
          author: "David Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-317",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Amanda Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-602",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Nicole Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-632",
        },
        {
          quote: "I learned so much during the International Folk Dances workshop. The instructors were patient and skilled.",
          author: "Elena Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-878",
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
    id: "f208b458-8ae4-4458-a894-38229a1345c8",
    category: "Dancing",
    name: "Latin Dance Night",
    description: "Modern contemporary dance expressing emotion through movement",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Latin Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-425-991-8237",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0b369a1a-33c9-4983-bb56-237fd77fd150",
      title: "Latin Dance Night",
      description: "Modern contemporary dance expressing emotion through movement",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "69 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Latin Dance Night performance times"
        }],
      performers: [        {
                "id": "d7e36177-23fc-4ad1-9eff-2d627ddd3925",
                "name": "Mark Keller",
                "role": "Latin Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/75.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Gabriel Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-547",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Brenda Jennings",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-350",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Cynthia Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-711",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Maria Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-460",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Gregory Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-397",
        },
        {
          quote: "I haven't danced like this in years! The Latin Dance Night event was so much fun.",
          author: "Lily Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-628",
        },
        {
          quote: "I haven't danced like this in years! The Latin Dance Night event was so much fun.",
          author: "Sebastian Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-683",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Carl Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-709",
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
  }
];
