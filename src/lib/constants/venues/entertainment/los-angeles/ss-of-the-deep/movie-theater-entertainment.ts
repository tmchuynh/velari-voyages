// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "6876db0a-8793-4d17-bdbf-e0a68a59401d",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "Independent films from emerging filmmakers",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "09:00",
          "duration": "17 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-456-245-5113",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f084a362-ab2c-42e0-8946-8a84bc7a82f8",
      title: "Midnight Movie Screening",
      description: "Independent films from emerging filmmakers",
      tickets: {
        isRequired: false,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "89 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "09:00",
                "duration": "17 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "d6402a8a-7761-4284-8cd7-89d4820b3266",
                "name": "Elena Hamilton",
                "role": "Film Critic",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/61.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          author: "Benjamin Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-305",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Jennifer Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-224",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Mason Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-1073",
        },
        {
          quote: "The Midnight Movie Screening screening was wonderful. Love having a cinema on the ship!",
          author: "Gabriel Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-981",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Zoe Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "-122",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Harry Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-659",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Blake Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-1006",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Andrew Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-95",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Adam Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-523",
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
    id: "6876db0a-8793-4d17-bdbf-e0a68a59401d",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "International cinema featuring subtitled masterpieces",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "10:00",
          "duration": "19 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-303-138-1529",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8cd03c27-3e00-41e3-ad42-aa1d35ba6234",
      title: "Midnight Movie Screening",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "66 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "10:00",
                "duration": "19 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "847635e3-ea75-4d21-9bd8-b17e2e9237ba",
                "name": "Rajesh West",
                "role": "Film Curator",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/5.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          author: "Catherine Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 5,
          date: "-49",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Lucas Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-355",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Nicholas Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-878",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Sophia Carpenter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-553",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Robert Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-859",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3ba710a7-584b-485d-b1a6-ddc0b048b593",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 16,
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
    id: "6876db0a-8793-4d17-bdbf-e0a68a59401d",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "04:00",
          "duration": "13 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-311-974-2712",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c37d14f1-2bbe-4886-8461-6da5ee287c7d",
      title: "Midnight Movie Screening",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "70 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "04:00",
                "duration": "13 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "8f24c47f-bd00-4e98-95ac-0d18e5376f8e",
                "name": "Thandiwe Charlotte",
                "role": "Film Critic",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/73.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Projectionist",
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Louis Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-857",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Carol Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-1068",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Allison Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-696",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Amy Stewart",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 5,
          date: "-567",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Aiden Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 4,
          date: "-665",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f75ecfff-c947-423e-a9e3-a670a625ae32",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 13,
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
    id: "6876db0a-8793-4d17-bdbf-e0a68a59401d",
    category: "Movie Theater",
    name: "Animation Celebration",
    description: "Recent box office hits shown on the big screen",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "18:00",
          "duration": "3 hours",
          "description": "Animation Celebration performance times"
    },
    contact: {
      contactNumber: "+1-850-828-9824",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f4aabb17-e37c-416c-9362-01793af608a5",
      title: "Animation Celebration",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "63 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "18:00",
                "duration": "3 hours",
                "description": "Animation Celebration performance times"
        }],
      performers: [        {
                "id": "ec801508-dea2-4c5e-b99b-46ae43f2ad1a",
                "name": "Kenneth Dixon",
                "role": "Film Critic",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/55.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Nicholas Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-55",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Paul Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-467",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Dennis Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-781",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Nicholas Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-638",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Stephen Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-711",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Scott Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-673",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Victor Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-606",
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
    id: "6876db0a-8793-4d17-bdbf-e0a68a59401d",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Academy Award-winning films and performances",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "04:00",
          "duration": "12 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-255-961-2566",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "133ffbc7-1b4d-4b09-9c5c-305d8234b874",
      title: "Comedy Film Festival",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "72 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "04:00",
                "duration": "12 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "59b79dbe-c814-4bb2-b5d2-365e463769bb",
                "name": "Lisa Baker",
                "role": "Film Curator",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/69.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Projectionist",
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
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Johnny Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-687",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Luis Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-951",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Sarah Hamilton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-256",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Amina Douglas",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-874",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Elena Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-476",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Harper Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-1037",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Deborah Holloway",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 5,
          date: "-235",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Roger Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-310",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Amy Sutton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-238",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Maya Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-4",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5bed5271-f4ee-42c5-bdab-076fe813eaa9",
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
    isPopular: false
  },
  {
    id: "6876db0a-8793-4d17-bdbf-e0a68a59401d",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "Late-night cult classics and special screenings",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "18:00",
          "duration": "2 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-356-191-4841",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "33f3e883-5c7e-40e1-b4ae-8ac4540f40f4",
      title: "Documentary Showcase",
      description: "Late-night cult classics and special screenings",
      tickets: {
        isRequired: true,
        price: 37,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "18:00",
                "duration": "2 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "2f70e1cc-8038-4f7d-8016-dd29fe13a203",
                "name": "Alexander Hall",
                "role": "Theater Manager",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/36.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          author: "Douglas Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-851",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Allison Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-208",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Marcus Hunter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-936",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Helen Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-806",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Nicholas Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-501",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Noah Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-477",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Marcus Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-1024",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Brian Nash",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-390",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Patrick Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 4,
          date: "-136",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "fa84c12c-4d05-44ab-ae50-7c729b905fe3",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
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
    id: "6876db0a-8793-4d17-bdbf-e0a68a59401d",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "International cinema featuring subtitled masterpieces",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "04:00",
          "duration": "12 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-579-130-2860",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "664bdd5d-b9f2-48b3-89b4-35ae4f92cdd7",
      title: "Classic Movie Night",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "76 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "04:00",
                "duration": "12 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "25c752c9-ddb0-47c3-99a5-10aa6847ca03",
                "name": "Dennis Henderson",
                "role": "Projectionist",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/84.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          author: "Keith Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-6",
        },
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Isabella Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-207",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Christopher Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-538",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Nicholas Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "3",
        },
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Aaliyah Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-862",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Noah Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-779",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Noah Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-322",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ed8c7855-7090-45c1-89bd-9955e31d3ce0",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
              "price": 16,
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
