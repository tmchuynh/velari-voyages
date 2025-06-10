// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "0b865640-724c-4cb6-9399-2d347cff7a34",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Romantic films perfect for date night",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "17:00",
          "duration": "3 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-699-938-1149",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "eeff8bce-7883-407f-98aa-d71977e7bfce",
      title: "Comedy Film Festival",
      description: "Romantic films perfect for date night",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "99 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "17:00",
                "duration": "3 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "f81dcda3-6837-4c26-9f4c-798e5c24268b",
                "name": "Roy Lawson",
                "role": "Theater Manager",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/12.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Harold Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 4,
          date: "-548",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Jack Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-210",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Evelyn Douglas",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-642",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Maya Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-544",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Aaliyah Dean",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-677",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Johnny Price",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-1078",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Nicholas Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-1061",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Gabriel Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-538",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Melissa Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-374",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Christine Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-81",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2c7a2b6a-5d51-43d9-9940-d4402151fd71",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
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
    id: "0b865640-724c-4cb6-9399-2d347cff7a34",
    category: "Movie Theater",
    name: "Indie Film Spotlight",
    description: "Independent films from emerging filmmakers",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "19:00",
          "duration": "3 hours",
          "description": "Indie Film Spotlight performance times"
    },
    contact: {
      contactNumber: "+1-476-178-9750",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9e727360-3daa-453e-9a3a-79c3c09cf143",
      title: "Indie Film Spotlight",
      description: "Independent films from emerging filmmakers",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "97 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "19:00",
                "duration": "3 hours",
                "description": "Indie Film Spotlight performance times"
        }],
      performers: [        {
                "id": "50c94969-4bbc-4340-bb0a-70066d42722e",
                "name": "Zachary Douglas",
                "role": "Projectionist",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/28.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Scarlett Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-502",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Henry Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-1001",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Christine Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 4,
          date: "-819",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Michelle Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-12",
        },
        {
          quote: "The Indie Film Spotlight screening was wonderful. Love having a cinema on the ship!",
          author: "Ronald Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-716",
        },
        {
          quote: "The Indie Film Spotlight screening was wonderful. Love having a cinema on the ship!",
          author: "Johnny Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-298",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Joan Palmer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 5,
          date: "-959",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Joe Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-383",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Katherine Nash",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "-31",
        },
        {
          quote: "The Indie Film Spotlight screening was wonderful. Love having a cinema on the ship!",
          author: "Christopher Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-810",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f698b270-69ac-4407-8e6e-53376c853feb",
              "name": "Popcorn Bucket",
              "description": "Souvenir popcorn bucket",
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
    id: "0b865640-724c-4cb6-9399-2d347cff7a34",
    category: "Movie Theater",
    name: "Family Movie Time",
    description: "Independent films from emerging filmmakers",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "07:00",
          "duration": "17 hours",
          "description": "Family Movie Time performance times"
    },
    contact: {
      contactNumber: "+1-997-353-8081",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c9190c6a-7b13-4fd9-9e9a-595d03daf6c7",
      title: "Family Movie Time",
      description: "Independent films from emerging filmmakers",
      tickets: {
        isRequired: false,
        price: 20,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "77 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "07:00",
                "duration": "17 hours",
                "description": "Family Movie Time performance times"
        }],
      performers: [        {
                "id": "c2394c9a-bfc8-400e-9757-e6c5cd08adef",
                "name": "Ellie Day",
                "role": "Film Curator",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/55.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Henry Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-755",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Victoria Curtis",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-156",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Ellie Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 4,
          date: "-150",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Austin Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-71",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Madelyn Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-112",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Jason Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-497",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "cc36a708-010e-4502-bf18-1e2157b1d896",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 12,
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
    id: "0b865640-724c-4cb6-9399-2d347cff7a34",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "High-octane action movies with stunning visuals",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "10:00",
          "duration": "19 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-927-640-7554",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7dcd8d65-cd25-4a67-9162-a1ad59cdb2f1",
      title: "Comedy Film Festival",
      description: "High-octane action movies with stunning visuals",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "116 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "10:00",
                "duration": "19 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "c7f64df6-24e7-4233-8ef9-6912a1f721e5",
                "name": "George Curtis",
                "role": "Theater Manager",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/64.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Emily Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 5,
          date: "-524",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Victoria Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-1017",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Wei Gibson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-738",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Larry Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 4,
          date: "-789",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Eleanor Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-84",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Luis Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5,
          date: "-805",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jeffrey Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-90",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Wei Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-906",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Emma Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-858",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "274f6554-8e03-4905-be68-6706ae954f80",
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
    id: "0b865640-724c-4cb6-9399-2d347cff7a34",
    category: "Movie Theater",
    name: "Oscar Winners Showcase",
    description: "Late-night cult classics and special screenings",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "02:00",
          "duration": "12 hours",
          "description": "Oscar Winners Showcase performance times"
    },
    contact: {
      contactNumber: "+1-618-610-4323",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4516bcc2-bc34-4b62-9a38-544abb0f99e0",
      title: "Oscar Winners Showcase",
      description: "Late-night cult classics and special screenings",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "88 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "02:00",
                "duration": "12 hours",
                "description": "Oscar Winners Showcase performance times"
        }],
      performers: [        {
                "id": "7ae899c3-02ef-4847-aec3-cce2e50ba3c6",
                "name": "Andrew Hudson",
                "role": "Projectionist",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/4.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          author: "Matthew Fisher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-425",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Darrell Reeves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-983",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Patricia Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 5,
          date: "-612",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Oliver Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-992",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Mateo Hamilton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-368",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Victor Warren",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-446",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Janet Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-901",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Zoe Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-792",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Rajesh Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/26.jpg",
          rating: 5,
          date: "-932",
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
    id: "0b865640-724c-4cb6-9399-2d347cff7a34",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Recent box office hits shown on the big screen",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "11:00",
          "duration": "20 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-306-328-1230",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "27d6a504-7ecf-4073-b720-52f3dea082ee",
      title: "Romantic Movie Evening",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "118 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "11:00",
                "duration": "20 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "2c91b1ab-5c9e-4438-b7e5-c30df85ed83d",
                "name": "Sandra Ellis",
                "role": "Theater Manager",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/37.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
                "specialties": [
                        "Film Curator",
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
          author: "Avery Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-591",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Skylar Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-1022",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Peter Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 5,
          date: "-88",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Michael Chambers",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-510",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Lawrence Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-407",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Richard Day",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-503",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Gabriel Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-729",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Nathan Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-340",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Isabella Griffin",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-594",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "97e4397e-6195-4399-8376-38c6f10131e9",
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
        question: "Are the movies shown with subtitles?",
        answer: "English films are shown without subtitles. Foreign films may include English subtitles.",
      },
      {
        question: "What movies are shown during the cruise?",
        answer: "We feature a mix of current releases, classic films, and family favorites. The schedule is available in your daily program.",
      }
    ],
    isPopular: true
  },
  {
    id: "0b865640-724c-4cb6-9399-2d347cff7a34",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Late-night cult classics and special screenings",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "08:00",
          "duration": "18 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-506-480-6425",
      contactEmail: "connect@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2d69ff1b-8205-498d-869a-02f805a5c225",
      title: "Romantic Movie Evening",
      description: "Late-night cult classics and special screenings",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "81 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "08:00",
                "duration": "18 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "be654968-9dfd-4d3e-9d3e-0013e357ab65",
                "name": "Austin Day",
                "role": "Theater Manager",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/55.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
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
          author: "Brooklyn Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-900",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Mason Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-585",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Timothy West",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-816",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Samantha Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 5,
          date: "-1048",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Janet Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-16",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Douglas Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-907",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "e683ba0a-d2ad-44a5-82db-504214ab19fc",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
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
    isPopular: false
  },
  {
    id: "0b865640-724c-4cb6-9399-2d347cff7a34",
    category: "Movie Theater",
    name: "Oscar Winners Showcase",
    description: "International cinema featuring subtitled masterpieces",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "11:00",
          "duration": "19 hours",
          "description": "Oscar Winners Showcase performance times"
    },
    contact: {
      contactNumber: "+1-262-923-7299",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "17c7a1ca-80e4-4371-92f2-ab6464433cc2",
      title: "Oscar Winners Showcase",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: false,
        price: 39,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "86 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "11:00",
                "duration": "19 hours",
                "description": "Oscar Winners Showcase performance times"
        }],
      performers: [        {
                "id": "325325fe-ce24-49c7-ace7-f3010a5c1ae7",
                "name": "Roy Baker",
                "role": "Film Curator",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/23.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Ariana Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-97",
        },
        {
          quote: "The Oscar Winners Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Michelle Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-350",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Sarah Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "-970",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Pamela Cooper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-861",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Gerald Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-61",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Ariana Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-714",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Riley Hall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-1062",
        },
        {
          quote: "The Oscar Winners Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Johnny Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-171",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
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
    id: "0b865640-724c-4cb6-9399-2d347cff7a34",
    category: "Movie Theater",
    name: "Foreign Film Festival",
    description: "Family-friendly movies perfect for all ages",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "21:00",
          "duration": "5 hours",
          "description": "Foreign Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-326-772-3872",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6ceff0de-a0be-4c1f-af2d-c1d500b9ffa6",
      title: "Foreign Film Festival",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "82 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "21:00",
                "duration": "5 hours",
                "description": "Foreign Film Festival performance times"
        }],
      performers: [        {
                "id": "3cdd83d6-c0e6-4be0-a517-5e0bafddcce1",
                "name": "Nicholas Reed",
                "role": "Film Curator",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/32.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          author: "Joan Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 4,
          date: "-530",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Carl Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-1029",
        },
        {
          quote: "The Foreign Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Jennifer Jennings",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 5,
          date: "-930",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Alan Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-728",
        },
        {
          quote: "The Foreign Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Johnny Murray",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-626",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Justin Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-137",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Ryan Hawkins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-732",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Christopher Knight",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-579",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "36fdc831-bff9-493a-848a-ae3463dc6262",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 12,
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
  }
];
