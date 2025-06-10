// Karaoke entertainment shows
// This file contains karaoke entertainment show information

import { Entertainment } from "@/lib/interfaces/services/venues";

export const karaokeEntertainment: Entertainment[] = [
  {
    id: "24ee0fbb-39dd-40fc-b2de-b60c574e643d",
    category: "Karaoke",
    name: "Country Karaoke Night",
    description: "Partner up for duet performances of your favorite songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Country Karaoke Night performance times"
    },
    contact: {
      contactNumber: "+1-394-247-2070",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ec6b913a-4fbb-482c-8d65-b6f1eb06db05",
      title: "Country Karaoke Night",
      description: "Partner up for duet performances of your favorite songs",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "114 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Country Karaoke Night performance times"
        }],
      performers: [        {
                "id": "c706b1e3-ecd7-4f53-bbf3-56941218c437",
                "name": "Savannah Douglas",
                "role": "Karaoke Host",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/44.jpg",
                "contact": {
                        "contactEmail": "reception@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 14,
                "specialties": [
                        "Entertainment Coordinator",
                        "DJ"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Liam Curtis",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-633",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Philip Harper",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          rating: 4,
          date: "-805",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Brooklyn Graves",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 4,
          date: "-403",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Maya Hayes",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          rating: 4,
          date: "-932",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Jack Parker",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
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
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      }
    ],
    isPopular: false
  },
  {
    id: "24ee0fbb-39dd-40fc-b2de-b60c574e643d",
    category: "Karaoke",
    name: "Karaoke Battle",
    description: "Family-friendly karaoke with songs for all ages",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Karaoke Battle performance times"
    },
    contact: {
      contactNumber: "+1-334-109-2284",
      contactEmail: "team@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "5f45c063-84e9-494f-81eb-dddac92a7f9f",
      title: "Karaoke Battle",
      description: "Family-friendly karaoke with songs for all ages",
      tickets: {
        isRequired: false,
        price: 38,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "97 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Karaoke Battle performance times"
        }],
      performers: [        {
                "id": "ad030d22-aaa4-4208-bb4f-5bf403eb665f",
                "name": "Aaliyah Hamilton",
                "role": "Entertainment Coordinator",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/15.jpg",
                "contact": {
                        "contactEmail": "info@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 12,
                "specialties": [
                        "Karaoke Host",
                        "Entertainment Coordinator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Kevin Graham",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 5,
          date: "-79",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Aaron Sutton",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/80.jpg",
          rating: 4,
          date: "-346",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Eric Charlotte",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-637",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Kenneth Harper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 5,
          date: "-1077",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Samuel Coleman",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-655",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Rajesh Graves",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/79.jpg",
          rating: 5,
          date: "-137",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Thandiwe Sutton",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-992",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Bruce Cooper",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/24.jpg",
          rating: 4,
          date: "-202",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Amelia Hawkins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 5,
          date: "-558",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Helen Clark",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 4,
          date: "-628",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      }
    ],
    isPopular: false
  },
  {
    id: "24ee0fbb-39dd-40fc-b2de-b60c574e643d",
    category: "Karaoke",
    name: "Family Karaoke Hour",
    description: "Team vs. team karaoke challenges and competitions",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "01:00",
          "duration": "5 hours",
          "description": "Family Karaoke Hour performance times"
    },
    contact: {
      contactNumber: "+1-465-161-3727",
      contactEmail: "general@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "bd80cc17-1ef9-4dbf-b369-82d5a91eda6f",
      title: "Family Karaoke Hour",
      description: "Team vs. team karaoke challenges and competitions",
      tickets: {
        isRequired: false,
        price: 23,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "104 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "01:00",
                "duration": "5 hours",
                "description": "Family Karaoke Hour performance times"
        }],
      performers: [        {
                "id": "372b5fc1-2d10-4231-ad43-0e0139fa2624",
                "name": "Kevin Porter",
                "role": "Karaoke Host",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/42.jpg",
                "contact": {
                        "contactEmail": "hi@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Vocal Coach",
                        "Entertainment Coordinator",
                        "Karaoke Host"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Thomas Olivia",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5,
          date: "-634",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Raymond Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-467",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Elena Marshall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-687",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Kyle Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          rating: 5,
          date: "-25",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Liam Nash",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 4,
          date: "-294",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Elijah Hall",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 4,
          date: "-209",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Isabella Gardner",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          rating: 4,
          date: "-52",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Sarah Bennett",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 5,
          date: "-1081",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "f807d6b5-f38c-4897-b52b-2741314f3a5f",
              "name": "Performance Recording",
              "description": "Recording of your karaoke performance",
              "price": 8,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      },
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      }
    ],
    isPopular: false
  },
  {
    id: "24ee0fbb-39dd-40fc-b2de-b60c574e643d",
    category: "Karaoke",
    name: "Group Karaoke Party",
    description: "Group singing sessions with popular crowd-pleasing songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Group Karaoke Party performance times"
    },
    contact: {
      contactNumber: "+1-818-193-4287",
      contactEmail: "services@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "7b113a1d-e0bf-4e44-a4b0-7af4f8cf7e76",
      title: "Group Karaoke Party",
      description: "Group singing sessions with popular crowd-pleasing songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "102 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Group Karaoke Party performance times"
        }],
      performers: [        {
                "id": "cf9f38e3-c3bc-4a7a-ad16-dc935aa16935",
                "name": "Alan Keller",
                "role": "DJ",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/80.jpg",
                "contact": {
                        "contactEmail": "connect@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 4,
                "specialties": [
                        "Entertainment Coordinator"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Alice Lawson",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          rating: 4,
          date: "-452",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Alexander Watson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/37.jpg",
          rating: 4,
          date: "-801",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Catherine Russell",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          rating: 4,
          date: "-521",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Philip Collins",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/49.jpg",
          rating: 5,
          date: "-738",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Brooklyn Dean",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-941",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "da67016a-d5a3-40ae-883d-1eb4241c0e7b",
              "name": "Performance Recording",
              "description": "Recording of your karaoke performance",
              "price": 16,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      },
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      }
    ],
    isPopular: false
  },
  {
    id: "24ee0fbb-39dd-40fc-b2de-b60c574e643d",
    category: "Karaoke",
    name: "Karaoke Battle",
    description: "Partner up for duet performances of your favorite songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Karaoke Battle performance times"
    },
    contact: {
      contactNumber: "+1-814-814-8537",
      contactEmail: "care@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "6a24e7ea-dfb4-4fe6-b2ca-19c1466e7392",
      title: "Karaoke Battle",
      description: "Partner up for duet performances of your favorite songs",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "108 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Karaoke Battle performance times"
        }],
      performers: [        {
                "id": "aa301fe4-af72-4008-9359-e0c67a28edd9",
                "name": "Ellie Sutton",
                "role": "Vocal Coach",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/10.jpg",
                "contact": {
                        "contactEmail": "hello@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Karaoke Host"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Joseph Chambers",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          rating: 5,
          date: "-42",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Grace Hall",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/71.jpg",
          rating: 5,
          date: "-174",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Peter Jennings",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-865",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Rebecca Dean",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/34.jpg",
          rating: 4,
          date: "-205",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Christine Wells",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          rating: 5,
          date: "-279",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Priya Maxwell",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          rating: 5,
          date: "-458",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Sophia Wells",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          rating: 5,
          date: "-249",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Amina Campbell",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/72.jpg",
          rating: 5,
          date: "-420",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Laura Montgomery",
          title: "Music Lover",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          rating: 4,
          date: "-720",
        }
      ],
      hasVIPSeating: true,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      }
    ],
    isPopular: false
  },
  {
    id: "24ee0fbb-39dd-40fc-b2de-b60c574e643d",
    category: "Karaoke",
    name: "Classic Rock Karaoke",
    description: "Partner up for duet performances of your favorite songs",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Classic Rock Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-568-151-9195",
      contactEmail: "admin@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "173f640f-e826-4041-afbe-1d46fdbced97",
      title: "Classic Rock Karaoke",
      description: "Partner up for duet performances of your favorite songs",
      tickets: {
        isRequired: false,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "103 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "53117893-d290-4c1d-85ff-473b185700a9",
                "name": "Aaron Collins",
                "role": "DJ",
                "bio": "Professional entertainment coordinator with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/4.jpg",
                "contact": {
                        "contactEmail": "team@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 10,
                "specialties": [
                        "Karaoke Host",
                        "DJ"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Gregory Harper",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5,
          date: "-410",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Sarah Hall",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "-816",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Cynthia Curtis",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          rating: 5,
          date: "-641",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Riley Dixon",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4,
          date: "-244",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Christopher Hayes",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/31.jpg",
          rating: 5,
          date: "-196",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Dorothy Ellis",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
          rating: 4,
          date: "-1073",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Antonio Graves",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          date: "-526",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Isabella Holloway",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 5,
          date: "-272",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Gary Keller",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5,
          date: "-102",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "a59b4cf9-4d9e-41d2-98e7-db63856c83a0",
              "name": "Karaoke Microphone",
              "description": "Professional karaoke microphone",
              "price": 24,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      },
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      }
    ],
    isPopular: false
  },
  {
    id: "24ee0fbb-39dd-40fc-b2de-b60c574e643d",
    category: "Karaoke",
    name: "Classic Rock Karaoke",
    description: "American Idol-style karaoke competition with judges",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "03:00",
          "duration": "8 hours",
          "description": "Classic Rock Karaoke performance times"
    },
    contact: {
      contactNumber: "+1-468-800-5701",
      contactEmail: "support@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "e23303ff-3ce4-4506-b538-df52f45a28ec",
      title: "Classic Rock Karaoke",
      description: "American Idol-style karaoke competition with judges",
      tickets: {
        isRequired: false,
        price: 25,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "84 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "03:00",
                "duration": "8 hours",
                "description": "Classic Rock Karaoke performance times"
        }],
      performers: [        {
                "id": "ba32478a-2a8e-4a52-9fa7-a109b2786446",
                "name": "Lerato Henderson",
                "role": "DJ",
                "bio": "Professional karaoke host with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/70.jpg",
                "contact": {
                        "contactEmail": "office@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 9,
                "specialties": [
                        "Karaoke Host",
                        "DJ"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Sebastian Graham",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/83.jpg",
          rating: 5,
          date: "-1047",
        },
        {
          quote: "I finally got to sing my favorite song! The Classic Rock Karaoke event was so much fun.",
          author: "Carl Lawson",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "-103",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Patrick Stewart",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "-680",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Christopher Fisher",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/men/56.jpg",
          rating: 5,
          date: "-712",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Gregory Reed",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          rating: 4,
          date: "-603",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Maria Murray",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          rating: 5,
          date: "-690",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: true,
      merchandise:       {
              "id": "1a611ddc-da96-44d4-a807-a0909159ee38",
              "name": "Song Book",
              "description": "Complete karaoke song catalog",
              "price": 14,
              "currency": "USD"
      }
    }],
    faqs: [
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      }
    ],
    isPopular: false
  },
  {
    id: "24ee0fbb-39dd-40fc-b2de-b60c574e643d",
    category: "Karaoke",
    name: "Duet Night",
    description: "Showcase your singing talents and become a karaoke superstar",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "20:00",
          "end": "02:00",
          "duration": "6 hours",
          "description": "Duet Night performance times"
    },
    contact: {
      contactNumber: "+1-816-545-9069",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "ba44f2d7-951d-4e4e-a51e-5e2428f26ebe",
      title: "Duet Night",
      description: "Showcase your singing talents and become a karaoke superstar",
      tickets: {
        isRequired: true,
        price: 0,
        currency: "USD",
      },
      isAdultOnly: true,
      duration: "93 minutes",
      schedule: [        {
                "start": "20:00",
                "end": "02:00",
                "duration": "6 hours",
                "description": "Duet Night performance times"
        }],
      performers: [        {
                "id": "eaa33339-e0a9-4e62-8fdd-3dbb6a06420a",
                "name": "Nicole Dunn",
                "role": "Vocal Coach",
                "bio": "Professional dj with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/women/50.jpg",
                "contact": {
                        "contactEmail": "reachus@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 13,
                "specialties": [
                        "Karaoke Host"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Avery Holloway",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/women/77.jpg",
          rating: 5,
          date: "-324",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Andrew Fisher",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 5,
          date: "-894",
        },
        {
          quote: "Great song selection and supportive audience. undefined undefined was an excellent host.",
          author: "Bella West",
          title: "Cruise Passenger",
          image: "https://randomuser.me/api/portraits/women/26.jpg",
          rating: 4,
          date: "-277",
        },
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Russell Hayes",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 4,
          date: "-1083",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Patrick Lawson",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/men/70.jpg",
          rating: 5,
          date: "-9",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      }
    ],
    isPopular: true
  },
  {
    id: "24ee0fbb-39dd-40fc-b2de-b60c574e643d",
    category: "Karaoke",
    name: "Karaoke Idol",
    description: "Family-friendly karaoke with songs for all ages",
    image: "/images/entertainment/karaoke-show.jpg",
    hours:     {
          "start": "19:00",
          "end": "01:00",
          "duration": "6 hours",
          "description": "Karaoke Idol performance times"
    },
    contact: {
      contactNumber: "+1-293-306-7909",
      contactEmail: "help@entertainment.velarivoyages.com",
    },
    shows: [{
      id: "798dceac-8881-4c9e-be2b-c5a75caa6d48",
      title: "Karaoke Idol",
      description: "Family-friendly karaoke with songs for all ages",
      tickets: {
        isRequired: true,
        price: 18,
        currency: "USD",
      },
      isAdultOnly: false,
      duration: "113 minutes",
      schedule: [        {
                "start": "19:00",
                "end": "01:00",
                "duration": "6 hours",
                "description": "Karaoke Idol performance times"
        }],
      performers: [        {
                "id": "ac64aa44-f90a-4d61-b10b-8ec559e1b072",
                "name": "Stephen Hudson",
                "role": "DJ",
                "bio": "Professional vocal coach with years of cruise ship entertainment experience.",
                "image": "https://randomuser.me/api/portraits/men/78.jpg",
                "contact": {
                        "contactEmail": "clientservices@entertainment.velarivoyages.com"
                },
                "yearsOfExperience": 11,
                "specialties": [
                        "Vocal Coach",
                        "Karaoke Host"
                ],
                "certifications": [
                        "Professional Entertainment License",
                        "Maritime Safety Certification"
                ]
        }],
      testimonials: [
        {
          quote: "The karaoke equipment was top-notch and the atmosphere was electric.",
          author: "Eleanor Baker",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/66.jpg",
          rating: 4,
          date: "-19",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Audrey Holloway",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/women/31.jpg",
          rating: 5,
          date: "-1034",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Stephen Collins",
          title: "Guest",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 5,
          date: "-370",
        },
        {
          quote: "This brought out my inner rock star! Such a fun and liberating experience.",
          author: "Joan Graham",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 5,
          date: "-586",
        },
        {
          quote: "Perfect entertainment for a group. We all took turns and had amazing time.",
          author: "Brandon Watson",
          title: "Vacationer",
          image: "https://randomuser.me/api/portraits/men/57.jpg",
          rating: 4,
          date: "-1059",
        },
        {
          quote: "Even though I can't sing, I had a blast! Everyone was so encouraging.",
          author: "Stephanie Porter",
          title: "Entertainment Enthusiast",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          rating: 5,
          date: "-874",
        },
        {
          quote: "I finally got to sing my favorite song! The Karaoke Idol event was so much fun.",
          author: "Kenneth Montgomery",
          title: "Traveler",
          image: "https://randomuser.me/api/portraits/men/54.jpg",
          rating: 4,
          date: "-699",
        }
      ],
      hasVIPSeating: false,
      hasAccessibleSeating: true,
      hasMerchandise: false
    }],
    faqs: [
      {
        question: "What songs are available for karaoke?",
        answer: "We have an extensive library of songs in multiple languages, including current hits and classic favorites.",
      },
      {
        question: "Can I sing duets with friends?",
        answer: "Absolutely! We encourage group performances and duets. Multiple microphones are available.",
      },
      {
        question: "Do I need to bring my own microphone?",
        answer: "All microphones and equipment are provided. We maintain high-quality sound systems for the best experience.",
      }
    ],
    isPopular: false
  }
];
