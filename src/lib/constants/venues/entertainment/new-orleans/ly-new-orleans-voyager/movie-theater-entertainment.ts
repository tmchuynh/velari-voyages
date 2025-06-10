// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "78692dd6-fade-4b31-b3c2-8bc692a54c13",
    category: "Movie Theater",
    name: "Animation Celebration",
    description: "Animated movies for kids and adults alike",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "04:00",
          "duration": "14 hours",
          "description": "Animation Celebration performance times"
    },
    contact: {
      contactNumber: "+1-513-815-6431",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a5e124eb-0df3-4692-b412-e24db2a882aa",
      title: "Animation Celebration",
      description: "Animated movies for kids and adults alike",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "67 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "04:00",
                "duration": "14 hours",
                "description": "Animation Celebration performance times"
        }],
      performers: [        {
                "id": "f6ac128a-162f-49b2-a8d9-a6e117083857",
                "name": "Maya Hawkins",
                "role": "Film Critic",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/28.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Film Critic",
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Larry Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-149",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Timothy Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-856",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Wayne Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-611",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Joseph Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-959",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Nathan Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-639",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d02b95d0-25ae-4813-9d4d-9f14e457a0d5",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
              "price": 6,
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
    isPopular: true
  },
  {
    id: "78692dd6-fade-4b31-b3c2-8bc692a54c13",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "Recent box office hits shown on the big screen",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "11:00",
          "duration": "21 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-238-522-2794",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9f7ec329-5bc8-41c2-b717-54cca668f2ad",
      title: "Latest Hollywood Blockbusters",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "11:00",
                "duration": "21 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "02f9bcd4-6c0f-4c49-94a6-94b3c8c9e1ca",
                "name": "Harry Hayes",
                "role": "Film Curator",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/45.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Film Curator",
                        "Projectionist",
                        "Film Critic"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Gary Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-967",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Douglas Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-36",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Julie Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-417",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Catherine Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-203",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Roger Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-635",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Christian Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-485",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    isPopular: false
  },
  {
    id: "78692dd6-fade-4b31-b3c2-8bc692a54c13",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "10:00",
          "duration": "20 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-757-992-5581",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "26aa5a0a-08bd-4cac-afa5-2d5a689ee82c",
      title: "Latest Hollywood Blockbusters",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: false,
        price: 24,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "10:00",
                "duration": "20 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "68aab288-911d-4623-98e0-1f0b3cc4f600",
                "name": "Nomsa Jennings",
                "role": "Film Critic",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/51.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Theater Manager",
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Kinsley Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-320",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Claire Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-1019",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Stella Holloway",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-373",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Valentina Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-412",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Albert Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-361",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "William Henderson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-41",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "4882ff1a-4c88-4446-adfc-1863ad908530",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 19,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Are the movies shown with subtitles?",
        answer: "English films are shown without subtitles. Foreign films may include English subtitles.",
      },
      {
        question: "Is there a charge for movie tickets?",
        answer: "All movie screenings are complimentary for our guests. Popcorn and beverages are available for purchase.",
      },
      {
        question: "What movies are shown during the cruise?",
        answer: "We feature a mix of current releases, classic films, and family favorites. The schedule is available in your daily program.",
      }
    ],
    isPopular: true
  },
  {
    id: "78692dd6-fade-4b31-b3c2-8bc692a54c13",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "Animated movies for kids and adults alike",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "04:00",
          "duration": "14 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-815-828-5688",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5d05b2a2-0853-4701-8cf9-d87163b8754f",
      title: "Midnight Movie Screening",
      description: "Animated movies for kids and adults alike",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "04:00",
                "duration": "14 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "33a2b5bd-1d28-4264-8fbd-f467149969bb",
                "name": "Nicholas Graves",
                "role": "Projectionist",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/49.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Betty Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-730",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Melissa Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-563",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Juan Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "8",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Alice Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-473",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Sandra Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-80",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Anthony Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-320",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    id: "78692dd6-fade-4b31-b3c2-8bc692a54c13",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "07:00",
          "duration": "15 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-938-786-2679",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "34897f6b-e974-4195-9f56-d160f049e12c",
      title: "Comedy Film Festival",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "07:00",
                "duration": "15 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "7c421c93-de84-425c-949b-7706524147f0",
                "name": "Walter Hunter",
                "role": "Film Critic",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/43.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          author: "Barbara Payne",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-893",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Bruce Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-413",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Eric Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-158",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Joan Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-482",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Raymond Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-362",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    isPopular: true
  },
  {
    id: "78692dd6-fade-4b31-b3c2-8bc692a54c13",
    category: "Movie Theater",
    name: "Animation Celebration",
    description: "Hilarious comedy films to brighten your evening",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "13:00",
          "duration": "23 hours",
          "description": "Animation Celebration performance times"
    },
    contact: {
      contactNumber: "+1-904-794-4357",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "551f04e7-eb2f-45df-8b2d-26b7b0992e4a",
      title: "Animation Celebration",
      description: "Hilarious comedy films to brighten your evening",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "13:00",
                "duration": "23 hours",
                "description": "Animation Celebration performance times"
        }],
      performers: [        {
                "id": "58d259a9-2425-4724-898c-0396dd61b171",
                "name": "Aiden Russell",
                "role": "Theater Manager",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/28.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Projectionist",
                        "Film Curator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Joel Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-755",
        },
        {
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Gregory Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-642",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Zola Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-592",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Kenneth Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-238",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Tyler Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-284",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Audrey Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-853",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Lawrence Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-586",
        },
        {
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Keith Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-808",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: false
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
    id: "78692dd6-fade-4b31-b3c2-8bc692a54c13",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "Romantic films perfect for date night",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "06:00",
          "duration": "15 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-766-906-4085",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a55615f3-55bf-4dd6-b9db-ac8f5d23af07",
      title: "Midnight Movie Screening",
      description: "Romantic films perfect for date night",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "06:00",
                "duration": "15 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "449cb894-574b-471a-9668-9f6ceb2687fe",
                "name": "Madelyn Maxwell",
                "role": "Projectionist",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/79.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Film Critic",
                        "Theater Manager",
                        "Projectionist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Midnight Movie Screening screening was wonderful. Love having a cinema on the ship!",
          author: "Deborah Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-560",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Riley Collins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-483",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Lerato Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-316",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Sophia Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-16",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Rebecca Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-781",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Nicholas Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-99",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d8cba330-0ebb-47c4-b87f-eafb742a2855",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 11,
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
    id: "78692dd6-fade-4b31-b3c2-8bc692a54c13",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "22:00",
          "duration": "6 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-883-485-1474",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0e5a3286-593f-42c9-b730-e635d2455c44",
      title: "Comedy Film Festival",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: true,
        price: 32,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "22:00",
                "duration": "6 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "87779b3f-eb36-43ca-9de4-884ad9b7c8d1",
                "name": "Sofia Mason",
                "role": "Theater Manager",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/35.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          author: "Victoria Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-742",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Matthew Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-436",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Larry Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-950",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Sebastian Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-771",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Luis Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-707",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Emily Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-265",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Kenneth Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-202",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Audrey Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-560",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "85044bd0-0c75-4d35-a9a7-d1e7fc96200e",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 15,
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
    isPopular: false
  }
];
