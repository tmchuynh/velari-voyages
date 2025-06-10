// Dancing entertainment shows
// This file contains dancing entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const dancingEntertainment: Entertainment[] = [
  {
    id: "09dbd1fc-2f4b-4c73-b195-753b78fea74a",
    category: "Dancing",
    name: "Partner Dance Workshop",
    description: "Passionate Latin dances including salsa, bachata, and merengue",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Partner Dance Workshop performance times"
    },
    contact: {
      contactNumber: "+1-809-712-5014",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e85c50aa-ea95-491f-9309-b686d002d3eb",
      title: "Partner Dance Workshop",
      description: "Passionate Latin dances including salsa, bachata, and merengue",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "105 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Partner Dance Workshop performance times"
        }],
      performers: [        {
                "id": "23876d41-01d2-4ef6-b25d-008b6e9d37bc",
                "name": "Susan Dunn",
                "role": "Ballet Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/44.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
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
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Betty Bennett",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-1004",
        },
        {
          quote: "I haven't danced like this in years! The Partner Dance Workshop event was so much fun.",
          author: "Victor Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-995",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Mark Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-689",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Bryan Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-748",
        },
        {
          quote: "I learned so much during the Partner Dance Workshop workshop. The instructors were patient and skilled.",
          author: "Sean Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-124",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Savannah Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-380",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8ed8cedc-0cd0-4b1a-9f01-215025c594de",
              "name": "Performance Photos",
              "description": "Professional photos from the show",
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
    id: "09dbd1fc-2f4b-4c73-b195-753b78fea74a",
    category: "Dancing",
    name: "Partner Dance Workshop",
    description: "Social swing dancing with live big band music",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Partner Dance Workshop performance times"
    },
    contact: {
      contactNumber: "+1-937-235-7075",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "19aafd2a-9e70-4193-8efe-e9e0c72f964b",
      title: "Partner Dance Workshop",
      description: "Social swing dancing with live big band music",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "94 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Partner Dance Workshop performance times"
        }],
      performers: [        {
                "id": "c5b14423-6e87-440d-920a-06d8c942471e",
                "name": "Antonio Keller",
                "role": "Tap Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/28.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Abigail Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-286",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Dorothy Murray",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-216",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Noah Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-542",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Dennis Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-905",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Samuel Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-1041",
        },
        {
          quote: "I learned so much during the Partner Dance Workshop workshop. The instructors were patient and skilled.",
          author: "Jeffrey Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-54",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Lucas Murray",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-82",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7c207688-d46b-489e-b74a-28cc8b41194d",
              "name": "Dance Shoes",
              "description": "Professional ballroom dance shoes",
              "price": 54,
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
    id: "09dbd1fc-2f4b-4c73-b195-753b78fea74a",
    category: "Dancing",
    name: "Professional Dance Showcase",
    description: "Passionate Latin dances including salsa, bachata, and merengue",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Professional Dance Showcase performance times"
    },
    contact: {
      contactNumber: "+1-497-685-3161",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f40f44dd-3a7c-4a2c-b7ec-d9f1b55f9da2",
      title: "Professional Dance Showcase",
      description: "Passionate Latin dances including salsa, bachata, and merengue",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Professional Dance Showcase performance times"
        }],
      performers: [        {
                "id": "5bc19cb5-ea71-4744-b1e2-feecab81e8a1",
                "name": "Chloe Murray",
                "role": "Ballet Dancer",
                "bio": "Professional hip-hop dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/13.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Hip-Hop Dancer",
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
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Raymond Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-848",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Elena Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-1022",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Brian Chambers",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-250",
        },
        {
          quote: "I haven't danced like this in years! The Professional Dance Showcase event was so much fun.",
          author: "Randy Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-238",
        },
        {
          quote: "I haven't danced like this in years! The Professional Dance Showcase event was so much fun.",
          author: "Zola Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-180",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Anthony Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-1037",
        },
        {
          quote: "I haven't danced like this in years! The Professional Dance Showcase event was so much fun.",
          author: "Benjamin Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-539",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Louis Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-693",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "54d5815e-9810-405a-b2fe-f882eb555cf2",
              "name": "Dance Shoes",
              "description": "Professional ballroom dance shoes",
              "price": 49,
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
    id: "09dbd1fc-2f4b-4c73-b195-753b78fea74a",
    category: "Dancing",
    name: "Partner Dance Workshop",
    description: "Dance styles spanning from the 1920s to today",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Partner Dance Workshop performance times"
    },
    contact: {
      contactNumber: "+1-588-382-4635",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3bce5f90-1c0f-4419-9d18-7fadb4eb98a8",
      title: "Partner Dance Workshop",
      description: "Dance styles spanning from the 1920s to today",
      tickets: {
        isRequired: true,
        price: 42,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "85 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Partner Dance Workshop performance times"
        }],
      performers: [        {
                "id": "48d94a94-9be0-4136-9df9-d593c4f8d3e6",
                "name": "Gabriel Porter",
                "role": "Jazz Dancer",
                "bio": "Professional contemporary dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/64.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
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
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Bella Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-69",
        },
        {
          quote: "I haven't danced like this in years! The Partner Dance Workshop event was so much fun.",
          author: "Kennedy Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-38",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Marcus Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-335",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Mia Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-661",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Grace Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-811",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Allison Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-99",
        },
        {
          quote: "I learned so much during the Partner Dance Workshop workshop. The instructors were patient and skilled.",
          author: "Chen Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-812",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Benjamin Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-118",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Amelia Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-664",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Julie Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-514",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "baf40ccd-0330-4130-89eb-3d4a4ac4b3c8",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
              "price": 24,
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
    id: "09dbd1fc-2f4b-4c73-b195-753b78fea74a",
    category: "Dancing",
    name: "Hip-Hop Showcase",
    description: "Broadway-style dance numbers from famous musicals",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Hip-Hop Showcase performance times"
    },
    contact: {
      contactNumber: "+1-382-114-7893",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d125492d-2ec9-4dec-9c61-7550b6247993",
      title: "Hip-Hop Showcase",
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
                "description": "Hip-Hop Showcase performance times"
        }],
      performers: [        {
                "id": "a6ffe7d5-7d84-4986-831d-6bd41cf32d2e",
                "name": "Zachary Watson",
                "role": "Tap Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/81.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Janet Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-233",
        },
        {
          quote: "I learned so much during the Hip-Hop Showcase workshop. The instructors were patient and skilled.",
          author: "Brian Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-148",
        },
        {
          quote: "I learned so much during the Hip-Hop Showcase workshop. The instructors were patient and skilled.",
          author: "Henry Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-294",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Aiden West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-204",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Blake Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-880",
        },
        {
          quote: "I learned so much during the Hip-Hop Showcase workshop. The instructors were patient and skilled.",
          author: "Douglas Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-679",
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
    id: "09dbd1fc-2f4b-4c73-b195-753b78fea74a",
    category: "Dancing",
    name: "International Folk Dances",
    description: "Dance styles spanning from the 1920s to today",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "International Folk Dances performance times"
    },
    contact: {
      contactNumber: "+1-988-454-7789",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c86b1ec0-b941-4a98-882f-c67884f4e90a",
      title: "International Folk Dances",
      description: "Dance styles spanning from the 1920s to today",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "64 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "International Folk Dances performance times"
        }],
      performers: [        {
                "id": "77cf650e-cc52-4584-8c4f-cce5e8d51060",
                "name": "Avery Fox",
                "role": "Hip-Hop Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/82.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Contemporary Dancer",
                        "Choreographer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Rebecca Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-570",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Kenneth Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-134",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Peter Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-819",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Stephanie Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-674",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Jane Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-161",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Jose Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-191",
        },
        {
          quote: "I learned so much during the International Folk Dances workshop. The instructors were patient and skilled.",
          author: "Willie Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-1000",
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
    id: "09dbd1fc-2f4b-4c73-b195-753b78fea74a",
    category: "Dancing",
    name: "Professional Dance Showcase",
    description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Professional Dance Showcase performance times"
    },
    contact: {
      contactNumber: "+1-960-304-8388",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f59c367b-e85e-494d-b43d-71da677af234",
      title: "Professional Dance Showcase",
      description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "69 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Professional Dance Showcase performance times"
        }],
      performers: [        {
                "id": "9a889dfe-bc8f-455e-948e-7132957bec60",
                "name": "Kenneth Ellis",
                "role": "Hip-Hop Dancer",
                "bio": "Professional ballroom dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/83.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
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
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Kevin Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-469",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Kimberly Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-754",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Naomi Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-360",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Liam Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-477",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Caroline Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-662",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Melissa Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-220",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Stephen Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-800",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Gary Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-73",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Wei Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-898",
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
    id: "09dbd1fc-2f4b-4c73-b195-753b78fea74a",
    category: "Dancing",
    name: "Hip-Hop Showcase",
    description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Hip-Hop Showcase performance times"
    },
    contact: {
      contactNumber: "+1-843-522-7137",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5a4491d6-78de-44f2-bd9b-35e8fcd391b7",
      title: "Hip-Hop Showcase",
      description: "Elegant ballroom dancing featuring waltz, foxtrot, and tango",
      tickets: {
        isRequired: false,
        price: 20,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "22:00",
                "duration": "2 hours",
                "description": "Hip-Hop Showcase performance times"
        }],
      performers: [        {
                "id": "4961bbb3-46af-4629-8483-a78e2a4e9ebe",
                "name": "Virginia Fletcher",
                "role": "Ballroom Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/37.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Henry Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-791",
        },
        {
          quote: "I haven't danced like this in years! The Hip-Hop Showcase event was so much fun.",
          author: "Melissa Murray",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-990",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Jeffrey Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-635",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Charlotte Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-124",
        },
        {
          quote: "I learned so much during the Hip-Hop Showcase workshop. The instructors were patient and skilled.",
          author: "Rajesh Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-613",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Donna Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 4,
          date: "-586",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Michael Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-407",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "02506c2d-a6b6-4562-9d80-5c50b4ec37b1",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
              "price": 25,
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
    id: "09dbd1fc-2f4b-4c73-b195-753b78fea74a",
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
      contactNumber: "+1-569-823-1305",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "94115edd-17f5-4618-ba68-eb7dca9a8dd3",
      title: "Cultural Dance Journey",
      description: "Learn partner dances with professional instruction",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "120 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Cultural Dance Journey performance times"
        }],
      performers: [        {
                "id": "4e7149b0-5218-4491-9676-f461c9b9d92d",
                "name": "Olivia Murray",
                "role": "Hip-Hop Dancer",
                "bio": "Professional latin dancer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/37.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Ballroom Dancer",
                        "Latin Dancer",
                        "Hip-Hop Dancer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I learned so much during the Cultural Dance Journey workshop. The instructors were patient and skilled.",
          author: "Antonio Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-229",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Louis Day",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-675",
        },
        {
          quote: "The choreography was absolutely stunning! undefined undefined made it look effortless.",
          author: "Caroline Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-647",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Lily Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-772",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Larry Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-956",
        },
        {
          quote: "I haven't danced like this in years! The Cultural Dance Journey event was so much fun.",
          author: "Liam Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-291",
        },
        {
          quote: "I haven't danced like this in years! The Cultural Dance Journey event was so much fun.",
          author: "Jerry Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-435",
        },
        {
          quote: "I haven't danced like this in years! The Cultural Dance Journey event was so much fun.",
          author: "Gerald Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-333",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Austin Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-572",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b11f7d48-9d59-40c2-ade9-628b44427238",
              "name": "Dance DVD",
              "description": "Learn the moves from tonight's performance",
              "price": 27,
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
    id: "09dbd1fc-2f4b-4c73-b195-753b78fea74a",
    category: "Dancing",
    name: "Ballroom Spectacular",
    description: "Learn partner dances with professional instruction",
    image: "/images/entertainment/dancing-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Ballroom Spectacular performance times"
    },
    contact: {
      contactNumber: "+1-749-643-6185",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f472fd7e-3452-4129-9963-34f4040c3937",
      title: "Ballroom Spectacular",
      description: "Learn partner dances with professional instruction",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "74 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Ballroom Spectacular performance times"
        }],
      performers: [        {
                "id": "818e8a79-c4aa-4a08-9216-1cef5efa3cf9",
                "name": "Jack Knight",
                "role": "Ballet Dancer",
                "bio": "Professional choreographer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/26.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Contemporary Dancer",
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
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Daniel Graves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-728",
        },
        {
          quote: "I haven't danced like this in years! The Ballroom Spectacular event was so much fun.",
          author: "Gerald Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-43",
        },
        {
          quote: "This dance show brought tears to my eyes. The emotion and artistry were beautiful.",
          author: "Melissa Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-473",
        },
        {
          quote: "Professional level dancing with such grace and precision. Truly spectacular!",
          author: "Stephen Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-362",
        },
        {
          quote: "I learned so much during the Ballroom Spectacular workshop. The instructors were patient and skilled.",
          author: "Gabriel Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-247",
        },
        {
          quote: "The energy in the room was electric! Everyone was dancing and having a blast.",
          author: "Charlotte Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-722",
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
  }
];
