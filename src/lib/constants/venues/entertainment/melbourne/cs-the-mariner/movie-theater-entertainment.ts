// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "a4ad1988-47bc-4684-ab7f-5bd26c27dd36",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "22:00",
          "duration": "7 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-612-499-2225",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "71a21ac1-a38a-40e3-9b10-61bd3f318420",
      title: "Midnight Movie Screening",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: true,
        price: 27,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "105 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "22:00",
                "duration": "7 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "0655b02e-a6cc-48d6-817e-8fe04041f712",
                "name": "Sophia Morgan",
                "role": "Film Critic",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/55.jpg",
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Paul Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-47",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Ella Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-1014",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Adeline Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-817",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Patrick Collins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-764",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Liam Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-752",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Jose Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-144",
        },
        {
          quote: "The Midnight Movie Screening screening was wonderful. Love having a cinema on the ship!",
          author: "Catherine Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-471",
        }
      ],
      hasVIPSeating: false,
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
  },
  {
    id: "a4ad1988-47bc-4684-ab7f-5bd26c27dd36",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "Late-night cult classics and special screenings",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "15:00",
          "duration": "24 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-591-437-1153",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "655b1b6c-8edf-4ee2-bd3a-ec9d35735339",
      title: "Midnight Movie Screening",
      description: "Late-night cult classics and special screenings",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "111 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "15:00",
                "duration": "24 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "30f3b663-57af-468f-a659-bf9996579751",
                "name": "Chloe Mitchell",
                "role": "Film Critic",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/68.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Maya Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-146",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Rachel Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-219",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Audrey Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-671",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Pamela Hunter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-493",
        },
        {
          quote: "The Midnight Movie Screening screening was wonderful. Love having a cinema on the ship!",
          author: "Barbara Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-322",
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
  },
  {
    id: "a4ad1988-47bc-4684-ab7f-5bd26c27dd36",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Family-friendly movies perfect for all ages",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "16:00",
          "duration": "2 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-757-885-5463",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e9e191ab-bb46-4c26-988a-20d4199366fc",
      title: "Romantic Movie Evening",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "16:00",
                "duration": "2 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "8dd0a774-f833-4d10-8991-47fe35be569e",
                "name": "Isabella Coleman",
                "role": "Film Critic",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/50.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          author: "Aaliyah Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-455",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Keith Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-1001",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Wei Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-665",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Miguel Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-192",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Margaret Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-987",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Keith Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-263",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Madelyn Crawford",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-45",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Gabriel Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-274",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "294f9b54-ffbf-4eb6-be62-3a0a04086a99",
              "name": "Popcorn Bucket",
              "description": "Souvenir popcorn bucket",
              "price": 7,
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
    id: "a4ad1988-47bc-4684-ab7f-5bd26c27dd36",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "Educational and inspiring documentary films",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "13:00",
          "duration": "22 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-853-541-8638",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e469cc5c-837c-4d06-9830-dc94064c8d29",
      title: "Classic Movie Night",
      description: "Educational and inspiring documentary films",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "104 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "13:00",
                "duration": "22 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "50e4781d-bb9a-409d-ad46-77902a94b6f9",
                "name": "Peter Lawson",
                "role": "Projectionist",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/13.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          author: "Aiden Graves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-783",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Gerald Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-845",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Olivia Jennings",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-510",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Lucas Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-493",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Anthony Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-805",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jacob West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-367",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Javier Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-570",
        },
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Carlos Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-1047",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "William Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-1021",
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
    id: "a4ad1988-47bc-4684-ab7f-5bd26c27dd36",
    category: "Movie Theater",
    name: "Action Movie Marathon",
    description: "Academy Award-winning films and performances",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "09:00",
          "duration": "18 hours",
          "description": "Action Movie Marathon performance times"
    },
    contact: {
      contactNumber: "+1-977-298-2026",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0f746460-c292-4219-b9f3-cf223664d842",
      title: "Action Movie Marathon",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: false,
        price: 28,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "09:00",
                "duration": "18 hours",
                "description": "Action Movie Marathon performance times"
        }],
      performers: [        {
                "id": "557a7ea3-f374-43f2-b59d-d525d84d3757",
                "name": "Brian Spencer",
                "role": "Theater Manager",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/77.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Audrey Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-254",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Skylar Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 4,
          date: "-211",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Kinsley Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-1008",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jose Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-608",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Carol Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-643",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Ronald Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-544",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Virginia Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-1080",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Bella Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-728",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Brandon Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-72",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Eugene Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-603",
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
  },
  {
    id: "a4ad1988-47bc-4684-ab7f-5bd26c27dd36",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "Academy Award-winning films and performances",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "03:00",
          "duration": "11 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-375-910-8447",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ee87c275-d5ea-4c1b-a9d1-a8e3fbb28f8e",
      title: "Midnight Movie Screening",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "111 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "03:00",
                "duration": "11 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "91a690cf-4ae3-4504-943b-52a2fd12f21f",
                "name": "Benjamin Warren",
                "role": "Projectionist",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/81.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          author: "Joan Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-339",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Hannah Henderson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-479",
        },
        {
          quote: "The Midnight Movie Screening screening was wonderful. Love having a cinema on the ship!",
          author: "Carl Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-193",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Walter Knight",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-95",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Eleanor Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-38",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Sarah Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 5,
          date: "-588",
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
    id: "a4ad1988-47bc-4684-ab7f-5bd26c27dd36",
    category: "Movie Theater",
    name: "Oscar Winners Showcase",
    description: "Independent films from emerging filmmakers",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "19:00",
          "duration": "3 hours",
          "description": "Oscar Winners Showcase performance times"
    },
    contact: {
      contactNumber: "+1-458-166-3150",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2e13b36b-e2c2-49ff-8288-bc5b4e3dc7b8",
      title: "Oscar Winners Showcase",
      description: "Independent films from emerging filmmakers",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "19:00",
                "duration": "3 hours",
                "description": "Oscar Winners Showcase performance times"
        }],
      performers: [        {
                "id": "0db779e8-9cbb-4466-9439-4f8f2d4f9dc7",
                "name": "Donna Maxwell",
                "role": "Film Curator",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/30.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          author: "Joseph Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-757",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Nomsa Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-687",
        },
        {
          quote: "The Oscar Winners Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Oliver Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-157",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Patrick Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-852",
        },
        {
          quote: "The Oscar Winners Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Christine Morgan",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-688",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Larry Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 4,
          date: "-63",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Rajesh Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-762",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a6fc4c42-8864-481f-a3eb-25d91bbf4a1e",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
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
