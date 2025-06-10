// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "cebfe363-9040-4ca6-86ef-c8f8dd14a596",
    category: "Movie Theater",
    name: "Animation Celebration",
    description: "Academy Award-winning films and performances",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "17:00",
          "duration": "2 hours",
          "description": "Animation Celebration performance times"
    },
    contact: {
      contactNumber: "+1-540-669-3554",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ed08db0e-3559-4cb4-9ab9-7ea147caeee1",
      title: "Animation Celebration",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: true,
        price: 28,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "99 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "17:00",
                "duration": "2 hours",
                "description": "Animation Celebration performance times"
        }],
      performers: [        {
                "id": "2684cbf1-d289-4087-9727-eda23a75bc9e",
                "name": "Daniel Reed",
                "role": "Theater Manager",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/24.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
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
          author: "Claire Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5,
          date: "-780",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Amina Collins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 4,
          date: "-987",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Amelia Spencer",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 4,
          date: "-635",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Adeline Fox",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/64.jpg",
          rating: 4,
          date: "-789",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Lerato Carpenter",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
          rating: 5,
          date: "-767",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Gary Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-625",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Elijah Knight",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-295",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Albert Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 4,
          date: "-512",
        },
        {
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Nomsa Mason",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "-367",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Isabella Cooper",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-1067",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "0eda33dc-df5b-4688-82af-e6b33f1ae7bb",
              "name": "Popcorn Bucket",
              "description": "Souvenir popcorn bucket",
              "price": 15,
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
    id: "cebfe363-9040-4ca6-86ef-c8f8dd14a596",
    category: "Movie Theater",
    name: "Oscar Winners Showcase",
    description: "Independent films from emerging filmmakers",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "21:00",
          "duration": "7 hours",
          "description": "Oscar Winners Showcase performance times"
    },
    contact: {
      contactNumber: "+1-219-844-8866",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8d718b33-d3ee-4535-8df1-eff35cbbf34a",
      title: "Oscar Winners Showcase",
      description: "Independent films from emerging filmmakers",
      tickets: {
        isRequired: true,
        price: 32,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "110 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "21:00",
                "duration": "7 hours",
                "description": "Oscar Winners Showcase performance times"
        }],
      performers: [        {
                "id": "cb36a7dc-05ed-4c47-a257-b642a6c93609",
                "name": "Alexander Watson",
                "role": "Film Critic",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/77.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
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
          author: "Justin Keller",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/59.jpg",
          rating: 4,
          date: "-115",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Linda Curtis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-371",
        },
        {
          quote: "The Oscar Winners Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Barbara Mason",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 4,
          date: "-971",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Emily Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/37.jpg",
          rating: 5,
          date: "-563",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Jordan Mitchell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-343",
        },
        {
          quote: "The Oscar Winners Showcase screening was wonderful. Love having a cinema on the ship!",
          author: "Alexa Watson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          rating: 5,
          date: "-529",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "11fdce22-1ae0-43a1-abc2-991dfc80cad4",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
              "price": 15,
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
    id: "cebfe363-9040-4ca6-86ef-c8f8dd14a596",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "Independent films from emerging filmmakers",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "19:00",
          "duration": "5 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-440-411-2985",
      contactEmail: "inquiries@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "cab3981a-75cc-40d3-b6fa-ef2caef1413d",
      title: "Romantic Movie Evening",
      description: "Independent films from emerging filmmakers",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "85 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "19:00",
                "duration": "5 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "62ac5df6-0612-4377-ba63-cf63bfad2572",
                "name": "Victor Chambers",
                "role": "Projectionist",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/64.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 5,
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
          author: "Sean Mitchell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/25.jpg",
          rating: 4,
          date: "-801",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Andrew Hunter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 5,
          date: "-405",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Catherine Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-946",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Aria Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-433",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Jeremy Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/64.jpg",
          rating: 4,
          date: "-813",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Priya Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-637",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Riley Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/19.jpg",
          rating: 4,
          date: "-771",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Nomsa Dixon",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 5,
          date: "-766",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "9b9a52da-640c-40f5-a2d6-b2b7f5a57121",
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
    isPopular: true
  },
  {
    id: "cebfe363-9040-4ca6-86ef-c8f8dd14a596",
    category: "Movie Theater",
    name: "Animation Celebration",
    description: "Hilarious comedy films to brighten your evening",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "13:00",
          "duration": "22 hours",
          "description": "Animation Celebration performance times"
    },
    contact: {
      contactNumber: "+1-596-201-5664",
      contactEmail: "ask@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a0d682f8-aec7-428f-a924-105be3f74949",
      title: "Animation Celebration",
      description: "Hilarious comedy films to brighten your evening",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "110 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "13:00",
                "duration": "22 hours",
                "description": "Animation Celebration performance times"
        }],
      performers: [        {
                "id": "f8f290ad-8221-422b-85a3-256914a1810b",
                "name": "Isabella Keller",
                "role": "Theater Manager",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/53.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jennifer Hamilton",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-939",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Randy Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-1004",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Christopher Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-47",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Robert Hudson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-302",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Tyler Baker",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 4,
          date: "-185",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Isabella Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          rating: 4,
          date: "-903",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Eugene Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          rating: 5,
          date: "-80",
        },
        {
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Timothy Montgomery",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 4,
          date: "-252",
        },
        {
          quote: "The Animation Celebration screening was wonderful. Love having a cinema on the ship!",
          author: "Mateo Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-200",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Isabella Charlotte",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-449",
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
    id: "cebfe363-9040-4ca6-86ef-c8f8dd14a596",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "Academy Award-winning films and performances",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "16:00",
          "duration": "1 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-693-643-8304",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "d749f413-7f76-45fc-8760-9809a8e3887a",
      title: "Latest Hollywood Blockbusters",
      description: "Academy Award-winning films and performances",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "101 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "16:00",
                "duration": "1 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "04af62a8-56b3-4afe-b517-753f9430c764",
                "name": "Gabriel Graves",
                "role": "Film Curator",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/3.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          author: "Alan Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          rating: 4,
          date: "-300",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jason Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 4,
          date: "-950",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Samantha Wallace",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
          rating: 4,
          date: "-1046",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Emma Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/79.jpg",
          rating: 5,
          date: "-688",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Audrey Fletcher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-683",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Dennis Hayes",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 5,
          date: "-901",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Samantha Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-663",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Emily Baker",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-691",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Joshua Hawkins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/81.jpg",
          rating: 5,
          date: "-746",
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
    id: "cebfe363-9040-4ca6-86ef-c8f8dd14a596",
    category: "Movie Theater",
    name: "Romantic Movie Evening",
    description: "International cinema featuring subtitled masterpieces",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "06:00",
          "duration": "16 hours",
          "description": "Romantic Movie Evening performance times"
    },
    contact: {
      contactNumber: "+1-316-929-3608",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6fd08c35-caf7-42af-8204-2d272d707dd9",
      title: "Romantic Movie Evening",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "90 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "06:00",
                "duration": "16 hours",
                "description": "Romantic Movie Evening performance times"
        }],
      performers: [        {
                "id": "70ee8960-6618-43a8-854f-93723995b8f2",
                "name": "Gabriel Price",
                "role": "Film Critic",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/83.jpg",
                "contact": {
                        "contactEmail": "admin@entertainment.velarivoyages.com"
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
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Janet Mason",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 5,
          date: "-579",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Wei Stewart",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/14.jpg",
          rating: 5,
          date: "-442",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Liam Curtis",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
          rating: 5,
          date: "-667",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Frank Jennings",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-602",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Henry Parker",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-618",
        },
        {
          quote: "The Romantic Movie Evening screening was wonderful. Love having a cinema on the ship!",
          author: "Caroline Murray",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/57.jpg",
          rating: 4,
          date: "-741",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Gabriel Keller",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-863",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Lawrence Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-942",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "5bf16bda-1d75-452a-8fcd-84e519538b74",
              "name": "Theater Program",
              "description": "Collector's edition program guide",
              "price": 15,
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
    id: "cebfe363-9040-4ca6-86ef-c8f8dd14a596",
    category: "Movie Theater",
    name: "Indie Film Spotlight",
    description: "Independent films from emerging filmmakers",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "02:00",
          "duration": "10 hours",
          "description": "Indie Film Spotlight performance times"
    },
    contact: {
      contactNumber: "+1-259-326-2049",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "a35d40e6-a91c-4aad-9d23-e14c77479e90",
      title: "Indie Film Spotlight",
      description: "Independent films from emerging filmmakers",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "63 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "02:00",
                "duration": "10 hours",
                "description": "Indie Film Spotlight performance times"
        }],
      performers: [        {
                "id": "4ae2242f-8b46-46d5-aa84-d5d18d676073",
                "name": "Eric Charlotte",
                "role": "Projectionist",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/23.jpg",
                "contact": {
                        "contactEmail": "support@entertainment.velarivoyages.com"
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
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Roy Wallace",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          rating: 4,
          date: "-637",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Sarah Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-388",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Eleanor Campbell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          rating: 5,
          date: "-194",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Elena Mitchell",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "-489",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Christopher Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
          rating: 5,
          date: "-781",
        }
      ],
      hasVIPSeating: true,
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
    isPopular: true
  },
  {
    id: "cebfe363-9040-4ca6-86ef-c8f8dd14a596",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "Animated movies for kids and adults alike",
    image: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "16:00",
          "duration": "2 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-500-236-1944",
      contactEmail: "reachus@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "f12a19f9-5fa8-4a2f-a07d-4bd66948facb",
      title: "Latest Hollywood Blockbusters",
      description: "Animated movies for kids and adults alike",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "72 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "16:00",
                "duration": "2 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "863f8183-2e5f-434c-badc-05d0913c3ec0",
                "name": "Christopher Jennings",
                "role": "Projectionist",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/18.jpg",
                "contact": {
                        "contactEmail": "ask@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
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
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Logan Campbell",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          rating: 5,
          date: "-514",
        },
        {
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Maria Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/53.jpg",
          rating: 5,
          date: "-1025",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Catherine Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          rating: 5,
          date: "-557",
        },
        {
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Kenneth Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 5,
          date: "-1015",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Claire Fox",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 5,
          date: "-664",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Ralph Clark",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          rating: 4,
          date: "-10",
        }
      ],
      hasVIPSeating: false,
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
    isPopular: false
  }
];
