// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "03f4c0de-a788-4246-a122-304a3f6f18cc",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Animated movies for kids and adults alike",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "13:00",
          "duration": "21 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-646-751-3371",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2e888997-9111-4578-b346-3b195252761e",
      title: "Romantic Movie Evening",
      description: "Animated movies for kids and adults alike",
      tickets: {
        isRequired: true,
        price: 18,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "70 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "13:00",
                "duration": "21 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "d80f5227-d321-476a-833b-e23ad85a1937",
                "name": "Kevin Henderson",
                "role": "Projectionist",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/67.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          author: "Virginia Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-79",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Gabriel Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-216",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Randy Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-73",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Thandiwe Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "-219",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Linda Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-467",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Nathan Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-557",
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
    id: "03f4c0de-a788-4246-a122-304a3f6f18cc",
    category: "Movie Theater",
    name: "Action Movie Marathon",
    description: "Educational and inspiring documentary films",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "20:00",
          "duration": "4 hours",
          "description": "Action Movie Marathon performance times"
    },
    contact: {
      contactNumber: "+1-304-996-5067",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0d7c075c-1127-4a91-8bd6-5c17a98eadbf",
      title: "Action Movie Marathon",
      description: "Educational and inspiring documentary films",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "20:00",
                "duration": "4 hours",
                "description": "Action Movie Marathon performance times"
        }],
      performers: [        {
                "id": "e0530205-f997-4067-adac-0dc3cefc37a9",
                "name": "Benjamin Warren",
                "role": "Film Curator",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/19.jpg",
                "contact": {
                        "contactEmail": "help@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Brian Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-1072",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Wayne Palmer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-800",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Chloe Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-233",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Jordan Warren",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-1043",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Peter Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-464",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Caroline Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 5,
          date: "-556",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Aaliyah Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-103",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "10574595-9508-432b-8ba1-75d13fc2c2ac",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 11,
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
    id: "03f4c0de-a788-4246-a122-304a3f6f18cc",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "Romantic films perfect for date night",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "08:00",
          "duration": "17 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-343-204-4860",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a8c3faaa-1d50-41ff-922e-1e1b3f0fe5c2",
      title: "Classic Movie Night",
      description: "Romantic films perfect for date night",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "112 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "08:00",
                "duration": "17 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "4ce40593-b45d-4322-a577-e22e193ab077",
                "name": "Laura Stewart",
                "role": "Theater Manager",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/60.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Scott Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/78.jpg",
          rating: 5,
          date: "-108",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Roy Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "3",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Zoe Mitchell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-420",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Amelia Dunn",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-678",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Miguel Crawford",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-207",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Anthony Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-389",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Tyler Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-492",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1000b916-68a1-4583-bcdd-4b21c054ab2c",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 10,
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
    isPopular: true
  },
  {
    id: "03f4c0de-a788-4246-a122-304a3f6f18cc",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "Independent films from emerging filmmakers",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "20:00",
          "duration": "4 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-726-666-9914",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c5c7cebe-e12d-4ad8-a41a-20b19cb42eae",
      title: "Classic Movie Night",
      description: "Independent films from emerging filmmakers",
      tickets: {
        isRequired: false,
        price: 29,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "20:00",
                "duration": "4 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "f73f1c95-27bc-4412-ba0b-3f0e6f6ebf70",
                "name": "Madelyn Russell",
                "role": "Theater Manager",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/53.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Projectionist",
                        "Film Curator",
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
          author: "Nora Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-964",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Gerald Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-495",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Zola Gardner",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-249",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Laura Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-489",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Amelia Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-185",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Frank Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-938",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Willie Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-640",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Anna Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/78.jpg",
          rating: 5,
          date: "-307",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Laura Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-921",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Keith West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-546",
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
    id: "03f4c0de-a788-4246-a122-304a3f6f18cc",
    category: "Movie Theater",
    name: "Animation Celebration",
    description: "Family-friendly movies perfect for all ages",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "05:00",
          "duration": "14 hours",
          "description": "Animation Celebration performance times"
    },
    contact: {
      contactNumber: "+1-487-389-7286",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3ac34486-fbc9-451c-a2fe-0af86b4f79ec",
      title: "Animation Celebration",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "05:00",
                "duration": "14 hours",
                "description": "Animation Celebration performance times"
        }],
      performers: [        {
                "id": "a4bdd4b6-98d4-44d9-98d9-7e70db27a3f0",
                "name": "Anna Hall",
                "role": "Projectionist",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/57.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "John Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-579",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Billy Spencer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 5,
          date: "-900",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Emily Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-151",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Olivia Price",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-421",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Valentina Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-177",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Alice Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-462",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Eleanor Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-611",
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
    isPopular: false
  },
  {
    id: "03f4c0de-a788-4246-a122-304a3f6f18cc",
    category: "Movie Theater",
    name: "Foreign Film Festival",
    description: "International cinema featuring subtitled masterpieces",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "14:00",
          "duration": "22 hours",
          "description": "Foreign Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-819-262-6310",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "32b01cef-55bb-444c-902d-0941527e7913",
      title: "Foreign Film Festival",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "67 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "14:00",
                "duration": "22 hours",
                "description": "Foreign Film Festival performance times"
        }],
      performers: [        {
                "id": "b154cd78-42e9-4dec-8d57-5e6deb4f0855",
                "name": "Terry Hamilton",
                "role": "Theater Manager",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/47.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
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
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Dylan Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-353",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Mason Olivia",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 5,
          date: "-56",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Gabriella Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-853",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Lisa Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-58",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Amina Hall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-890",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Amina Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-441",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Jonathan Russell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-904",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "28e26030-cbba-4f8c-b75b-4b215d3cafcf",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 12,
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
    id: "03f4c0de-a788-4246-a122-304a3f6f18cc",
    category: "Movie Theater",
    name: "Action Movie Marathon",
    description: "Animated movies for kids and adults alike",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "20:00",
          "duration": "5 hours",
          "description": "Action Movie Marathon performance times"
    },
    contact: {
      contactNumber: "+1-339-126-9114",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b1775c4d-8526-4b13-a76b-d6eed230d0d1",
      title: "Action Movie Marathon",
      description: "Animated movies for kids and adults alike",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "20:00",
                "duration": "5 hours",
                "description": "Action Movie Marathon performance times"
        }],
      performers: [        {
                "id": "be47bbf4-d7b2-43ae-a6e3-3496eee7c9af",
                "name": "Terry Hamilton",
                "role": "Projectionist",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/73.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Emily Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 4,
          date: "-90",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "John Payne",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-358",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Katherine Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-638",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Claire Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-653",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Carl Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-643",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Jonathan Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-541",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Javier Gibson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-391",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b249721e-f071-4230-b822-81efae76e5fc",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
              "price": 8,
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
    id: "03f4c0de-a788-4246-a122-304a3f6f18cc",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "Late-night cult classics and special screenings",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "19:00",
          "duration": "5 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-262-124-5447",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9b464f6f-1353-423d-95c5-da5428768611",
      title: "Documentary Showcase",
      description: "Late-night cult classics and special screenings",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "64 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "19:00",
                "duration": "5 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "fa6053df-a1e6-40c6-870f-cdf821aeefc4",
                "name": "Genesis Clark",
                "role": "Theater Manager",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/5.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Kimberly Bennett",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-177",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Mia Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-370",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Catherine Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-74",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Layla Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-210",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Carl Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-22",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "c3f8e145-0e76-49b7-a9e6-4d576e8dabc2",
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
    isPopular: false
  }
];
