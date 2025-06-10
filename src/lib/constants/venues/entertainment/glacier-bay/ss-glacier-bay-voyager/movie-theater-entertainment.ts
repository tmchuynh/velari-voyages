// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "ded9149d-9728-4d5f-829d-b3d0f6226bfd",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "Romantic films perfect for date night",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "08:00",
          "duration": "16 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-963-394-8312",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3e3702e8-7aaa-4734-8a69-308eb02af9c2",
      title: "Latest Hollywood Blockbusters",
      description: "Romantic films perfect for date night",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "71 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "08:00",
                "duration": "16 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "1d3451aa-ebd0-4823-99ee-42403aae6c96",
                "name": "Darrell Cooper",
                "role": "Projectionist",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/9.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          author: "Bruce Ellis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-543",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Michael Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-1061",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Linda Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-153",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Ethan Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-953",
        },
        {
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Anthony Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-499",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Kyle Henderson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4,
          date: "-78",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Sean Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-381",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Joshua Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-572",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Sarah Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-599",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "fd16339f-4955-48f5-ada0-eee4dff48ab7",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
              "price": 3,
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
    id: "ded9149d-9728-4d5f-829d-b3d0f6226bfd",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "20:00",
          "duration": "6 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-488-292-2776",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4a6cc765-bf4a-4bdb-a0ea-148f68dd3486",
      title: "Comedy Film Festival",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "20:00",
                "duration": "6 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "69ed048c-2a6d-4360-8bb6-d3d6921561ff",
                "name": "Isabella Fisher",
                "role": "Projectionist",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/14.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
                "specialties": [
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
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Harper Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-54",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Russell Fletcher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-4",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Skylar Day",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-967",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Stephen Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-819",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Roger Crawford",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-872",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Nomsa Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 5,
          date: "-763",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Jeremy Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-198",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Janet Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-189",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "75739b1c-7849-463f-bc4e-5adfd8e98cb0",
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
  },
  {
    id: "ded9149d-9728-4d5f-829d-b3d0f6226bfd",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Romantic films perfect for date night",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "11:00",
          "duration": "21 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-872-665-3656",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6b13b993-3b83-4c5b-ac07-fa4ef9cdd3d6",
      title: "Comedy Film Festival",
      description: "Romantic films perfect for date night",
      tickets: {
        isRequired: true,
        price: 22,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "11:00",
                "duration": "21 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "50691a4d-2cc5-43c4-b8b3-23e07e25ca28",
                "name": "Zachary Porter",
                "role": "Theater Manager",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/15.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
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
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Abigail Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-542",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Margaret Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-196",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Christopher Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-960",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Kennedy West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-1054",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "William Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-184",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Terry Maxwell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 5,
          date: "-703",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Peter Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-1071",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Matthew Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-13",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Stephen Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-877",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Chloe Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-377",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "cd827edb-aa5a-4ee5-a445-95f008939948",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
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
    isPopular: true
  },
  {
    id: "ded9149d-9728-4d5f-829d-b3d0f6226bfd",
    category: "Movie Theater",
    name: "Foreign Film Festival",
    description: "Academy Award-winning films and performances",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "12:00",
          "duration": "20 hours",
          "description": "Foreign Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-719-841-3691",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "033a1a7c-f4b3-4b63-8813-d36d81c064fe",
      title: "Foreign Film Festival",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "70 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "12:00",
                "duration": "20 hours",
                "description": "Foreign Film Festival performance times"
        }],
      performers: [        {
                "id": "2ce2a08d-2ba0-4686-884c-f9a5ef222953",
                "name": "Amy Graves",
                "role": "Theater Manager",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/11.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          author: "Hannah Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-218",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Kennedy Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-549",
        },
        {
          quote: "The Foreign Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Rebecca Nash",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 4,
          date: "-324",
        },
        {
          quote: "The Foreign Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Willie Dunn",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 4,
          date: "-247",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Liam Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-110",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Adeline Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-551",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Lisa Porter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-283",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Sean Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-784",
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
    id: "ded9149d-9728-4d5f-829d-b3d0f6226bfd",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "Recent box office hits shown on the big screen",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "10:00",
          "duration": "19 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-518-900-8121",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7fd73fad-06fa-4e0e-bbfb-d0ce6f7f5175",
      title: "Classic Movie Night",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "69 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "10:00",
                "duration": "19 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "0bb616af-f0c5-4c56-88cb-fe071dace7d5",
                "name": "Luis Maxwell",
                "role": "Film Curator",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/60.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
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
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Samantha Murray",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-203",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Gabriella Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-195",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Maya Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-968",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Jennifer Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-678",
        },
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Sarah Morgan",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-623",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f3e945cc-64a6-4030-9319-34ac9cf92318",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
              "price": 4,
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
    id: "ded9149d-9728-4d5f-829d-b3d0f6226bfd",
    category: "Movie Theater",
    name: "Foreign Film Festival",
    description: "High-octane action movies with stunning visuals",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "09:00",
          "duration": "19 hours",
          "description": "Foreign Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-964-601-3113",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f9460b17-5cee-463a-b97e-347d735e7b6d",
      title: "Foreign Film Festival",
      description: "High-octane action movies with stunning visuals",
      tickets: {
        isRequired: false,
        price: 40,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "68 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "09:00",
                "duration": "19 hours",
                "description": "Foreign Film Festival performance times"
        }],
      performers: [        {
                "id": "454d39be-9d32-4c94-959b-cc79e47ce084",
                "name": "Victor Mitchell",
                "role": "Theater Manager",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/5.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
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
          author: "Sean Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-1013",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Scarlett Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-956",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Edward Montgomery",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-249",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Priya Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-86",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Donna Jennings",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-998",
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
    id: "ded9149d-9728-4d5f-829d-b3d0f6226bfd",
    category: "Movie Theater",
    name: "Indie Film Spotlight",
    description: "Academy Award-winning films and performances",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "06:00",
          "duration": "14 hours",
          "description": "Indie Film Spotlight performance times"
    },
    contact: {
      contactNumber: "+1-835-242-6516",
      contactEmail: "contact@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8620bd35-a224-4648-9b21-9e215e3e608c",
      title: "Indie Film Spotlight",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "98 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "06:00",
                "duration": "14 hours",
                "description": "Indie Film Spotlight performance times"
        }],
      performers: [        {
                "id": "75ff1972-9798-4f5c-af33-497ac02b7e32",
                "name": "Rajesh Mitchell",
                "role": "Film Curator",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/81.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
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
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Jonathan Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-552",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Abigail Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 4,
          date: "-287",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Aaron Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-998",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Carlos Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-993",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Aaron Hall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-165",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b3e71686-b4d7-42f3-ad20-56c3bb2aa244",
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
    id: "ded9149d-9728-4d5f-829d-b3d0f6226bfd",
    category: "Movie Theater",
    name: "Family Movie Time",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "17:00",
          "duration": "2 hours",
          "description": "Family Movie Time performance times"
    },
    contact: {
      contactNumber: "+1-740-755-8415",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5936d6e9-18f8-42fd-84a6-573458acc9c0",
      title: "Family Movie Time",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "107 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "17:00",
                "duration": "2 hours",
                "description": "Family Movie Time performance times"
        }],
      performers: [        {
                "id": "4b4ca510-cdaa-4067-a7e1-54cc326533a8",
                "name": "Brooklyn Payne",
                "role": "Projectionist",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/59.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Alan Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-523",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Kenneth Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-530",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Noah Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-386",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Nomsa Marshall",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 4,
          date: "-419",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Mateo Graham",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-1052",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Zola Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-316",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Walter Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-112",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Gabriel Griffin",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-526",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Samuel Stewart",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-367",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
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
    id: "ded9149d-9728-4d5f-829d-b3d0f6226bfd",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Academy Award-winning films and performances",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "21:00",
          "duration": "6 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-724-754-7138",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "dade13d4-76e2-4fdf-9976-6e31c3a45919",
      title: "Romantic Movie Evening",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "73 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "21:00",
                "duration": "6 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "46f71539-aff4-4a75-a824-5c8195ade342",
                "name": "Joel Douglas",
                "role": "Film Critic",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/77.jpg",
                "contact": {
                        "contactEmail": "customerservice@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          author: "Janet Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 5,
          date: "-51",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Stephanie Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-598",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Amelia Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-1020",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Christopher Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-64",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Noah Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-443",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Nicholas Graves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-177",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Emma Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-721",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Grace Foster",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 4,
          date: "-277",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5d968545-587b-4ce4-b2eb-a2d1571c6b4f",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
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
        question: "Are the movies shown with subtitles?",
        answer: "English films are shown without subtitles. Foreign films may include English subtitles.",
      },
      {
        question: "What movies are shown during the cruise?",
        answer: "We feature a mix of current releases, classic films, and family favorites. The schedule is available in your daily program.",
      }
    ],
    isPopular: true
  }
];
