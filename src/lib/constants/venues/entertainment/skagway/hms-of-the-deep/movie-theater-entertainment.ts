// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "cd83f8eb-7aef-409e-84f9-261738d9bdaa",
    category: "Movie Theater",
    name: "Foreign Film Festival",
    description: "Late-night cult classics and special screenings",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "04:00",
          "duration": "12 hours",
          "description": "Foreign Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-400-801-2555",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a387be4a-8b5a-484f-89cc-348aecf64170",
      title: "Foreign Film Festival",
      description: "Late-night cult classics and special screenings",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "82 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "04:00",
                "duration": "12 hours",
                "description": "Foreign Film Festival performance times"
        }],
      performers: [        {
                "id": "f613f768-b4b9-4459-9580-ecaaa927235e",
                "name": "Bobby West",
                "role": "Film Critic",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/25.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 7,
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
          author: "Aaron Porter",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-676",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Luis West",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 5,
          date: "-1032",
        },
        {
          quote: "The Foreign Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Anna Sutton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/69.jpg",
          rating: 4,
          date: "-703",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Rachel Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 5,
          date: "-239",
        },
        {
          quote: "The Foreign Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Alan Reeves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          rating: 5,
          date: "-705",
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
    id: "cd83f8eb-7aef-409e-84f9-261738d9bdaa",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "International cinema featuring subtitled masterpieces",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "09:00",
          "duration": "18 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-581-430-1442",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c5f54051-ac63-4319-b20d-8effc4067f4f",
      title: "Documentary Showcase",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: false,
        price: 28,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "119 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "09:00",
                "duration": "18 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "d1bd1d94-71fd-4952-b260-f5b5a5c14fad",
                "name": "Harper Charlotte",
                "role": "Theater Manager",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/44.jpg",
                "contact": {
                        "contactEmail": "mail@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Projectionist",
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
          quote: "The Documentary Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Pamela Harper",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 4,
          date: "-312",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Matthew Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/69.jpg",
          rating: 4,
          date: "-856",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Keith Hunter",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-1042",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Thomas Morgan",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-491",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Sophia Bennett",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-105",
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
    isPopular: true
  },
  {
    id: "cd83f8eb-7aef-409e-84f9-261738d9bdaa",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Hilarious comedy films to brighten your evening",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "15:00",
          "duration": "24 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-687-944-2545",
      contactEmail: "mail@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5bf9250f-b1d3-404b-b358-3cb3359ca777",
      title: "Comedy Film Festival",
      description: "Hilarious comedy films to brighten your evening",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "85 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "15:00",
                "duration": "24 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "5f198cad-2621-4007-b19e-60f346d88543",
                "name": "Raymond Maxwell",
                "role": "Projectionist",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/83.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Wayne Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 4,
          date: "-266",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Donna Olivia",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          rating: 4,
          date: "-251",
        },
        {
          quote: "The Comedy Film Festival screening was wonderful. Love having a cinema on the ship!",
          author: "Jordan Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-1040",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Robert Hunter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          rating: 4,
          date: "-768",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Billy Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-821",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Victoria Parker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-665",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Joel Keller",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 5,
          date: "-885",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Nathan Bennett",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-928",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Christopher Ellis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-475",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Javier Griffin",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-247",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "71293103-f1b3-4c18-b084-16ade336e9ed",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
              "price": 7,
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
    id: "cd83f8eb-7aef-409e-84f9-261738d9bdaa",
    category: "Movie Theater",
    name: "Comedy Film Festival",
    description: "Educational and inspiring documentary films",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "13:00",
          "duration": "21 hours",
          "description": "Comedy Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-433-661-5437",
      contactEmail: "office@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "64481223-7fd3-4d8f-a851-a3c1a4d637a1",
      title: "Comedy Film Festival",
      description: "Educational and inspiring documentary films",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "110 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "13:00",
                "duration": "21 hours",
                "description": "Comedy Film Festival performance times"
        }],
      performers: [        {
                "id": "1c00413c-889e-4814-bb68-eec3b7fe1ecf",
                "name": "Evelyn Knight",
                "role": "Film Curator",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/51.jpg",
                "contact": {
                        "contactEmail": "care@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          author: "Jennifer Ellis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 5,
          date: "-441",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Bryan West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-708",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Sarah Fletcher",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-854",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Bryan Watson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-1047",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Ralph Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 5,
          date: "-793",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Sandra Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-932",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Dennis Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 5,
          date: "-276",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "192653dc-cca5-4f31-8bc2-0e5b0c154003",
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
    isPopular: true
  },
  {
    id: "cd83f8eb-7aef-409e-84f9-261738d9bdaa",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "Recent box office hits shown on the big screen",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "13:00",
          "duration": "21 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-381-487-6344",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "05502f43-e8bd-4d76-9222-6be5bfab986b",
      title: "Latest Hollywood Blockbusters",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: false,
        price: 34,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "13:00",
                "duration": "21 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "afd44a78-e3ee-4e6a-97c9-010622b45339",
                "name": "Timothy Montgomery",
                "role": "Theater Manager",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/27.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 15,
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
          author: "Gabriella Sutton",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          rating: 4,
          date: "-585",
        },
        {
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Gabriel Harper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 5,
          date: "-943",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Deborah Bennett",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-166",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Chen Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-325",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Pamela Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-173",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Philip Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-1023",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Ethan Wallace",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          rating: 4,
          date: "-608",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Timothy Montgomery",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 4,
          date: "-823",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Raymond Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 4,
          date: "-432",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Melissa Holloway",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/58.jpg",
          rating: 5,
          date: "-624",
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
    id: "cd83f8eb-7aef-409e-84f9-261738d9bdaa",
    category: "Movie Theater",
    name: "Foreign Film Festival",
    description: "Recent box office hits shown on the big screen",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "07:00",
          "duration": "17 hours",
          "description": "Foreign Film Festival performance times"
    },
    contact: {
      contactNumber: "+1-233-766-7989",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "4bb5e257-86b2-4152-b57b-4b877124d255",
      title: "Foreign Film Festival",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "61 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "07:00",
                "duration": "17 hours",
                "description": "Foreign Film Festival performance times"
        }],
      performers: [        {
                "id": "ee6047e8-b150-4161-a6fe-8239d6233f8e",
                "name": "Diego Murray",
                "role": "Projectionist",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/5.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jeremy Clark",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/23.jpg",
          rating: 5,
          date: "-264",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Alan Fletcher",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          rating: 4,
          date: "-1048",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Arthur Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 4,
          date: "-845",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Valentina Graves",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-292",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Grace Wallace",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-482",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Savannah Collins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-829",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Samantha Spencer",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          rating: 4,
          date: "-845",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Nathan Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 5,
          date: "-260",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Sophia Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-66",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Marcus Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-146",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "adb6055a-0e92-4163-b579-e5b44bbed8a4",
              "name": "Popcorn Bucket",
              "description": "Souvenir popcorn bucket",
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
        question: "What movies are shown during the cruise?",
        answer: "We feature a mix of current releases, classic films, and family favorites. The schedule is available in your daily program.",
      },
      {
        question: "Are the movies shown with subtitles?",
        answer: "English films are shown without subtitles. Foreign films may include English subtitles.",
      }
    ],
    isPopular: false
  }
];
