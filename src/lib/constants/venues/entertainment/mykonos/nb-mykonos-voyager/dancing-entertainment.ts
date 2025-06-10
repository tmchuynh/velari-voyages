// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "8b81d9c5-30a9-4219-8fd7-f1b6113df4e5",
    category: "Dancing",
    name: "Hip-Hop Showcase",
    description: "Passionate Latin dances including salsa, bachata, and merengue",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Hip-Hop Showcase performance times"
    },
    contact: {
      contactNumber: "+1-797-751-5307",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "59623498-7567-4d99-a4c8-c407e3b17940",
      title: "Hip-Hop Showcase",
      description: "Passionate Latin dances including salsa, bachata, and merengue",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "96 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Hip-Hop Showcase performance times"
        }],
      performers: [        {
                "id": "96b94729-1502-4a65-8432-94ba12f36097",
                "name": "Dylan Fox",
                "role": "Ballet Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/15.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Choreographer",
                        "Tap Dancer",
                        "Contemporary Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I learned so much during the Hip-Hop Showcase workshop. The instructors were patient and skilled.",
          author: "Nancy Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-106",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Jose Knight",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-768",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Nomsa Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-75",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Barbara Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-612",
        },
        {
          quote: "I haven't danced like this in years! The Hip-Hop Showcase event was so much fun.",
          author: "Wayne Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-821",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Rachel Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-455",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Savannah Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-867",
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
    isPopular: true
  },
  {
    id: "8b81d9c5-30a9-4219-8fd7-f1b6113df4e5",
    category: "Dancing",
    name: "Contemporary Movement",
    description: "Social swing dancing with live big band music",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Contemporary Movement performance times"
    },
    contact: {
      contactNumber: "+1-286-731-3779",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4d32557e-65f0-45e9-8b3a-26620558348b",
      title: "Contemporary Movement",
      description: "Social swing dancing with live big band music",
      tickets: {
        isRequired: false,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "69 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Contemporary Movement performance times"
        }],
      performers: [        {
                "id": "e2d72c6d-9b3d-43e7-ac2b-d35d4f66a603",
                "name": "Walter Bennett",
                "role": "Ballroom Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Hip-Hop Dancer",
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
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Stephen Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-922",
        },
        {
          quote: "I haven't danced like this in years! The Contemporary Movement event was so much fun.",
          author: "Evelyn Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-979",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Lerato Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-820",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Barbara Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-156",
        },
        {
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Julie Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-243",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Randy Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-165",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Philip Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "2",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Amelia Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-993",
        },
        {
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Andrew Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-954",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "15cadeed-808d-4949-a964-7b6f0ea65de5",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
              "price": 17,
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
    id: "8b81d9c5-30a9-4219-8fd7-f1b6113df4e5",
    category: "Dancing",
    name: "Hip-Hop Showcase",
    description: "Dance styles spanning from the 1920s to today",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Hip-Hop Showcase performance times"
    },
    contact: {
      contactNumber: "+1-660-659-5702",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f583dd15-71bf-45ea-934c-fd3853041af7",
      title: "Hip-Hop Showcase",
      description: "Dance styles spanning from the 1920s to today",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "107 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Hip-Hop Showcase performance times"
        }],
      performers: [        {
                "id": "cca799de-8294-4188-b966-638aef3f1712",
                "name": "Diego Charlotte",
                "role": "Ballet Dancer",
                "bio": "Professional tap dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "I haven't danced like this in years! The Hip-Hop Showcase event was so much fun.",
          author: "George Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-33",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Javier Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-542",
        },
        {
          quote: "I haven't danced like this in years! The Hip-Hop Showcase event was so much fun.",
          author: "Amelia Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-507",
        },
        {
          quote: "I haven't danced like this in years! The Hip-Hop Showcase event was so much fun.",
          author: "Albert Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-767",
        },
        {
          quote: "I learned so much during the Hip-Hop Showcase workshop. The instructors were patient and skilled.",
          author: "Rachel Parker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-855",
        },
        {
          quote: "I learned so much during the Hip-Hop Showcase workshop. The instructors were patient and skilled.",
          author: "Mary Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-820",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3d7fd0a5-742b-4b5c-ba0f-ee34a55348b3",
              "name": "Dance Shoes",
              "description": "Professional ballroom dance shoes",
              "price": 44,
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
    id: "8b81d9c5-30a9-4219-8fd7-f1b6113df4e5",
    category: "Dancing",
    name: "Hip-Hop Showcase",
    description: "Social swing dancing with live big band music",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Hip-Hop Showcase performance times"
    },
    contact: {
      contactNumber: "+1-616-698-2810",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "eaa75276-120b-4bb4-9b3a-28468d23c87e",
      title: "Hip-Hop Showcase",
      description: "Social swing dancing with live big band music",
      tickets: {
        isRequired: false,
        price: 34,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "117 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Hip-Hop Showcase performance times"
        }],
      performers: [        {
                "id": "75b4f521-db89-4bfb-9166-30f1b53891b4",
                "name": "Brian Carpenter",
                "role": "Contemporary Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/84.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Tap Dancer",
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
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Gerald Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-179",
        },
        {
          quote: "I haven't danced like this in years! The Hip-Hop Showcase event was so much fun.",
          author: "Ralph Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-611",
        },
        {
          quote: "I learned so much during the Hip-Hop Showcase workshop. The instructors were patient and skilled.",
          author: "Matthew Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-1033",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Mia Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-946",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Joshua Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-263",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Bruce Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-64",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Nicholas Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-853",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Gregory Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-769",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "8b173524-507d-40e7-9724-cbace7cda76b",
              "name": "Dance Shoes",
              "description": "Professional ballroom dance shoes",
              "price": 41,
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
    id: "8b81d9c5-30a9-4219-8fd7-f1b6113df4e5",
    category: "Dancing",
    name: "Contemporary Movement",
    description: "Professional dancers performing spectacular choreographed routines",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Contemporary Movement performance times"
    },
    contact: {
      contactNumber: "+1-305-310-9771",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "18885606-e2d3-412a-9a48-1ae3f7f8f275",
      title: "Contemporary Movement",
      description: "Professional dancers performing spectacular choreographed routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "62 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Contemporary Movement performance times"
        }],
      performers: [        {
                "id": "71240ccf-20db-4123-8722-68e474500b0e",
                "name": "Ryan Hayes",
                "role": "Tap Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/53.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Ralph Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-297",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Richard Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-369",
        },
        {
          quote: "I haven't danced like this in years! The Contemporary Movement event was so much fun.",
          author: "Michael Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-780",
        },
        {
          quote: "I haven't danced like this in years! The Contemporary Movement event was so much fun.",
          author: "Nathan Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-915",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Maya West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-548",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Aiden Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-904",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Eleanor Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-729",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "aba605fd-3800-435a-8b90-84e2ea2dd577",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
              "price": 10,
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
    id: "8b81d9c5-30a9-4219-8fd7-f1b6113df4e5",
    category: "Dancing",
    name: "Professional Dance Showcase",
    description: "Broadway-style dance numbers from famous musicals",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Professional Dance Showcase performance times"
    },
    contact: {
      contactNumber: "+1-708-644-2442",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7fa93dce-94d3-49dc-b0ba-d8b719b366bf",
      title: "Professional Dance Showcase",
      description: "Broadway-style dance numbers from famous musicals",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "90 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Professional Dance Showcase performance times"
        }],
      performers: [        {
                "id": "d0901379-7756-4f82-a38b-22785fe6d4ed",
                "name": "Mark Carpenter",
                "role": "Choreographer",
                "bio": "Professional jazz dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/46.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "I learned so much during the Professional Dance Showcase workshop. The instructors were patient and skilled.",
          author: "Carlos Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-327",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Nancy Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 5,
          date: "-764",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Richard Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-992",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Carol Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-431",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Jerry Knight",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-493",
        },
        {
          quote: "I learned so much during the Professional Dance Showcase workshop. The instructors were patient and skilled.",
          author: "Bryan Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-667",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Elizabeth Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-1019",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Isabella Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-86",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Angela Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-351",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Sandra Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-166",
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
    id: "8b81d9c5-30a9-4219-8fd7-f1b6113df4e5",
    category: "Dancing",
    name: "Dance Competition",
    description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Dance Competition performance times"
    },
    contact: {
      contactNumber: "+1-605-788-9631",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bf4e5e5c-10f9-42aa-a07b-80dfb9ac91ca",
      title: "Dance Competition",
      description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
      tickets: {
        isRequired: true,
        price: 26,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "86 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Dance Competition performance times"
        }],
      performers: [        {
                "id": "26957907-667e-4500-8c3f-d0f2d9c4d2db",
                "name": "Elena Hawkins",
                "role": "Ballet Dancer",
                "bio": "Professional jazz dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/83.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Billy Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-455",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Brenda Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-778",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Alexander Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-429",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Douglas Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-594",
        },
        {
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Savannah Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-157",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d368acc9-8110-47d7-b55b-ceee7206dec1",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
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
    id: "8b81d9c5-30a9-4219-8fd7-f1b6113df4e5",
    category: "Dancing",
    name: "Swing Dance Social",
    description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Swing Dance Social performance times"
    },
    contact: {
      contactNumber: "+1-658-424-5438",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2a37a168-2256-45d9-999f-ecbd0732033a",
      title: "Swing Dance Social",
      description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "86 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Swing Dance Social performance times"
        }],
      performers: [        {
                "id": "8d9a338f-6413-429b-92ee-6e5cde53226a",
                "name": "Catherine Reeves",
                "role": "Latin Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/0.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Barbara Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-659",
        },
        {
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Jonathan Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-648",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "William Payne",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-1073",
        },
        {
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Lawrence Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-481",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Gabriel Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-275",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Ethan Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-194",
        },
        {
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Stella Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-881",
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
  }
];
