// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "92bd51ab-69cb-4e4d-83c4-1b79428148ce",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Independent films from emerging filmmakers",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "22:00",
          "duration": "6 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-744-736-2313",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "df5d8670-5c1a-44bf-bad9-e6ad47b9fe16",
      title: "Comedy Film Festival",
      description: "Independent films from emerging filmmakers",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "120 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "22:00",
                "duration": "6 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "d5988300-0d24-4b7b-83a1-508922007b18",
                "name": "Claire Hall",
                "role": "Film Curator",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/49.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          author: "Jeremy Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-162",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Ellie Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-819",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Timothy Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-632",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "George Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-931",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "William Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          rating: 4,
          date: "-25",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Aaron Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-438",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Valentina Grant",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-883",
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
    id: "92bd51ab-69cb-4e4d-83c4-1b79428148ce",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "Animated movies for kids and adults alike",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "02:00",
          "duration": "11 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-879-343-9757",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ee6f0e9e-0d5c-448d-a3f8-472ecf5c7ee9",
      title: "Midnight Movie Screening",
      description: "Animated movies for kids and adults alike",
      tickets: {
        isRequired: false,
        price: 37,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "88 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "02:00",
                "duration": "11 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "5465e23e-10f4-41f4-b37a-84dd403d5d66",
                "name": "Larry Marshall",
                "role": "Projectionist",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/14.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          author: "Carlos Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-690",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Sofia Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "10",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Jacob Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-700",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Elena Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-474",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Albert Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-71",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Naomi Fox",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-745",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Riley Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 4,
          date: "-835",
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
    id: "92bd51ab-69cb-4e4d-83c4-1b79428148ce",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Hilarious comedy films to brighten your evening",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "10:00",
          "duration": "19 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-278-138-3191",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3cc965e8-ea6e-455b-8015-e325def3e565",
      title: "Comedy Film Festival",
      description: "Hilarious comedy films to brighten your evening",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "118 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "10:00",
                "duration": "19 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "9c0984af-6bda-49c6-b3ae-6dc0cb7ce170",
                "name": "Amelia Grant",
                "role": "Theater Manager",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/40.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Austin Collins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 5,
          date: "-337",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Joseph Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-800",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Billy Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-3",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Diego Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-860",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Billy Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-496",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Henry Russell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 4,
          date: "-976",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "George Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-224",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Skylar Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5,
          date: "-274",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Ella Gardner",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 5,
          date: "-1046",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8c585df8-acdb-4b38-8399-88062cbbb349",
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
    id: "92bd51ab-69cb-4e4d-83c4-1b79428148ce",
    category: "Movie Theater",
    name: "Oscar Winners Showcase",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "09:00",
          "duration": "17 hours",
          "description": "Oscar Winners Showcase performance times"
    },
    contact: {
      contactNumber: "+1-456-496-3561",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "60650e02-f2c4-4501-89fe-2a4f4d29be59",
      title: "Oscar Winners Showcase",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "93 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "09:00",
                "duration": "17 hours",
                "description": "Oscar Winners Showcase performance times"
        }],
      performers: [        {
                "id": "b178d32f-36d6-4fce-b629-ebc521caea79",
                "name": "Albert Hayes",
                "role": "Projectionist",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/5.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Tyler Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-896",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Amina Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          rating: 4,
          date: "-493",
        },
        {
          quote: "The Oscar Winners Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Emily Stewart",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-898",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Thandiwe Keller",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-735",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Alexander Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-580",
        },
        {
          quote: "The Oscar Winners Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Virginia Fox",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-497",
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
    id: "92bd51ab-69cb-4e4d-83c4-1b79428148ce",
    category: "Movie Theater",
    name: "Action Movie Marathon",
    description: "Family-friendly movies perfect for all ages",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "09:00",
          "duration": "17 hours",
          "description": "Action Movie Marathon performance times"
    },
    contact: {
      contactNumber: "+1-579-291-3759",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9a58c563-3d89-4df5-ae31-fe498b2467a0",
      title: "Action Movie Marathon",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: true,
        price: 18,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "100 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "09:00",
                "duration": "17 hours",
                "description": "Action Movie Marathon performance times"
        }],
      performers: [        {
                "id": "07ca41c9-d5b5-4b7a-b606-5bb31d697362",
                "name": "Alexander Reed",
                "role": "Film Curator",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/70.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
                "specialties": [
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
          author: "Betty Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-896",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Amina Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-484",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Roy Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5,
          date: "-862",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Richard Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-1025",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Andrew Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-592",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Blake Watson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-232",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Aaliyah Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-668",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Caroline Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 4,
          date: "-196",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jack Fox",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 5,
          date: "-396",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "07feeeef-8812-4f21-b17f-3a0555eb489b",
              "name": "Popcorn Bucket",
              "description": "Souvenir popcorn bucket",
              "price": 18,
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
    id: "92bd51ab-69cb-4e4d-83c4-1b79428148ce",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "Independent films from emerging filmmakers",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "19:00",
          "duration": "3 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-653-671-4561",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c8a7edb2-1b7b-480f-bab8-2969cbba71b6",
      title: "Classic Movie Night",
      description: "Independent films from emerging filmmakers",
      tickets: {
        isRequired: false,
        price: 39,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "110 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "19:00",
                "duration": "3 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "5d7dba66-ef98-4b96-907b-e5595feff5b9",
                "name": "Aaron Mitchell",
                "role": "Film Critic",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/24.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Jessica Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-264",
        },
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Evelyn Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-41",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Eleanor Douglas",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-421",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Keith Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-3",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Kyle Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-182",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Alice Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-514",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Peter West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-370",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "2bc0315f-5cb0-4fa4-a8ae-4113c7daf3e7",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
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
    isPopular: false
  }
];
