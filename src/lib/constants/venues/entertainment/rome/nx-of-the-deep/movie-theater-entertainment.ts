// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "c518f8f9-5b12-472b-88fd-aeacc26bc477",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "Recent box office hits shown on the big screen",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "18:00",
          "duration": "2 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-508-145-6624",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3569c6e8-e860-40ab-a33d-6c4c2c8f9740",
      title: "Documentary Showcase",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "18:00",
                "duration": "2 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "c2dd8378-7ac5-416e-b828-35ec707e110e",
                "name": "Christopher Fletcher",
                "role": "Projectionist",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/75.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Avery Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-409",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Wei Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-977",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jonathan Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-139",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Sophia Ellis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-438",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Ashley Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "5",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Jason Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-54",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Michael Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-809",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Mia Dunn",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-884",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Walter Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-637",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "dd1d0f08-4d1e-4809-8d4d-45fc841cef62",
              "name": "Popcorn Bucket",
              "description": "Souvenir popcorn bucket",
              "price": 13,
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
    id: "c518f8f9-5b12-472b-88fd-aeacc26bc477",
    category: "Movie Theater",
    name: "Family Movie Time",
    description: "Family-friendly movies perfect for all ages",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "02:00",
          "duration": "10 hours",
          "description": "Family Movie Time performance times"
    },
    contact: {
      contactNumber: "+1-737-901-5965",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2af735ea-d421-41b7-9a11-ed5c1151306e",
      title: "Family Movie Time",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: true,
        price: 26,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "105 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "02:00",
                "duration": "10 hours",
                "description": "Family Movie Time performance times"
        }],
      performers: [        {
                "id": "5449fedf-c085-4dd1-afde-8afdb33d75ac",
                "name": "Chen Foster",
                "role": "Film Curator",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/76.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Isabella Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-972",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Christine Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-333",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Henry Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-1031",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Sarah Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-877",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Douglas Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-440",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "862fa542-9be0-42d1-b260-c0a2958d5d48",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
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
    id: "c518f8f9-5b12-472b-88fd-aeacc26bc477",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Animated movies for kids and adults alike",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "06:00",
          "duration": "15 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-576-143-7439",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a49bd3b9-50bf-468d-9995-14c6d1a4ba8b",
      title: "Romantic Movie Evening",
      description: "Animated movies for kids and adults alike",
      tickets: {
        isRequired: true,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "62 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "06:00",
                "duration": "15 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "b3aee3a0-9ecd-455e-a8f3-86e92368c074",
                "name": "Wei Price",
                "role": "Projectionist",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/77.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
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
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Diego Fisher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-748",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Rajesh Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-928",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Michelle Campbell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-727",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Matthew Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-454",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Miguel Graves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-798",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "cf83a34e-5e60-4afd-af92-8f6d4db9a165",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 18,
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
    id: "c518f8f9-5b12-472b-88fd-aeacc26bc477",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "Educational and inspiring documentary films",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "09:00",
          "duration": "19 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-926-586-5625",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "46841e25-e735-4881-9e9d-237f24f949a3",
      title: "Midnight Movie Screening",
      description: "Educational and inspiring documentary films",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "109 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "09:00",
                "duration": "19 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "71099584-400f-46a6-a7ef-7a0b6472e2aa",
                "name": "Alexander Price",
                "role": "Projectionist",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/46.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Arthur Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-653",
        },
        {
          quote: "The Midnight Movie Screening screening was wonderful. Love having a cinema on the ship!",
          author: "Kennedy Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-603",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Ralph Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-803",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Paul Knight",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-983",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Emily Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-667",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Isabella Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-957",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "defe96d9-2d21-4aa9-8344-d785114cc201",
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
    id: "c518f8f9-5b12-472b-88fd-aeacc26bc477",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "Independent films from emerging filmmakers",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "12:00",
          "duration": "22 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-552-671-1769",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "643e5ea5-21cd-4d44-b50b-61709d6274cb",
      title: "Classic Movie Night",
      description: "Independent films from emerging filmmakers",
      tickets: {
        isRequired: false,
        price: 41,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "101 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "12:00",
                "duration": "22 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "1605fd8f-217d-45c5-a96c-6e0774870597",
                "name": "Johnny Montgomery",
                "role": "Film Critic",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/21.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
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
          author: "Dennis Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-473",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Eugene Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-357",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Adeline Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "-158",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Oliver Henderson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-210",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Amelia Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-885",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Ryan Nash",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-241",
        },
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Edward Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-345",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8e7d535e-ebdc-4cc1-934d-9017c970310c",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
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
    id: "c518f8f9-5b12-472b-88fd-aeacc26bc477",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "Animated movies for kids and adults alike",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "07:00",
          "duration": "15 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-675-550-1155",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "dc603de5-3fac-4d62-a3d4-d1bfb1eed41f",
      title: "Classic Movie Night",
      description: "Animated movies for kids and adults alike",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "07:00",
                "duration": "15 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "50cf611d-c19a-47c5-aadf-3b150d93d36c",
                "name": "Aria Palmer",
                "role": "Projectionist",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/69.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Isabella West",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-351",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Thomas Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-435",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Frank Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-1073",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Maya Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-673",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Timothy Graves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-1052",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Kennedy Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-51",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Skylar Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-71",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Russell West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-470",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Richard Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-433",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
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
  }
];
