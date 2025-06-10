// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "b8b95438-2ca3-4449-8b6d-4bebba2ff4b2",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "High-octane action movies with stunning visuals",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "08:00",
          "duration": "18 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-408-811-3289",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "02cf8f1b-963d-4014-98e6-24ffa3577371",
      title: "Documentary Showcase",
      description: "High-octane action movies with stunning visuals",
      tickets: {
        isRequired: false,
        price: 29,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "75 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "08:00",
                "duration": "18 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "3f71d095-e97d-418d-a933-46f371872373",
                "name": "Arthur Fletcher",
                "role": "Film Curator",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/31.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Theater Manager"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Adam Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-1044",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Justin Keller",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-347",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Willie Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-162",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Ashley Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-646",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Steven Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-1084",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Aiden Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-986",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9537e032-2799-431a-9d6c-608e31ee4482",
              "name": "Popcorn Bucket",
              "description": "Souvenir popcorn bucket",
              "price": 17,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "What movies are shown during the cruise?",
        answer: "We feature a mix of current releases, classic films, and family favorites. The schedule is available in your daily program.",
      },
      {
        question: "Is there a charge for movie tickets?",
        answer: "All movie screenings are complimentary for our guests. Popcorn and beverages are available for purchase.",
      },
      {
        question: "Are the movies shown with subtitles?",
        answer: "English films are shown without subtitles. Foreign films may include English subtitles.",
      }
    ],
    isPopular: false
  },
  {
    id: "b8b95438-2ca3-4449-8b6d-4bebba2ff4b2",
    category: "Movie Theater",
    name: "Action Movie Marathon",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "09:00",
          "duration": "19 hours",
          "description": "Action Movie Marathon performance times"
    },
    contact: {
      contactNumber: "+1-439-588-3189",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4439dd59-0914-4bab-8a9d-0d3f2b98ec46",
      title: "Action Movie Marathon",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "77 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "09:00",
                "duration": "19 hours",
                "description": "Action Movie Marathon performance times"
        }],
      performers: [        {
                "id": "b9022858-855b-4def-be8e-23cf4aafa7d1",
                "name": "Adeline Mitchell",
                "role": "Theater Manager",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/45.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Film Curator",
                        "Projectionist",
                        "Theater Manager"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Jennifer Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-17",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Daniel Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-164",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Ariana Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-430",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Edward Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-453",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Noah Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-997",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Kinsley Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-780",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9ad20aa6-9c44-4d75-893f-930fe28119b0",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 9,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Are the movies shown with subtitles?",
        answer: "English films are shown without subtitles. Foreign films may include English subtitles.",
      },
      {
        question: "What movies are shown during the cruise?",
        answer: "We feature a mix of current releases, classic films, and family favorites. The schedule is available in your daily program.",
      },
      {
        question: "Is there a charge for movie tickets?",
        answer: "All movie screenings are complimentary for our guests. Popcorn and beverages are available for purchase.",
      }
    ],
    isPopular: false
  },
  {
    id: "b8b95438-2ca3-4449-8b6d-4bebba2ff4b2",
    category: "Movie Theater",
    name: "Family Movie Time",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "14:00",
          "duration": "23 hours",
          "description": "Family Movie Time performance times"
    },
    contact: {
      contactNumber: "+1-925-935-4522",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "21c127a5-0836-4781-b7a0-b0ede3b729bd",
      title: "Family Movie Time",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "109 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "14:00",
                "duration": "23 hours",
                "description": "Family Movie Time performance times"
        }],
      performers: [        {
                "id": "e53d9362-e1f0-439a-85ce-4b0b405b3120",
                "name": "Eric Ellis",
                "role": "Film Critic",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/67.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Film Curator",
                        "Projectionist",
                        "Theater Manager"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Michelle Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-258",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Zachary Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-696",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Peter Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-934",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Rebecca Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-455",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Logan Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-377",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "419d3bea-cc31-4aba-bf2f-b252b0662505",
              "name": "Popcorn Bucket",
              "description": "Souvenir popcorn bucket",
              "price": 11,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Are the movies shown with subtitles?",
        answer: "English films are shown without subtitles. Foreign films may include English subtitles.",
      },
      {
        question: "What movies are shown during the cruise?",
        answer: "We feature a mix of current releases, classic films, and family favorites. The schedule is available in your daily program.",
      },
      {
        question: "Is there a charge for movie tickets?",
        answer: "All movie screenings are complimentary for our guests. Popcorn and beverages are available for purchase.",
      }
    ],
    isPopular: false
  },
  {
    id: "b8b95438-2ca3-4449-8b6d-4bebba2ff4b2",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "Academy Award-winning films and performances",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "09:00",
          "duration": "17 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-785-195-9108",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c714ffd9-939b-4666-9a28-60204990ddd6",
      title: "Documentary Showcase",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: false,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "92 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "09:00",
                "duration": "17 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "e05b8006-ad1e-446a-8ac6-43cf7ac2e2a7",
                "name": "Benjamin Clark",
                "role": "Projectionist",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/57.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Film Curator",
                        "Projectionist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Ariana Murray",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-567",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Roger Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-239",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Maya Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-951",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Jennifer Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-431",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Deborah Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-313",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Oliver Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-309",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Nicholas Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-480",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Robert Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-93",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "bc6c03a9-3950-426a-821c-da4772fdec2f",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 23,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Is there a charge for movie tickets?",
        answer: "All movie screenings are complimentary for our guests. Popcorn and beverages are available for purchase.",
      },
      {
        question: "What movies are shown during the cruise?",
        answer: "We feature a mix of current releases, classic films, and family favorites. The schedule is available in your daily program.",
      },
      {
        question: "Are the movies shown with subtitles?",
        answer: "English films are shown without subtitles. Foreign films may include English subtitles.",
      }
    ],
    isPopular: false
  },
  {
    id: "b8b95438-2ca3-4449-8b6d-4bebba2ff4b2",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Romantic films perfect for date night",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "13:00",
          "duration": "22 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-292-255-3598",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3aed9cc9-eb55-4bf5-b415-227d07d30c49",
      title: "Romantic Movie Evening",
      description: "Romantic films perfect for date night",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "69 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "13:00",
                "duration": "22 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "c221cf4c-74db-4b47-b2ea-f1afa08249d2",
                "name": "Grace Mitchell",
                "role": "Projectionist",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/72.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Theater Manager"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Carol Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-400",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Elizabeth Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-449",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Susan Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-400",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Austin Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-830",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Emma Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-670",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Audrey Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-444",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Gabriel Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-400",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jennifer Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-680",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "de987b25-df7c-49ee-ae40-42815fb40417",
              "name": "Popcorn Bucket",
              "description": "Souvenir popcorn bucket",
              "price": 22,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Is there a charge for movie tickets?",
        answer: "All movie screenings are complimentary for our guests. Popcorn and beverages are available for purchase.",
      },
      {
        question: "Are the movies shown with subtitles?",
        answer: "English films are shown without subtitles. Foreign films may include English subtitles.",
      },
      {
        question: "What movies are shown during the cruise?",
        answer: "We feature a mix of current releases, classic films, and family favorites. The schedule is available in your daily program.",
      }
    ],
    isPopular: true
  },
  {
    id: "b8b95438-2ca3-4449-8b6d-4bebba2ff4b2",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "19:00",
          "duration": "5 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-475-859-7525",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3313bfca-7103-4548-9407-f33f3863e93a",
      title: "Comedy Film Festival",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "19:00",
                "duration": "5 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "9f3e7d84-29ef-4c0b-b9c8-45132f124de3",
                "name": "Noah Lawson",
                "role": "Theater Manager",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/48.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Film Curator",
                        "Film Critic",
                        "Theater Manager"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Priya Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-816",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Evelyn Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-244",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Isabella Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-652",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Dennis Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-959",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Luis Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-895",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Vincent Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-910",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Joel Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-467",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1face00f-9f3c-4bf8-8f6b-57946f58d602",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 22,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Is there a charge for movie tickets?",
        answer: "All movie screenings are complimentary for our guests. Popcorn and beverages are available for purchase.",
      },
      {
        question: "Are the movies shown with subtitles?",
        answer: "English films are shown without subtitles. Foreign films may include English subtitles.",
      },
      {
        question: "What movies are shown during the cruise?",
        answer: "We feature a mix of current releases, classic films, and family favorites. The schedule is available in your daily program.",
      }
    ],
    isPopular: true
  },
  {
    id: "b8b95438-2ca3-4449-8b6d-4bebba2ff4b2",
    category: "Movie Theater",
    name: "Indie Film Spotlight",
    description: "International cinema featuring subtitled masterpieces",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "09:00",
          "duration": "17 hours",
          "description": "Indie Film Spotlight performance times"
    },
    contact: {
      contactNumber: "+1-821-240-2726",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7a2bba73-9660-4ce3-931c-c8a3374d73cc",
      title: "Indie Film Spotlight",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "72 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "09:00",
                "duration": "17 hours",
                "description": "Indie Film Spotlight performance times"
        }],
      performers: [        {
                "id": "5d947096-70d0-4e1f-851e-53c54fe281ce",
                "name": "Lisa Hayes",
                "role": "Film Curator",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/11.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Film Critic",
                        "Theater Manager"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Margaret Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-158",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Liam Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-1055",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Helen Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-832",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Lawrence Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-849",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Carol Fisher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-320",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Samantha Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-273",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Isabella Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-921",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Brandon Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-316",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "6460267b-0d96-40bc-8d52-574966eb013c",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 16,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "What movies are shown during the cruise?",
        answer: "We feature a mix of current releases, classic films, and family favorites. The schedule is available in your daily program.",
      },
      {
        question: "Is there a charge for movie tickets?",
        answer: "All movie screenings are complimentary for our guests. Popcorn and beverages are available for purchase.",
      },
      {
        question: "Are the movies shown with subtitles?",
        answer: "English films are shown without subtitles. Foreign films may include English subtitles.",
      }
    ],
    isPopular: false
  },
  {
    id: "b8b95438-2ca3-4449-8b6d-4bebba2ff4b2",
    category: "Movie Theater",
    name: "Oscar Winners Showcase",
    description: "Family-friendly movies perfect for all ages",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "21:00",
          "duration": "6 hours",
          "description": "Oscar Winners Showcase performance times"
    },
    contact: {
      contactNumber: "+1-874-191-8863",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e54ada65-347d-47ac-9e2d-0c5a337c2f0f",
      title: "Oscar Winners Showcase",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "74 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "21:00",
                "duration": "6 hours",
                "description": "Oscar Winners Showcase performance times"
        }],
      performers: [        {
                "id": "0981bc78-b715-4271-987d-f47eebe73317",
                "name": "Gabriella Baker",
                "role": "Film Critic",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/15.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
                        "Film Curator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Thomas Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-717",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Chen Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-595",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Jane Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-486",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Jane Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-325",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Audrey Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-644",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Gregory Graham",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-311",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Helen Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-793",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Betty Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-967",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Thandiwe West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-675",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "812fccdb-f062-4436-b458-4bdecbb41e5c",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
              "price": 12,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "What movies are shown during the cruise?",
        answer: "We feature a mix of current releases, classic films, and family favorites. The schedule is available in your daily program.",
      },
      {
        question: "Is there a charge for movie tickets?",
        answer: "All movie screenings are complimentary for our guests. Popcorn and beverages are available for purchase.",
      },
      {
        question: "Are the movies shown with subtitles?",
        answer: "English films are shown without subtitles. Foreign films may include English subtitles.",
      }
    ],
    isPopular: false
  }
];
