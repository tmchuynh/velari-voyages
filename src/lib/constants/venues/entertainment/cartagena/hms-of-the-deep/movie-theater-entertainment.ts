// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "4d1f7380-9dab-4daa-862a-20e65a9ad085",
    category: "Movie Theater",
    name: "Family Movie Time",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "11:00",
          "duration": "20 hours",
          "description": "Family Movie Time performance times"
    },
    contact: {
      contactNumber: "+1-277-377-3437",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2a1c6acd-3154-40bb-bd43-335f31ad101d",
      title: "Family Movie Time",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "11:00",
                "duration": "20 hours",
                "description": "Family Movie Time performance times"
        }],
      performers: [        {
                "id": "848126b5-9945-4efe-8865-5e29828f2924",
                "name": "Carl Olivia",
                "role": "Film Critic",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/12.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Theater Manager",
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
          author: "Robert Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-1078",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Henry Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-930",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Henry Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-537",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Barbara Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-636",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Logan Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-751",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Tyler Wells",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-560",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Daniel West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-229",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Julie Price",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-335",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Adam Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5,
          date: "-507",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "cdb97c90-1e81-499f-a6eb-fb796ec2fcd3",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
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
    id: "4d1f7380-9dab-4daa-862a-20e65a9ad085",
    category: "Movie Theater",
    name: "Foreign Film Festival",
    description: "Family-friendly movies perfect for all ages",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "03:00",
          "duration": "12 hours",
          "description": "Foreign Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-489-938-4942",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d98d2d62-3c9a-4aab-8ec4-0024bc7eae6d",
      title: "Foreign Film Festival",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: false,
        price: 38,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "80 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "03:00",
                "duration": "12 hours",
                "description": "Foreign Film Festival performance times"
        }],
      performers: [        {
                "id": "5344d881-f64f-4804-a1d2-b93ba4d318b1",
                "name": "Paul Hall",
                "role": "Theater Manager",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/47.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
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
          author: "Ella Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-792",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Janet Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-578",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "James Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-922",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Brandon Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-161",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Ariana Hudson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-533",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Jason Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-953",
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
    id: "4d1f7380-9dab-4daa-862a-20e65a9ad085",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Recent box office hits shown on the big screen",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "18:00",
          "duration": "4 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-603-895-5487",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1bc7e1dc-cc0d-4dda-81c3-6d1539038050",
      title: "Romantic Movie Evening",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "75 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "18:00",
                "duration": "4 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "2c83b21d-9426-406e-a516-2ab6c80c2611",
                "name": "Ariana Hudson",
                "role": "Theater Manager",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/44.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          author: "Julie Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 4,
          date: "-272",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Allison Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-18",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Ethan Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-446",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Nora Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4,
          date: "-250",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Joan Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-187",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Avery Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/51.jpg",
          rating: 4,
          date: "-1001",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Blake Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-953",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "6f973b02-f97c-4f97-a588-c9c5806b76c1",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
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
    id: "4d1f7380-9dab-4daa-862a-20e65a9ad085",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "High-octane action movies with stunning visuals",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "10:00",
          "duration": "19 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-217-225-4249",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f8b8c872-daa6-413b-bbbe-e709c98c4a74",
      title: "Documentary Showcase",
      description: "High-octane action movies with stunning visuals",
      tickets: {
        isRequired: true,
        price: 21,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "62 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "10:00",
                "duration": "19 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "7aa99e95-8624-4153-8898-2d913d4ed5e3",
                "name": "Nicole Mitchell",
                "role": "Film Critic",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/21.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          author: "Charlotte Charlotte",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-14",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Kimberly Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-860",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Joseph Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-308",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Gabriel Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-416",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Laura Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-548",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Bruce Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-64",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Roy Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-425",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1a485c96-bcff-4cf6-bae9-33439b5b01db",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
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
    id: "4d1f7380-9dab-4daa-862a-20e65a9ad085",
    category: "Movie Theater",
    name: "Foreign Film Festival",
    description: "Family-friendly movies perfect for all ages",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "16:00",
          "duration": "1 hours",
          "description": "Foreign Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-761-620-5903",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d10b8795-2e31-4e97-9af0-50c4e30173d3",
      title: "Foreign Film Festival",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "93 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "16:00",
                "duration": "1 hours",
                "description": "Foreign Film Festival performance times"
        }],
      performers: [        {
                "id": "fa8cee9f-be13-41de-b448-66feb3a66d56",
                "name": "Willie Gardner",
                "role": "Film Curator",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/33.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Theater Manager",
                        "Film Critic",
                        "Film Curator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The Foreign Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Steven Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-1050",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Betty Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 5,
          date: "-1084",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Anna Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-189",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Gabriella Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-241",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Daniel Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-263",
        },
        {
          quote: "The Foreign Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Jeffrey Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 4,
          date: "-934",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Sandra Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-1060",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Sofia Keller",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-525",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8fb108b7-511c-4fc6-b811-7e03cf947435",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 14,
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
    id: "4d1f7380-9dab-4daa-862a-20e65a9ad085",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "15:00",
          "duration": "24 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-285-169-2757",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "11795b05-3a82-4f57-b6f8-f2b98b01dd2c",
      title: "Latest Hollywood Blockbusters",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: false,
        price: 42,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "15:00",
                "duration": "24 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "6199ee7f-c75b-45f2-9594-08c116ab9b98",
                "name": "Brooklyn Dixon",
                "role": "Projectionist",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/63.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Harry Jennings",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-661",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Austin Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-93",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Tyler Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-583",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Logan Cooper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-325",
        },
        {
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Alexander Dean",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-1027",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Deborah Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "-243",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Johnny Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-754",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Elena Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-583",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Elizabeth Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-768",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Eugene Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-1040",
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
    isPopular: true
  },
  {
    id: "4d1f7380-9dab-4daa-862a-20e65a9ad085",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "Family-friendly movies perfect for all ages",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "02:00",
          "duration": "12 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-324-932-3312",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1c3920d9-3e86-4293-ac61-5d7ae95f0976",
      title: "Midnight Movie Screening",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: false,
        price: 45,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "83 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "02:00",
                "duration": "12 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "4f1e490f-4ca4-4755-9a4d-a8a37cf0dcc0",
                "name": "Genesis Graves",
                "role": "Film Curator",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/40.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Aaliyah Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-456",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Billy Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-1073",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Jeffrey Stewart",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-201",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Gregory Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-129",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Brenda Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4,
          date: "8",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Austin Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-767",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "66033676-b2a7-430a-91c3-e109a763e8d2",
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
    id: "4d1f7380-9dab-4daa-862a-20e65a9ad085",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Romantic films perfect for date night",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "17:00",
          "duration": "1 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-972-282-2417",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "78821b45-427f-402b-8d5f-d3ce605992d2",
      title: "Romantic Movie Evening",
      description: "Romantic films perfect for date night",
      tickets: {
        isRequired: false,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "17:00",
                "duration": "1 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "a460ac65-71f8-4b4e-8b17-a41572b50761",
                "name": "Emily Baker",
                "role": "Film Critic",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/29.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Naomi Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "-597",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Rachel Murray",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-239",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Vincent Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-219",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Andrew Campbell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-213",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Scott Gibson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-93",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Virginia Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-664",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Ellie Coleman",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-84",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Carlos Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-353",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Stephen Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-584",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Jason Price",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 5,
          date: "-233",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "02280bb0-1797-46ab-986e-5c6886cf36e8",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 20,
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
    id: "4d1f7380-9dab-4daa-862a-20e65a9ad085",
    category: "Movie Theater",
    name: "Oscar Winners Showcase",
    description: "Romantic films perfect for date night",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "09:00",
          "duration": "18 hours",
          "description": "Oscar Winners Showcase performance times"
    },
    contact: {
      contactNumber: "+1-210-207-3176",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f3c2d76d-6e72-4cf5-8998-30cd698e2007",
      title: "Oscar Winners Showcase",
      description: "Romantic films perfect for date night",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "09:00",
                "duration": "18 hours",
                "description": "Oscar Winners Showcase performance times"
        }],
      performers: [        {
                "id": "4d170268-fcde-4870-9423-403e84623688",
                "name": "Robert Morgan",
                "role": "Film Curator",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/5.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
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
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Russell Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-395",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Rebecca Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-239",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Ashley Stewart",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-919",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Nathan Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-1064",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Zola Payne",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-477",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Amanda Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-1031",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Raymond Payne",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-898",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Zola Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-1054",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Marcus Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-415",
        },
        {
          quote: "The Oscar Winners Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Christopher Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-693",
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
  }
];
