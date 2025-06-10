// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "f4a1f127-d6f8-4de6-92b1-9cbdb70bd179",
    category: "Dancing",
    name: "Contemporary Movement",
    description: "Social swing dancing with live big band music",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Contemporary Movement performance times"
    },
    contact: {
      contactNumber: "+1-968-815-4163",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d9878151-2c58-49a1-b59e-fc3955506952",
      title: "Contemporary Movement",
      description: "Social swing dancing with live big band music",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Contemporary Movement performance times"
        }],
      performers: [        {
                "id": "2e4d995e-97cf-467e-856f-79ce9632d296",
                "name": "Logan Reed",
                "role": "Ballroom Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/19.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Ballroom Dancer",
                        "Tap Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I haven't danced like this in years! The Contemporary Movement event was so much fun.",
          author: "Lily Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-146",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Jennifer Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-685",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Gabriel Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-910",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Sarah Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-847",
        },
        {
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Jeremy Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-480",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Bryan Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-1027",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8b3f9d9b-d3ba-40b5-a8dd-0458b3080d89",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
              "price": 7,
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
    id: "f4a1f127-d6f8-4de6-92b1-9cbdb70bd179",
    category: "Dancing",
    name: "Cultural Dance Journey",
    description: "Contemporary hip-hop choreography with street dance elements",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Cultural Dance Journey performance times"
    },
    contact: {
      contactNumber: "+1-304-852-7112",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a2d1b6e0-9d00-4265-b8e3-14a55c7991fa",
      title: "Cultural Dance Journey",
      description: "Contemporary hip-hop choreography with street dance elements",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "72 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Cultural Dance Journey performance times"
        }],
      performers: [        {
                "id": "9ebf0529-6933-46cf-8b1a-b9adafe8bdd7",
                "name": "Mary Bennett",
                "role": "Contemporary Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/15.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Jazz Dancer",
                        "Ballet Dancer",
                        "Choreographer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I haven't danced like this in years! The Cultural Dance Journey event was so much fun.",
          author: "Eleanor Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-406",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Angela Charlotte",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-66",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Harold Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-303",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Douglas Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-446",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Gerald Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-894",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Henry Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-620",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Ella Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-928",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Skylar Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-708",
        },
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Nicholas Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-182",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Albert Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-101",
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
    isPopular: true
  },
  {
    id: "f4a1f127-d6f8-4de6-92b1-9cbdb70bd179",
    category: "Dancing",
    name: "Cultural Dance Journey",
    description: "Dance styles spanning from the 1920s to today",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Cultural Dance Journey performance times"
    },
    contact: {
      contactNumber: "+1-213-410-2974",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "11e48fa5-f97b-4310-a9c0-52b6150bdf40",
      title: "Cultural Dance Journey",
      description: "Dance styles spanning from the 1920s to today",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "117 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Cultural Dance Journey performance times"
        }],
      performers: [        {
                "id": "4785417e-8699-44e4-8e30-f983354f6361",
                "name": "Alexa Jennings",
                "role": "Choreographer",
                "bio": "Professional jazz dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/63.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "I haven't danced like this in years! The Cultural Dance Journey event was so much fun.",
          author: "Larry Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-772",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Matthew Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-174",
        },
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Christian Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-371",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Scott Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-939",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Kyle Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-669",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Eleanor Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-6",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Terry Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-902",
        },
        {
          quote: "I haven't danced like this in years! The Cultural Dance Journey event was so much fun.",
          author: "Angela Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-584",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Antonio Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "2",
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
    isPopular: false
  },
  {
    id: "f4a1f127-d6f8-4de6-92b1-9cbdb70bd179",
    category: "Dancing",
    name: "Dance Competition",
    description: "Social swing dancing with live big band music",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Dance Competition performance times"
    },
    contact: {
      contactNumber: "+1-417-387-8896",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d5eff673-04e5-45ee-907d-150a7fb97e41",
      title: "Dance Competition",
      description: "Social swing dancing with live big band music",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "103 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Dance Competition performance times"
        }],
      performers: [        {
                "id": "de1bc99d-8afd-4945-abf4-567ea1644510",
                "name": "Mia Price",
                "role": "Ballroom Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/26.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Tap Dancer",
                        "Hip-Hop Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Willie Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-197",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Maria Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-356",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Vincent Hayes",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-939",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Elena Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-232",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Emily Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-42",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "David Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-290",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Rachel Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-359",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Deborah Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-474",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Nicole Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-375",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Victor Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-598",
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
    id: "f4a1f127-d6f8-4de6-92b1-9cbdb70bd179",
    category: "Dancing",
    name: "Latin Dance Night",
    description: "Contemporary hip-hop choreography with street dance elements",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Latin Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-507-237-5074",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cf840e91-4f56-4c2c-98f0-481ea1767a82",
      title: "Latin Dance Night",
      description: "Contemporary hip-hop choreography with street dance elements",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Latin Dance Night performance times"
        }],
      performers: [        {
                "id": "19fc2118-6b53-4cd7-83bc-830a6c685b69",
                "name": "Grace Holloway",
                "role": "Hip-Hop Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/27.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Brian Hunter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 5,
          date: "-668",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Darrell Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-496",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Roger Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-340",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Jessica Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-846",
        },
        {
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Lisa Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-199",
        },
        {
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Lily Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-95",
        },
        {
          quote: "I haven't danced like this in years! The Latin Dance Night event was so much fun.",
          author: "Jane Graham",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-1061",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Elizabeth Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-418",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Amina Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-238",
        },
        {
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Sarah Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-579",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "60e6d6a7-c6b3-4dba-aede-ec0850dc4049",
              "name": "Choreography Book",
              "description": "Step-by-step dance instructions",
              "price": 17,
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
    id: "f4a1f127-d6f8-4de6-92b1-9cbdb70bd179",
    category: "Dancing",
    name: "Broadway Dance Revue",
    description: "Traditional folk dances from various cultures",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Broadway Dance Revue performance times"
    },
    contact: {
      contactNumber: "+1-775-852-7208",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fc30b749-4383-4479-af35-3feb6a7f03f9",
      title: "Broadway Dance Revue",
      description: "Traditional folk dances from various cultures",
      tickets: {
        isRequired: false,
        price: 22,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "98 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Broadway Dance Revue performance times"
        }],
      performers: [        {
                "id": "568d2fd7-f072-42d2-a1ff-48960f05fcbc",
                "name": "Naomi Day",
                "role": "Ballet Dancer",
                "bio": "Professional contemporary dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/7.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Hip-Hop Dancer",
                        "Contemporary Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I learned so much during the Broadway Dance Revue workshop. The instructors were patient and skilled.",
          author: "Avery Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-19",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Joshua Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-186",
        },
        {
          quote: "I haven't danced like this in years! The Broadway Dance Revue event was so much fun.",
          author: "Adam Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-170",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Cynthia Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-730",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Aaliyah Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-295",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Isabella Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-446",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Brenda Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-398",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Pamela Hunter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-245",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Gabriel Warren",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-935",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Rajesh Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 5,
          date: "-395",
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
    id: "f4a1f127-d6f8-4de6-92b1-9cbdb70bd179",
    category: "Dancing",
    name: "Professional Dance Showcase",
    description: "Professional dancers performing spectacular choreographed routines",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Professional Dance Showcase performance times"
    },
    contact: {
      contactNumber: "+1-629-908-2102",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0f8221f7-ce61-4fb2-aef4-dbc19d0dcff5",
      title: "Professional Dance Showcase",
      description: "Professional dancers performing spectacular choreographed routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "79 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Professional Dance Showcase performance times"
        }],
      performers: [        {
                "id": "9a559351-8f01-4796-bf66-e4d83dae47c3",
                "name": "Victor Harper",
                "role": "Contemporary Dancer",
                "bio": "Professional tap dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/29.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Hip-Hop Dancer",
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
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Amelia Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-373",
        },
        {
          quote: "I learned so much during the Professional Dance Showcase workshop. The instructors were patient and skilled.",
          author: "Alan Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-738",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Carol Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-343",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Michelle Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 5,
          date: "-353",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Isabella Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-698",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Stephanie Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-242",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Ryan Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-281",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Oliver Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-515",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Gabriel Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-472",
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
    id: "f4a1f127-d6f8-4de6-92b1-9cbdb70bd179",
    category: "Dancing",
    name: "Ballroom Spectacular",
    description: "Traditional folk dances from various cultures",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Ballroom Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-248-591-7323",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "03e9e3b0-253f-48e0-acee-c35a646a6829",
      title: "Ballroom Spectacular",
      description: "Traditional folk dances from various cultures",
      tickets: {
        isRequired: false,
        price: 21,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "89 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Ballroom Spectacular performance times"
        }],
      performers: [        {
                "id": "f5425242-fcd5-4c1e-b228-f5fb84aa6566",
                "name": "Allison Russell",
                "role": "Ballroom Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/76.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
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
          author: "Skylar Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-745",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Elizabeth Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-76",
        },
        {
          quote: "I haven't danced like this in years! The Ballroom Spectacular event was so much fun.",
          author: "Patricia Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-525",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Adeline Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-141",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Susan Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-61",
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
    id: "f4a1f127-d6f8-4de6-92b1-9cbdb70bd179",
    category: "Dancing",
    name: "Latin Dance Night",
    description: "Modern contemporary dance expressing emotion through movement",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Latin Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-994-163-7480",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e5324cb9-e23f-4010-a53b-2008409b139c",
      title: "Latin Dance Night",
      description: "Modern contemporary dance expressing emotion through movement",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Latin Dance Night performance times"
        }],
      performers: [        {
                "id": "d84dc18b-58c5-4413-91cc-c232ce51193b",
                "name": "Robert Dean",
                "role": "Ballroom Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/22.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Hip-Hop Dancer",
                        "Ballet Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Avery Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-281",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Tyler Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-913",
        },
        {
          quote: "I haven't danced like this in years! The Latin Dance Night event was so much fun.",
          author: "Blake Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-1076",
        },
        {
          quote: "I haven't danced like this in years! The Latin Dance Night event was so much fun.",
          author: "Abigail Collins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-861",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Claire Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-247",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Gary Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-883",
        },
        {
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Arthur Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-518",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Steven Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-232",
        },
        {
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Brooklyn Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-562",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Willie Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-831",
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
  }
];
