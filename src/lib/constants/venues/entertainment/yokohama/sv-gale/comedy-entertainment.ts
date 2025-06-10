// Comedy entertainment shows
// This file contains comedy entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const comedyEntertainment: Entertainment[] = [
  {
    id: "4b035db1-77b7-4358-8374-59a8427c0107",
    category: "Comedy",
    name: "Storytelling Comedy",
    description: "Comedy performances featuring musical parodies and songs",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "24:00",
          "duration": "5 hours",
          "description": "Storytelling Comedy performance times"
    },
    contact: {
      contactNumber: "+1-468-803-7411",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5ae37404-2534-4635-b4cf-fe952bdb8b73",
      title: "Storytelling Comedy",
      description: "Comedy performances featuring musical parodies and songs",
      tickets: {
        isRequired: true,
        price: 43,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "24:00",
                "duration": "5 hours",
                "description": "Storytelling Comedy performance times"
        }],
      performers: [        {
                "id": "af27391c-a39d-4b78-be20-c581d6e4b3a5",
                "name": "Leah Jennings",
                "role": "Musical Comedian",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/44.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
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
          author: "Melissa Murray",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-252",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Claire Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-635",
        },
        {
          quote: "The Storytelling Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Luis Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-740",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Benjamin Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-396",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Gabriella Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-380",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Chloe Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-475",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Leah West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-12",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Stephen Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-472",
        },
        {
          quote: "The Storytelling Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Priya Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-1027",
        },
        {
          quote: "The Storytelling Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Naomi Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-755",
        }
      ],
      hasVIPSeating: true,
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
    id: "4b035db1-77b7-4358-8374-59a8427c0107",
    category: "Comedy",
    name: "Musical Comedy",
    description: "Interactive comedy where the audience becomes part of the show",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "23:00",
          "duration": "5 hours",
          "description": "Musical Comedy performance times"
    },
    contact: {
      contactNumber: "+1-454-612-4670",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "67c60e11-4b1b-41e9-831e-e3d2aa309e3e",
      title: "Musical Comedy",
      description: "Interactive comedy where the audience becomes part of the show",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "23:00",
                "duration": "5 hours",
                "description": "Musical Comedy performance times"
        }],
      performers: [        {
                "id": "0afebdb1-20b9-4e3a-90cc-2f757871c9f6",
                "name": "Jerry Keller",
                "role": "Comedy Writer",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/26.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Stand-Up Comedian",
                        "Improv Actor"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Juan Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-743",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Christopher Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-805",
        },
        {
          quote: "The Musical Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Patricia Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-465",
        },
        {
          quote: "The Musical Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Amanda Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-244",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Helen Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-306",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Anna Ellis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-517",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Thandiwe Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-722",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Nora Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-44",
        },
        {
          quote: "The Musical Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Victoria Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-798",
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
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      },
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      }
    ],
    isPopular: false
  },
  {
    id: "4b035db1-77b7-4358-8374-59a8427c0107",
    category: "Comedy",
    name: "Storytelling Comedy",
    description: "Clean, wholesome comedy perfect for the entire family",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Storytelling Comedy performance times"
    },
    contact: {
      contactNumber: "+1-482-858-9065",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "48793a87-a4fb-42b4-b03f-0290f613001e",
      title: "Storytelling Comedy",
      description: "Clean, wholesome comedy perfect for the entire family",
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
                "description": "Storytelling Comedy performance times"
        }],
      performers: [        {
                "id": "a1f37c34-1cc0-43f8-98fb-905c67cdb470",
                "name": "William Russell",
                "role": "Storyteller",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/52.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Stand-Up Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Zachary Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-705",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Victor Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-147",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Logan Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-937",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Melissa Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-445",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Matthew Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-38",
        },
        {
          quote: "The Storytelling Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Vincent Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-947",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    id: "4b035db1-77b7-4358-8374-59a8427c0107",
    category: "Comedy",
    name: "Clean Comedy Showcase",
    description: "Clean, wholesome comedy perfect for the entire family",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "24:00",
          "duration": "4 hours",
          "description": "Clean Comedy Showcase performance times"
    },
    contact: {
      contactNumber: "+1-848-892-2052",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5c19b439-e3a1-45b0-95c5-965ec389c119",
      title: "Clean Comedy Showcase",
      description: "Clean, wholesome comedy perfect for the entire family",
      tickets: {
        isRequired: false,
        price: 44,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "76 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "24:00",
                "duration": "4 hours",
                "description": "Clean Comedy Showcase performance times"
        }],
      performers: [        {
                "id": "d05865dd-3ff1-4cfc-b7f1-b87a534b1885",
                "name": "Anthony Graves",
                "role": "Musical Comedian",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/50.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Storyteller",
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
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Matthew Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-746",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Brandon Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-856",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Skylar Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-920",
        },
        {
          quote: "The Clean Comedy Showcase show was the perfect way to end our evening. Great comedy!",
          author: "Scott Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-45",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Billy Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-371",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Christopher Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-978",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Alexa Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-317",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Lily Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-106",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Mary Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "5",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1f2f1c59-7c5f-4b97-bf45-281ca7ef76d5",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 22,
              "currency": "USD"
      }
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
    id: "4b035db1-77b7-4358-8374-59a8427c0107",
    category: "Comedy",
    name: "Comedy Magic",
    description: "Clean, wholesome comedy perfect for the entire family",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Comedy Magic performance times"
    },
    contact: {
      contactNumber: "+1-605-514-7621",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6f75ef76-d354-45f0-903c-b84096cb38cb",
      title: "Comedy Magic",
      description: "Clean, wholesome comedy perfect for the entire family",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Comedy Magic performance times"
        }],
      performers: [        {
                "id": "e6d5b134-3d99-4f23-b495-213aee045fd5",
                "name": "Christine Graves",
                "role": "Improv Actor",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/84.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Stand-Up Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Javier Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-344",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Philip Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-122",
        },
        {
          quote: "The Comedy Magic show was the perfect way to end our evening. Great comedy!",
          author: "Victoria Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-783",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Ashley Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-152",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Richard Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-440",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Sarah Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-626",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Audrey Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-770",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Carol Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-1078",
        },
        {
          quote: "The Comedy Magic show was the perfect way to end our evening. Great comedy!",
          author: "Carol Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-798",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2b349bc2-741d-485e-bb4b-4afd66f6d67d",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 24,
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
    id: "4b035db1-77b7-4358-8374-59a8427c0107",
    category: "Comedy",
    name: "Comedy Roast",
    description: "Professional stand-up comedians deliver laugh-out-loud performances",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Comedy Roast performance times"
    },
    contact: {
      contactNumber: "+1-329-972-3086",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f1a95825-f7c1-4a54-9c35-dd7fe573c9c8",
      title: "Comedy Roast",
      description: "Professional stand-up comedians deliver laugh-out-loud performances",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "79 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Comedy Roast performance times"
        }],
      performers: [        {
                "id": "0cbe0eb2-9dcd-4cd8-933d-f1c6e6cc9d37",
                "name": "Michelle Jennings",
                "role": "Sketch Performer",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/77.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Sketch Performer",
                        "Stand-Up Comedian",
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
          author: "Lisa Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-158",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Rachel Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-648",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Rajesh Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-435",
        },
        {
          quote: "The Comedy Roast show was the perfect way to end our evening. Great comedy!",
          author: "Noah Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-472",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Gary West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-420",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Austin Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-870",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Richard Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-772",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "6c87dc3d-2141-4609-bbdd-b97cf42042e2",
              "name": "Comedy Show T-Shirt",
              "description": "Funny t-shirt with show quotes",
              "price": 22,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      },
      {
        question: "Is the comedy show appropriate for children?",
        answer: "We offer both family-friendly comedy shows and adults-only performances. Check the daily program for specific show ratings.",
      },
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      }
    ],
    isPopular: false
  }
];
