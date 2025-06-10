// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "0516ff75-963d-474f-92b0-abd0e6f03ff0",
    category: "Movie Theater",
    name: "Action Movie Marathon",
    description: "Educational and inspiring documentary films",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "04:00",
          "duration": "14 hours",
          "description": "Action Movie Marathon performance times"
    },
    contact: {
      contactNumber: "+1-399-422-6032",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "216c1c22-cad8-482d-b9ea-8948e9742ca5",
      title: "Action Movie Marathon",
      description: "Educational and inspiring documentary films",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "04:00",
                "duration": "14 hours",
                "description": "Action Movie Marathon performance times"
        }],
      performers: [        {
                "id": "3b9832c3-a599-4afb-9302-c28ffd34a292",
                "name": "Aiden Mason",
                "role": "Projectionist",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/25.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Zola Dixon",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-408",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Jane Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-180",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Genesis Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-253",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "David Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-91",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Albert Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-662",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Jessica Holloway",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 4,
          date: "-388",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Bryan Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-591",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Olivia Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-41",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Randy Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-175",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Harper Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 5,
          date: "-581",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "1d9eaacc-b0fc-49bb-a86a-502bf6c4e170",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 20,
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
    id: "0516ff75-963d-474f-92b0-abd0e6f03ff0",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "Family-friendly movies perfect for all ages",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "10:00",
          "duration": "19 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-674-239-4611",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "73a0b33f-09ef-4c42-9fd9-ab6683fd496b",
      title: "Midnight Movie Screening",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "69 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "10:00",
                "duration": "19 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "86eeb316-c8ee-46a0-99fb-7c2a18241fa1",
                "name": "Darrell Lawson",
                "role": "Film Critic",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/35.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jerry Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-954",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Virginia Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-523",
        },
        {
          quote: "The Midnight Movie Screening screening was wonderful. Love having a cinema on the ship!",
          author: "Kenneth Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-231",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jordan Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-719",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Abigail Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-922",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Anthony Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-12",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Matthew West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-11",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Kennedy Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-478",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Savannah Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "1",
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
    id: "0516ff75-963d-474f-92b0-abd0e6f03ff0",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "International cinema featuring subtitled masterpieces",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "13:00",
          "duration": "22 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-894-190-2136",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0a7164df-904f-4f61-8276-31f74741f23b",
      title: "Latest Hollywood Blockbusters",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: true,
        price: 38,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "13:00",
                "duration": "22 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "903a03d4-d958-4a9b-9769-a718f23ae393",
                "name": "Lerato Porter",
                "role": "Theater Manager",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/2.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Thabo Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 4,
          date: "-1082",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Aaron Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-7",
        },
        {
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Barbara Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-542",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Thomas Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-260",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Gabriel Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-548",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Brian Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-1024",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Peter Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-656",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Aiden Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-893",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Alexander Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-166",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "ee5f1fb8-9f0d-43d0-bc76-63c700504496",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 15,
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
    id: "0516ff75-963d-474f-92b0-abd0e6f03ff0",
    category: "Movie Theater",
    name: "Action Movie Marathon",
    description: "International cinema featuring subtitled masterpieces",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "11:00",
          "duration": "21 hours",
          "description": "Action Movie Marathon performance times"
    },
    contact: {
      contactNumber: "+1-614-233-8365",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "10320897-034a-426e-a9ce-196351964cee",
      title: "Action Movie Marathon",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "11:00",
                "duration": "21 hours",
                "description": "Action Movie Marathon performance times"
        }],
      performers: [        {
                "id": "5deb4bcd-50a7-4b05-b853-80e31caa6d2b",
                "name": "Skylar Payne",
                "role": "Projectionist",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/25.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Oliver Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-211",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Sandra Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-94",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Emily Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-589",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Paul Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-1076",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Ronald Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-891",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9bf16833-511b-4588-b7fe-7be077a7b15a",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 10,
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
    id: "0516ff75-963d-474f-92b0-abd0e6f03ff0",
    category: "Movie Theater",
    name: "Animation Celebration",
    description: "International cinema featuring subtitled masterpieces",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "04:00",
          "duration": "14 hours",
          "description": "Animation Celebration performance times"
    },
    contact: {
      contactNumber: "+1-952-490-6343",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3a5e9b56-831b-413a-a4f3-88c12a789510",
      title: "Animation Celebration",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "96 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "04:00",
                "duration": "14 hours",
                "description": "Animation Celebration performance times"
        }],
      performers: [        {
                "id": "da058213-bbb9-48df-8bd6-601c93f3d0a0",
                "name": "Julie Carpenter",
                "role": "Film Curator",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/6.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Film Critic"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Albert Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-583",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Joel Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-572",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Madelyn Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-716",
        },
        {
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Russell Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-651",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Kyle West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-922",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Aria Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-972",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Maria Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-806",
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
    id: "0516ff75-963d-474f-92b0-abd0e6f03ff0",
    category: "Movie Theater",
    name: "Family Movie Time",
    description: "Family-friendly movies perfect for all ages",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "15:00",
          "duration": "24 hours",
          "description": "Family Movie Time performance times"
    },
    contact: {
      contactNumber: "+1-984-347-9289",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a71fac1b-0a1c-40c6-a88a-8b8389105fea",
      title: "Family Movie Time",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: true,
        price: 24,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "78 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "15:00",
                "duration": "24 hours",
                "description": "Family Movie Time performance times"
        }],
      performers: [        {
                "id": "9b5b066f-bb60-4831-8590-e72f2a227fa8",
                "name": "Aaron Baker",
                "role": "Projectionist",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/12.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Mateo Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-585",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Nora Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-997",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jessica Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-565",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Adeline Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-253",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Pamela Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-757",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Lucas Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-583",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Hannah Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "8",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Adam Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-299",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Allison Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-49",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Aiden Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-45",
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
    id: "0516ff75-963d-474f-92b0-abd0e6f03ff0",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "Educational and inspiring documentary films",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "04:00",
          "duration": "12 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-465-645-4923",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e6b73997-849a-492f-be0f-bad3b47aba45",
      title: "Documentary Showcase",
      description: "Educational and inspiring documentary films",
      tickets: {
        isRequired: true,
        price: 18,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "04:00",
                "duration": "12 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "c0d5834e-bc84-4155-b828-7b301e82817e",
                "name": "Leah Payne",
                "role": "Projectionist",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/59.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Zoe Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-83",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Keith Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-79",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Gerald Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-257",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Donna Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-143",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Stephen Graves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-874",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "80e6170f-46f3-4df8-a618-b7c12438498e",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 22,
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
