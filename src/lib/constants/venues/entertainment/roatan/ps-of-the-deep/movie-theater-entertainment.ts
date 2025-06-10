// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "513a3154-f016-4ba8-b60a-d7907dd26518",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "Hilarious comedy films to brighten your evening",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "19:00",
          "duration": "5 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-635-486-5375",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3598166d-6ce5-464b-b11e-a1dca0ea5a4e",
      title: "Classic Movie Night",
      description: "Hilarious comedy films to brighten your evening",
      tickets: {
        isRequired: true,
        price: 31,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "72 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "19:00",
                "duration": "5 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "8df84c5f-f8ba-4ce7-852a-63f3d0ade8e2",
                "name": "Samantha Hayes",
                "role": "Projectionist",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/68.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          author: "Naomi Reeves",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/13.jpg",
          rating: 4,
          date: "-916",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Randy Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 5,
          date: "-929",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Kimberly Palmer",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-1081",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Andrew Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-77",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Kennedy Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 4,
          date: "-740",
        },
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Vincent Coleman",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-175",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Scott Porter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-166",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Alexa Fletcher",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-450",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Mia Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-37",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b79494d8-1735-4228-9a89-6312d18a11bc",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 22,
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
    id: "513a3154-f016-4ba8-b60a-d7907dd26518",
    category: "Movie Theater",
    name: "Action Movie Marathon",
    description: "Educational and inspiring documentary films",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "19:00",
          "duration": "5 hours",
          "description": "Action Movie Marathon performance times"
    },
    contact: {
      contactNumber: "+1-680-566-5734",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "0d161c30-74f6-4ed4-84ea-e0827f4fc773",
      title: "Action Movie Marathon",
      description: "Educational and inspiring documentary films",
      tickets: {
        isRequired: false,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "113 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "19:00",
                "duration": "5 hours",
                "description": "Action Movie Marathon performance times"
        }],
      performers: [        {
                "id": "b2bee8ff-7ddd-48ed-aa64-0084f1d5846c",
                "name": "Amanda Campbell",
                "role": "Theater Manager",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/56.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Billy Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "6",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Gerald Morgan",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-905",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Jessica Fisher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-398",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Aria Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-621",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Harold Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-236",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Olivia Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 5,
          date: "-823",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5e7e8fe4-7525-4ab2-acee-0f7c5d59a6f8",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
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
    id: "513a3154-f016-4ba8-b60a-d7907dd26518",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Academy Award-winning films and performances",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "10:00",
          "duration": "20 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-229-378-4230",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6f3f1b69-f18b-4a89-a310-e7d04626789b",
      title: "Comedy Film Festival",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: false,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "72 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "10:00",
                "duration": "20 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "f9074788-1dea-432d-96e7-9ac731abcc8a",
                "name": "Gabriel Marshall",
                "role": "Projectionist",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/77.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          author: "Jacob Marshall",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "-223",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Olivia Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-955",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Elizabeth Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-281",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Emma Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-667",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Douglas Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-1023",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Larry Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-314",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Harry Dean",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-1013",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Antonio Carpenter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 4,
          date: "-861",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Oliver Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-482",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Larry Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-292",
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
    id: "513a3154-f016-4ba8-b60a-d7907dd26518",
    category: "Movie Theater",
    name: "Oscar Winners Showcase",
    description: "Educational and inspiring documentary films",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "02:00",
          "duration": "11 hours",
          "description": "Oscar Winners Showcase performance times"
    },
    contact: {
      contactNumber: "+1-507-735-8481",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f2435e8c-290e-4d23-b071-6f3d72c3c891",
      title: "Oscar Winners Showcase",
      description: "Educational and inspiring documentary films",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "90 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "02:00",
                "duration": "11 hours",
                "description": "Oscar Winners Showcase performance times"
        }],
      performers: [        {
                "id": "b78a7578-5799-4efb-a6fc-78957ba9a2c2",
                "name": "Joshua Cooper",
                "role": "Film Critic",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/8.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          author: "Patricia Keller",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-582",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Aaliyah Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 4,
          date: "-804",
        },
        {
          quote: "The Oscar Winners Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Jordan Wallace",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          rating: 5,
          date: "-730",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Nora Foster",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-934",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Vincent Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-320",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Grace Carpenter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-633",
        },
        {
          quote: "The Oscar Winners Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Linda Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 5,
          date: "-735",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Mary Palmer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "-303",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Matthew Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 4,
          date: "-791",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Alice Wells",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/83.jpg",
          rating: 4,
          date: "-72",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "03c1affa-9a9d-4638-906c-1bf50c26cd43",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
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
    id: "513a3154-f016-4ba8-b60a-d7907dd26518",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "Animated movies for kids and adults alike",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "18:00",
          "duration": "2 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-813-362-6659",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e914485b-0077-470b-9214-38bdbbd1584b",
      title: "Documentary Showcase",
      description: "Animated movies for kids and adults alike",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "95 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "18:00",
                "duration": "2 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "027751ba-20ef-404a-9e3a-2d13e7ff3893",
                "name": "Sarah Hayes",
                "role": "Projectionist",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/7.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
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
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Roy Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 4,
          date: "-1057",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Logan Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-720",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Matthew Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 5,
          date: "-681",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Savannah Wallace",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-1034",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Steven Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-1047",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Chloe Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4,
          date: "-699",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Peter Collins",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-1060",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "adf647cf-a232-4f5d-87ac-7ec9747fd308",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
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
    isPopular: true
  },
  {
    id: "513a3154-f016-4ba8-b60a-d7907dd26518",
    category: "Movie Theater",
    name: "Action Movie Marathon",
    description: "Animated movies for kids and adults alike",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "10:00",
          "duration": "18 hours",
          "description": "Action Movie Marathon performance times"
    },
    contact: {
      contactNumber: "+1-685-933-4372",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fa1ebbf9-ff7f-45bc-aea6-e1ad1ecbc85e",
      title: "Action Movie Marathon",
      description: "Animated movies for kids and adults alike",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "103 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "10:00",
                "duration": "18 hours",
                "description": "Action Movie Marathon performance times"
        }],
      performers: [        {
                "id": "8b4cfa23-1b1d-4962-82e5-af46654cd808",
                "name": "Jose Stewart",
                "role": "Theater Manager",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/13.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Victor Sutton",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-103",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Luis Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-115",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Rachel Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-255",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Jordan Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 4,
          date: "-193",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Daniel Hawkins",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-544",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Elena Reeves",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-532",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "38f94125-9212-4a53-9459-95ec1d3300a5",
              "name": "Popcorn Bucket",
              "description": "Souvenir popcorn bucket",
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
