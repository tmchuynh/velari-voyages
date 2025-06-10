// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "ad935bfc-3f44-49ff-b410-cd638c6b31a9",
    category: "Dancing",
    name: "Dance Competition",
    description: "Guest participation dance competition with exciting prizes",
    imageUrl: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Dance Competition performance times"
    },
    contact: {
      contactNumber: "+1-359-590-9720",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "27bcbfa0-b7c9-4d43-8380-3450f59a6743",
      title: "Dance Competition",
      description: "Guest participation dance competition with exciting prizes",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "90 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Dance Competition performance times"
        }],
      performers: [        {
                "id": "998300f5-1b34-4333-8ff7-d2d5be93dc38",
                "name": "Billy Parker",
                "role": "Contemporary Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/46.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Tap Dancer",
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
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Justin Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-270",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Linda Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-434",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Mason Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-471",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Sarah Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-712",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Roger Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-471",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Hannah Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-87",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Melissa Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-676",
        },
        {
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Naomi Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-121",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Sandra Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-658",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Elizabeth Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-1005",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "46c91738-ed4e-4bbf-9ea1-813e3264e5ef",
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
    isPopular: true
  },
  {
    id: "ad935bfc-3f44-49ff-b410-cd638c6b31a9",
    category: "Dancing",
    name: "Latin Dance Night",
    description: "Dance styles spanning from the 1920s to today",
    imageUrl: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Latin Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-764-293-7488",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2a49d199-c244-413e-a6f3-51f7d6a878af",
      title: "Latin Dance Night",
      description: "Dance styles spanning from the 1920s to today",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "65 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Latin Dance Night performance times"
        }],
      performers: [        {
                "id": "8ca91ec4-41a5-4ed9-99cf-90bbee9fb1aa",
                "name": "Caroline Reed",
                "role": "Ballet Dancer",
                "bio": "Professional hip-hop dancer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/26.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Peter Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-510",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Aria Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-452",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Cynthia Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-305",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Alice Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 4,
          date: "-22",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Mateo Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-635",
        },
        {
          quote: "I haven't danced like this in years! The Latin Dance Night event was so much fun.",
          author: "Billy Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-706",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Stephen Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-138",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Justin Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "8",
        },
        {
          quote: "I haven't danced like this in years! The Latin Dance Night event was so much fun.",
          author: "Miguel Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-1006",
        },
        {
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Emma Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-948",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "dad041be-1d2e-4bcf-80d1-21417bb56e67",
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
    id: "ad935bfc-3f44-49ff-b410-cd638c6b31a9",
    category: "Dancing",
    name: "Partner Dance Workshop",
    description: "Passionate Latin dances including salsa, bachata, and merengue",
    imageUrl: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Partner Dance Workshop performance times"
    },
    contact: {
      contactNumber: "+1-717-144-6776",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2be25350-9607-43c4-a18e-a2e28a6492e7",
      title: "Partner Dance Workshop",
      description: "Passionate Latin dances including salsa, bachata, and merengue",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "86 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Partner Dance Workshop performance times"
        }],
      performers: [        {
                "id": "1b6a97a3-499e-4f13-b450-4aaa06b89250",
                "name": "Gabriella Clark",
                "role": "Ballet Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/24.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Cynthia Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-127",
        },
        {
          quote: "I haven't danced like this in years! The Partner Dance Workshop event was so much fun.",
          author: "Lily Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-306",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Larry Graves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-44",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Roy Nash",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-708",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Betty Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-450",
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
    id: "ad935bfc-3f44-49ff-b410-cd638c6b31a9",
    category: "Dancing",
    name: "Professional Dance Showcase",
    description: "Social swing dancing with live big band music",
    imageUrl: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Professional Dance Showcase performance times"
    },
    contact: {
      contactNumber: "+1-943-261-3950",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cdb82f46-b1dc-498a-83c4-642300b40ada",
      title: "Professional Dance Showcase",
      description: "Social swing dancing with live big band music",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "73 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Professional Dance Showcase performance times"
        }],
      performers: [        {
                "id": "f10e6634-dc7a-437f-9a4f-69361cdd4993",
                "name": "Henry Graham",
                "role": "Contemporary Dancer",
                "bio": "Professional contemporary dancer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/80.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          author: "Jose Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-1046",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Christian Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-730",
        },
        {
          quote: "I haven't danced like this in years! The Professional Dance Showcase event was so much fun.",
          author: "Kimberly Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-405",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Claire Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-433",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Kennedy Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-155",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Mason Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-49",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Sofia West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 5,
          date: "-804",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Billy Keller",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-906",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Brian Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-948",
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
    isPopular: false
  },
  {
    id: "ad935bfc-3f44-49ff-b410-cd638c6b31a9",
    category: "Dancing",
    name: "Hip-Hop Showcase",
    description: "Guest participation dance competition with exciting prizes",
    imageUrl: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Hip-Hop Showcase performance times"
    },
    contact: {
      contactNumber: "+1-526-681-7168",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "01c3c2fb-a064-40b7-8425-1efb720bb33d",
      title: "Hip-Hop Showcase",
      description: "Guest participation dance competition with exciting prizes",
      tickets: {
        isRequired: false,
        price: 37,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "89 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Hip-Hop Showcase performance times"
        }],
      performers: [        {
                "id": "88af353a-1e62-4332-8d85-f1295960062e",
                "name": "Dorothy Clark",
                "role": "Choreographer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/76.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
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
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Scott Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-936",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Jane Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-576",
        },
        {
          quote: "I haven't danced like this in years! The Hip-Hop Showcase event was so much fun.",
          author: "Timothy Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-892",
        },
        {
          quote: "I learned so much during the Hip-Hop Showcase workshop. The instructors were patient and skilled.",
          author: "Lisa Knight",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-350",
        },
        {
          quote: "I learned so much during the Hip-Hop Showcase workshop. The instructors were patient and skilled.",
          author: "Brooklyn Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-876",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Jonathan Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-156",
        },
        {
          quote: "I haven't danced like this in years! The Hip-Hop Showcase event was so much fun.",
          author: "Carlos Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-150",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "William Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-411",
        },
        {
          quote: "I learned so much during the Hip-Hop Showcase workshop. The instructors were patient and skilled.",
          author: "Bruce Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-294",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Nicole Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-428",
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
    id: "ad935bfc-3f44-49ff-b410-cd638c6b31a9",
    category: "Dancing",
    name: "Latin Dance Night",
    description: "Guest participation dance competition with exciting prizes",
    imageUrl: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Latin Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-240-958-4475",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "89f10a7b-4811-4f5e-9715-5256c4c16d4d",
      title: "Latin Dance Night",
      description: "Guest participation dance competition with exciting prizes",
      tickets: {
        isRequired: false,
        price: 39,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "75 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Latin Dance Night performance times"
        }],
      performers: [        {
                "id": "99213629-943b-40b1-bc4b-2f1539597629",
                "name": "Antonio Ellis",
                "role": "Tap Dancer",
                "bio": "Professional tap dancer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/61.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
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
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Sandra Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-468",
        },
        {
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Austin Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-108",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Samantha Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-835",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Susan Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-98",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Carol Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-702",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Betty Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "-485",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Bella Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-61",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Dorothy Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-399",
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
    id: "ad935bfc-3f44-49ff-b410-cd638c6b31a9",
    category: "Dancing",
    name: "Dance Through the Decades",
    description: "Broadway-style dance numbers from famous musicals",
    imageUrl: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Dance Through the Decades performance times"
    },
    contact: {
      contactNumber: "+1-528-367-6743",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7b364248-cb01-4021-8298-0b005a3294c5",
      title: "Dance Through the Decades",
      description: "Broadway-style dance numbers from famous musicals",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "111 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Dance Through the Decades performance times"
        }],
      performers: [        {
                "id": "1caf4172-da60-44c7-91e5-95dbccfa6930",
                "name": "Joshua Dean",
                "role": "Hip-Hop Dancer",
                "bio": "Professional jazz dancer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/5.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Julie Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 5,
          date: "-630",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Nomsa Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-9",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Helen Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-386",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Maya Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-373",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Aaron Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-357",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Michelle Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-336",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4abf4417-89be-461f-b121-0877ba9f909e",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
              "price": 14,
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
    id: "ad935bfc-3f44-49ff-b410-cd638c6b31a9",
    category: "Dancing",
    name: "Latin Dance Night",
    description: "Traditional folk dances from various cultures",
    imageUrl: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Latin Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-713-329-8083",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cd96f219-f5de-4af5-900a-d3499a03fcd2",
      title: "Latin Dance Night",
      description: "Traditional folk dances from various cultures",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "95 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Latin Dance Night performance times"
        }],
      performers: [        {
                "id": "fe7520c5-3c88-4a01-b411-a9f98757d026",
                "name": "Chen Coleman",
                "role": "Hip-Hop Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/33.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Noah Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-822",
        },
        {
          quote: "I haven't danced like this in years! The Latin Dance Night event was so much fun.",
          author: "Diego Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-224",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Henry Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-559",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Lawrence Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-400",
        },
        {
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Liam Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-638",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Kimberly Reed",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-619",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Walter Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-124",
        },
        {
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Kimberly Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-451",
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
        question: "Are dance lessons included in the cruise fare?",
        answer: "Most group dance lessons and social dancing events are complimentary. Private lessons may have an additional charge.",
      },
      {
        question: "Should I bring special dance shoes?",
        answer: "Comfortable shoes are recommended, but not required. Dance shoes are available for purchase in our onboard shops.",
      }
    ],
    isPopular: false
  }
];
