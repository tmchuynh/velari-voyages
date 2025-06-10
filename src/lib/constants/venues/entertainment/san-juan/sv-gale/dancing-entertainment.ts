// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "c96e6c6d-c27e-4438-b618-822780d04a74",
    category: "Dancing",
    name: "Broadway Dance Revue",
    description: "Modern contemporary dance expressing emotion through movement",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Broadway Dance Revue performance times"
    },
    contact: {
      contactNumber: "+1-735-327-5443",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5970fe76-1ae5-41a1-b453-7c3e66a6c932",
      title: "Broadway Dance Revue",
      description: "Modern contemporary dance expressing emotion through movement",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "75 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Broadway Dance Revue performance times"
        }],
      performers: [        {
                "id": "40af1223-5910-4eec-884e-bf87796f898d",
                "name": "Ryan Hawkins",
                "role": "Choreographer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/75.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Choreographer",
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
          author: "Jessica Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-237",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Sebastian Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-49",
        },
        {
          quote: "I haven't danced like this in years! The Broadway Dance Revue event was so much fun.",
          author: "Nancy Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-531",
        },
        {
          quote: "I learned so much during the Broadway Dance Revue workshop. The instructors were patient and skilled.",
          author: "Kenneth Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-882",
        },
        {
          quote: "I learned so much during the Broadway Dance Revue workshop. The instructors were patient and skilled.",
          author: "Sandra Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "-677",
        },
        {
          quote: "I haven't danced like this in years! The Broadway Dance Revue event was so much fun.",
          author: "James Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-806",
        },
        {
          quote: "I haven't danced like this in years! The Broadway Dance Revue event was so much fun.",
          author: "Brian Payne",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-645",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "476fa2be-308a-4658-a588-f301cca208c7",
              "name": "Dance Shoes",
              "description": "Professional ballroom dance shoes",
              "price": 48,
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
    id: "c96e6c6d-c27e-4438-b618-822780d04a74",
    category: "Dancing",
    name: "Swing Dance Social",
    description: "Broadway-style dance numbers from famous musicals",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Swing Dance Social performance times"
    },
    contact: {
      contactNumber: "+1-664-251-4337",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "da7014ef-1bed-47a4-b83f-aad86a8918e0",
      title: "Swing Dance Social",
      description: "Broadway-style dance numbers from famous musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Swing Dance Social performance times"
        }],
      performers: [        {
                "id": "77b0161a-d22e-4543-99ba-dd54fc2e42d7",
                "name": "Joe Henderson",
                "role": "Tap Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/31.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
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
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Ariana Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-513",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Eleanor Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-1000",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Emma Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-265",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Sebastian Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-873",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Cynthia Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-1066",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b4b7f41c-fd2c-49d9-a226-d9c912df3cbe",
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
    id: "c96e6c6d-c27e-4438-b618-822780d04a74",
    category: "Dancing",
    name: "Dance Competition",
    description: "Professional dancers performing spectacular choreographed routines",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Dance Competition performance times"
    },
    contact: {
      contactNumber: "+1-934-874-2100",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "39433489-26af-487e-b4ee-1ebff21f2271",
      title: "Dance Competition",
      description: "Professional dancers performing spectacular choreographed routines",
      tickets: {
        isRequired: false,
        price: 17,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "99 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Dance Competition performance times"
        }],
      performers: [        {
                "id": "6c6aee00-e93e-4b43-80cc-6b6b09291e90",
                "name": "Leah Day",
                "role": "Hip-Hop Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/20.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Tap Dancer",
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
          author: "Samuel Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-917",
        },
        {
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Elena Day",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-619",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Melissa Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-786",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Gary Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-416",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Brooklyn Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-279",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Scott Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-251",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
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
    id: "c96e6c6d-c27e-4438-b618-822780d04a74",
    category: "Dancing",
    name: "Ballroom Spectacular",
    description: "Traditional folk dances from various cultures",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Ballroom Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-831-752-1136",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ed53e16d-44e5-432b-ada7-0b8840301b85",
      title: "Ballroom Spectacular",
      description: "Traditional folk dances from various cultures",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "79 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Ballroom Spectacular performance times"
        }],
      performers: [        {
                "id": "8a8862eb-191d-4a11-9adf-51d1afb97376",
                "name": "Grace Marshall",
                "role": "Choreographer",
                "bio": "Professional contemporary dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/19.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Jazz Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Gabriel Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-468",
        },
        {
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "George Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-413",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Paul Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-370",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Antonio Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-798",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Alice Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-630",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Javier Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-736",
        },
        {
          quote: "I haven't danced like this in years! The Ballroom Spectacular event was so much fun.",
          author: "Cynthia Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-546",
        },
        {
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Victoria Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-41",
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
    id: "c96e6c6d-c27e-4438-b618-822780d04a74",
    category: "Dancing",
    name: "Swing Dance Social",
    description: "Dance styles spanning from the 1920s to today",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Swing Dance Social performance times"
    },
    contact: {
      contactNumber: "+1-874-818-2549",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a09d1821-0f5d-4254-a2a4-4ad586a62be5",
      title: "Swing Dance Social",
      description: "Dance styles spanning from the 1920s to today",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "79 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Swing Dance Social performance times"
        }],
      performers: [        {
                "id": "7d286a04-85c3-446a-8d35-d6182887e99e",
                "name": "Ralph Sutton",
                "role": "Hip-Hop Dancer",
                "bio": "Professional contemporary dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/14.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          author: "Jeremy Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-589",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Amy Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-851",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Ashley Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-1053",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Alexander Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-713",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Aria Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-365",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Chloe Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-160",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Samuel Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-563",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Leah Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-800",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Jeremy Keller",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-774",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Christian Dunn",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-244",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "74ef134b-1b7f-4c6a-b08e-75c57a5607b3",
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
    id: "c96e6c6d-c27e-4438-b618-822780d04a74",
    category: "Dancing",
    name: "Contemporary Movement",
    description: "Social swing dancing with live big band music",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Contemporary Movement performance times"
    },
    contact: {
      contactNumber: "+1-508-891-3229",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "31053f4a-ec2d-4cbe-ac29-b493b6de7f4b",
      title: "Contemporary Movement",
      description: "Social swing dancing with live big band music",
      tickets: {
        isRequired: false,
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
                "id": "29ecfc92-6771-4b13-8e82-999432d86fd2",
                "name": "Joan Dean",
                "role": "Hip-Hop Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/51.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Jazz Dancer",
                        "Ballroom Dancer",
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
          author: "Hannah Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-777",
        },
        {
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Chloe Keller",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-845",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Stephanie Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-787",
        },
        {
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Harry Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-943",
        },
        {
          quote: "I haven't danced like this in years! The Contemporary Movement event was so much fun.",
          author: "James Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-745",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Thomas Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-627",
        },
        {
          quote: "I haven't danced like this in years! The Contemporary Movement event was so much fun.",
          author: "Caroline Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-233",
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
    id: "c96e6c6d-c27e-4438-b618-822780d04a74",
    category: "Dancing",
    name: "Cultural Dance Journey",
    description: "Learn partner dances with professional instruction",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Cultural Dance Journey performance times"
    },
    contact: {
      contactNumber: "+1-659-350-4690",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e820076e-ee53-4d64-955d-06744dfecfe3",
      title: "Cultural Dance Journey",
      description: "Learn partner dances with professional instruction",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "110 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Cultural Dance Journey performance times"
        }],
      performers: [        {
                "id": "3f80a82a-2d92-4817-b883-ec693d01f3e9",
                "name": "Maya Collins",
                "role": "Tap Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/21.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Adam Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-20",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Kimberly Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-1039",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Savannah Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-864",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Rebecca Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-364",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Allison Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-377",
        },
        {
          quote: "I haven't danced like this in years! The Cultural Dance Journey event was so much fun.",
          author: "Dorothy Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-1037",
        },
        {
          quote: "I haven't danced like this in years! The Cultural Dance Journey event was so much fun.",
          author: "Dorothy Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-519",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Jesse Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-503",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c1102419-1aaa-4a67-9b82-95ee4e0eec62",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
              "price": 13,
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
  }
];
