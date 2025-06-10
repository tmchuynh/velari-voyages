// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "fc1f0312-b8cf-46a8-a54c-5b7b6ec0b968",
    category: "Dancing",
    name: "Contemporary Movement",
    description: "Learn partner dances with professional instruction",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Contemporary Movement performance times"
    },
    contact: {
      contactNumber: "+1-865-419-9860",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ec9a1e24-d12d-42fb-a7ba-77f45b644c5b",
      title: "Contemporary Movement",
      description: "Learn partner dances with professional instruction",
      tickets: {
        isRequired: true,
        price: 22,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "117 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Contemporary Movement performance times"
        }],
      performers: [        {
                "id": "bf92c6a5-5a8d-4bb8-9e88-25c9af7142d4",
                "name": "Mia Holloway",
                "role": "Contemporary Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/4.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          author: "Rajesh Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-858",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Angela Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "4",
        },
        {
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Joshua Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-1001",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Jeffrey Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-563",
        },
        {
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Joshua Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-191",
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
    isPopular: true
  },
  {
    id: "fc1f0312-b8cf-46a8-a54c-5b7b6ec0b968",
    category: "Dancing",
    name: "Swing Dance Social",
    description: "Learn partner dances with professional instruction",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Swing Dance Social performance times"
    },
    contact: {
      contactNumber: "+1-769-122-4809",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b22611dd-5dbe-4d4b-9263-af6c6520565c",
      title: "Swing Dance Social",
      description: "Learn partner dances with professional instruction",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "72 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Swing Dance Social performance times"
        }],
      performers: [        {
                "id": "60dc4e8d-5542-4ae0-97ce-87f39c3c75e1",
                "name": "Cynthia Parker",
                "role": "Contemporary Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/46.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          author: "Barbara Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-549",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Carlos Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-884",
        },
        {
          quote: "I learned so much during the Swing Dance Social workshop. The instructors were patient and skilled.",
          author: "Mary Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-1058",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Alexa Nash",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-921",
        },
        {
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Kyle Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-296",
        },
        {
          quote: "I learned so much during the Swing Dance Social workshop. The instructors were patient and skilled.",
          author: "Victor Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-298",
        },
        {
          quote: "I learned so much during the Swing Dance Social workshop. The instructors were patient and skilled.",
          author: "Adeline Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-521",
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
    id: "fc1f0312-b8cf-46a8-a54c-5b7b6ec0b968",
    category: "Dancing",
    name: "Swing Dance Social",
    description: "Learn partner dances with professional instruction",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Swing Dance Social performance times"
    },
    contact: {
      contactNumber: "+1-808-175-9363",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a78ba081-c23f-4ced-b8d6-068ecc53b181",
      title: "Swing Dance Social",
      description: "Learn partner dances with professional instruction",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "111 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Swing Dance Social performance times"
        }],
      performers: [        {
                "id": "8be33888-5172-4c44-97e0-5cf209576032",
                "name": "Thomas Hayes",
                "role": "Latin Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/57.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Aria Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-474",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Dylan Graham",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-964",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Sarah Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-329",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Ralph Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-372",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Eric Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-569",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Zola Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-1029",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Ariana Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-399",
        },
        {
          quote: "I learned so much during the Swing Dance Social workshop. The instructors were patient and skilled.",
          author: "Wei Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-405",
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
    id: "fc1f0312-b8cf-46a8-a54c-5b7b6ec0b968",
    category: "Dancing",
    name: "Dance Through the Decades",
    description: "Social swing dancing with live big band music",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Dance Through the Decades performance times"
    },
    contact: {
      contactNumber: "+1-761-646-3570",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "dc8d1c63-0856-4383-89a5-74ec29f76d7a",
      title: "Dance Through the Decades",
      description: "Social swing dancing with live big band music",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "120 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Dance Through the Decades performance times"
        }],
      performers: [        {
                "id": "266de4a0-fb8f-4ec4-8108-1b081e5f6922",
                "name": "Jeremy Dunn",
                "role": "Ballroom Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/47.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Jazz Dancer",
                        "Hip-Hop Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I learned so much during the Dance Through the Decades workshop. The instructors were patient and skilled.",
          author: "Sarah Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-506",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Eric Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-293",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Peter West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-384",
        },
        {
          quote: "I haven't danced like this in years! The Dance Through the Decades event was so much fun.",
          author: "Aaron Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-45",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Kimberly Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-192",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Katherine Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-794",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3cbaf9e3-b2b9-4432-823f-6c30fb7f940a",
              "name": "Dance Shoes",
              "description": "Professional ballroom dance shoes",
              "price": 46,
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
    id: "fc1f0312-b8cf-46a8-a54c-5b7b6ec0b968",
    category: "Dancing",
    name: "Swing Dance Social",
    description: "Social swing dancing with live big band music",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Swing Dance Social performance times"
    },
    contact: {
      contactNumber: "+1-579-892-6885",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a8b7d71b-24f7-4485-bab6-a3c3e9ace1d1",
      title: "Swing Dance Social",
      description: "Social swing dancing with live big band music",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Swing Dance Social performance times"
        }],
      performers: [        {
                "id": "c822a5e0-485d-4084-8074-9e693d988a9b",
                "name": "George Foster",
                "role": "Hip-Hop Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Hip-Hop Dancer",
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
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Stephanie Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-258",
        },
        {
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Benjamin Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-861",
        },
        {
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Henry Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-312",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Rebecca Fletcher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-180",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Roger Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-336",
        },
        {
          quote: "I learned so much during the Swing Dance Social workshop. The instructors were patient and skilled.",
          author: "Justin Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-740",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Rebecca Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-848",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Harper Graves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-257",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Linda Chambers",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-715",
        },
        {
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Michael Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-349",
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
    id: "fc1f0312-b8cf-46a8-a54c-5b7b6ec0b968",
    category: "Dancing",
    name: "Dance Competition",
    description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Dance Competition performance times"
    },
    contact: {
      contactNumber: "+1-203-151-6536",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5e173393-26a9-41c4-9ced-7260ba8d9294",
      title: "Dance Competition",
      description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "101 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Dance Competition performance times"
        }],
      performers: [        {
                "id": "f60ab92b-1363-4d7b-8b03-df5cdcc48540",
                "name": "Catherine Douglas",
                "role": "Ballet Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/38.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
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
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Katherine Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-952",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Betty Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-140",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Ariana Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-918",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Evelyn Dixon",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-724",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Gabriel Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-721",
        },
        {
          quote: "I learned so much during the Dance Competition workshop. The instructors were patient and skilled.",
          author: "Maya Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-710",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Virginia Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-592",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Victoria Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-793",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Carlos Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-319",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Maria Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-3",
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
    id: "fc1f0312-b8cf-46a8-a54c-5b7b6ec0b968",
    category: "Dancing",
    name: "Ballroom Spectacular",
    description: "Broadway-style dance numbers from famous musicals",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Ballroom Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-576-798-5941",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "360815f5-bf19-4c1f-b896-cdd8270261db",
      title: "Ballroom Spectacular",
      description: "Broadway-style dance numbers from famous musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "95 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Ballroom Spectacular performance times"
        }],
      performers: [        {
                "id": "6c087298-ca00-4da9-a406-2706d2f87dea",
                "name": "Zachary Morgan",
                "role": "Ballet Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/16.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "I haven't danced like this in years! The Ballroom Spectacular event was so much fun.",
          author: "Louis West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-812",
        },
        {
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Christopher Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-67",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Jacob Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-567",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Juan Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-939",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Edward Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-970",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Jessica Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-325",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a9297bb5-e293-462c-8dbc-a952c5d41a8f",
              "name": "Dance Shoes",
              "description": "Professional ballroom dance shoes",
              "price": 50,
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
    id: "fc1f0312-b8cf-46a8-a54c-5b7b6ec0b968",
    category: "Dancing",
    name: "Swing Dance Social",
    description: "Traditional folk dances from various cultures",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Swing Dance Social performance times"
    },
    contact: {
      contactNumber: "+1-453-624-3439",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f858b57d-7c2d-4d5b-bfae-35016fb5149d",
      title: "Swing Dance Social",
      description: "Traditional folk dances from various cultures",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "105 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Swing Dance Social performance times"
        }],
      performers: [        {
                "id": "e71d4ee6-6e12-4b2a-bb0f-d5e606c73e48",
                "name": "Steven Morgan",
                "role": "Latin Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/0.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
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
          quote: "I learned so much during the Swing Dance Social workshop. The instructors were patient and skilled.",
          author: "Sophia Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-480",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Noah Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-1074",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Michael Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-1015",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Oliver Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-745",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Tyler Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-491",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Nicholas Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-865",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Kimberly Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-317",
        },
        {
          quote: "I learned so much during the Swing Dance Social workshop. The instructors were patient and skilled.",
          author: "Anthony Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-387",
        },
        {
          quote: "I learned so much during the Swing Dance Social workshop. The instructors were patient and skilled.",
          author: "Paul Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-814",
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
    id: "fc1f0312-b8cf-46a8-a54c-5b7b6ec0b968",
    category: "Dancing",
    name: "Broadway Dance Revue",
    description: "A celebration of dance traditions from around the world",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Broadway Dance Revue performance times"
    },
    contact: {
      contactNumber: "+1-897-553-7103",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f76a3457-9066-4b31-92e1-9504aa379209",
      title: "Broadway Dance Revue",
      description: "A celebration of dance traditions from around the world",
      tickets: {
        isRequired: false,
        price: 42,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "94 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Broadway Dance Revue performance times"
        }],
      performers: [        {
                "id": "04f8cadf-05a0-46b6-85d6-f37ad79d55fe",
                "name": "Layla Wells",
                "role": "Tap Dancer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/16.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "I learned so much during the Broadway Dance Revue workshop. The instructors were patient and skilled.",
          author: "Sean Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-1055",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Matthew Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-29",
        },
        {
          quote: "I learned so much during the Broadway Dance Revue workshop. The instructors were patient and skilled.",
          author: "Emma Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-654",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Harold Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-834",
        },
        {
          quote: "I haven't danced like this in years! The Broadway Dance Revue event was so much fun.",
          author: "Madelyn Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-259",
        },
        {
          quote: "I haven't danced like this in years! The Broadway Dance Revue event was so much fun.",
          author: "Miguel Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-1025",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5d5a1337-a52c-41ec-b20a-980525f4a09e",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
              "price": 27,
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
  }
];
