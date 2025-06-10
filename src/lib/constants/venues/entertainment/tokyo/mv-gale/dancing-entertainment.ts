// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "0d71dfc4-8e8e-453e-82de-5ab0ce4640b1",
    category: "Dancing",
    name: "Dance Competition",
    description: "A celebration of dance traditions from around the world",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Dance Competition performance times"
    },
    contact: {
      contactNumber: "+1-334-187-9485",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c6b9fb20-055f-46e0-bdf3-f791c4b57815",
      title: "Dance Competition",
      description: "A celebration of dance traditions from around the world",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "86 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Dance Competition performance times"
        }],
      performers: [        {
                "id": "4e533c77-cb88-4cfd-9ad5-8b59ffe15424",
                "name": "Eugene Murray",
                "role": "Jazz Dancer",
                "bio": "Professional tap dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/43.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Jessica Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-839",
        },
        {
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Jerry Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-990",
        },
        {
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Caroline Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-947",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Gary Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-612",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Alexa Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-74",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Ashley Parker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-191",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Christopher Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-422",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Nicholas Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-973",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Nora Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-868",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Luis Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-107",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0325f03d-dd8a-422a-8080-0545c034f027",
              "name": "Choreography Book",
              "description": "Step-by-step dance instructions",
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
    id: "0d71dfc4-8e8e-453e-82de-5ab0ce4640b1",
    category: "Dancing",
    name: "Contemporary Movement",
    description: "Dance styles spanning from the 1920s to today",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Contemporary Movement performance times"
    },
    contact: {
      contactNumber: "+1-574-213-4375",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "df974854-f15c-4234-93b2-c1653310785f",
      title: "Contemporary Movement",
      description: "Dance styles spanning from the 1920s to today",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "64 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Contemporary Movement performance times"
        }],
      performers: [        {
                "id": "6b6c9a25-a579-473d-b0ad-6fc0ac825584",
                "name": "Ronald Hunter",
                "role": "Ballroom Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/58.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "I haven't danced like this in years! The Contemporary Movement event was so much fun.",
          author: "Jane Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-860",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Joel Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-877",
        },
        {
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Peter Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-390",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Aaron Graham",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-755",
        },
        {
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Keith Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-614",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Ryan Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-817",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Ryan Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-889",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Layla Reed",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-817",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "18131431-4e3b-4167-aa6a-cacca00a9fbb",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
              "price": 24,
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
    id: "0d71dfc4-8e8e-453e-82de-5ab0ce4640b1",
    category: "Dancing",
    name: "Hip-Hop Showcase",
    description: "Broadway-style dance numbers from famous musicals",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Hip-Hop Showcase performance times"
    },
    contact: {
      contactNumber: "+1-469-146-9722",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8e21b503-057c-4e30-b7dd-8e76d51ece8d",
      title: "Hip-Hop Showcase",
      description: "Broadway-style dance numbers from famous musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "99 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Hip-Hop Showcase performance times"
        }],
      performers: [        {
                "id": "da78883e-ffed-4b3a-8a90-255614496a1c",
                "name": "Roy Murray",
                "role": "Contemporary Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/74.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          author: "Isabella Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-497",
        },
        {
          quote: "I haven't danced like this in years! The Hip-Hop Showcase event was so much fun.",
          author: "Henry Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-247",
        },
        {
          quote: "I haven't danced like this in years! The Hip-Hop Showcase event was so much fun.",
          author: "Jessica Payne",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-528",
        },
        {
          quote: "I haven't danced like this in years! The Hip-Hop Showcase event was so much fun.",
          author: "Aaliyah Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-195",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Anthony Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-1023",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Isabella Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-901",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ead18bc3-d03b-493c-b492-0658b56de3de",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
              "price": 22,
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
    id: "0d71dfc4-8e8e-453e-82de-5ab0ce4640b1",
    category: "Dancing",
    name: "Broadway Dance Revue",
    description: "Professional dancers performing spectacular choreographed routines",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Broadway Dance Revue performance times"
    },
    contact: {
      contactNumber: "+1-460-665-2938",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "58711da6-4718-400b-89e5-42a9c21764d6",
      title: "Broadway Dance Revue",
      description: "Professional dancers performing spectacular choreographed routines",
      tickets: {
        isRequired: false,
        price: 45,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "67 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Broadway Dance Revue performance times"
        }],
      performers: [        {
                "id": "b98854e5-8a49-4097-9fef-0801fc20aeb4",
                "name": "Laura Hayes",
                "role": "Ballet Dancer",
                "bio": "Professional jazz dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/56.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          author: "Gabriella Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-508",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Jeffrey Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-922",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Albert Day",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-377",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Antonio Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-19",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Madelyn Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-1002",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Sofia Hunter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "4",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d9d94301-902d-4b4c-b041-a953064aa3d2",
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
    id: "0d71dfc4-8e8e-453e-82de-5ab0ce4640b1",
    category: "Dancing",
    name: "Broadway Dance Revue",
    description: "Passionate Latin dances including salsa, bachata, and merengue",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Broadway Dance Revue performance times"
    },
    contact: {
      contactNumber: "+1-762-678-3298",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9504503e-13c6-4596-b25c-517e5b18cc1a",
      title: "Broadway Dance Revue",
      description: "Passionate Latin dances including salsa, bachata, and merengue",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "87 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Broadway Dance Revue performance times"
        }],
      performers: [        {
                "id": "72f6568b-4d3b-41eb-a3db-62a44c104989",
                "name": "Avery Reeves",
                "role": "Choreographer",
                "bio": "Professional contemporary dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/6.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Choreographer",
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
          quote: "I haven't danced like this in years! The Broadway Dance Revue event was so much fun.",
          author: "Caroline Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-222",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Ryan Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-626",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Linda Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-18",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Jennifer Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-615",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Russell Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-68",
        },
        {
          quote: "I haven't danced like this in years! The Broadway Dance Revue event was so much fun.",
          author: "Joseph Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-410",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "cc9481fd-12d4-4f20-81ef-878cb268213c",
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
    id: "0d71dfc4-8e8e-453e-82de-5ab0ce4640b1",
    category: "Dancing",
    name: "Cultural Dance Journey",
    description: "Broadway-style dance numbers from famous musicals",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Cultural Dance Journey performance times"
    },
    contact: {
      contactNumber: "+1-328-926-4068",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "150b645c-7fa3-4764-bad4-0c9f28eac849",
      title: "Cultural Dance Journey",
      description: "Broadway-style dance numbers from famous musicals",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "105 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Cultural Dance Journey performance times"
        }],
      performers: [        {
                "id": "77c4ab21-a405-4704-8432-5ff591abffac",
                "name": "Kimberly Bennett",
                "role": "Contemporary Dancer",
                "bio": "Professional contemporary dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/6.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
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
          quote: "I haven't danced like this in years! The Cultural Dance Journey event was so much fun.",
          author: "Gabriella Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-247",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Albert Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-405",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Brandon Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-945",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Alice Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-653",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Matthew Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-669",
        },
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Lawrence Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-515",
        },
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Daniel Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-643",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Nomsa Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-420",
        },
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Robert Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-329",
        },
        {
          quote: "I haven't danced like this in years! The Cultural Dance Journey event was so much fun.",
          author: "Benjamin Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-634",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "e2864b96-94f1-4bf4-8c66-110f4363fc8e",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
              "price": 12,
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
    id: "0d71dfc4-8e8e-453e-82de-5ab0ce4640b1",
    category: "Dancing",
    name: "Broadway Dance Revue",
    description: "Social swing dancing with live big band music",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Broadway Dance Revue performance times"
    },
    contact: {
      contactNumber: "+1-812-675-8564",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "02143c5d-3dd9-4fb6-9964-099aaff2529f",
      title: "Broadway Dance Revue",
      description: "Social swing dancing with live big band music",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "118 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Broadway Dance Revue performance times"
        }],
      performers: [        {
                "id": "29840412-08f9-4da1-8782-e7f0df16581d",
                "name": "Claire Knight",
                "role": "Contemporary Dancer",
                "bio": "Professional jazz dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/60.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Hip-Hop Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I learned so much during the Broadway Dance Revue workshop. The instructors were patient and skilled.",
          author: "Maya Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-465",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Lerato Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-780",
        },
        {
          quote: "I haven't danced like this in years! The Broadway Dance Revue event was so much fun.",
          author: "Samantha Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-168",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "George Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-556",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Kenneth Keller",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-81",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Jennifer Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-292",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Jerry Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-344",
        },
        {
          quote: "I learned so much during the Broadway Dance Revue workshop. The instructors were patient and skilled.",
          author: "Ellie Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-513",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Kimberly Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-354",
        },
        {
          quote: "I learned so much during the Broadway Dance Revue workshop. The instructors were patient and skilled.",
          author: "Blake Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-790",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "062b24a7-c745-401b-b8e1-1da2078ea05b",
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
    isPopular: false
  }
];
