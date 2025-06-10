// Comedy entertainment shows
// This file contains comedy entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const comedyEntertainment: Entertainment[] = [
  {
    id: "f99986b7-b3fc-407e-b5e8-95885ee1099c",
    category: "Comedy",
    name: "Comedy Game Show",
    description: "Professional stand-up comedians deliver laugh-out-loud performances",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Comedy Game Show performance times"
    },
    contact: {
      contactNumber: "+1-804-933-7046",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b91e9f8e-dbcf-4fe5-8903-203de8efbcac",
      title: "Comedy Game Show",
      description: "Professional stand-up comedians deliver laugh-out-loud performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "113 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Comedy Game Show performance times"
        }],
      performers: [        {
                "id": "fcb29864-f580-4bf9-837d-97e072e9e857",
                "name": "Helen Foster",
                "role": "Stand-Up Comedian",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/12.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Improv Actor"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Harper Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-679",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Samantha Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-688",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Victoria Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-534",
        },
        {
          quote: "The Comedy Game Show show was the perfect way to end our evening. Great comedy!",
          author: "Jerry Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-1070",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Darrell Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-366",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Grace Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-869",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Christine Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-162",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Andrew Knight",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-199",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Christopher Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-635",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Ellie Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-233",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9d1dcab4-f6d5-495a-b83d-2cb6aa0c0e2f",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 18,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      },
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      },
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      }
    ],
    isPopular: false
  },
  {
    id: "f99986b7-b3fc-407e-b5e8-95885ee1099c",
    category: "Comedy",
    name: "Comedy Sketch Show",
    description: "Family-friendly comedy suitable for all ages",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "22:00",
          "duration": "3 hours",
          "description": "Comedy Sketch Show performance times"
    },
    contact: {
      contactNumber: "+1-555-722-4564",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "395e51e0-f811-4d2c-81c3-0c20d3cc8112",
      title: "Comedy Sketch Show",
      description: "Family-friendly comedy suitable for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "73 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "22:00",
                "duration": "3 hours",
                "description": "Comedy Sketch Show performance times"
        }],
      performers: [        {
                "id": "041972d5-1afb-4820-8c9c-a63d28edc482",
                "name": "Isabella Knight",
                "role": "Comedy Writer",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/24.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Musical Comedian",
                        "Sketch Performer",
                        "Storyteller"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Emma Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 4,
          date: "-4",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Gabriel Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-779",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Genesis Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-476",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Samantha Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-534",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Harold Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-786",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Adeline Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-915",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Ellie Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-942",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      },
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      },
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      }
    ],
    isPopular: false
  },
  {
    id: "f99986b7-b3fc-407e-b5e8-95885ee1099c",
    category: "Comedy",
    name: "Interactive Comedy",
    description: "Comedy sketches and parodies performed by talented actors",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Interactive Comedy performance times"
    },
    contact: {
      contactNumber: "+1-466-957-1095",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1c8264b6-47bb-4aee-8d62-ab87ba71b133",
      title: "Interactive Comedy",
      description: "Comedy sketches and parodies performed by talented actors",
      tickets: {
        isRequired: true,
        price: 35,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Interactive Comedy performance times"
        }],
      performers: [        {
                "id": "82f2b2b0-5dac-4abf-950d-5c252e250257",
                "name": "Eleanor Charlotte",
                "role": "Improv Actor",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/68.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Musical Comedian",
                        "Sketch Performer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Sandra Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "8",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Joshua Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-319",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Luis Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-14",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Donna Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-20",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Rebecca Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-567",
        },
        {
          quote: "The Interactive Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Michael Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-228",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "4dd70589-9f4d-442e-ac8e-3ab4aaaad8d5",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 14,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      },
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      },
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      }
    ],
    isPopular: false
  },
  {
    id: "f99986b7-b3fc-407e-b5e8-95885ee1099c",
    category: "Comedy",
    name: "Storytelling Comedy",
    description: "Clean, wholesome comedy perfect for the entire family",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Storytelling Comedy performance times"
    },
    contact: {
      contactNumber: "+1-593-901-3934",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2135760b-2e8f-48ac-8ce8-e0b153d26e8a",
      title: "Storytelling Comedy",
      description: "Clean, wholesome comedy perfect for the entire family",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "102 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Storytelling Comedy performance times"
        }],
      performers: [        {
                "id": "40b6f46d-c8c4-417b-9bdb-08d4ca133c14",
                "name": "Rachel Sutton",
                "role": "Musical Comedian",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/20.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Musical Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Harold Chambers",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-425",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Ralph Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-322",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Evelyn Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-491",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Allison Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-62",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Maya Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-749",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Janet Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-1045",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Harold Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-301",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Nomsa Marshall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-1006",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Sophia Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-354",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "23d7ad85-ff0e-4c65-b303-06261dd0d229",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 20,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      },
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      },
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      }
    ],
    isPopular: false
  },
  {
    id: "f99986b7-b3fc-407e-b5e8-95885ee1099c",
    category: "Comedy",
    name: "Musical Comedy",
    description: "Interactive comedy where the audience becomes part of the show",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "23:00",
          "duration": "3 hours",
          "description": "Musical Comedy performance times"
    },
    contact: {
      contactNumber: "+1-999-253-7676",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3187384d-e4e5-4833-88fc-7593508e480d",
      title: "Musical Comedy",
      description: "Interactive comedy where the audience becomes part of the show",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "91 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "23:00",
                "duration": "3 hours",
                "description": "Musical Comedy performance times"
        }],
      performers: [        {
                "id": "04108e6d-1a19-46e2-bc96-48b6219a7255",
                "name": "Timothy Graves",
                "role": "Musical Comedian",
                "bio": "Professional comedy writer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/22.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Stand-Up Comedian",
                        "Comedy Writer",
                        "Improv Actor"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Bryan Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-170",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Eric Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-273",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Nancy Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-792",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Maya Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-884",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Johnny Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-831",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      },
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      },
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      }
    ],
    isPopular: true
  },
  {
    id: "f99986b7-b3fc-407e-b5e8-95885ee1099c",
    category: "Comedy",
    name: "Comedy Magic",
    description: "Adults-only late-night comedy with edgier material",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Comedy Magic performance times"
    },
    contact: {
      contactNumber: "+1-545-941-3447",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ebd6d077-303a-486f-86d4-d7be35bffe76",
      title: "Comedy Magic",
      description: "Adults-only late-night comedy with edgier material",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "71 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Comedy Magic performance times"
        }],
      performers: [        {
                "id": "e2fd36ce-de89-4a23-b7a8-0a411016236e",
                "name": "Keith Spencer",
                "role": "Sketch Performer",
                "bio": "Professional improv actor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/12.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Musical Comedian",
                        "Sketch Performer",
                        "Comedy Writer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Alan Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4,
          date: "-321",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Chen Ellis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-467",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Cynthia Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-293",
        },
        {
          quote: "The Comedy Magic show was the perfect way to end our evening. Great comedy!",
          author: "Jerry Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-307",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Wayne Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-586",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Brandon Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-2",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      },
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      },
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      }
    ],
    isPopular: false
  }
];
