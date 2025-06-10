// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "a54aa4da-3cd5-4169-9ff2-5983c4009956",
    category: "Movie Theater",
    name: "Action Movie Marathon",
    description: "Academy Award-winning films and performances",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "13:00",
          "duration": "22 hours",
          "description": "Action Movie Marathon performance times"
    },
    contact: {
      contactNumber: "+1-614-347-4236",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7bd985f1-315b-45d2-8e9e-04dc6fc38644",
      title: "Action Movie Marathon",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "105 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "13:00",
                "duration": "22 hours",
                "description": "Action Movie Marathon performance times"
        }],
      performers: [        {
                "id": "c3f93877-963b-49a9-92c6-f4768e6e6746",
                "name": "Alexa Douglas",
                "role": "Film Curator",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/20.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Frank Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-1008",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Ella Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 4,
          date: "-145",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Keith Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-943",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Jerry Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-581",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Wayne Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-717",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Matthew Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-195",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Eleanor Henderson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-83",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ef021e42-860d-4754-bded-68fd2453e53e",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 14,
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
    id: "a54aa4da-3cd5-4169-9ff2-5983c4009956",
    category: "Movie Theater",
    name: "Family Movie Time",
    description: "Hilarious comedy films to brighten your evening",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "12:00",
          "duration": "22 hours",
          "description": "Family Movie Time performance times"
    },
    contact: {
      contactNumber: "+1-232-693-1740",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "afdc2f58-e411-4c65-9ee7-7098e61c4655",
      title: "Family Movie Time",
      description: "Hilarious comedy films to brighten your evening",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "12:00",
                "duration": "22 hours",
                "description": "Family Movie Time performance times"
        }],
      performers: [        {
                "id": "6ff85905-20e2-449b-a4df-d828d2fe114d",
                "name": "Carlos Maxwell",
                "role": "Film Curator",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/84.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Nathan Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
          rating: 4,
          date: "-321",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Thandiwe Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-496",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Genesis Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-147",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Mia Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-756",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Chen Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-1041",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Savannah Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-604",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jonathan Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-716",
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
    id: "a54aa4da-3cd5-4169-9ff2-5983c4009956",
    category: "Movie Theater",
    name: "Action Movie Marathon",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "18:00",
          "duration": "3 hours",
          "description": "Action Movie Marathon performance times"
    },
    contact: {
      contactNumber: "+1-962-615-9338",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c4fe9483-c684-42f1-a082-485640c54b6d",
      title: "Action Movie Marathon",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "120 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "18:00",
                "duration": "3 hours",
                "description": "Action Movie Marathon performance times"
        }],
      performers: [        {
                "id": "9aa3f883-a2f4-452c-8da0-c0443ace5c06",
                "name": "Nicholas Douglas",
                "role": "Film Critic",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/82.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          author: "Chen Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-66",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Willie Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-955",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Eric Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-610",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Justin Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-1031",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "George Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-396",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Bruce Chambers",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-509",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Mary Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "-697",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Alice Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-43",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Brooklyn Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-814",
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
    id: "a54aa4da-3cd5-4169-9ff2-5983c4009956",
    category: "Movie Theater",
    name: "Foreign Film Festival",
    description: "Hilarious comedy films to brighten your evening",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "02:00",
          "duration": "11 hours",
          "description": "Foreign Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-949-834-4999",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "24001e1a-c7df-48cf-9b88-340ea0c755ff",
      title: "Foreign Film Festival",
      description: "Hilarious comedy films to brighten your evening",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "120 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "02:00",
                "duration": "11 hours",
                "description": "Foreign Film Festival performance times"
        }],
      performers: [        {
                "id": "95b3252a-a934-4ca8-bc23-da9684079552",
                "name": "Ethan Graves",
                "role": "Theater Manager",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/29.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Amanda Baker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-477",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Jordan Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-784",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Johnny Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-412",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Joan Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-522",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Kinsley Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-659",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Isabella Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-725",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Avery Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-588",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9b2fa944-0989-4b74-a64b-b031f3a87211",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
              "price": 14,
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
    id: "a54aa4da-3cd5-4169-9ff2-5983c4009956",
    category: "Movie Theater",
    name: "Family Movie Time",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "09:00",
          "duration": "17 hours",
          "description": "Family Movie Time performance times"
    },
    contact: {
      contactNumber: "+1-403-888-2334",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5a487579-fda4-4e3a-9b37-2ba1040dd931",
      title: "Family Movie Time",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: true,
        price: 33,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "118 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "09:00",
                "duration": "17 hours",
                "description": "Family Movie Time performance times"
        }],
      performers: [        {
                "id": "e2c940b1-f45d-466d-b796-361171c9d1bd",
                "name": "Donna Charlotte",
                "role": "Projectionist",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/82.jpg",
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Kennedy Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-956",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Johnny Ellis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-1059",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Elena Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 5,
          date: "-384",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Zola Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-207",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Darrell Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-178",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Aaliyah Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-478",
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
    isPopular: false
  },
  {
    id: "a54aa4da-3cd5-4169-9ff2-5983c4009956",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Romantic films perfect for date night",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "20:00",
          "duration": "5 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-833-610-7375",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f36d74eb-89d7-4200-821b-7e3c2c4a69e9",
      title: "Romantic Movie Evening",
      description: "Romantic films perfect for date night",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "20:00",
                "duration": "5 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "42c3ac3e-40af-4981-8dc7-c6c3cb710701",
                "name": "Janet Harper",
                "role": "Film Critic",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/33.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Projectionist"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Barbara Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-968",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Oliver Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-309",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Ethan Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-550",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Patricia Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-1",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Ethan Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-78",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Roy Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-261",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Wei Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-839",
        }
      ],
      hasVIPSeating: false,
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
    id: "a54aa4da-3cd5-4169-9ff2-5983c4009956",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "Late-night cult classics and special screenings",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "06:00",
          "duration": "15 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-601-618-9668",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "83f087cf-c499-4a13-a747-8c130f5925e9",
      title: "Latest Hollywood Blockbusters",
      description: "Late-night cult classics and special screenings",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "115 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "06:00",
                "duration": "15 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "ba54ff1c-0487-4adf-b97c-f870c3d62bfb",
                "name": "Stella Hudson",
                "role": "Projectionist",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/6.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Billy Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-207",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Samantha Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-743",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Aaliyah Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-1036",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Lily Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 5,
          date: "-65",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Kyle Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 5,
          date: "-830",
        },
        {
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Isabella Dixon",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-869",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Christopher Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-703",
        }
      ],
      hasVIPSeating: false,
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
    isPopular: true
  },
  {
    id: "a54aa4da-3cd5-4169-9ff2-5983c4009956",
    category: "Movie Theater",
    name: "Foreign Film Festival",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "15:00",
          "duration": "23 hours",
          "description": "Foreign Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-675-228-9289",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f4ff9d67-d43f-4248-8838-d7f5e113de06",
      title: "Foreign Film Festival",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: false,
        price: 31,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "108 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "15:00",
                "duration": "23 hours",
                "description": "Foreign Film Festival performance times"
        }],
      performers: [        {
                "id": "3218e21d-1a8a-4412-8eee-343a61369cb9",
                "name": "Angela Clark",
                "role": "Projectionist",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/72.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Thandiwe Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-910",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Rachel Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-607",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Ariana Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-161",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Terry Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-259",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Sarah Stewart",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-219",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Wei Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-48",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Ethan Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-761",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Albert West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-952",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Nicholas Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-673",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Willie Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-1050",
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
    id: "a54aa4da-3cd5-4169-9ff2-5983c4009956",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Romantic films perfect for date night",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "19:00",
          "duration": "4 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-770-917-1227",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1774162c-8425-4f21-a626-66ed324de28a",
      title: "Romantic Movie Evening",
      description: "Romantic films perfect for date night",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "98 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "19:00",
                "duration": "4 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "33224eaf-ecd4-4f48-9e04-4c7ccd508168",
                "name": "Patricia Spencer",
                "role": "Projectionist",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/11.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Film Critic",
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
          author: "Victoria Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-481",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Isabella Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-987",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Sean Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-281",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Vincent Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-450",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jack Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-340",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Christine Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-929",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "James Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-455",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Evelyn Russell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-1041",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Richard Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-250",
        }
      ],
      hasVIPSeating: false,
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
    id: "a54aa4da-3cd5-4169-9ff2-5983c4009956",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "Academy Award-winning films and performances",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "08:00",
          "duration": "17 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-342-571-8702",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "364ce57f-f5f1-4b8b-bfec-29718a15ed7d",
      title: "Classic Movie Night",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "64 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "08:00",
                "duration": "17 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "62ab2f5a-7518-4cd4-92e6-5e5ce133db5a",
                "name": "Larry Foster",
                "role": "Film Critic",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/37.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Thandiwe Reed",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-894",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Angela West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-778",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Timothy Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-694",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Gerald Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-900",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "John Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-328",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Darrell Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-3",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Noah Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-590",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Christopher Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-460",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3bd4bda6-fc28-4bb0-9fdf-c845bc4e2217",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 24,
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
  }
];
