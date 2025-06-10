// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "be65afd8-fde7-45e3-92be-b0eeee281c33",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "Late-night cult classics and special screenings",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "20:00",
          "duration": "4 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-553-582-3838",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "933f88b2-63e3-49bb-b01f-d89def515f76",
      title: "Midnight Movie Screening",
      description: "Late-night cult classics and special screenings",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "72 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "20:00",
                "duration": "4 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "b66dd2ba-18e4-4fd2-9b87-ba3f7d4338ac",
                "name": "Lucas Clark",
                "role": "Film Curator",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/7.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Betty Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-457",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Eugene Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-236",
        },
        {
          quote: "The Midnight Movie Screening screening was wonderful. Love having a cinema on the ship!",
          author: "Harper Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-373",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Maria Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-928",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Dylan Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-1046",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "98a49e8d-db1e-4fcf-a324-c33ae3164a29",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
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
    id: "be65afd8-fde7-45e3-92be-b0eeee281c33",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "High-octane action movies with stunning visuals",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "15:00",
          "duration": "23 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-599-788-3940",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "10b5a4ec-bfd9-4593-aec9-8429b07a48d7",
      title: "Comedy Film Festival",
      description: "High-octane action movies with stunning visuals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "108 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "15:00",
                "duration": "23 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "6d6d356e-1ff6-47ed-a5e5-f0e80f8def60",
                "name": "Douglas Price",
                "role": "Theater Manager",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/23.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Gabriel Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-792",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Gabriel Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-437",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Johnny Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-281",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Philip Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-697",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Virginia Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-326",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Jose Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-1023",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Scott Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-1073",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "76bbb13c-6f6b-400f-ac3a-8cf2c174092c",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
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
    id: "be65afd8-fde7-45e3-92be-b0eeee281c33",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "Academy Award-winning films and performances",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "15:00",
          "duration": "24 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-689-772-7220",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "85ed32a5-77c9-48bf-867d-59beb2097e38",
      title: "Latest Hollywood Blockbusters",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "15:00",
                "duration": "24 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "6ace7df4-c8e5-4b69-8246-caf8ff29f75d",
                "name": "Grace Fisher",
                "role": "Projectionist",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/40.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Keith Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-702",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Zachary Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-566",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Peter Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-1059",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Savannah Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-341",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Rajesh Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-312",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "93515a6c-e555-4595-8067-4aaa6651148b",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
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
    id: "be65afd8-fde7-45e3-92be-b0eeee281c33",
    category: "Movie Theater",
    name: "Animation Celebration",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "04:00",
          "duration": "13 hours",
          "description": "Animation Celebration performance times"
    },
    contact: {
      contactNumber: "+1-261-384-9616",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8638d762-7597-4d81-b4a2-2f8f4c0caf2a",
      title: "Animation Celebration",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: false,
        price: 42,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "04:00",
                "duration": "13 hours",
                "description": "Animation Celebration performance times"
        }],
      performers: [        {
                "id": "24805015-4d25-408e-a9d8-921d16156e93",
                "name": "David Lawson",
                "role": "Projectionist",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/82.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          author: "Kenneth Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-1070",
        },
        {
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Lily Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-925",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Lisa Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-345",
        },
        {
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Terry Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-614",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Terry Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-1069",
        },
        {
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Carlos Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-220",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Stephen Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-1065",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Julie Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-598",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Wayne Collins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-370",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Christine Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-463",
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
    id: "be65afd8-fde7-45e3-92be-b0eeee281c33",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "High-octane action movies with stunning visuals",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "10:00",
          "duration": "20 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-485-955-7745",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7373a312-af82-4b09-b314-83544677f7d7",
      title: "Documentary Showcase",
      description: "High-octane action movies with stunning visuals",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "99 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "10:00",
                "duration": "20 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "02ff37f2-890e-47ab-a821-f8ce419ec742",
                "name": "Alexa Chambers",
                "role": "Film Critic",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/40.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          author: "David Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-507",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Richard Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-172",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Betty Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 5,
          date: "-561",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Noah Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-562",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Diego Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-990",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Adam Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-424",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Jerry Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 4,
          date: "-568",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Scarlett Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-372",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Antonio Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-968",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Frank Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-462",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "4d21446c-ce04-4e37-87a6-fde1708e76da",
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
  },
  {
    id: "be65afd8-fde7-45e3-92be-b0eeee281c33",
    category: "Movie Theater",
    name: "Foreign Film Festival",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "21:00",
          "duration": "5 hours",
          "description": "Foreign Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-462-330-8896",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b19ef79e-989e-4751-8bdd-06e50e86d696",
      title: "Foreign Film Festival",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "91 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "21:00",
                "duration": "5 hours",
                "description": "Foreign Film Festival performance times"
        }],
      performers: [        {
                "id": "923e70b5-f5d9-43dc-87c1-bc785688f430",
                "name": "Scarlett Stewart",
                "role": "Film Curator",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/79.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "The Foreign Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Lucas Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-45",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Pamela Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-208",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Kevin Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5,
          date: "-1079",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Ralph Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-712",
        },
        {
          quote: "The Foreign Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Nomsa Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 5,
          date: "-760",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Thomas Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-297",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Bella Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-12",
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
    isPopular: false
  },
  {
    id: "be65afd8-fde7-45e3-92be-b0eeee281c33",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "Recent box office hits shown on the big screen",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "05:00",
          "duration": "13 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-957-381-3281",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "00221f08-dcc2-47fe-82a4-93a276a10140",
      title: "Latest Hollywood Blockbusters",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "99 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "05:00",
                "duration": "13 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "b17d3479-c069-4f54-8ec3-b9b1fd2fc278",
                "name": "Emma Price",
                "role": "Film Curator",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/57.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Ralph Knight",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-534",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Lucas Graham",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-803",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Stephen Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-1031",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Katherine Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-890",
        },
        {
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Ella Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 5,
          date: "-950",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Charlotte Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-547",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Harper Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-16",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Gabriel Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-144",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Keith Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-878",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Lerato Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-64",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2186ebed-effc-4543-bbba-9844f90d6f9d",
              "name": "Popcorn Bucket",
              "description": "Souvenir popcorn bucket",
              "price": 18,
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
  },
  {
    id: "be65afd8-fde7-45e3-92be-b0eeee281c33",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "Hilarious comedy films to brighten your evening",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "15:00",
          "duration": "24 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-460-125-5507",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f7f35693-287a-461f-b651-20f65162613e",
      title: "Midnight Movie Screening",
      description: "Hilarious comedy films to brighten your evening",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "70 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "15:00",
                "duration": "24 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "981dee4b-79cd-4893-8d4f-4e67961fdb2b",
                "name": "Vincent Douglas",
                "role": "Theater Manager",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/32.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "The Midnight Movie Screening screening was wonderful. Love having a cinema on the ship!",
          author: "Dylan Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 4,
          date: "-27",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Kyle Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-1058",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Lily Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-813",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Helen Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-86",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Justin Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-854",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Madelyn Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-856",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Christopher Day",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-930",
        },
        {
          quote: "The Midnight Movie Screening screening was wonderful. Love having a cinema on the ship!",
          author: "Joan Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-383",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Ashley Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-676",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Gabriel Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-1027",
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
    isPopular: true
  }
];
