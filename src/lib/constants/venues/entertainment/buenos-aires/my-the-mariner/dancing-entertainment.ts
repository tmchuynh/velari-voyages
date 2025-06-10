// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "17a1e851-4d52-4b2d-a886-03135bb129f4",
    category: "Dancing",
    name: "International Folk Dances",
    description: "Contemporary hip-hop choreography with street dance elements",
    imageUrl: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "International Folk Dances performance times"
    },
    contact: {
      contactNumber: "+1-253-235-2165",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5f91a409-5b3f-4603-b344-2e88366ecd20",
      title: "International Folk Dances",
      description: "Contemporary hip-hop choreography with street dance elements",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "107 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "International Folk Dances performance times"
        }],
      performers: [        {
                "id": "a22f73c3-0739-439d-bb6f-c81f3ad660eb",
                "name": "Emily Mason",
                "role": "Tap Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/71.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Latin Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I learned so much during the International Folk Dances workshop. The instructors were patient and skilled.",
          author: "Keith Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-304",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Stephanie Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-210",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Julie Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-638",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Gabriel Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-1074",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Dennis Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-196",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Kevin Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-624",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "064360d3-2e6a-421c-9355-ca213178f3e5",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
              "price": 9,
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
    id: "17a1e851-4d52-4b2d-a886-03135bb129f4",
    category: "Dancing",
    name: "International Folk Dances",
    description: "Social swing dancing with live big band music",
    imageUrl: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "International Folk Dances performance times"
    },
    contact: {
      contactNumber: "+1-277-947-6345",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "259f777f-92cf-4eb7-832c-46c6226051e5",
      title: "International Folk Dances",
      description: "Social swing dancing with live big band music",
      tickets: {
        isRequired: true,
        price: 32,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "100 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "International Folk Dances performance times"
        }],
      performers: [        {
                "id": "abf6e7d4-943c-473d-83c2-2b2526e0c8d4",
                "name": "Ronald Hayes",
                "role": "Contemporary Dancer",
                "bio": "Professional tap dancer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/18.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Gary Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-674",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Christine Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-404",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Ronald Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-539",
        },
        {
          quote: "I haven't danced like this in years! The International Folk Dances event was so much fun.",
          author: "Audrey Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-1002",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Melissa West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-481",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Melissa Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-993",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Jason Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-1076",
        },
        {
          quote: "I haven't danced like this in years! The International Folk Dances event was so much fun.",
          author: "Avery Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-959",
        },
        {
          quote: "I haven't danced like this in years! The International Folk Dances event was so much fun.",
          author: "Rajesh Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-832",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Anna Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-862",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "961eb9df-d629-4107-aff1-2a3f73d3d947",
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
    id: "17a1e851-4d52-4b2d-a886-03135bb129f4",
    category: "Dancing",
    name: "Ballroom Spectacular",
    description: "Contemporary hip-hop choreography with street dance elements",
    imageUrl: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Ballroom Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-358-593-7065",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "38c327b4-4031-41a0-8989-5c2ec3083c0f",
      title: "Ballroom Spectacular",
      description: "Contemporary hip-hop choreography with street dance elements",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Ballroom Spectacular performance times"
        }],
      performers: [        {
                "id": "9111e18d-a273-45b8-8a2f-128e8c1b2a8c",
                "name": "Emily Montgomery",
                "role": "Latin Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/23.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Christopher Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-505",
        },
        {
          quote: "I haven't danced like this in years! The Ballroom Spectacular event was so much fun.",
          author: "Russell Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-933",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Russell Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-220",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Donna Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-448",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Henry Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-668",
        },
        {
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Keith Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-1025",
        },
        {
          quote: "I haven't danced like this in years! The Ballroom Spectacular event was so much fun.",
          author: "Christopher Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-197",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "651b46cb-6be2-4402-9b29-314b222ad278",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
              "price": 9,
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
  },
  {
    id: "17a1e851-4d52-4b2d-a886-03135bb129f4",
    category: "Dancing",
    name: "Contemporary Movement",
    description: "Guest participation dance competition with exciting prizes",
    imageUrl: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Contemporary Movement performance times"
    },
    contact: {
      contactNumber: "+1-238-435-1742",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a22cb56e-c64b-436c-b38a-9abb08610473",
      title: "Contemporary Movement",
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
                "end": "22:00",
                "duration": "3 hours",
                "description": "Contemporary Movement performance times"
        }],
      performers: [        {
                "id": "d65e3d73-4503-4f18-a702-83f4eef1fe5e",
                "name": "Ella Dixon",
                "role": "Ballet Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/30.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Catherine Hunter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-921",
        },
        {
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Laura Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-997",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Gary Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-414",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Christopher Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-588",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Jose Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-434",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Nancy Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-121",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Dylan Knight",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-54",
        },
        {
          quote: "I haven't danced like this in years! The Contemporary Movement event was so much fun.",
          author: "Maya Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-971",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Jacob Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-955",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Diego Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-247",
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
    id: "17a1e851-4d52-4b2d-a886-03135bb129f4",
    category: "Dancing",
    name: "Dance Through the Decades",
    description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
    imageUrl: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Dance Through the Decades performance times"
    },
    contact: {
      contactNumber: "+1-873-797-3627",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "82d57dbe-b1af-49bb-995c-ad5b44ef21e4",
      title: "Dance Through the Decades",
      description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Dance Through the Decades performance times"
        }],
      performers: [        {
                "id": "29db1cd9-3dcd-4569-aa94-97a31967be43",
                "name": "Darrell Charlotte",
                "role": "Tap Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/67.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Dorothy Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-675",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Dorothy Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-400",
        },
        {
          quote: "I learned so much during the Dance Through the Decades workshop. The instructors were patient and skilled.",
          author: "Christian Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-1052",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Harper Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-179",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Avery Stewart",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-796",
        },
        {
          quote: "I haven't danced like this in years! The Dance Through the Decades event was so much fun.",
          author: "Jerry Collins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-855",
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
    id: "17a1e851-4d52-4b2d-a886-03135bb129f4",
    category: "Dancing",
    name: "Dance Through the Decades",
    description: "Social swing dancing with live big band music",
    imageUrl: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Dance Through the Decades performance times"
    },
    contact: {
      contactNumber: "+1-345-675-2355",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "db9348f9-d6b4-46c9-a0b6-0356c236daf4",
      title: "Dance Through the Decades",
      description: "Social swing dancing with live big band music",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "84 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Dance Through the Decades performance times"
        }],
      performers: [        {
                "id": "7ae17769-23cb-4f89-9028-c824fc8da703",
                "name": "Jason Hayes",
                "role": "Contemporary Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/47.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Ballet Dancer",
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
          quote: "I learned so much during the Dance Through the Decades workshop. The instructors were patient and skilled.",
          author: "Jerry Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-856",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Amina Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-337",
        },
        {
          quote: "I haven't danced like this in years! The Dance Through the Decades event was so much fun.",
          author: "Terry Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-820",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Patrick Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-974",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Jason Hayes",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-218",
        },
        {
          quote: "I haven't danced like this in years! The Dance Through the Decades event was so much fun.",
          author: "Isabella Charlotte",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-725",
        },
        {
          quote: "I haven't danced like this in years! The Dance Through the Decades event was so much fun.",
          author: "Bella Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-206",
        },
        {
          quote: "I haven't danced like this in years! The Dance Through the Decades event was so much fun.",
          author: "Samantha Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-657",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Adam Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-1045",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Matthew Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-569",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7942fe45-3e18-4184-af89-601a48e0d03b",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
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
  },
  {
    id: "17a1e851-4d52-4b2d-a886-03135bb129f4",
    category: "Dancing",
    name: "Ballroom Spectacular",
    description: "Traditional folk dances from various cultures",
    imageUrl: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Ballroom Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-327-207-6555",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4ec52f86-8a61-46d5-b106-727b530a172b",
      title: "Ballroom Spectacular",
      description: "Traditional folk dances from various cultures",
      tickets: {
        isRequired: false,
        price: 20,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "117 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Ballroom Spectacular performance times"
        }],
      performers: [        {
                "id": "01ec1a96-4bea-4dc6-b551-cfe15dd75cdf",
                "name": "Kimberly Bennett",
                "role": "Tap Dancer",
                "bio": "Professional hip-hop dancer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/17.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Nathan Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-358",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Frank Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-57",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Lucas Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-494",
        },
        {
          quote: "I haven't danced like this in years! The Ballroom Spectacular event was so much fun.",
          author: "Melissa Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-350",
        },
        {
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Leah Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-111",
        },
        {
          quote: "I haven't danced like this in years! The Ballroom Spectacular event was so much fun.",
          author: "Robert Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-119",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Tyler Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-431",
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
  }
];
