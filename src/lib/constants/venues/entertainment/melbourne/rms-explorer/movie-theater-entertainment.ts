// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "e704be3a-1832-4f64-befd-193de3f5c360",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Late-night cult classics and special screenings",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "12:00",
          "duration": "21 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-292-626-1592",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2448a0e7-e8f9-4786-8052-23ec7392bacc",
      title: "Comedy Film Festival",
      description: "Late-night cult classics and special screenings",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "12:00",
                "duration": "21 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "acd9d437-7579-4390-be2c-49088209a51f",
                "name": "Mason Spencer",
                "role": "Film Critic",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/80.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Theater Manager",
                        "Film Critic",
                        "Projectionist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Grace Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-659",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Chloe Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-211",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Philip Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-292",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Stella Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-937",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Jeffrey Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-480",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Walter Collins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-233",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "David Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-292",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Maya Knight",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-205",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Catherine Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-374",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Julie Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-669",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "93ca50ca-06aa-498c-b641-0a318dbb2fa9",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
              "price": 10,
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
    isPopular: true
  },
  {
    id: "e704be3a-1832-4f64-befd-193de3f5c360",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Hilarious comedy films to brighten your evening",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "10:00",
          "duration": "20 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-446-674-6439",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "75429bf8-b6d0-44c1-af3e-b1bb1cc6e759",
      title: "Romantic Movie Evening",
      description: "Hilarious comedy films to brighten your evening",
      tickets: {
        isRequired: false,
        price: 39,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "73 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "10:00",
                "duration": "20 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "e4189d20-71a7-4305-ac94-0fdf189984d9",
                "name": "Zola Morgan",
                "role": "Film Critic",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/57.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
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
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Jonathan Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-697",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Ariana Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-1020",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Nora Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-508",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Angela Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-104",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Joel Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-17",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Bobby Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "6",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Amanda Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-758",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Catherine Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-837",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Stella Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-91",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: false
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
    id: "e704be3a-1832-4f64-befd-193de3f5c360",
    category: "Movie Theater",
    name: "Action Movie Marathon",
    description: "Hilarious comedy films to brighten your evening",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "17:00",
          "duration": "2 hours",
          "description": "Action Movie Marathon performance times"
    },
    contact: {
      contactNumber: "+1-906-773-7056",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ab3805e5-3ff5-489e-a1b2-a6bbc15dabbd",
      title: "Action Movie Marathon",
      description: "Hilarious comedy films to brighten your evening",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "17:00",
                "duration": "2 hours",
                "description": "Action Movie Marathon performance times"
        }],
      performers: [        {
                "id": "184d3c3b-1ee1-4b53-9e23-a060d2ec27d4",
                "name": "Chloe Crawford",
                "role": "Film Curator",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/61.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Albert Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-29",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Benjamin Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-498",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Aria Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-898",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Laura Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-74",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Edward Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-262",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    isPopular: false
  },
  {
    id: "e704be3a-1832-4f64-befd-193de3f5c360",
    category: "Movie Theater",
    name: "Animation Celebration",
    description: "Hilarious comedy films to brighten your evening",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "15:00",
          "duration": "23 hours",
          "description": "Animation Celebration performance times"
    },
    contact: {
      contactNumber: "+1-693-693-3151",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "340f16bb-f545-438e-998f-521a5e93cdc5",
      title: "Animation Celebration",
      description: "Hilarious comedy films to brighten your evening",
      tickets: {
        isRequired: false,
        price: 38,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "15:00",
                "duration": "23 hours",
                "description": "Animation Celebration performance times"
        }],
      performers: [        {
                "id": "5fcc4cf9-d1b9-4969-8575-223149156c19",
                "name": "Sarah Stewart",
                "role": "Film Curator",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/58.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Theater Manager",
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
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Audrey Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-526",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Charlotte Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-884",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Katherine Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-1011",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Gary Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-9",
        },
        {
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Alan Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-570",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Benjamin Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-639",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Brenda Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-646",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a40d33fd-2157-42ed-ac7a-59731d8c33a2",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 24,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "What movies are shown during the cruise?",
        answer: "We feature a mix of current releases, classic films, and family favorites. The schedule is available in your daily program.",
      },
      {
        question: "Are the movies shown with subtitles?",
        answer: "English films are shown without subtitles. Foreign films may include English subtitles.",
      },
      {
        question: "Is there a charge for movie tickets?",
        answer: "All movie screenings are complimentary for our guests. Popcorn and beverages are available for purchase.",
      }
    ],
    isPopular: false
  },
  {
    id: "e704be3a-1832-4f64-befd-193de3f5c360",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "Romantic films perfect for date night",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "21:00",
          "duration": "5 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-225-530-9647",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2109d7e0-889e-4268-9dd8-ed1e228bddea",
      title: "Documentary Showcase",
      description: "Romantic films perfect for date night",
      tickets: {
        isRequired: false,
        price: 42,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "88 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "21:00",
                "duration": "5 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "6c11f98a-bc52-4845-9b56-11113cd66ce6",
                "name": "Bryan Fisher",
                "role": "Theater Manager",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/47.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Blake Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-491",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Alice West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-218",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Sofia Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-1003",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Joan Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-710",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Zoe Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-527",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b60a025c-7ead-465b-932e-daaedc0f92a7",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 19,
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
    id: "e704be3a-1832-4f64-befd-193de3f5c360",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "Late-night cult classics and special screenings",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "16:00",
          "duration": "1 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-533-152-6656",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3937a38c-d6a1-4662-9973-ff05ef6a387c",
      title: "Classic Movie Night",
      description: "Late-night cult classics and special screenings",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "113 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "16:00",
                "duration": "1 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "107df9a9-dbc4-4c9e-bcae-7bbd3b4c66df",
                "name": "Jason Jennings",
                "role": "Theater Manager",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/74.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
                        "Film Curator",
                        "Film Critic"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Donna Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-171",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Oliver Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-912",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Rebecca Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-194",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Gerald West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-119",
        },
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Douglas Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-299",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Maya Murray",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-533",
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
    id: "e704be3a-1832-4f64-befd-193de3f5c360",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "Academy Award-winning films and performances",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "06:00",
          "duration": "16 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-325-810-3258",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7840c71a-2b6d-4541-a505-c97cd5663e2b",
      title: "Documentary Showcase",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: false,
        price: 26,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "75 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "06:00",
                "duration": "16 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "e9a248da-ecb1-4c68-8f09-6987bee4ff2a",
                "name": "Grace Wells",
                "role": "Theater Manager",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/17.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Eugene Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-972",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Jordan Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-1062",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Carl Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-289",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Juan Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-636",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Chen Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-506",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Thomas Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-960",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Darrell Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-996",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Christopher Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-1066",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Marcus Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 5,
          date: "-150",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Virginia Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-952",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: false
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
    id: "e704be3a-1832-4f64-befd-193de3f5c360",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "International cinema featuring subtitled masterpieces",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "09:00",
          "duration": "17 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-653-573-2236",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "088c571a-6c5d-4fed-91e7-21c0e22b21f6",
      title: "Classic Movie Night",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: false,
        price: 37,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "65 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "09:00",
                "duration": "17 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "a23ffd1d-8595-4d03-bc72-4087e41edafa",
                "name": "Rajesh Collins",
                "role": "Film Curator",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/3.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          author: "Nomsa Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-336",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Angela Mason",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-504",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Angela Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-1021",
        },
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Philip Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-520",
        },
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Gerald Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-83",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Savannah Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-764",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "bd804599-1faf-4d68-bad8-d6f27311ba4f",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 24,
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
    id: "e704be3a-1832-4f64-befd-193de3f5c360",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "Independent films from emerging filmmakers",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "09:00",
          "duration": "19 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-448-275-2401",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1976eb2a-d1b4-4e08-aa9d-4993312f1030",
      title: "Latest Hollywood Blockbusters",
      description: "Independent films from emerging filmmakers",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "89 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "09:00",
                "duration": "19 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "366b8b39-530a-456d-ad97-70ff3dbbc122",
                "name": "Savannah Hawkins",
                "role": "Theater Manager",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/52.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Wayne Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-118",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Allison Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-293",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Avery Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-272",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Jennifer Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-511",
        },
        {
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Alice Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-506",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Wei Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-796",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Gerald Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-658",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Virginia Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-880",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Sandra Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-704",
        },
        {
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Samantha Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-998",
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
    id: "e704be3a-1832-4f64-befd-193de3f5c360",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "International cinema featuring subtitled masterpieces",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "02:00",
          "duration": "12 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-488-829-1104",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "062d5098-4168-406f-9eab-a6465c253918",
      title: "Comedy Film Festival",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "75 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "02:00",
                "duration": "12 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "7160a5da-c8eb-4930-bc0b-7dfa13417387",
                "name": "Zachary Griffin",
                "role": "Projectionist",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/1.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Film Curator",
                        "Film Critic",
                        "Projectionist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Nathan Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-602",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Timothy Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 4,
          date: "-231",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Jeremy Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-253",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Mateo Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-547",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Thandiwe Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-356",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Mateo Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-679",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Aaron Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-1035",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "eb304b7c-095f-4aa5-943e-eff439bf9f99",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 9,
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
  }
];
