// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "55f70173-9d7e-4e48-a4a0-72ec40fe9cdf",
    category: "Movie Theater",
    name: "Oscar Winners Showcase",
    description: "High-octane action movies with stunning visuals",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "15:00",
          "duration": "1 hours",
          "description": "Oscar Winners Showcase performance times"
    },
    contact: {
      contactNumber: "+1-915-969-6422",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bcc9e511-530a-4fd5-a09c-0c0ea1e800cf",
      title: "Oscar Winners Showcase",
      description: "High-octane action movies with stunning visuals",
      tickets: {
        isRequired: false,
        price: 17,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "101 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "15:00",
                "duration": "1 hours",
                "description": "Oscar Winners Showcase performance times"
        }],
      performers: [        {
                "id": "c217734b-c60c-46c7-bfbd-318f499ed481",
                "name": "Logan Keller",
                "role": "Theater Manager",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/44.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Olivia Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/24.jpg",
          rating: 5,
          date: "-112",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Victoria Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-671",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Adam Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 5,
          date: "-870",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Carl Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5,
          date: "-440",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Arthur Mitchell",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "-405",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Nicole Hawkins",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-351",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Nancy Stewart",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-805",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "b3b8a7d5-e8fa-4b65-ba3a-3ed24436c0fe",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 17,
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
    id: "55f70173-9d7e-4e48-a4a0-72ec40fe9cdf",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "Family-friendly movies perfect for all ages",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "08:00",
          "duration": "16 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-955-814-1319",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "db13906e-d269-488d-a35c-d82adfa7ce42",
      title: "Midnight Movie Screening",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "08:00",
                "duration": "16 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "5671b770-d071-40ee-a21b-e567be3ac16d",
                "name": "Austin Gardner",
                "role": "Theater Manager",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/70.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Victor Jennings",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-444",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Emma Warren",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-1018",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Nora Gibson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-919",
        },
        {
          quote: "The Midnight Movie Screening screening was wonderful. Love having a cinema on the ship!",
          author: "Catherine Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-941",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Lawrence Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-82",
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
    id: "55f70173-9d7e-4e48-a4a0-72ec40fe9cdf",
    category: "Movie Theater",
    name: "Family Movie Time",
    description: "International cinema featuring subtitled masterpieces",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "03:00",
          "duration": "11 hours",
          "description": "Family Movie Time performance times"
    },
    contact: {
      contactNumber: "+1-619-836-8555",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "fbb3797e-0414-4d0f-9915-00282b3b48e9",
      title: "Family Movie Time",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: false,
        price: 37,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "96 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "03:00",
                "duration": "11 hours",
                "description": "Family Movie Time performance times"
        }],
      performers: [        {
                "id": "58533fa5-402d-4e1f-9a34-d7304dfe93ba",
                "name": "Janet Graves",
                "role": "Film Critic",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/27.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Alice Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-828",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Louis Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-235",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Grace Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 5,
          date: "-288",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Noah Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 5,
          date: "-120",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Chloe Montgomery",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-826",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Isabella Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-349",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Vincent Grant",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-510",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Samantha Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 5,
          date: "-127",
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
    id: "55f70173-9d7e-4e48-a4a0-72ec40fe9cdf",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "Family-friendly movies perfect for all ages",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "04:00",
          "duration": "13 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-563-766-6455",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c7d65d8a-4aad-4d86-a59c-83ab370c7593",
      title: "Classic Movie Night",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "72 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "04:00",
                "duration": "13 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "f67d3e52-f60b-43d8-9d9e-052317435778",
                "name": "Antonio Morgan",
                "role": "Film Curator",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/73.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
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
          author: "James Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 4,
          date: "-805",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Scarlett Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-948",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Christopher Baker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 4,
          date: "-281",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Thomas Clark",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 5,
          date: "-817",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Victor Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-54",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Noah Price",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-351",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Isabella Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-454",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "fc2e8c08-0add-4304-88b7-4f932b4cf13f",
              "name": "Popcorn Bucket",
              "description": "Souvenir popcorn bucket",
              "price": 19,
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
    id: "55f70173-9d7e-4e48-a4a0-72ec40fe9cdf",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "Family-friendly movies perfect for all ages",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "20:00",
          "duration": "5 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-863-136-3111",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "3b009a0c-8f9f-4f9d-afa2-f455c6d5381e",
      title: "Documentary Showcase",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "75 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "20:00",
                "duration": "5 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "41e59ee9-e07d-4d13-85a5-24d977b65687",
                "name": "Chloe Watson",
                "role": "Film Critic",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/48.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
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
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Alexander Watson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 4,
          date: "-72",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Brenda Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 4,
          date: "-211",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Victor Warren",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-685",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Benjamin West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-856",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Mason Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          rating: 5,
          date: "-314",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Victoria Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 4,
          date: "-188",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Brenda Foster",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 5,
          date: "-299",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Janet Ellis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/36.jpg",
          rating: 4,
          date: "-722",
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
    id: "55f70173-9d7e-4e48-a4a0-72ec40fe9cdf",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "Family-friendly movies perfect for all ages",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "18:00",
          "duration": "3 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-719-548-7013",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5f7bfec0-4f80-47a7-8e3d-ea76d9db0059",
      title: "Midnight Movie Screening",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "106 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "18:00",
                "duration": "3 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "645056f4-a104-419f-b0a8-8f2b9dac5ae6",
                "name": "Jonathan Gibson",
                "role": "Theater Manager",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/82.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Jane Henderson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/59.jpg",
          rating: 4,
          date: "9",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Marcus Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-643",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Christian Marshall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-902",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Sean Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-386",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Layla Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-690",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Scarlett Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-313",
        },
        {
          quote: "The Midnight Movie Screening screening was wonderful. Love having a cinema on the ship!",
          author: "Leah Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "-380",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: false,
      hasMerchandise: true,
      merchandise:       {
              "id": "be484640-2732-4936-a012-7088ec69c4dd",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 17,
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
    id: "55f70173-9d7e-4e48-a4a0-72ec40fe9cdf",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Timeless classic films from Hollywood's golden age",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "20:00",
          "duration": "4 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-528-894-8534",
      contactEmail: "communications@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "1085ee09-fab1-4c62-8ad5-88a83e408e6a",
      title: "Romantic Movie Evening",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "76 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "20:00",
                "duration": "4 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "0b50b795-6c1a-478e-94e3-8a76d4be4d95",
                "name": "Nancy Morgan",
                "role": "Projectionist",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/21.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Layla Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-430",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Zoe Carpenter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-1042",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Kinsley Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5,
          date: "-812",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Barbara Hudson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/81.jpg",
          rating: 5,
          date: "-613",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Matthew Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-5",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Joseph Knight",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-24",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Nancy Mason",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-555",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "20371f6a-758c-46b4-8843-73fa3fc0dcec",
              "name": "Popcorn Bucket",
              "description": "Souvenir popcorn bucket",
              "price": 14,
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
    id: "55f70173-9d7e-4e48-a4a0-72ec40fe9cdf",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "Late-night cult classics and special screenings",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "08:00",
          "duration": "18 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-857-720-7939",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "713f3454-048c-4ce0-ad67-ecbd11d5b4cd",
      title: "Classic Movie Night",
      description: "Late-night cult classics and special screenings",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "08:00",
                "duration": "18 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "c203cfe3-a8a2-4c72-8600-5ae8c11e1393",
                "name": "Michael Charlotte",
                "role": "Theater Manager",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/26.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
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
          author: "Ashley Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 4,
          date: "-21",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Pamela Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-317",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Kimberly Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-205",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Vincent Douglas",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-914",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Terry Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-741",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Maya Parker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 4,
          date: "-611",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Gregory Dixon",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-783",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Adam Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-621",
        },
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Nathan Jennings",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-596",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Sophia Reeves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-365",
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
    id: "55f70173-9d7e-4e48-a4a0-72ec40fe9cdf",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "Recent box office hits shown on the big screen",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "03:00",
          "duration": "12 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-459-259-1057",
      contactEmail: "reception@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b04af3da-6580-409d-95f6-e768b2f8692b",
      title: "Latest Hollywood Blockbusters",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: true,
        price: 29,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "116 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "03:00",
                "duration": "12 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "93e9a5f3-4d47-410d-98d8-c173047f578e",
                "name": "George Hunter",
                "role": "Film Curator",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/3.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Ella Maxwell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 5,
          date: "-744",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Wei Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-15",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Aaron Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-936",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Brian Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 5,
          date: "-346",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Bella Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/70.jpg",
          rating: 5,
          date: "-305",
        },
        {
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Gregory Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-615",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Mary Cooper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-185",
        },
        {
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Zoe Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-514",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Louis Fletcher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-81",
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
    id: "55f70173-9d7e-4e48-a4a0-72ec40fe9cdf",
    category: "Movie Theater",
    name: "Animation Celebration",
    description: "International cinema featuring subtitled masterpieces",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "18:00",
          "duration": "3 hours",
          "description": "Animation Celebration performance times"
    },
    contact: {
      contactNumber: "+1-421-571-9218",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7c477f82-a165-4d9f-8b6d-1b39ea1b2daf",
      title: "Animation Celebration",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "65 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "18:00",
                "duration": "3 hours",
                "description": "Animation Celebration performance times"
        }],
      performers: [        {
                "id": "a71f6574-98d7-41d9-8d68-55332dac589e",
                "name": "Stephen Baker",
                "role": "Projectionist",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/82.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 8,
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
          author: "Aaliyah West",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-834",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Marcus Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-1049",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Mia Griffin",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-371",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Vincent Fisher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-600",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Virginia Griffin",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 4,
          date: "-873",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "454bece2-ed49-4404-9f6b-0037cc7a09cf",
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
    isPopular: false
  }
];
