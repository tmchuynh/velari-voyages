// Comedy entertainment shows
// This file contains comedy entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const comedyEntertainment: Entertainment[] = [
  {
    id: "1e842fe7-5b61-4286-b0c3-d30db4474d12",
    category: "Comedy",
    name: "Comedy Sketch Show",
    description: "Interactive comedy where the audience becomes part of the show",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Comedy Sketch Show performance times"
    },
    contact: {
      contactNumber: "+1-612-698-1053",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8a4e62d1-ee1b-4920-82a8-e35c4f582824",
      title: "Comedy Sketch Show",
      description: "Interactive comedy where the audience becomes part of the show",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "120 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Comedy Sketch Show performance times"
        }],
      performers: [        {
                "id": "96763818-3cd2-45e7-a980-7d584a5a8155",
                "name": "Evelyn Marshall",
                "role": "Comedy Writer",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/69.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Comedy Writer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Bella Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-1073",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Marcus Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-1049",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Miguel Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-256",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Sarah Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-259",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Richard Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-849",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Roger Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-387",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Joshua Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-412",
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
    id: "1e842fe7-5b61-4286-b0c3-d30db4474d12",
    category: "Comedy",
    name: "Improv Comedy Show",
    description: "Magic tricks combined with hilarious comedy routines",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "24:00",
          "duration": "6 hours",
          "description": "Improv Comedy Show performance times"
    },
    contact: {
      contactNumber: "+1-614-822-5328",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "dcd3efde-6cb9-465d-9263-cac476ba91dd",
      title: "Improv Comedy Show",
      description: "Magic tricks combined with hilarious comedy routines",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "89 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "24:00",
                "duration": "6 hours",
                "description": "Improv Comedy Show performance times"
        }],
      performers: [        {
                "id": "4c9a712b-dc92-421f-8d5d-1714965713a0",
                "name": "Wayne Curtis",
                "role": "Storyteller",
                "bio": "Professional improv actor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/62.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Improv Actor",
                        "Stand-Up Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Jessica Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-294",
        },
        {
          quote: "The Improv Comedy Show show was the perfect way to end our evening. Great comedy!",
          author: "Abigail Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-193",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Eugene Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-405",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Cynthia Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-371",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Catherine Charlotte",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-477",
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
    id: "1e842fe7-5b61-4286-b0c3-d30db4474d12",
    category: "Comedy",
    name: "Stand-Up Comedy Night",
    description: "Comedy performances featuring musical parodies and songs",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Stand-Up Comedy Night performance times"
    },
    contact: {
      contactNumber: "+1-598-997-8588",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a0f9e8dd-0d6d-4df4-9a8d-f628bb85128d",
      title: "Stand-Up Comedy Night",
      description: "Comedy performances featuring musical parodies and songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "98 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Stand-Up Comedy Night performance times"
        }],
      performers: [        {
                "id": "915de885-419b-46e2-a40e-a08ad764d68e",
                "name": "George Graham",
                "role": "Comedy Writer",
                "bio": "Professional improv actor with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/26.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Storyteller",
                        "Musical Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Isabella Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-564",
        },
        {
          quote: "The Stand-Up Comedy Night show was the perfect way to end our evening. Great comedy!",
          author: "Timothy Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-769",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Alexander Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-633",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Donna Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-839",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Randy Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-158",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Samuel Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-48",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Kinsley Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-732",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Rebecca Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-613",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "88e1f197-9b3f-4edf-b422-e550a812ed67",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 20,
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
    id: "1e842fe7-5b61-4286-b0c3-d30db4474d12",
    category: "Comedy",
    name: "Clean Comedy Showcase",
    description: "Professional stand-up comedians deliver laugh-out-loud performances",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Clean Comedy Showcase performance times"
    },
    contact: {
      contactNumber: "+1-327-236-2366",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "709b04b7-26a9-4104-83d8-397b95616b36",
      title: "Clean Comedy Showcase",
      description: "Professional stand-up comedians deliver laugh-out-loud performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Clean Comedy Showcase performance times"
        }],
      performers: [        {
                "id": "ea3984fd-8006-4a70-bee4-6c1e31f63375",
                "name": "Jessica Montgomery",
                "role": "Sketch Performer",
                "bio": "Professional sketch performer with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/76.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Storyteller"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Clean Comedy Showcase show was the perfect way to end our evening. Great comedy!",
          author: "Donna Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-495",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Abigail Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-897",
        },
        {
          quote: "The Clean Comedy Showcase show was the perfect way to end our evening. Great comedy!",
          author: "Katherine Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-853",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Grace Reed",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 4,
          date: "-627",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Bryan Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-736",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Wayne Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-151",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Justin Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-981",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Scott Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-775",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Lerato Reed",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-819",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Elena Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-886",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "d52f95e2-09f0-493c-aed8-a51d0d45760e",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 17,
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
    id: "1e842fe7-5b61-4286-b0c3-d30db4474d12",
    category: "Comedy",
    name: "Comedy Sketch Show",
    description: "Professional stand-up comedians deliver laugh-out-loud performances",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Comedy Sketch Show performance times"
    },
    contact: {
      contactNumber: "+1-963-813-4653",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4901f4c5-df57-4865-8aec-945b9b0577fb",
      title: "Comedy Sketch Show",
      description: "Professional stand-up comedians deliver laugh-out-loud performances",
      tickets: {
        isRequired: true,
        price: 31,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Comedy Sketch Show performance times"
        }],
      performers: [        {
                "id": "8dc2ed47-3270-4a09-8612-e3783009f91e",
                "name": "Elena Hall",
                "role": "Sketch Performer",
                "bio": "Professional stand-up comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/51.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Sketch Performer",
                        "Comedy Writer",
                        "Musical Comedian"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Brian Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-432",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Carl Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-423",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Blake Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-97",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Harper Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-932",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Maria Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-811",
        },
        {
          quote: "The Comedy Sketch Show show was the perfect way to end our evening. Great comedy!",
          author: "Alice Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-274",
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
        question: "Do I need to reserve seats for comedy shows?",
        answer: "Most comedy shows are first-come, first-served. Popular shows may fill up, so arriving early is recommended.",
      },
      {
        question: "Can I interact with the comedians?",
        answer: "Many of our comedy shows include audience interaction. Comedians often mingle with guests after performances.",
      }
    ],
    isPopular: false
  },
  {
    id: "1e842fe7-5b61-4286-b0c3-d30db4474d12",
    category: "Comedy",
    name: "Stand-Up Comedy Night",
    description: "Humorous storytelling and comedic monologues",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "23:00",
          "duration": "4 hours",
          "description": "Stand-Up Comedy Night performance times"
    },
    contact: {
      contactNumber: "+1-461-507-9122",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f3e5519d-7697-4154-9c50-c831d9da5ddc",
      title: "Stand-Up Comedy Night",
      description: "Humorous storytelling and comedic monologues",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "23:00",
                "duration": "4 hours",
                "description": "Stand-Up Comedy Night performance times"
        }],
      performers: [        {
                "id": "9a9dbccd-c8db-408a-b22c-a2b80cc4f4fe",
                "name": "Ashley Charlotte",
                "role": "Improv Actor",
                "bio": "Professional storyteller with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/16.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Sketch Performer"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Stand-Up Comedy Night show was the perfect way to end our evening. Great comedy!",
          author: "Brian Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-80",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Amy Dunn",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-171",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Chloe Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-865",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Jennifer Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-798",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Oliver Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-801",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4e1cba74-b863-44af-a3f1-1b6f2b03e580",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 17,
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
    id: "1e842fe7-5b61-4286-b0c3-d30db4474d12",
    category: "Comedy",
    name: "Comedy Magic",
    description: "Hilarious roast-style comedy with guest participation",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "22:00",
          "duration": "2 hours",
          "description": "Comedy Magic performance times"
    },
    contact: {
      contactNumber: "+1-375-180-1154",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ad39f612-8d31-49f2-9412-2fe596f2169f",
      title: "Comedy Magic",
      description: "Hilarious roast-style comedy with guest participation",
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
                "description": "Comedy Magic performance times"
        }],
      performers: [        {
                "id": "0b7863a9-a976-4781-b3d2-579c05e927dc",
                "name": "Jessica Day",
                "role": "Sketch Performer",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/33.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Carol Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-141",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Skylar Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-448",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Harold Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-1008",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Robert Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 5,
          date: "-509",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Keith Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-656",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Rachel Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-419",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1c0c2f5a-5edc-410e-ab2b-44ee9e02a6d3",
              "name": "Comedy Special DVD",
              "description": "Recording of tonight's comedy show",
              "price": 13,
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
    id: "1e842fe7-5b61-4286-b0c3-d30db4474d12",
    category: "Comedy",
    name: "Musical Comedy",
    description: "Clean, wholesome comedy perfect for the entire family",
    image: "/images/entertainment/comedy-show.jpg",
    hours:     {
          "start": "18:00",
          "end": "22:00",
          "duration": "4 hours",
          "description": "Musical Comedy performance times"
    },
    contact: {
      contactNumber: "+1-212-313-3316",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "185801ed-3b57-4372-9fb1-afafe43949e6",
      title: "Musical Comedy",
      description: "Clean, wholesome comedy perfect for the entire family",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "18:00",
                "end": "22:00",
                "duration": "4 hours",
                "description": "Musical Comedy performance times"
        }],
      performers: [        {
                "id": "38792eff-e275-489c-834a-48317a6fee9f",
                "name": "Joshua Fletcher",
                "role": "Comedy Writer",
                "bio": "Professional musical comedian with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/15.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Stand-Up Comedian",
                        "Musical Comedian",
                        "Improv Actor"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Wei Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-206",
        },
        {
          quote: "The whole family enjoyed this show. Humor that appeals to all ages.",
          author: "Samuel Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-280",
        },
        {
          quote: "The Musical Comedy show was the perfect way to end our evening. Great comedy!",
          author: "Vincent Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-866",
        },
        {
          quote: "I laughed until my sides hurt! undefined undefined is hilarious and so entertaining.",
          author: "Thabo Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-560",
        },
        {
          quote: "Clean, family-friendly humor that had everyone cracking up. Loved it!",
          author: "Evelyn Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-504",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Nathan Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-752",
        },
        {
          quote: "Best comedy show I've seen in years! undefined undefined had perfect timing.",
          author: "Brandon Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-423",
        },
        {
          quote: "This comedian knows how to work a crowd. Interactive and genuinely funny.",
          author: "Aaron Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-43",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c60ba8c1-376c-452d-9c43-f367935f79da",
              "name": "Autographed Photo",
              "description": "Signed photo with the comedian",
              "price": 24,
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
  }
];
