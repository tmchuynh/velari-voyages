// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "737bff65-ff4a-4517-8e3f-44f1b3ce63fb",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "International cinema featuring subtitled masterpieces",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "03:00",
          "duration": "11 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-204-576-1779",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "282cfdd4-26e0-49ef-b50d-5448fa1b5bbf",
      title: "Classic Movie Night",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: false,
        price: 42,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "86 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "03:00",
                "duration": "11 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "5e80e725-6014-4ba5-9092-ee7cacadc2bc",
                "name": "Brian Watson",
                "role": "Film Curator",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/31.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Arthur Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-132",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Douglas Dean",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-711",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Melissa Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-518",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Adam Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-305",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Nicholas Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-689",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jerry Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-259",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Christine Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-35",
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
    id: "737bff65-ff4a-4517-8e3f-44f1b3ce63fb",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Recent box office hits shown on the big screen",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "08:00",
          "duration": "18 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-630-981-5342",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6a2a8636-58e5-46cf-8c2c-f5c3184a4ad3",
      title: "Romantic Movie Evening",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "90 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "08:00",
                "duration": "18 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "7f63ceaf-83ec-4221-8686-dc4fd77318fe",
                "name": "Christine Montgomery",
                "role": "Film Critic",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/40.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
                "specialties": [
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
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Lerato Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-528",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Lerato Foster",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-181",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Marcus Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-931",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Joel Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-651",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Miguel Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-880",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Dennis Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-781",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Brian Hamilton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-705",
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
    id: "737bff65-ff4a-4517-8e3f-44f1b3ce63fb",
    category: "Movie Theater",
    name: "Animation Celebration",
    description: "Hilarious comedy films to brighten your evening",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "10:00",
          "duration": "18 hours",
          "description": "Animation Celebration performance times"
    },
    contact: {
      contactNumber: "+1-891-482-8155",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5c2e9bf1-6353-4f57-aa07-f3898dea0681",
      title: "Animation Celebration",
      description: "Hilarious comedy films to brighten your evening",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "94 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "10:00",
                "duration": "18 hours",
                "description": "Animation Celebration performance times"
        }],
      performers: [        {
                "id": "827b0e62-5442-4aa2-bb46-7937c997f60a",
                "name": "Lisa Ellis",
                "role": "Film Curator",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/71.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Sofia Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-647",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Edward Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-723",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Luis Grant",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-257",
        },
        {
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Kyle Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-681",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Julie West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-614",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Scott Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-691",
        },
        {
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Sarah Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-444",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "1a0fcf21-7ef5-454c-8a23-ac20b5e78b58",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 21,
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
    id: "737bff65-ff4a-4517-8e3f-44f1b3ce63fb",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Family-friendly movies perfect for all ages",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "15:00",
          "duration": "1 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-880-630-9118",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cab6d6ed-c5c6-427d-84eb-5788797587a0",
      title: "Romantic Movie Evening",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "70 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "15:00",
                "duration": "1 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "8a45ed3a-8f65-4814-bc92-d53dfc5c1cc2",
                "name": "Jack Mason",
                "role": "Theater Manager",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/21.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
                "specialties": [
                        "Film Curator",
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
          author: "Kennedy Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-434",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Bobby Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-996",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Sebastian Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-577",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Valentina Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-656",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Joe Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-739",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Billy Hudson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-402",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Ellie Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-356",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Scarlett Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-829",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Albert Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-872",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "66c64436-64cd-48cf-b6b4-25809d7929e3",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
              "price": 4,
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
    id: "737bff65-ff4a-4517-8e3f-44f1b3ce63fb",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Independent films from emerging filmmakers",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "02:00",
          "duration": "11 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-687-804-3900",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "316e7a37-231b-47a0-bdd1-ee69f9db4712",
      title: "Romantic Movie Evening",
      description: "Independent films from emerging filmmakers",
      tickets: {
        isRequired: false,
        price: 43,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "02:00",
                "duration": "11 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "c8766ec8-b9a6-456a-a5ce-c812f1627ea1",
                "name": "Cynthia Charlotte",
                "role": "Theater Manager",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/12.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          author: "Amy Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-28",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Brenda Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "-274",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Ashley Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-481",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Amy Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-21",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Jonathan Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-920",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Oliver Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-477",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Wei Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-547",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Cynthia West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
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
    id: "737bff65-ff4a-4517-8e3f-44f1b3ce63fb",
    category: "Movie Theater",
    name: "Animation Celebration",
    description: "Educational and inspiring documentary films",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "08:00",
          "duration": "18 hours",
          "description": "Animation Celebration performance times"
    },
    contact: {
      contactNumber: "+1-228-763-7950",
      contactEmail: "customerservice@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f6d4e309-9d52-457d-9482-3864d8da321f",
      title: "Animation Celebration",
      description: "Educational and inspiring documentary films",
      tickets: {
        isRequired: false,
        price: 34,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "85 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "08:00",
                "duration": "18 hours",
                "description": "Animation Celebration performance times"
        }],
      performers: [        {
                "id": "37c2a4ea-a735-4ed9-87ba-7f8921895b47",
                "name": "Linda Reed",
                "role": "Film Curator",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/55.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          author: "Priya Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-682",
        },
        {
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Alexander Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-686",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Austin Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-16",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Jack Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-630",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Matthew Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-597",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Gary Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-625",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "ef2aa645-e474-452c-8a4a-40f9457837ce",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 23,
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
    id: "737bff65-ff4a-4517-8e3f-44f1b3ce63fb",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "Academy Award-winning films and performances",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "13:00",
          "duration": "21 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-277-916-7874",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "742812a5-d867-47a2-8a65-95130e50a721",
      title: "Classic Movie Night",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: true,
        price: 38,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "13:00",
                "duration": "21 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "9564225a-92d1-4d30-8933-d1a1bfa0ed3f",
                "name": "Alexander Graves",
                "role": "Projectionist",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/5.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          author: "Susan Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-748",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Alexander Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-301",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Marcus Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-1013",
        },
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Margaret Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-10",
        },
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Ariana Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-356",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Bobby Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-501",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Evelyn Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-638",
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
    id: "737bff65-ff4a-4517-8e3f-44f1b3ce63fb",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "Educational and inspiring documentary films",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "21:00",
          "duration": "6 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-227-982-5097",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b31e19cb-643b-42d1-b6d4-6fc1614b1bde",
      title: "Documentary Showcase",
      description: "Educational and inspiring documentary films",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "21:00",
                "duration": "6 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "26547ab5-3055-46c5-8224-057ab4f26a82",
                "name": "Claire Dean",
                "role": "Projectionist",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/81.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Roger Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-451",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Samantha Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 5,
          date: "-857",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Lerato Knight",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/67.jpg",
          rating: 4,
          date: "-741",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Lily Graves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 5,
          date: "-631",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Brooklyn Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-135",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Johnny Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-705",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Alice Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-563",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Billy Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-320",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Raymond Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-535",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Ronald Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-228",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0e6dd08a-13db-4dda-b8cd-1806d7105327",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 25,
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
    id: "737bff65-ff4a-4517-8e3f-44f1b3ce63fb",
    category: "Movie Theater",
    name: "Family Movie Time",
    description: "Animated movies for kids and adults alike",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "19:00",
          "duration": "5 hours",
          "description": "Family Movie Time performance times"
    },
    contact: {
      contactNumber: "+1-746-556-1906",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "457dae56-c433-472c-8638-04489d1a6c29",
      title: "Family Movie Time",
      description: "Animated movies for kids and adults alike",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "120 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "19:00",
                "duration": "5 hours",
                "description": "Family Movie Time performance times"
        }],
      performers: [        {
                "id": "a16c591a-40fc-42bb-884b-25dfb75268ff",
                "name": "Jerry Russell",
                "role": "Film Curator",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/67.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
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
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Harold Campbell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-732",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Aaliyah Grant",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 4,
          date: "-105",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Douglas Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-710",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Marcus Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-296",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Gary Stewart",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-664",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3098f861-0ecf-4e30-9231-5408cbf30a4f",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 13,
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
