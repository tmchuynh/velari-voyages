// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "040af7ce-4295-4dff-b25f-ca891b38252f",
    category: "Dancing",
    name: "Contemporary Movement",
    description: "Professional dancers performing spectacular choreographed routines",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Contemporary Movement performance times"
    },
    contact: {
      contactNumber: "+1-507-121-7924",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ab639cb5-1446-44a0-98af-52bae65245fc",
      title: "Contemporary Movement",
      description: "Professional dancers performing spectacular choreographed routines",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "117 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Contemporary Movement performance times"
        }],
      performers: [        {
                "id": "ddfcd88b-57d3-4025-9786-d2076fbe22dd",
                "name": "Madelyn Mitchell",
                "role": "Hip-Hop Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/37.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Bella Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-1025",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Arthur Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-924",
        },
        {
          quote: "I haven't danced like this in years! The Contemporary Movement event was so much fun.",
          author: "Sebastian Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-541",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Peter Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-185",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Emily Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-879",
        },
        {
          quote: "I haven't danced like this in years! The Contemporary Movement event was so much fun.",
          author: "Robert Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-385",
        },
        {
          quote: "I learned so much during the Contemporary Movement workshop. The instructors were patient and skilled.",
          author: "Thomas Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-882",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Elena Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-998",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e35fc633-a24d-4d7f-a4f1-006575918b9b",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
              "price": 14,
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
    id: "040af7ce-4295-4dff-b25f-ca891b38252f",
    category: "Dancing",
    name: "Dance Competition",
    description: "Traditional folk dances from various cultures",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Dance Competition performance times"
    },
    contact: {
      contactNumber: "+1-519-771-5568",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c5c0d5df-1f64-4715-9c2d-ff366b3d94aa",
      title: "Dance Competition",
      description: "Traditional folk dances from various cultures",
      tickets: {
        isRequired: false,
        price: 32,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Dance Competition performance times"
        }],
      performers: [        {
                "id": "145ace4a-386b-40c0-acef-9f8d4eee5e27",
                "name": "Miguel Grant",
                "role": "Contemporary Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/13.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          author: "Ellie Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-610",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Mary Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-100",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Grace West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-671",
        },
        {
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Gabriel Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-640",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Aiden Price",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-553",
        },
        {
          quote: "I haven't danced like this in years! The Dance Competition event was so much fun.",
          author: "Lily Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 5,
          date: "-918",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Albert Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-148",
        }
      ],
      hasVIPSeating: false,
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
    id: "040af7ce-4295-4dff-b25f-ca891b38252f",
    category: "Dancing",
    name: "Latin Dance Night",
    description: "Dance styles spanning from the 1920s to today",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Latin Dance Night performance times"
    },
    contact: {
      contactNumber: "+1-401-110-6307",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d7d4b8f9-b759-4dfc-8dea-f00556c934e4",
      title: "Latin Dance Night",
      description: "Dance styles spanning from the 1920s to today",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Latin Dance Night performance times"
        }],
      performers: [        {
                "id": "de2f70d2-0af2-497c-8214-cb7467ba4ebf",
                "name": "Alice Fox",
                "role": "Choreographer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/14.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "I haven't danced like this in years! The Latin Dance Night event was so much fun.",
          author: "Albert Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-504",
        },
        {
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Sophia Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-476",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Maria Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-146",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Nicholas Keller",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-673",
        },
        {
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Sarah West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-224",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Amy Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-1001",
        },
        {
          quote: "I learned so much during the Latin Dance Night workshop. The instructors were patient and skilled.",
          author: "Thandiwe Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-910",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7818939c-c3fb-414e-b0f2-32a76a3db3fb",
              "name": "Choreography Book",
              "description": "Step-by-step dance instructions",
              "price": 18,
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
    id: "040af7ce-4295-4dff-b25f-ca891b38252f",
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
      contactNumber: "+1-834-246-3013",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b5c25a89-0d4d-4f34-b15d-b30489d8ea39",
      title: "Professional Dance Showcase",
      description: "Contemporary hip-hop choreography with street dance elements",
      tickets: {
        isRequired: false,
        price: 35,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "103 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Professional Dance Showcase performance times"
        }],
      performers: [        {
                "id": "67aef337-bf52-441e-898f-fd585d67f955",
                "name": "Lily Griffin",
                "role": "Choreographer",
                "bio": "Professional ballet dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/25.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Contemporary Dancer",
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
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Linda Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-165",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Claire Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-945",
        },
        {
          quote: "I learned so much during the Professional Dance Showcase workshop. The instructors were patient and skilled.",
          author: "Leah Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-107",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Austin Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-595",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Douglas Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-66",
        },
        {
          quote: "I learned so much during the Professional Dance Showcase workshop. The instructors were patient and skilled.",
          author: "Valentina Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-623",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Noah Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-504",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Ronald Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-470",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3e504d2f-d482-4a68-8bec-804f6207b944",
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
    id: "040af7ce-4295-4dff-b25f-ca891b38252f",
    category: "Dancing",
    name: "Partner Dance Workshop",
    description: "Broadway-style dance numbers from famous musicals",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Partner Dance Workshop performance times"
    },
    contact: {
      contactNumber: "+1-827-894-4342",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cb718d04-2412-4bfe-88db-b69e86d51893",
      title: "Partner Dance Workshop",
      description: "Broadway-style dance numbers from famous musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "83 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Partner Dance Workshop performance times"
        }],
      performers: [        {
                "id": "3d21ad1a-8333-4b4a-b956-6ec941eed9ae",
                "name": "Julie Curtis",
                "role": "Latin Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/53.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Contemporary Dancer",
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
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Willie Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-962",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Zola Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-656",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Jessica Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-64",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Robert Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-580",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Ariana Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-615",
        },
        {
          quote: "I learned so much during the Partner Dance Workshop workshop. The instructors were patient and skilled.",
          author: "Gabriella Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-1062",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7814133a-9215-45ff-8fd3-9a21e900a4e4",
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
    id: "040af7ce-4295-4dff-b25f-ca891b38252f",
    category: "Dancing",
    name: "Broadway Dance Revue",
    description: "Learn partner dances with professional instruction",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Broadway Dance Revue performance times"
    },
    contact: {
      contactNumber: "+1-932-646-7321",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ddb4ac6a-6a88-4228-85ea-b943d201d872",
      title: "Broadway Dance Revue",
      description: "Learn partner dances with professional instruction",
      tickets: {
        isRequired: false,
        price: 30,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "75 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Broadway Dance Revue performance times"
        }],
      performers: [        {
                "id": "049f17b2-52c7-4dbd-934e-a366c0e0d63a",
                "name": "Larry Porter",
                "role": "Ballroom Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/36.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
                        "Ballroom Dancer",
                        "Choreographer",
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
          author: "Nicholas Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-698",
        },
        {
          quote: "I haven't danced like this in years! The Broadway Dance Revue event was so much fun.",
          author: "Cynthia Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-595",
        },
        {
          quote: "I learned so much during the Broadway Dance Revue workshop. The instructors were patient and skilled.",
          author: "Lisa Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-455",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Lerato Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-438",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Harold Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-210",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "27525b6d-a89e-4635-b670-b1e9e8099e73",
              "name": "Dance Shoes",
              "description": "Professional ballroom dance shoes",
              "price": 49,
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
    id: "040af7ce-4295-4dff-b25f-ca891b38252f",
    category: "Dancing",
    name: "Partner Dance Workshop",
    description: "Broadway-style dance numbers from famous musicals",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Partner Dance Workshop performance times"
    },
    contact: {
      contactNumber: "+1-866-217-5496",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ac4225d2-1816-4815-aec1-21f49e631b92",
      title: "Partner Dance Workshop",
      description: "Broadway-style dance numbers from famous musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Partner Dance Workshop performance times"
        }],
      performers: [        {
                "id": "fe84750b-ebb0-4960-94e8-7fa38f876ef8",
                "name": "Jack Gardner",
                "role": "Tap Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/35.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Ballet Dancer",
                        "Tap Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I haven't danced like this in years! The Partner Dance Workshop event was so much fun.",
          author: "Scarlett Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-265",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Maria Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-4",
        },
        {
          quote: "I learned so much during the Partner Dance Workshop workshop. The instructors were patient and skilled.",
          author: "Ashley Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-421",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Maria Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-758",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Sarah Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-622",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Keith Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-756",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Amanda Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-246",
        },
        {
          quote: "I learned so much during the Partner Dance Workshop workshop. The instructors were patient and skilled.",
          author: "Lily Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-475",
        },
        {
          quote: "I learned so much during the Partner Dance Workshop workshop. The instructors were patient and skilled.",
          author: "Philip Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-745",
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
    id: "040af7ce-4295-4dff-b25f-ca891b38252f",
    category: "Dancing",
    name: "Swing Dance Social",
    description: "Broadway-style dance numbers from famous musicals",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Swing Dance Social performance times"
    },
    contact: {
      contactNumber: "+1-750-193-2821",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5597853e-a6f2-4bcf-aa2f-56b923bf9b96",
      title: "Swing Dance Social",
      description: "Broadway-style dance numbers from famous musicals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "117 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Swing Dance Social performance times"
        }],
      performers: [        {
                "id": "1112e886-4e3d-487d-b18d-38741fcd4682",
                "name": "Jason Warren",
                "role": "Hip-Hop Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/77.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "I learned so much during the Swing Dance Social workshop. The instructors were patient and skilled.",
          author: "Helen Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-775",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Juan Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-152",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Lisa Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-159",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Larry Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-211",
        },
        {
          quote: "I learned so much during the Swing Dance Social workshop. The instructors were patient and skilled.",
          author: "Joan Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "8",
        },
        {
          quote: "I haven't danced like this in years! The Swing Dance Social event was so much fun.",
          author: "Carlos Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-567",
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
  }
];
