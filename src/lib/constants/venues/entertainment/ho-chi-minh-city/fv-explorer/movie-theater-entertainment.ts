// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "1b48dbb8-fb3b-45be-a4bc-974e3b044430",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Recent box office hits shown on the big screen",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "10:00",
          "duration": "18 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-448-368-2703",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c9c2d84f-afca-4322-a68f-c29030544f7f",
      title: "Comedy Film Festival",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "79 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "10:00",
                "duration": "18 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "98babb8f-a46c-4c1d-be5a-04c93b86f1c9",
                "name": "Thomas Carpenter",
                "role": "Projectionist",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/46.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          author: "Anna Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-260",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Matthew Dunn",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-683",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Carl Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 4,
          date: "-848",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jerry Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-582",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "George Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-358",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Thomas Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-628",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Catherine Collins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 4,
          date: "-233",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Nicholas Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 4,
          date: "-58",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Gabriel Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-229",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Elizabeth Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-452",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "45111c57-9f5f-4594-a8b8-35d6dfc431a7",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 9,
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
    id: "1b48dbb8-fb3b-45be-a4bc-974e3b044430",
    category: "Movie Theater",
    name: "Oscar Winners Showcase",
    description: "Late-night cult classics and special screenings",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "12:00",
          "duration": "22 hours",
          "description": "Oscar Winners Showcase performance times"
    },
    contact: {
      contactNumber: "+1-652-245-8768",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "40a65687-d3ac-40aa-bef1-8fcb7f1d03dd",
      title: "Oscar Winners Showcase",
      description: "Late-night cult classics and special screenings",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "86 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "12:00",
                "duration": "22 hours",
                "description": "Oscar Winners Showcase performance times"
        }],
      performers: [        {
                "id": "80a0c634-c0a4-4d3c-9388-983d40ac6f3b",
                "name": "Christopher Lawson",
                "role": "Theater Manager",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/73.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          author: "Ethan Charlotte",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-217",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Pamela Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 5,
          date: "-452",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Ryan Price",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-289",
        },
        {
          quote: "The Oscar Winners Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Philip Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-885",
        },
        {
          quote: "The Oscar Winners Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Steven Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-359",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Sofia Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-1049",
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
    id: "1b48dbb8-fb3b-45be-a4bc-974e3b044430",
    category: "Movie Theater",
    name: "Family Movie Time",
    description: "Academy Award-winning films and performances",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "10:00",
          "duration": "19 hours",
          "description": "Family Movie Time performance times"
    },
    contact: {
      contactNumber: "+1-367-858-7003",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a92b57be-881b-4d16-8bdc-55b29f5c6b79",
      title: "Family Movie Time",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "94 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "10:00",
                "duration": "19 hours",
                "description": "Family Movie Time performance times"
        }],
      performers: [        {
                "id": "7a9310e2-fe56-439b-991c-9d8996d2fa43",
                "name": "David Reeves",
                "role": "Projectionist",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/41.jpg",
                "contact": {
                        "contactEmail": "feedback@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Eleanor Reed",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-242",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Henry Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-95",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Sean Porter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-25",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jose Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-617",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Zachary Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-501",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Olivia Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-575",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Javier Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          rating: 4,
          date: "-1079",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
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
    id: "1b48dbb8-fb3b-45be-a4bc-974e3b044430",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Independent films from emerging filmmakers",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "17:00",
          "duration": "3 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-808-759-5744",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e5492916-3b97-4370-bf03-4515e597f5bc",
      title: "Comedy Film Festival",
      description: "Independent films from emerging filmmakers",
      tickets: {
        isRequired: false,
        price: 37,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "92 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "17:00",
                "duration": "3 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "79f1708f-00af-4257-ae50-083d704d6d5b",
                "name": "Brooklyn Porter",
                "role": "Film Curator",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/43.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          author: "Helen Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-61",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Maya Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-782",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Samantha Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-261",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Joan Crawford",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-211",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Madelyn Russell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          rating: 5,
          date: "-808",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Valentina Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-615",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Ashley Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-800",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Carlos Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-1000",
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
    id: "1b48dbb8-fb3b-45be-a4bc-974e3b044430",
    category: "Movie Theater",
    name: "Action Movie Marathon",
    description: "Recent box office hits shown on the big screen",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "08:00",
          "duration": "16 hours",
          "description": "Action Movie Marathon performance times"
    },
    contact: {
      contactNumber: "+1-291-451-2639",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1cce6ab5-75f5-4bfa-9f17-6f83e6932760",
      title: "Action Movie Marathon",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "118 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "08:00",
                "duration": "16 hours",
                "description": "Action Movie Marathon performance times"
        }],
      performers: [        {
                "id": "90423d50-8bd0-4516-bec8-949196e7ae1b",
                "name": "Wei Gibson",
                "role": "Film Curator",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/16.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Logan Hudson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 5,
          date: "-130",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Sophia Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 5,
          date: "-223",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Jason Fisher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-442",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Dylan Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/27.jpg",
          rating: 5,
          date: "-380",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Victoria Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-934",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Logan Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-565",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Samantha Murray",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-671",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Ronald Hayes",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-440",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8df18e2c-781e-4634-831f-15873fa9fa02",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
              "price": 17,
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
    id: "1b48dbb8-fb3b-45be-a4bc-974e3b044430",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Family-friendly movies perfect for all ages",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "06:00",
          "duration": "15 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-570-244-2268",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b08444b5-15e8-4248-8068-9eee43ac2ffe",
      title: "Romantic Movie Evening",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "100 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "06:00",
                "duration": "15 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "99445ed9-67a4-4500-9ef1-6e6faf9beb34",
                "name": "Margaret Sutton",
                "role": "Film Critic",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/47.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          author: "Harry Day",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 4,
          date: "-627",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Anna Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "-789",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Victoria Knight",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-619",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Louis Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-374",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Bobby Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-714",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "1b971956-1c29-4d2d-90de-c8e426ab82a0",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 10,
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
    id: "1b48dbb8-fb3b-45be-a4bc-974e3b044430",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "Academy Award-winning films and performances",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "20:00",
          "duration": "6 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-896-644-1518",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9fc15a17-83df-4980-9281-949fa05aebef",
      title: "Documentary Showcase",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "79 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "20:00",
                "duration": "6 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "1953ce59-9424-4309-a935-034a76e9d63e",
                "name": "Gregory Palmer",
                "role": "Projectionist",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/81.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Julie Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-918",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Willie Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-72",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Gary Coleman",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-816",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Gerald Hamilton",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-603",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Gabriel Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-73",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Pamela Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 4,
          date: "-942",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Katherine Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-651",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Ariana Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/61.jpg",
          rating: 5,
          date: "-508",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Louis Murray",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-14",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "cee26c35-abd3-49fb-bf03-887ce6506379",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
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
    id: "1b48dbb8-fb3b-45be-a4bc-974e3b044430",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Late-night cult classics and special screenings",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "22:00",
          "duration": "6 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-676-647-4961",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "dcbbe1c8-b788-4ce2-bf00-b6863a0fa38c",
      title: "Comedy Film Festival",
      description: "Late-night cult classics and special screenings",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "70 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "22:00",
                "duration": "6 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "9cb239b9-39bf-4bf2-b22f-a365449e23b1",
                "name": "Catherine Parker",
                "role": "Projectionist",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/8.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Arthur Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-895",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Carol Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 4,
          date: "-834",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Cynthia Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "-785",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Gabriel Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-1032",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Tyler Ellis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-566",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Layla Hunter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-931",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "cf89437a-9837-42d4-87c5-371cffb7727c",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
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
    isPopular: false
  },
  {
    id: "1b48dbb8-fb3b-45be-a4bc-974e3b044430",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "International cinema featuring subtitled masterpieces",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "14:00",
          "duration": "24 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-700-410-7574",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "9ae87a0e-a99c-48fb-b7b1-e3ae8ed3b20a",
      title: "Documentary Showcase",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "79 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "14:00",
                "duration": "24 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "1f7d99fa-363d-403d-b96c-dff20220e67f",
                "name": "Scott Payne",
                "role": "Film Curator",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/47.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          author: "Anthony Fletcher",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-646",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Matthew Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-1060",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Janet Reeves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-431",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Jacob Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-31",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Sophia Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-343",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Genesis Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-632",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Victor Henderson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-477",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "2907c187-318a-413a-9388-032823e464bc",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
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
    isPopular: true
  }
];
