import { Cruise } from "@/lib/interfaces/services/cruises";

export const sydneyCruises: Cruise[] = [
  {
    basePrice: 8832,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
        {
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
        {
          city: "Shanghai",
          country: "China",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "This frontier takes you beyond the ordinary, starting in Sydney. With breathtaking stops in Singapore, Auckland, Shanghai, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1229 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Sydney to Singapore",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Singapore to Auckland",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Auckland to Shanghai",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Shanghai to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Logan Fletcher",
        role: "Customer Service Representative",
        languages: ["Malay", "Japanese", "Korean"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/98.jpg",
        contact: {
          contactEmail: "secluded.voyage.of.t@velarivoyages.com",
          contactNumber: "+1-860-206-6612",
        },
      },
    ],
    title: "Secluded Voyage of the Sacred Shores",
    description:
      "This frontier takes you beyond the ordinary, starting in Sydney. With breathtaking stops in Singapore, Auckland, Shanghai, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 5.0,
    tags: ["cruise-excursion", "seasonal"],
  },
  {
    basePrice: 6862,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Shanghai",
          country: "China",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
        {
          city: "Tokyo",
          country: "Japan",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this enchanting exploration through Asia Pacific, starting from the illustrious port of Sydney. From Shanghai to Tokyo, each destination offers its own story, culture, and breathtaking views.",
      distance: "822 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Sydney to Shanghai",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Shanghai to Tokyo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Tokyo to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Joe Foster",
        role: "Customer Service Representative",
        languages: ["Malay", "Japanese", "Korean"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "forbidden.currents.o@velarivoyages.com",
          contactNumber: "+1-163-247-8822",
        },
      },
    ],
    title: "Forbidden Currents of the Opera-Lit Skies",
    description:
      "Experience the elegance of the seas on this enchanting exploration through Asia Pacific, starting from the illustrious port of Sydney. From Shanghai to Tokyo, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.6,
    tags: ["fall-cruise"],
  },
  {
    basePrice: 2939,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
          },
        },
        {
          city: "Yokohama",
          country: "Japan",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
        {
          city: "Ho Chi Minh City",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "This midnight discovery begins in Sydney and ventures deep into the heart of Asia Pacific. Wander through colorful markets, historic streets, and serene coastlines at Bangkok, Yokohama, Ho Chi Minh City, Auckland.",
      distance: "580 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Sydney to Bangkok",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Bangkok to Yokohama",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Yokohama to Ho Chi Minh City",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Auckland",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Auckland to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Zachary Foster",
        role: "Customer Service Representative",
        languages: ["Malay", "Japanese", "Korean"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
        contact: {
          contactEmail: "majestic.realm.of.th@velarivoyages.com",
          contactNumber: "+1-953-296-6985",
        },
      },
    ],
    title: "Majestic Realm of the Harbor Icon",
    description:
      "This midnight discovery begins in Sydney and ventures deep into the heart of Asia Pacific. Wander through colorful markets, historic streets, and serene coastlines at Bangkok, Yokohama, Ho Chi Minh City, Auckland.",
    rating: 4.2,
    tags: ["cruise"],
  },
  {
    basePrice: 1269,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Tokyo",
      country: "Japan",
      coordinates: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
        {
          city: "Hong Kong",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
        {
          city: "Tokyo",
          country: "Japan",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
      ],
      description:
        "Embark on an unforgettable reflection from the vibrant port of Sydney, where you'll discover hidden gems and iconic landmarks across the Asia Pacific region. With stops at Singapore, Hong Kong, Kyoto, Tokyo, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1059 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Sydney to Singapore",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Singapore to Hong Kong",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Hong Kong to Kyoto",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Kyoto to Tokyo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Austin Payne",
        role: "Customer Service Representative",
        languages: ["Malay", "Japanese", "Korean"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/91.jpg",
        contact: {
          contactEmail: "riveting.panorama.of@velarivoyages.com",
          contactNumber: "+1-810-447-3927",
        },
      },
    ],
    title: "Riveting Panorama of the Southern Cross City",
    description:
      "Embark on an unforgettable reflection from the vibrant port of Sydney, where you'll discover hidden gems and iconic landmarks across the Asia Pacific region. With stops at Singapore, Hong Kong, Kyoto, Tokyo, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.6,
    tags: ["sightseeing", "cruise-experience"],
  },
  {
    basePrice: 5536,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
        {
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
          },
        },
        {
          city: "Yokohama",
          country: "Japan",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
        {
          city: "Bali",
          country: "Indonesia",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "Explore a new side of Asia Pacific with this sun-drenched eclipse starting in Sydney. Visit charming ports such as Kyoto, Bangkok, Yokohama, Bali, each offering its own unique rhythm.",
      distance: "971 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Sydney to Kyoto",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Kyoto to Bangkok",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Bangkok to Yokohama",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Yokohama to Bali",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Bali to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Stephen Palmer",
        role: "Customer Service Representative",
        languages: ["Malay", "Japanese", "Korean"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "breathtaking.explora@velarivoyages.com",
          contactNumber: "+1-471-840-7073",
        },
      },
    ],
    title: "Breathtaking Exploration of the Jade Horizons",
    description:
      "Explore a new side of Asia Pacific with this sun-drenched eclipse starting in Sydney. Visit charming ports such as Kyoto, Bangkok, Yokohama, Bali, each offering its own unique rhythm.",
    rating: 4.5,
    tags: ["sightseeing"],
  },
  {
    basePrice: 3453,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
        {
          city: "Bali",
          country: "Indonesia",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
        {
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "Escape the everyday with this enchanting journey through Asia Pacific, departing from Sydney. You'll visit Singapore, Bali, Bangkok, where every stop is a new adventure.",
      distance: "773 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Sydney to Singapore",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Singapore to Bali",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Bali to Bangkok",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Bangkok to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Sean Mitchell",
        role: "Customer Service Representative",
        languages: ["Malay", "Japanese", "Korean"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "aweinspiring.lullaby@velarivoyages.com",
          contactNumber: "+1-644-721-8931",
        },
      },
    ],
    title: "Awe-Inspiring Lullaby of the Oceanic Wonders",
    description:
      "Escape the everyday with this enchanting journey through Asia Pacific, departing from Sydney. You'll visit Singapore, Bali, Bangkok, where every stop is a new adventure.",
    rating: 4.8,
    tags: ["culinary", "wellness", "anniversary-cruise"],
  },
  {
    basePrice: 3293,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
        {
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
        {
          city: "Shanghai",
          country: "China",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "Step aboard in Sydney and begin a verdant journey through the scenic Asia Pacific. From historic cities to coastal hideaways like Kyoto, Auckland, Shanghai, every day is unforgettable.",
      distance: "719 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Sydney to Kyoto",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Kyoto to Auckland",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Auckland to Shanghai",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Shanghai to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Mark Hall",
        role: "Customer Service Representative",
        languages: ["Malay", "Japanese", "Korean"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "unforgettable.legacy@velarivoyages.com",
          contactNumber: "+1-780-759-3975",
        },
      },
    ],
    title: "Unforgettable Legacy of the Dynastic Dreams",
    description:
      "Step aboard in Sydney and begin a verdant journey through the scenic Asia Pacific. From historic cities to coastal hideaways like Kyoto, Auckland, Shanghai, every day is unforgettable.",
    rating: 4.9,
    tags: ["cruise-experience", "weekend-cruise"],
  },
  {
    basePrice: 9659,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Hong Kong",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Ho Chi Minh City",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "Embark on an unforgettable tide from the vibrant port of Sydney, where you'll discover hidden gems and iconic landmarks across the Asia Pacific region. With stops at Hong Kong, Ho Chi Minh City, Bangkok, this journey combines cultural immersion with breathtaking scenery.",
      distance: "748 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Sydney to Hong Kong",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Hong Kong to Ho Chi Minh City",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Bangkok",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Bangkok to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gregory Payne",
        role: "Customer Service Representative",
        languages: ["Malay", "Japanese", "Korean"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "captivating.legacy.o@velarivoyages.com",
          contactNumber: "+1-332-588-2861",
        },
      },
    ],
    title: "Captivating Legacy of the Opera-Lit Skies",
    description:
      "Embark on an unforgettable tide from the vibrant port of Sydney, where you'll discover hidden gems and iconic landmarks across the Asia Pacific region. With stops at Hong Kong, Ho Chi Minh City, Bangkok, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.0,
    tags: ["culinary"],
  },
  {
    basePrice: 9256,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Shanghai",
      country: "China",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Bali",
          country: "Indonesia",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
        {
          city: "Shanghai",
          country: "China",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
      ],
      description:
        "Discover the wonders of Asia Pacific aboard this celestial cruise departing from Sydney. Journey through crystal waters to explore the treasures of Bali, Shanghai, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1103 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Sydney to Bali",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Bali to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Billy Dunn",
        role: "Customer Service Representative",
        languages: ["Malay", "Japanese", "Korean"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "velvet.enigma.of.the@velarivoyages.com",
          contactNumber: "+1-472-715-7052",
        },
      },
    ],
    title: "Velvet Enigma of the Mystic East",
    description:
      "Discover the wonders of Asia Pacific aboard this celestial cruise departing from Sydney. Journey through crystal waters to explore the treasures of Bali, Shanghai, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.1,
    tags: ["cruise-journey", "romantic"],
  },
  {
    basePrice: 3427,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Shanghai",
      country: "China",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Tokyo",
          country: "Japan",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Melbourne",
          country: "Australia",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
        {
          city: "Shanghai",
          country: "China",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
          },
        },
      ],
      description:
        "Let this epic voyage redefine your idea of travel. From Sydney, explore the Asia Pacific in luxurious comfort, stopping at Tokyo, Melbourne, Shanghai where every port offers a new chapter.",
      distance: "1243 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Sydney to Tokyo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Tokyo to Melbourne",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Melbourne to Shanghai",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Samuel Palmer",
        role: "Customer Service Representative",
        languages: ["Malay", "Japanese", "Korean"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/36.jpg",
        contact: {
          contactEmail: "exquisite.drift.of.t@velarivoyages.com",
          contactNumber: "+1-887-284-1617",
        },
      },
    ],
    title: "Exquisite Drift of the Mystic East",
    description:
      "Let this epic voyage redefine your idea of travel. From Sydney, explore the Asia Pacific in luxurious comfort, stopping at Tokyo, Melbourne, Shanghai where every port offers a new chapter.",
    rating: 4.8,
    tags: ["nature"],
  },
  {
    basePrice: 2233,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Hong Kong",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Bali",
          country: "Indonesia",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
        {
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
        {
          city: "Ho Chi Minh City",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "Depart from iconic Sydney and traverse the Asia Pacific with visits to Hong Kong, Bali, Singapore, Ho Chi Minh City. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "892 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Sydney to Hong Kong",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Hong Kong to Bali",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Bali to Singapore",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Singapore to Ho Chi Minh City",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Joe Spencer",
        role: "Customer Service Representative",
        languages: ["Malay", "Japanese", "Korean"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/63.jpg",
        contact: {
          contactEmail: "moonlit.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-300-414-3866",
        },
      },
    ],
    title: "Moonlit Odyssey of the Opera-Lit Skies",
    description:
      "Depart from iconic Sydney and traverse the Asia Pacific with visits to Hong Kong, Bali, Singapore, Ho Chi Minh City. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.0,
    tags: ["weekend-cruise"],
  },
  {
    basePrice: 3566,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
          },
        },
        {
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "Sail away from Sydney into the beautiful expanse of Asia Pacific. Along the way, enjoy rich cultural experiences in Bangkok, Auckland, where history, nature, and cuisine collide.",
      distance: "561 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Sydney to Bangkok",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Bangkok to Auckland",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Auckland to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Thomas Crawford",
        role: "Customer Service Representative",
        languages: ["Malay", "Japanese", "Korean"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
        contact: {
          contactEmail: "mystical.haven.of.th@velarivoyages.com",
          contactNumber: "+1-460-210-1131",
        },
      },
    ],
    title: "Mystical Haven of the Southern Cross City",
    description:
      "Sail away from Sydney into the beautiful expanse of Asia Pacific. Along the way, enjoy rich cultural experiences in Bangkok, Auckland, where history, nature, and cuisine collide.",
    rating: 4.6,
    tags: ["repositioning", "short-getaway", "exclusive"],
  },
  {
    basePrice: 3050,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Auckland",
      country: "New Zealand",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Melbourne",
          country: "Australia",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
        {
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
      ],
      description:
        "This hand-selected panoramic cruise offers a true taste of Asia Pacific. Depart from Sydney and explore ports like Melbourne, Auckland, each telling a story through food, music, and tradition.",
      distance: "1029 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Sydney to Melbourne",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Melbourne to Auckland",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Auckland",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Carl Payne",
        role: "Customer Service Representative",
        languages: ["Malay", "Japanese", "Korean"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/85.jpg",
        contact: {
          contactEmail: "luminous.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-470-570-6305",
        },
      },
    ],
    title: "Luminous Mirage of the Sun-Kissed Capital",
    description:
      "This hand-selected panoramic cruise offers a true taste of Asia Pacific. Depart from Sydney and explore ports like Melbourne, Auckland, each telling a story through food, music, and tradition.",
    rating: 4.2,
    tags: ["romantic"],
  },
  {
    basePrice: 8823,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
        {
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "Step aboard in Sydney and begin a verdant journey through the scenic Asia Pacific. From historic cities to coastal hideaways like Singapore, Kyoto, every day is unforgettable.",
      distance: "1067 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Sydney to Singapore",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Singapore to Kyoto",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Kyoto to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Eric Curtis",
        role: "Customer Service Representative",
        languages: ["Malay", "Japanese", "Korean"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/14.jpg",
        contact: {
          contactEmail: "secret.mystique.of.t@velarivoyages.com",
          contactNumber: "+1-277-534-6934",
        },
      },
    ],
    title: "Secret Mystique of the Opera-Lit Skies",
    description:
      "Step aboard in Sydney and begin a verdant journey through the scenic Asia Pacific. From historic cities to coastal hideaways like Singapore, Kyoto, every day is unforgettable.",
    rating: 4.5,
    tags: ["cruise-excursion", "wildlife"],
  },
  {
    basePrice: 8876,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Singapore",
      country: "Singapore",
      coordinates: {
        latitude: 1.3521,
        longitude: 103.8198,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Hong Kong",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Yokohama",
          country: "Japan",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
        {
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
      ],
      description:
        "Let the waves lead you from Sydney on this charming enigma. Traverse the iconic waters of Asia Pacific and discover the beauty of Hong Kong, Yokohama, Singapore.",
      distance: "941 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Sydney to Hong Kong",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Hong Kong to Yokohama",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Yokohama to Singapore",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Singapore",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Alan Reed",
        role: "Customer Service Representative",
        languages: ["Malay", "Japanese", "Korean"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
        contact: {
          contactEmail: "sundrenched.passage.@velarivoyages.com",
          contactNumber: "+1-301-238-8920",
        },
      },
    ],
    title: "Sun-Drenched Passage of the Sun-Kissed Capital",
    description:
      "Let the waves lead you from Sydney on this charming enigma. Traverse the iconic waters of Asia Pacific and discover the beauty of Hong Kong, Yokohama, Singapore.",
    rating: 4.9,
    tags: ["cruise-ship", "long-distance", "cruise-getaway"],
  },
  {
    basePrice: 6259,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Bangkok",
      country: "Thailand",
      coordinates: {
        latitude: 13.7563,
        longitude: 100.5018,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Tokyo",
          country: "Japan",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
        {
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
          },
        },
      ],
      description:
        "Discover the wonders of Asia Pacific aboard this starlit cruise departing from Sydney. Journey through crystal waters to explore the treasures of Tokyo, Kyoto, Bangkok, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "678 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Sydney to Tokyo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Tokyo to Kyoto",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Kyoto to Bangkok",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Helen Price",
        role: "Customer Service Representative",
        languages: ["Korean", "Thai", "Japanese", "Vietnamese"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "heavenly.enigma.of.t@velarivoyages.com",
          contactNumber: "+1-850-942-7286",
        },
      },
    ],
    title: "Heavenly Enigma of the Crescent Bay Beauty",
    description:
      "Discover the wonders of Asia Pacific aboard this starlit cruise departing from Sydney. Journey through crystal waters to explore the treasures of Tokyo, Kyoto, Bangkok, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.2,
    tags: ["anniversary-cruise", "expedition", "tropical"],
  },
  {
    basePrice: 2340,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Ho Chi Minh City",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Melbourne",
          country: "Australia",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "An escape like no other begins in Sydney, where your whisper launches into the heart of Asia Pacific. Discover the magic of Ho Chi Minh City, Melbourne with style and sophistication.",
      distance: "1192 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Sydney to Ho Chi Minh City",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Samantha Marshall",
        role: "Customer Service Representative",
        languages: ["Korean", "Thai", "Japanese", "Vietnamese"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
        contact: {
          contactEmail: "luminous.renaissance@velarivoyages.com",
          contactNumber: "+1-459-814-4946",
        },
      },
    ],
    title: "Luminous Renaissance of the Dynastic Dreams",
    description:
      "An escape like no other begins in Sydney, where your whisper launches into the heart of Asia Pacific. Discover the magic of Ho Chi Minh City, Melbourne with style and sophistication.",
    rating: 4.5,
    tags: ["general", "nature", "glacier-cruise"],
  },
  {
    basePrice: 2358,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Bangkok",
      country: "Thailand",
      coordinates: {
        latitude: 13.7563,
        longitude: 100.5018,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Tokyo",
          country: "Japan",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        },
        {
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
        {
          city: "Hong Kong",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
          },
        },
      ],
      description:
        "Your renaissance begins in Sydney, where every sunset on the Asia Pacific horizon promises another day of discovery—from Tokyo, Auckland, Hong Kong, Bangkok to hidden ports of charm.",
      distance: "1373 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Sydney to Tokyo",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tokyo to Auckland",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Auckland to Hong Kong",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Hong Kong to Bangkok",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Betty Murray",
        role: "Customer Service Representative",
        languages: ["Korean", "Thai", "Japanese", "Vietnamese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "heavenly.oasis.of.th@velarivoyages.com",
          contactNumber: "+1-161-383-8765",
        },
      },
    ],
    title: "Heavenly Oasis of the Sun-Kissed Capital",
    description:
      "Your renaissance begins in Sydney, where every sunset on the Asia Pacific horizon promises another day of discovery—from Tokyo, Auckland, Hong Kong, Bangkok to hidden ports of charm.",
    rating: 4.4,
    tags: ["cruise-holiday"],
  },
  {
    basePrice: 5314,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
        {
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this mystical pulse departing Sydney. Savor local cuisine and uncover regional beauty from Singapore to Kyoto.",
      distance: "960 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Sydney to Singapore",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Singapore to Kyoto",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Kyoto to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ellie Marshall",
        role: "Customer Service Representative",
        languages: ["Korean", "Thai", "Japanese", "Vietnamese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "charming.excursion.o@velarivoyages.com",
          contactNumber: "+1-360-606-4171",
        },
      },
    ],
    title: "Charming Excursion of the Pacific Dreams",
    description:
      "Cruise into cultural richness aboard this mystical pulse departing Sydney. Savor local cuisine and uncover regional beauty from Singapore to Kyoto.",
    rating: 4.2,
    tags: ["long-distance", "family-friendly"],
  },
  {
    basePrice: 7344,
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Melbourne",
          country: "Australia",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
        {
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
        {
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "Board in Sydney for a hand-crafted whisper through the breathtaking Asia Pacific. Highlights include sun-drenched beaches, historic ports, and immersive culture in Melbourne, Kyoto, Singapore.",
      distance: "535 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Sydney to Melbourne",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Melbourne to Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Kyoto to Singapore",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Singapore to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Amy Jennings",
        role: "Customer Service Representative",
        languages: ["Korean", "Thai", "Japanese", "Vietnamese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "forbidden.quest.of.t@velarivoyages.com",
          contactNumber: "+1-803-660-4633",
        },
      },
    ],
    title: "Forbidden Quest of the Mystic East",
    description:
      "Board in Sydney for a hand-crafted whisper through the breathtaking Asia Pacific. Highlights include sun-drenched beaches, historic ports, and immersive culture in Melbourne, Kyoto, Singapore.",
    rating: 4.5,
    tags: ["weekend-cruise", "relaxation"],
  },
];
