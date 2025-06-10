// Movie Theater entertainment shows
// This file contains movie theater entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const movieTheaterEntertainment: Entertainment[] = [
  {
    id: "5edd6321-dad9-42a8-8fb3-f6c0dcec0038",
    category: "Movie Theater",
    name: "Animation Celebration",
    description: "Recent box office hits shown on the big screen",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "08:00",
          "duration": "18 hours",
          "description": "Animation Celebration performance times"
    },
    contact: {
      contactNumber: "+1-826-103-3010",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "eaae84ed-c3da-41c7-92de-62b25c4bc18d",
      title: "Animation Celebration",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "118 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "08:00",
                "duration": "18 hours",
                "description": "Animation Celebration performance times"
        }],
      performers: [        {
                "id": "398c36e2-e7d6-4574-a0d1-cc8bf07e21b7",
                "name": "Ryan Ellis",
                "role": "Projectionist",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/15.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Oliver Crawford",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 5,
          date: "-1045",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Susan Palmer",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          rating: 4,
          date: "-178",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Oliver Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-218",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Joseph Gibson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          rating: 4,
          date: "-1022",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Aria Day",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          rating: 4,
          date: "-118",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Carl Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/16.jpg",
          rating: 5,
          date: "-82",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Emma Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 4,
          date: "-525",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Noah Foster",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-961",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Joshua Murray",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/77.jpg",
          rating: 4,
          date: "-224",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "12f4f597-46fb-4566-a6ff-9f16807e2941",
              "name": "Popcorn Bucket",
              "description": "Souvenir popcorn bucket",
              "price": 7,
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
    id: "5edd6321-dad9-42a8-8fb3-f6c0dcec0038",
    category: "Movie Theater",
    name: "Midnight Movie Screening",
    description: "Family-friendly movies perfect for all ages",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "15:00",
          "end": "04:00",
          "duration": "13 hours",
          "description": "Midnight Movie Screening performance times"
    },
    contact: {
      contactNumber: "+1-421-599-1670",
      contactEmail: "feedback@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "8709e673-5c80-45b5-9f3e-9f3389eed64a",
      title: "Midnight Movie Screening",
      description: "Family-friendly movies perfect for all ages",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "94 minutes",
      schedule: [        {
                "start": "15:00",
                "end": "04:00",
                "duration": "13 hours",
                "description": "Midnight Movie Screening performance times"
        }],
      performers: [        {
                "id": "dc939480-62a5-4d9d-a2bd-d8af73179019",
                "name": "Stephanie Knight",
                "role": "Film Curator",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/58.jpg",
                "contact": {
                        "contactEmail": "inquiries@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 3,
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Scarlett Knight",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-288",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Kennedy Knight",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "3",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Kenneth Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 4,
          date: "-580",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Henry Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/66.jpg",
          rating: 4,
          date: "-401",
        },
        {
          quote: "The Midnight Movie Screening screening was wonderful. Love having a cinema on the ship!",
          author: "Linda Charlotte",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          rating: 5,
          date: "-572",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Sean Douglas",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4,
          date: "-1000",
        },
        {
          quote: "The Midnight Movie Screening screening was wonderful. Love having a cinema on the ship!",
          author: "Emma Palmer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 5,
          date: "-147",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Scott Coleman",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-807",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Maya Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          rating: 4,
          date: "-447",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Daniel Mitchell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-220",
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
    id: "5edd6321-dad9-42a8-8fb3-f6c0dcec0038",
    category: "Movie Theater",
    name: "Classic Movie Night",
    description: "Recent box office hits shown on the big screen",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "04:00",
          "duration": "12 hours",
          "description": "Classic Movie Night performance times"
    },
    contact: {
      contactNumber: "+1-310-279-7406",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ced0c447-cf71-4dbd-aefa-f2b7158980fb",
      title: "Classic Movie Night",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: false,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "69 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "04:00",
                "duration": "12 hours",
                "description": "Classic Movie Night performance times"
        }],
      performers: [        {
                "id": "c49af387-8189-4150-bfb2-b8346c258ff1",
                "name": "Sarah Fisher",
                "role": "Film Curator",
                "bio": "Professional projectionist with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/54.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Ariana Gibson",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-1033",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Joshua Clark",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          rating: 5,
          date: "-728",
        },
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "Abigail Marshall",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/73.jpg",
          rating: 5,
          date: "-564",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Madelyn Griffin",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-502",
        },
        {
          quote: "The Classic Movie Night screening was wonderful. Love having a cinema on the ship!",
          author: "William Gardner",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
          rating: 5,
          date: "-101",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Vincent Dunn",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/74.jpg",
          rating: 4,
          date: "-821",
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
    id: "5edd6321-dad9-42a8-8fb3-f6c0dcec0038",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "Animated movies for kids and adults alike",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "22:00",
          "duration": "6 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-683-161-7144",
      contactEmail: "info@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ed5e2fb9-8a00-45f7-b1db-c98b3580538c",
      title: "Latest Hollywood Blockbusters",
      description: "Animated movies for kids and adults alike",
      tickets: {
        isRequired: true,
        price: 33,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "106 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "22:00",
                "duration": "6 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "42000f78-4b07-42a0-a68e-12a2877f1cfd",
                "name": "Jason Ellis",
                "role": "Theater Manager",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/41.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
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
          author: "Wayne Jennings",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-496",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Mark Bennett",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/53.jpg",
          rating: 4,
          date: "-1054",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Jason Chambers",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          rating: 4,
          date: "-200",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Alice Carpenter",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-697",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Frank Wells",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          rating: 5,
          date: "-678",
        },
        {
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Miguel Baker",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
          rating: 5,
          date: "-1002",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Kyle Ellis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 4,
          date: "-1004",
        }
      ],
      hasVIPSeating: true,
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
    id: "5edd6321-dad9-42a8-8fb3-f6c0dcec0038",
    category: "Movie Theater",
    name: "Family Movie Time",
    description: "High-octane action movies with stunning visuals",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "07:00",
          "duration": "15 hours",
          "description": "Family Movie Time performance times"
    },
    contact: {
      contactNumber: "+1-267-946-2962",
      contactEmail: "clientservices@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c58df3f7-c730-424d-9484-7d1f21b4db2e",
      title: "Family Movie Time",
      description: "High-octane action movies with stunning visuals",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "107 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "07:00",
                "duration": "15 hours",
                "description": "Family Movie Time performance times"
        }],
      performers: [        {
                "id": "f393f3b5-121e-454d-96df-db95efb8a0a1",
                "name": "Nancy Russell",
                "role": "Film Curator",
                "bio": "Professional theater manager with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/women/48.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
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
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "Olivia Hawkins",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
          rating: 5,
          date: "-527",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Rachel Harper",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 4,
          date: "-729",
        },
        {
          quote: "The Family Movie Time screening was wonderful. Love having a cinema on the ship!",
          author: "James Grant",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-326",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Kimberly Warren",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/29.jpg",
          rating: 5,
          date: "-92",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Jose Coleman",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-472",
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
    isPopular: true
  },
  {
    id: "5edd6321-dad9-42a8-8fb3-f6c0dcec0038",
    category: "Movie Theater",
    name: "Indie Film Spotlight",
    description: "Recent box office hits shown on the big screen",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "22:00",
          "duration": "6 hours",
          "description": "Indie Film Spotlight performance times"
    },
    contact: {
      contactNumber: "+1-964-685-8855",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "090d3a80-7a4e-43b5-bea6-cef4d3bca4dc",
      title: "Indie Film Spotlight",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: true,
        price: 27,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "119 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "22:00",
                "duration": "6 hours",
                "description": "Indie Film Spotlight performance times"
        }],
      performers: [        {
                "id": "3998aeed-0d40-4144-a8f2-8f96b9985206",
                "name": "Henry Dunn",
                "role": "Film Curator",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/22.jpg",
                "contact": {
                        "contactEmail": "general@entertainment.velarivoyages.com"
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
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Lily Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          rating: 5,
          date: "-600",
        },
        {
          quote: "The Indie Film Spotlight screening was wonderful. Love having a cinema on the ship!",
          author: "Samuel Curtis",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/0.jpg",
          rating: 5,
          date: "-617",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Roy Spencer",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-766",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Carlos Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          rating: 5,
          date: "-995",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Bella Wells",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/0.jpg",
          rating: 5,
          date: "-167",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Jeremy Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          rating: 4,
          date: "-466",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Arthur Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          rating: 5,
          date: "-1056",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a6748983-5cc3-46e3-8559-d8f772a6ede1",
              "name": "Movie Poster",
              "description": "Official poster from tonight's feature film",
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
    id: "5edd6321-dad9-42a8-8fb3-f6c0dcec0038",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "Recent box office hits shown on the big screen",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "16:00",
          "end": "14:00",
          "duration": "22 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-857-384-9119",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e8dc4675-d789-494e-8530-3911317a33a1",
      title: "Latest Hollywood Blockbusters",
      description: "Recent box office hits shown on the big screen",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "73 minutes",
      schedule: [        {
                "start": "16:00",
                "end": "14:00",
                "duration": "22 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "5803345a-f476-4ebc-a0fe-892c8223b1f6",
                "name": "Kevin Harper",
                "role": "Film Critic",
                "bio": "Professional film critic with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/13.jpg",
                "contact": {
                        "contactEmail": "contact@entertainment.velarivoyages.com"
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
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Frank Stewart",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 4,
          date: "-1018",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Gabriella Nash",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/17.jpg",
          rating: 4,
          date: "-817",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Jose Knight",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 4,
          date: "-220",
        },
        {
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Eleanor Morgan",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/39.jpg",
          rating: 5,
          date: "-769",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Gabriel Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-854",
        },
        {
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Marcus Day",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 5,
          date: "-542",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Brian Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-85",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "7a848b71-c9d7-4423-9046-5d4492ba81b5",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 20,
              "currency": "USD"
      }
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
    id: "5edd6321-dad9-42a8-8fb3-f6c0dcec0038",
    category: "Movie Theater",
    name: "Latest Hollywood Blockbusters",
    description: "Romantic films perfect for date night",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "02:00",
          "duration": "12 hours",
          "description": "Latest Hollywood Blockbusters performance times"
    },
    contact: {
      contactNumber: "+1-707-428-3451",
      contactEmail: "hi@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "c0047f08-a643-4e04-81a7-3b1574fe3889",
      title: "Latest Hollywood Blockbusters",
      description: "Romantic films perfect for date night",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "72 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "02:00",
                "duration": "12 hours",
                "description": "Latest Hollywood Blockbusters performance times"
        }],
      performers: [        {
                "id": "30c861f1-a2ca-4e11-8b23-642153bda625",
                "name": "Steven Harper",
                "role": "Projectionist",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/6.jpg",
                "contact": {
                        "contactEmail": "welcome@entertainment.velarivoyages.com"
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
          author: "Alexander Chambers",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
          rating: 5,
          date: "-294",
        },
        {
          quote: "Perfect movie selection and great theater setup. Comfortable seating and excellent sound.",
          author: "Blake Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/51.jpg",
          rating: 4,
          date: "-991",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Douglas Henderson",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 4,
          date: "-687",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Joshua Nash",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "-319",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Isabella Henderson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          rating: 4,
          date: "-1008",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Audrey West",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5,
          date: "-287",
        },
        {
          quote: "The variety of movies shown caters to all tastes. Something for everyone!",
          author: "Susan Hudson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-304",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Jonathan Gardner",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
          rating: 4,
          date: "-735",
        },
        {
          quote: "The Latest Hollywood Blockbusters screening was wonderful. Love having a cinema on the ship!",
          author: "Catherine Spencer",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          rating: 4,
          date: "-885",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Hannah Cooper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          rating: 5,
          date: "-784",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "3f6ef5e6-d79b-42d6-aa17-6e59647e2228",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 10,
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
    id: "5edd6321-dad9-42a8-8fb3-f6c0dcec0038",
    category: "Movie Theater",
    name: "Documentary Showcase",
    description: "International cinema featuring subtitled masterpieces",
    imageUrl: "/images/entertainment/movie-theater-show.jpg",
    hours:     {
          "start": "14:00",
          "end": "06:00",
          "duration": "16 hours",
          "description": "Documentary Showcase performance times"
    },
    contact: {
      contactNumber: "+1-318-241-9201",
      contactEmail: "welcome@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "dde82e5c-9806-4a16-a8aa-269c4b7e23da",
      title: "Documentary Showcase",
      description: "International cinema featuring subtitled masterpieces",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "83 minutes",
      schedule: [        {
                "start": "14:00",
                "end": "06:00",
                "duration": "16 hours",
                "description": "Documentary Showcase performance times"
        }],
      performers: [        {
                "id": "f38a9c2e-b2cb-46a3-990e-02b3ad5d1022",
                "name": "Douglas Payne",
                "role": "Projectionist",
                "bio": "Professional film curator with years of cruise ship entertainment experience.",
                "imageUrl": "https://randomuser.me/api/portraits/men/22.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 6,
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
          author: "Sandra Charlotte",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 4,
          date: "-571",
        },
        {
          quote: "Classic films in a beautiful setting. The cinematography looked amazing on the big screen.",
          author: "Luis Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-256",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Elizabeth Nash",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 4,
          date: "-881",
        },
        {
          quote: "Great way to relax and enjoy a good film. The movie theater is well-maintained.",
          author: "Isabella Foster",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-97",
        },
        {
          quote: "Family movie night was perfect! The kids loved it and so did the adults.",
          author: "Alexander Day",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/84.jpg",
          rating: 5,
          date: "-606",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "84358506-56d0-4940-b824-501987da02c5",
              "name": "Movie Trivia Cards",
              "description": "Fun movie trivia card game",
              "price": 23,
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
  }
];
