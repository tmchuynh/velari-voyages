// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "b48422d7-8f97-4654-93da-e198beae3d98",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Animated movies for kids and adults alike",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "19:00",
          "duration": "5 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-754-864-4960",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "2f0bd464-1a64-4cbf-b4c4-d1412f38ee28",
      title: "Comedy Film Festival",
      description: "Animated movies for kids and adults alike",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "110 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "19:00",
                "duration": "5 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "ae7ee2f6-4ea1-4fde-81a0-42b4fc7aa9c9",
                "name": "Mia Crawford",
                "role": "Theater Manager",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/22.jpg",
                "contact": {
                        "contactEmail": "communications@entertainment.velarivoyages.com"
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Christine Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/84.jpg",
          rating: 4,
          date: "-511",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Kyle Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/73.jpg",
          rating: 5,
          date: "-913",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Maya Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-1041",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Jose Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-341",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Gabriella Dixon",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 4,
          date: "-149",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Alan Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-79",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "eeb55c1f-2d95-4a68-9ee0-d8077069ace5",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
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
  },
  {
    id: "b48422d7-8f97-4654-93da-e198beae3d98",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Animated movies for kids and adults alike",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "06:00",
          "duration": "16 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-491-325-2186",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "b1665849-fc26-4eaf-95d3-a2d64ae496bb",
      title: "Romantic Movie Evening",
      description: "Animated movies for kids and adults alike",
      tickets: {
        isRequired: false,
        price: 45,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "94 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "06:00",
                "duration": "16 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "027b7f47-cb67-423c-bda1-112d7c4a1cee",
                "name": "Mark Reed",
                "role": "Film Critic",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/48.jpg",
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
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Ashley Payne",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-383",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Andrew Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-440",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Billy Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-98",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Isabella Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-688",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Matthew Dunn",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-188",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Antonio Reed",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 5,
          date: "-1049",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Claire Lawson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          rating: 4,
          date: "-289",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Gabriel Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          rating: 5,
          date: "-296",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Kevin Stewart",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-476",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Christopher Douglas",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/82.jpg",
          rating: 5,
          date: "-821",
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
    isPopular: false
  },
  {
    id: "b48422d7-8f97-4654-93da-e198beae3d98",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "Family-friendly movies perfect for all ages",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "02:00",
          "duration": "11 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-926-932-8099",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c127dd46-a38e-4a88-b14f-5642b5e4a87a",
      title: "Classic Movie Night",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: false,
        price: 32,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "73 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "02:00",
                "duration": "11 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "fd7ff5cb-b129-4b03-bb6e-c90e370ebffe",
                "name": "Lucas Hall",
                "role": "Projectionist",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/4.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          author: "Gary Fox",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-732",
        },
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Bryan Maxwell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-452",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Bruce Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 4,
          date: "-169",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Michelle Crawford",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4,
          date: "-1010",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Jose Mason",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-1064",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Jeremy Dunn",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 5,
          date: "-79",
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
    isPopular: true
  },
  {
    id: "b48422d7-8f97-4654-93da-e198beae3d98",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "Romantic films perfect for date night",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "07:00",
          "duration": "15 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-467-668-1207",
      contactEmail: "hello@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e9d7ff52-1f79-408b-a58f-4ceb1652bd9d",
      title: "Latest Hollywood Blockbusters",
      description: "Romantic films perfect for date night",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "106 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "07:00",
                "duration": "15 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "e7a1760d-b752-4530-8e7f-3a68b5c109d0",
                "name": "Valentina Montgomery",
                "role": "Theater Manager",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/1.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "David Morgan",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "-1017",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Gerald Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 5,
          date: "-208",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Nicole Collins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 4,
          date: "-386",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Lawrence Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-809",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Betty Grant",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 4,
          date: "-218",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Harold Gardner",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-948",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Vincent Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          rating: 5,
          date: "-588",
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
    isPopular: false
  },
  {
    id: "b48422d7-8f97-4654-93da-e198beae3d98",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "High-octane action movies with stunning visuals",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "15:00",
          "duration": "1 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-722-178-2500",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "da70f7e0-bff0-437d-b562-a298a837d3de",
      title: "Documentary Showcase",
      description: "High-octane action movies with stunning visuals",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "111 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "15:00",
                "duration": "1 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "d702ca11-fcce-451a-8bc7-bef45864de6a",
                "name": "Eugene Campbell",
                "role": "Film Curator",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/4.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Sofia Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-514",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Austin Clark",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/43.jpg",
          rating: 5,
          date: "-780",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Patrick Jennings",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 4,
          date: "-649",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Rachel Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-473",
        },
        {
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Stephanie Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 4,
          date: "-872",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Hannah Maxwell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-260",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Aaliyah Olivia",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          rating: 4,
          date: "-843",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "d903f032-c564-4829-84b0-482dc68201b8",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 23,
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
    id: "b48422d7-8f97-4654-93da-e198beae3d98",
    category: "Movie Theater",
    name: "Indie Film Spotlight",
    description: "Hilarious comedy films to brighten your evening",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "20:00",
          "duration": "4 hours",
          "description": "Indie Film Spotlight performance times"
    },
    contact: {
      contactNumber: "+1-750-286-1986",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bcd12184-1856-4936-bb52-4ae8f2f20727",
      title: "Indie Film Spotlight",
      description: "Hilarious comedy films to brighten your evening",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "83 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "20:00",
                "duration": "4 hours",
                "description": "Indie Film Spotlight performance times"
        }],
      performers: [        {
                "id": "3bcab5f5-232b-4a49-862b-b4b118f16218",
                "name": "Rachel Henderson",
                "role": "Projectionist",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/24.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          author: "Darrell Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-184",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Christopher Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-105",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "James Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-770",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Jonathan Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 5,
          date: "-630",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Jacob Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          rating: 5,
          date: "-605",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Bobby Olivia",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 4,
          date: "-182",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Kimberly Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-532",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Allison Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-895",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Jessica Lawson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
          rating: 4,
          date: "-143",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Emma Reed",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-222",
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
    id: "b48422d7-8f97-4654-93da-e198beae3d98",
    category: "Movie Theater",
    name: "Indie Film Spotlight",
    description: "Romantic films perfect for date night",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "22:00",
          "duration": "8 hours",
          "description": "Indie Film Spotlight performance times"
    },
    contact: {
      contactNumber: "+1-352-746-1307",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "00649cf8-3720-4493-a0f9-f1257abd1949",
      title: "Indie Film Spotlight",
      description: "Romantic films perfect for date night",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "22:00",
                "duration": "8 hours",
                "description": "Indie Film Spotlight performance times"
        }],
      performers: [        {
                "id": "84212b1c-b8f0-453f-b59f-46e307f69f39",
                "name": "Charlotte Baker",
                "role": "Projectionist",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/5.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
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
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Alan Lawson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-929",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Ralph Hudson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-295",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Robert Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 4,
          date: "-617",
        },
        {
          quote: "The Indie Film Spotlight screening was wonderful. Love having a cinema on the ship!",
          author: "Ashley Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 5,
          date: "-207",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Louis Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 4,
          date: "-888",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "00ff1934-bde5-4fc7-be52-9538fd61ba4e",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 21,
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
    id: "b48422d7-8f97-4654-93da-e198beae3d98",
    category: "Movie Theater",
    name: "Animation Celebration",
    description: "Independent films from emerging filmmakers",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "06:00",
          "duration": "16 hours",
          "description": "Animation Celebration performance times"
    },
    contact: {
      contactNumber: "+1-231-727-8687",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c52c3c4c-bfd2-424d-8538-2b438be049c7",
      title: "Animation Celebration",
      description: "Independent films from emerging filmmakers",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "105 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "06:00",
                "duration": "16 hours",
                "description": "Animation Celebration performance times"
        }],
      performers: [        {
                "id": "ab4b4d88-b9af-4de2-8d2f-c7bf82ca0807",
                "name": "Carlos Grant",
                "role": "Film Critic",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/21.jpg",
                "contact": {
                        "contactEmail": "services@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          author: "Matthew Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 4,
          date: "-537",
        },
        {
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Jonathan Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-594",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Claire Price",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-851",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Peter Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/71.jpg",
          rating: 4,
          date: "-996",
        },
        {
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Hannah Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-1038",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Edward Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-136",
        },
        {
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Austin Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-303",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Layla Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/15.jpg",
          rating: 5,
          date: "-469",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0c25e8db-87b1-4a77-a2e7-20bccf691a35",
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
    id: "b48422d7-8f97-4654-93da-e198beae3d98",
    category: "Movie Theater",
    name: "Foreign Film Festival",
    description: "Educational and inspiring documentary films",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "15:00",
          "duration": "23 hours",
          "description": "Foreign Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-724-506-9457",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "945bf3f8-1c88-4639-b553-23b62a4fb634",
      title: "Foreign Film Festival",
      description: "Educational and inspiring documentary films",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "76 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "15:00",
                "duration": "23 hours",
                "description": "Foreign Film Festival performance times"
        }],
      performers: [        {
                "id": "7e35efbc-2058-4e69-9526-aa3fa3870d13",
                "name": "Isabella Dean",
                "role": "Film Critic",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/8.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
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
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Avery Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/11.jpg",
          rating: 4,
          date: "-869",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Sofia Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-375",
        },
        {
          quote: "The Foreign Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Alan Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-872",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Gabriel Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 4,
          date: "-891",
        },
        {
          quote: "The Foreign Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Maya Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-966",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Christopher Russell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/39.jpg",
          rating: 4,
          date: "-345",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Amina Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-820",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Helen Parker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          rating: 5,
          date: "-40",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Christian Maxwell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 4,
          date: "-853",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a89aa97a-a25a-47c8-bb57-d355b3b9489a",
              "name": "Popcorn Bucket",
              "description": "Souvenir popcorn bucket",
              "price": 9,
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
    id: "b48422d7-8f97-4654-93da-e198beae3d98",
    category: "Movie Theater",
    name: "Action Movie Marathon",
    description: "Timeless classic films from Hollywood's golden age",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "02:00",
          "duration": "10 hours",
          "description": "Action Movie Marathon performance times"
    },
    contact: {
      contactNumber: "+1-542-132-9741",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "670d02fa-1d9d-40f5-9c33-ec526e69cc09",
      title: "Action Movie Marathon",
      description: "Timeless classic films from Hollywood's golden age",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "87 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "02:00",
                "duration": "10 hours",
                "description": "Action Movie Marathon performance times"
        }],
      performers: [        {
                "id": "ed02f0bc-034d-44a4-b36e-863e62d796bf",
                "name": "Skylar Murray",
                "role": "Film Curator",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/12.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
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
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Roy Payne",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-967",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Michelle Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/62.jpg",
          rating: 5,
          date: "-932",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Robert Porter",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 5,
          date: "-104",
        },
        {
          quote: "The Action Movie Marathon screening was wonderful. Love having a cinema on the ship!",
          author: "Aaliyah Hamilton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 4,
          date: "-1026",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Isabella Dean",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-491",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Hannah Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-245",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "8f0e29ad-33fa-472e-8f2a-3c44d15465f2",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
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
  }
];
