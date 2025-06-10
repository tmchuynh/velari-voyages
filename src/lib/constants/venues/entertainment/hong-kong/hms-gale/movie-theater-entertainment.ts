// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "4eab7aa2-222a-42b9-9037-0378302bd453",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "Hilarious comedy films to brighten your evening",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "05:00",
          "duration": "13 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-914-378-1532",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5480cc53-b611-4b11-a74d-d28df9cac434",
      title: "Documentary Showcase",
      description: "Hilarious comedy films to brighten your evening",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "60 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "05:00",
                "duration": "13 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "471db954-d547-4283-bb02-aeddb36ae7b5",
                "firstName": "Brenda",
                "lastName": "Lawson",
                "role": "Projectionist",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/18.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          author: "Steven Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-725",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Carlos Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-559",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Nomsa Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-1029",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Skylar Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 4,
          date: "-163",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Lawrence Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-883",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "12fe21a8-5231-4b59-9916-dc46292625ff",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 22,
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
    id: "4eab7aa2-222a-42b9-9037-0378302bd453",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Timeless classic films from Hollywood's golden age",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "08:00",
          "duration": "17 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-888-353-6221",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1ede6837-e251-4d60-bd0f-1fe9df00fce8",
      title: "Romantic Movie Evening",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "90 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "08:00",
                "duration": "17 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "9735eab6-dfb7-4401-b8ea-3fd31b685204",
                "firstName": "Deborah",
                "lastName": "Bennett",
                "role": "Film Curator",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/1.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
                "specialties": [
                        "Theater Manager",
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
          author: "Jane Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-505",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Christian Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-671",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Gabriel Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 4,
          date: "-648",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Peter West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-614",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Harper Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-311",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Maya Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-626",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "William Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-191",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "6ec71a3d-28d9-43aa-a037-50b87650f2be",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 20,
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
    id: "4eab7aa2-222a-42b9-9037-0378302bd453",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Recent box office hits shown on the big screen",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "13:00",
          "duration": "23 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-457-352-6889",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "204933ea-b236-47ff-b59d-a0fe5ac23951",
      title: "Comedy Film Festival",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: false,
        price: 42,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "67 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "13:00",
                "duration": "23 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "a35df1fc-aa95-4477-9d14-e65bbcf6880d",
                "firstName": "Virginia",
                "lastName": "Charlotte",
                "role": "Film Critic",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/2.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Roger Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 4,
          date: "-362",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Joe Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-230",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Julie Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-437",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Sandra Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-800",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Ronald Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-494",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Jordan Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-216",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Vincent Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 4,
          date: "-356",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Sebastian Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "7",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Katherine Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-1072",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8fb24684-9d66-4e5b-9f62-277b288f28d8",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 21,
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
    id: "4eab7aa2-222a-42b9-9037-0378302bd453",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "International cinema featuring subtitled masterpieces",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "03:00",
          "duration": "13 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-204-474-5201",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2406cf8b-4f9b-4a6f-a825-1ce5a56f3a8e",
      title: "Documentary Showcase",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: true,
        price: 33,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "112 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "03:00",
                "duration": "13 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "7f1befd3-d894-41bf-8e23-46f89a3b7110",
                "firstName": "Gregory",
                "lastName": "Graves",
                "role": "Theater Manager",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/27.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Logan Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-1034",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Gregory Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-48",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Alan Hayes",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-734",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Joan Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-29",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Eugene Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-959",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Donna Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-672",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3ccfeae0-7591-4a25-a827-74d40594f0a3",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 17,
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
    id: "4eab7aa2-222a-42b9-9037-0378302bd453",
    category: "Movie Theater",
    name: "Animation Celebration",
    description: "Late-night cult classics and special screenings",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "11:00",
          "duration": "19 hours",
          "description": "Animation Celebration performance times"
    },
    contact: {
      contactNumber: "+1-254-700-9110",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3eef3bb8-fa6f-4575-9418-4ec053aa5cf3",
      title: "Animation Celebration",
      description: "Late-night cult classics and special screenings",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "11:00",
                "duration": "19 hours",
                "description": "Animation Celebration performance times"
        }],
      performers: [        {
                "id": "b7705eb6-93df-4ea9-b745-2795eb9583c7",
                "firstName": "Blake",
                "lastName": "Foster",
                "role": "Film Critic",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/83.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Thabo Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-1055",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Mia Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5,
          date: "-207",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Cynthia Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-754",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Allison Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-942",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Maria Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-963",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Brian Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-507",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Ethan Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-181",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Bobby Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-217",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Elizabeth Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-152",
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
    id: "4eab7aa2-222a-42b9-9037-0378302bd453",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "Independent films from emerging filmmakers",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "07:00",
          "duration": "16 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-641-750-2412",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8707c11a-df52-449f-b38a-beec6d366a75",
      title: "Documentary Showcase",
      description: "Independent films from emerging filmmakers",
      tickets: {
        isRequired: false,
        price: 35,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "108 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "07:00",
                "duration": "16 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "711e205e-4991-41de-8884-962072dd5947",
                "firstName": "Savannah",
                "lastName": "Sutton",
                "role": "Projectionist",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/61.jpg",
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
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Stella Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-846",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Zola Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-140",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Sofia Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-719",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Naomi Henderson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-333",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Isabella Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-516",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Caroline Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-744",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Melissa Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 4,
          date: "-933",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Eric Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-531",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Christian Olivia",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-881",
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
        question: "What movies are shown during the cruise?",
        answer: "We feature a mix of current releases, classic films, and family favorites. The schedule is available in your daily program.",
      },
      {
        question: "Is there a charge for movie tickets?",
        answer: "All movie screenings are complimentary for our guests. Popcorn and beverages are available for purchase.",
      }
    ],
    isPopular: true
  },
  {
    id: "4eab7aa2-222a-42b9-9037-0378302bd453",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "Recent box office hits shown on the big screen",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "05:00",
          "duration": "14 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-900-708-9559",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4493ea2d-a38c-4ec7-98c2-f091724220d9",
      title: "Classic Movie Night",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "111 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "05:00",
                "duration": "14 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "6b7e86af-3ba3-4586-82e8-80e3b2111025",
                "firstName": "Matthew",
                "lastName": "Fletcher",
                "role": "Film Critic",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/44.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          author: "Stephanie Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-78",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Laura Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 5,
          date: "-394",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Philip Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-946",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Carol Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-364",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Javier West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-350",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e8de98ba-0f4b-478b-8aa6-48f94ed53010",
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
    id: "4eab7aa2-222a-42b9-9037-0378302bd453",
    category: "Movie Theater",
    name: "Action Movie Marathon",
    description: "Hilarious comedy films to brighten your evening",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "12:00",
          "duration": "22 hours",
          "description": "Action Movie Marathon performance times"
    },
    contact: {
      contactNumber: "+1-890-665-5287",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "676129e0-6fb3-4a8f-80bf-332fbb034f2f",
      title: "Action Movie Marathon",
      description: "Hilarious comedy films to brighten your evening",
      tickets: {
        isRequired: false,
        price: 24,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "98 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "12:00",
                "duration": "22 hours",
                "description": "Action Movie Marathon performance times"
        }],
      performers: [        {
                "id": "9658b32f-55cb-4c72-ad9d-7d4d46486599",
                "firstName": "Aaron",
                "lastName": "Carpenter",
                "role": "Theater Manager",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/0.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Layla Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-652",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Joshua Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-204",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Lucas Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-488",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Kennedy Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-773",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Katherine Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-152",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Blake Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-153",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5d6cf0eb-a2d7-47f5-9e5b-6bafd30048e9",
              "name": "Popcorn Bucket",
              "description": "Souvenir popcorn bucket",
              "price": 22,
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
  }
];
