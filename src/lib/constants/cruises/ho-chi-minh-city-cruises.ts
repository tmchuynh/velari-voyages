import { Cruise } from "@/lib/interfaces/services/cruises";

export const hoChiMinhCityCruises: Cruise[] = [
  {
    basePrice: 3946,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    arrivalLocation: {
      city: "Hong Kong",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
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
      ],
      description:
        "Sail away from the charming harbor of Ho Chi Minh City on this starlit journey across Asia Pacific. Uncover the beauty and history of Sydney, Hong Kong with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1155 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Sydney",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Sydney to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Stephen Lawson",
        role: "Reservations Agent",
        languages: ["Thai", "Chinese", "Vietnamese", "Bengali"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/59.jpg",
        contact: {
          contactEmail: "breathtaking.tranqui@velarivoyages.com",
          contactNumber: "+1-727-425-9528",
        },
      },
    ],
    title: "Breathtaking Tranquility of the Jade Horizons",
    description:
      "Sail away from the charming harbor of Ho Chi Minh City on this starlit journey across Asia Pacific. Uncover the beauty and history of Sydney, Hong Kong with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.4,
    tags: ["holiday-cruise", "relaxation"],
  },
  {
    basePrice: 6631,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    arrivalLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
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
          city: "Shanghai",
          country: "China",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
          },
        },
      ],
      description:
        "Begin an epic retreat from Ho Chi Minh City, where the seas meet culture. Visit the remarkable ports of Bangkok, Shanghai, Hong Kong while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "694 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Bangkok",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Bangkok to Shanghai",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Shanghai to Hong Kong",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Hong Kong to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Joe Ellis",
        role: "Reservations Agent",
        languages: ["Thai", "Chinese", "Vietnamese", "Bengali"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "oceanic.horizon.of.t@velarivoyages.com",
          contactNumber: "+1-278-340-4846",
        },
      },
    ],
    title: "Oceanic Horizon of the Lotus-Lined Waters",
    description:
      "Begin an epic retreat from Ho Chi Minh City, where the seas meet culture. Visit the remarkable ports of Bangkok, Shanghai, Hong Kong while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.5,
    tags: ["wildlife"],
  },
  {
    basePrice: 6408,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    arrivalLocation: {
      city: "Bali",
      country: "Indonesia",
      coordinates: {
        latitude: -8.409518,
        longitude: 115.188919,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
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
        {
          city: "Bali",
          country: "Indonesia",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
      ],
      description:
        "Step aboard in Ho Chi Minh City and begin a floating journey through the scenic Asia Pacific. From historic cities to coastal hideaways like Yokohama, Singapore, Bali, every day is unforgettable.",
      distance: "1194 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Yokohama",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Yokohama to Singapore",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Singapore to Bali",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Bali",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Carl Hamilton",
        role: "Reservations Agent",
        languages: ["Thai", "Chinese", "Vietnamese", "Bengali"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "riveting.passage.of.@velarivoyages.com",
          contactNumber: "+1-274-322-9794",
        },
      },
    ],
    title: "Riveting Passage of the Sacred Shores",
    description:
      "Step aboard in Ho Chi Minh City and begin a floating journey through the scenic Asia Pacific. From historic cities to coastal hideaways like Yokohama, Singapore, Bali, every day is unforgettable.",
    rating: 4.5,
    tags: ["VIP", "repositioning", "culinary"],
  },
  {
    basePrice: 3431,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    arrivalLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
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
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
          },
        },
      ],
      description:
        "Depart Ho Chi Minh City on a relaxing adventure through the Asia Pacific region. Highlights include the stunning coastlines of Bangkok, Yokohama, all while enjoying first-class amenities on board.",
      distance: "1481 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Bangkok",
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
          description: "Sailing from Yokohama to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
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
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Bobby Day",
        role: "Reservations Agent",
        languages: ["Thai", "Chinese", "Vietnamese", "Bengali"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
        contact: {
          contactEmail: "secluded.lullaby.of.@velarivoyages.com",
          contactNumber: "+1-438-868-6047",
        },
      },
    ],
    title: "Secluded Lullaby of the Volcanic Outposts",
    description:
      "Depart Ho Chi Minh City on a relaxing adventure through the Asia Pacific region. Highlights include the stunning coastlines of Bangkok, Yokohama, all while enjoying first-class amenities on board.",
    rating: 5.0,
    tags: ["general", "cruise-experience"],
  },
  {
    basePrice: 9154,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    arrivalLocation: {
      city: "Hong Kong",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
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
          city: "Hong Kong",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This handpicked expedition begins in Ho Chi Minh City and travels through Asia Pacific's iconic waterscapes. Discover Yokohama, Hong Kong as each day brings new stories and every night offers elegant repose.",
      distance: "1375 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Yokohama",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Yokohama to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Joel Carpenter",
        role: "Reservations Agent",
        languages: ["Thai", "Chinese", "Vietnamese", "Bengali"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "lavish.solstice.of.t@velarivoyages.com",
          contactNumber: "+1-635-664-6553",
        },
      },
    ],
    title: "Lavish Solstice of the Oriental Realms",
    description:
      "This handpicked expedition begins in Ho Chi Minh City and travels through Asia Pacific's iconic waterscapes. Discover Yokohama, Hong Kong as each day brings new stories and every night offers elegant repose.",
    rating: 4.8,
    tags: ["glacier-cruise", "short-getaway"],
  },
  {
    basePrice: 2944,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    arrivalLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
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
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
          },
        },
      ],
      description:
        "Your awakening begins in Ho Chi Minh City, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Auckland to the historic streets of Shanghai, each stop in the Asia Pacific will leave a lasting impression.",
      distance: "1196 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Auckland",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Auckland to Shanghai",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Shanghai to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Jordan Cooper",
        role: "Reservations Agent",
        languages: ["Thai", "Chinese", "Vietnamese", "Bengali"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/63.jpg",
        contact: {
          contactEmail: "infinite.requiem.of.@velarivoyages.com",
          contactNumber: "+1-291-825-1563",
        },
      },
    ],
    title: "Infinite Requiem of the Tea-Laced Traditions",
    description:
      "Your awakening begins in Ho Chi Minh City, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Auckland to the historic streets of Shanghai, each stop in the Asia Pacific will leave a lasting impression.",
    rating: 4.6,
    tags: ["general", "relaxation", "VIP"],
  },
  {
    basePrice: 7036,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
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
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "Set sail from Ho Chi Minh City on this luminous tranquility through the heart of Asia Pacific. Experience the perfect blend of relaxation and adventure as you explore Yokohama and Singapore and Auckland and Sydney, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "835 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Yokohama",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Yokohama to Singapore",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Singapore to Auckland",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Auckland to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jacob Montgomery",
        role: "Reservations Agent",
        languages: ["Thai", "Chinese", "Vietnamese", "Bengali"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/39.jpg",
        contact: {
          contactEmail: "alluring.journey.of.@velarivoyages.com",
          contactNumber: "+1-112-576-5899",
        },
      },
    ],
    title: "Alluring Journey of the Jade Horizons",
    description:
      "Set sail from Ho Chi Minh City on this luminous tranquility through the heart of Asia Pacific. Experience the perfect blend of relaxation and adventure as you explore Yokohama and Singapore and Auckland and Sydney, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.8,
    tags: ["cruise-vacation"],
  },
  {
    basePrice: 4990,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    arrivalLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
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
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
          },
        },
      ],
      description:
        "An escape like no other begins in Ho Chi Minh City, where your odyssey launches into the heart of Asia Pacific. Discover the magic of Shanghai, Sydney with style and sophistication.",
      distance: "505 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Shanghai",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Shanghai to Sydney",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Sydney to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Javier Gardner",
        role: "Reservations Agent",
        languages: ["Thai", "Chinese", "Vietnamese", "Bengali"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/74.jpg",
        contact: {
          contactEmail: "heavenly.escape.of.t@velarivoyages.com",
          contactNumber: "+1-739-836-2927",
        },
      },
    ],
    title: "Heavenly Escape of the Tea-Laced Traditions",
    description:
      "An escape like no other begins in Ho Chi Minh City, where your odyssey launches into the heart of Asia Pacific. Discover the magic of Shanghai, Sydney with style and sophistication.",
    rating: 4.3,
    tags: ["cruise-getaway", "cruise-holiday"],
  },
  {
    basePrice: 6515,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
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
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
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
        "Unwind and explore on this eclipse through Asia Pacific, departing from Ho Chi Minh City. With every stop—from Sydney to Melbourne—you’ll collect memories that last a lifetime.",
      distance: "1331 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Sydney",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Sydney to Shanghai",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Shanghai to Auckland",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Auckland to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Richard Stewart",
        role: "Reservations Agent",
        languages: ["Thai", "Chinese", "Vietnamese", "Bengali"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/92.jpg",
        contact: {
          contactEmail: "immersive.odyssey.of@velarivoyages.com",
          contactNumber: "+1-226-425-7314",
        },
      },
    ],
    title: "Immersive Odyssey of the Bamboo Shores",
    description:
      "Unwind and explore on this eclipse through Asia Pacific, departing from Ho Chi Minh City. With every stop—from Sydney to Melbourne—you’ll collect memories that last a lifetime.",
    rating: 4.5,
    tags: ["VIP", "cruise-getaway", "sightseeing"],
  },
  {
    basePrice: 5370,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    arrivalLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
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
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
          },
        },
      ],
      description:
        "Depart from iconic Ho Chi Minh City and traverse the Asia Pacific with visits to Sydney, Tokyo, Hong Kong, Yokohama. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1196 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Sydney",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Sydney to Tokyo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Tokyo to Hong Kong",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Hong Kong to Yokohama",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Yokohama to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Mason Jennings",
        role: "Reservations Agent",
        languages: ["Thai", "Chinese", "Vietnamese", "Bengali"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/36.jpg",
        contact: {
          contactEmail: "legendary.tide.of.th@velarivoyages.com",
          contactNumber: "+1-358-363-8974",
        },
      },
    ],
    title: "Legendary Tide of the Volcanic Outposts",
    description:
      "Depart from iconic Ho Chi Minh City and traverse the Asia Pacific with visits to Sydney, Tokyo, Hong Kong, Yokohama. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.9,
    tags: ["fall-cruise", "wellness"],
  },
  {
    basePrice: 6813,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
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
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this epic solstice departing Ho Chi Minh City. Savor local cuisine and uncover regional beauty from Bali to Sydney.",
      distance: "523 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Bali",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Bali to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Aiden Cooper",
        role: "Reservations Agent",
        languages: ["Thai", "Chinese", "Vietnamese", "Bengali"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "horizonkissed.odysse@velarivoyages.com",
          contactNumber: "+1-202-358-9958",
        },
      },
    ],
    title: "Horizon-Kissed Odyssey of the Jade Horizons",
    description:
      "Cruise into cultural richness aboard this epic solstice departing Ho Chi Minh City. Savor local cuisine and uncover regional beauty from Bali to Sydney.",
    rating: 4.3,
    tags: ["culinary"],
  },
  {
    basePrice: 2277,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    arrivalLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
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
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
          },
        },
      ],
      description:
        "Sail away from Ho Chi Minh City into the beautiful expanse of Asia Pacific. Along the way, enjoy rich cultural experiences in Auckland, Sydney, where history, nature, and cuisine collide.",
      distance: "1106 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Auckland",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Auckland to Sydney",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Sydney to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nicholas Fox",
        role: "Reservations Agent",
        languages: ["Thai", "Chinese", "Vietnamese", "Bengali"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "moonlit.lullaby.of.t@velarivoyages.com",
          contactNumber: "+1-808-609-9103",
        },
      },
    ],
    title: "Moonlit Lullaby of the Mystic East",
    description:
      "Sail away from Ho Chi Minh City into the beautiful expanse of Asia Pacific. Along the way, enjoy rich cultural experiences in Auckland, Sydney, where history, nature, and cuisine collide.",
    rating: 4.2,
    tags: ["holiday-cruise"],
  },
  {
    basePrice: 1335,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    arrivalLocation: {
      city: "Hong Kong",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
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
          city: "Melbourne",
          country: "Australia",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
      ],
      description:
        "This handpicked retreat begins in Ho Chi Minh City and travels through Asia Pacific's iconic waterscapes. Discover Auckland, Melbourne, Hong Kong as each day brings new stories and every night offers elegant repose.",
      distance: "1458 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Auckland",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Auckland to Melbourne",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Melbourne to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Terry Holloway",
        role: "Reservations Agent",
        languages: ["Thai", "Chinese", "Vietnamese", "Bengali"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/46.jpg",
        contact: {
          contactEmail: "infinite.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-841-145-8690",
        },
      },
    ],
    title: "Infinite Eclipse of the Dynastic Dreams",
    description:
      "This handpicked retreat begins in Ho Chi Minh City and travels through Asia Pacific's iconic waterscapes. Discover Auckland, Melbourne, Hong Kong as each day brings new stories and every night offers elegant repose.",
    rating: 4.8,
    tags: ["expedition"],
  },
  {
    basePrice: 1400,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
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
      ],
      description:
        "Savor each moment of this hidden escape through Asia Pacific, starting in Ho Chi Minh City. Visit renowned locations like Bali, Tokyo, Auckland, where adventure and relaxation intertwine.",
      distance: "1495 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Bali",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Bali to Tokyo",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Tokyo to Auckland",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Auckland",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Henry Clark",
        role: "Reservations Agent",
        languages: ["Thai", "Chinese", "Vietnamese", "Bengali"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
        contact: {
          contactEmail: "starlit.odyssey.of.t@velarivoyages.com",
          contactNumber: "+1-475-160-8902",
        },
      },
    ],
    title: "Starlit Odyssey of the Oceanic Wonders",
    description:
      "Savor each moment of this hidden escape through Asia Pacific, starting in Ho Chi Minh City. Visit renowned locations like Bali, Tokyo, Auckland, where adventure and relaxation intertwine.",
    rating: 4.3,
    tags: ["glacier-cruise", "wellness"],
  },
  {
    basePrice: 7526,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
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
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
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
      ],
      description:
        "This inspiring voyage departs from Ho Chi Minh City, navigating the diverse landscapes and vibrant cities of Asia Pacific. Must-see stops include Sydney, Yokohama, Tokyo, Auckland.",
      distance: "1287 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Sydney",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Sydney to Yokohama",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Yokohama to Tokyo",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Tokyo to Auckland",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Auckland",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Terry Dunn",
        role: "Reservations Agent",
        languages: ["Thai", "Chinese", "Vietnamese", "Bengali"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/41.jpg",
        contact: {
          contactEmail: "floating.tide.of.the@velarivoyages.com",
          contactNumber: "+1-458-388-9627",
        },
      },
    ],
    title: "Floating Tide of the Tea-Laced Traditions",
    description:
      "This inspiring voyage departs from Ho Chi Minh City, navigating the diverse landscapes and vibrant cities of Asia Pacific. Must-see stops include Sydney, Yokohama, Tokyo, Auckland.",
    rating: 4.5,
    tags: ["cultural"],
  },
  {
    basePrice: 2345,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    arrivalLocation: {
      city: "Kyoto",
      country: "Japan",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
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
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
      ],
      description:
        "Join us in Ho Chi Minh City for a reverie of a lifetime. Sail across the serene waters of Asia Pacific, stopping at ports like Auckland, Hong Kong, Kyoto where timeless traditions meet modern luxuries.",
      distance: "1073 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Auckland",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Auckland to Hong Kong",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Hong Kong to Kyoto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Rebecca Fletcher",
        role: "Travel Advisor",
        languages: ["Korean", "Malay", "Tagalog"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "horizonkissed.retrea@velarivoyages.com",
          contactNumber: "+1-946-412-4404",
        },
      },
    ],
    title: "Horizon-Kissed Retreat of the Pagoda-Silhouetted Skylines",
    description:
      "Join us in Ho Chi Minh City for a reverie of a lifetime. Sail across the serene waters of Asia Pacific, stopping at ports like Auckland, Hong Kong, Kyoto where timeless traditions meet modern luxuries.",
    rating: 4.4,
    tags: ["wildlife", "romantic", "relaxation"],
  },
  {
    basePrice: 2233,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
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
        "From the lively departure port of Ho Chi Minh City, this curated frontier showcases the finest of Asia Pacific. With visits to Hong Kong, Tokyo, Kyoto, Bangkok, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1296 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Hong Kong",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Hong Kong to Tokyo",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Tokyo to Kyoto",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Kyoto to Bangkok",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
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
          description: "Exploring Tokyo",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Kinsley Coleman",
        role: "Travel Advisor",
        languages: ["Korean", "Malay", "Tagalog"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
        contact: {
          contactEmail: "majestic.elevation.o@velarivoyages.com",
          contactNumber: "+1-369-902-3264",
        },
      },
    ],
    title: "Majestic Elevation of the Volcanic Outposts",
    description:
      "From the lively departure port of Ho Chi Minh City, this curated frontier showcases the finest of Asia Pacific. With visits to Hong Kong, Tokyo, Kyoto, Bangkok, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.3,
    tags: ["themed-cruise", "VIP", "cultural"],
  },
  {
    basePrice: 9903,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
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
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
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
          city: "Auckland",
          country: "New Zealand",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
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
        "Step into a world of elegance and exploration from Ho Chi Minh City. This symphony through the Asia Pacific unveils stunning stops including Bali, Auckland, Singapore, all with first-class service.",
      distance: "524 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Bali",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Bali to Auckland",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Auckland to Singapore",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Singapore",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Christine Henderson",
        role: "Travel Advisor",
        languages: ["Korean", "Malay", "Tagalog"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/39.jpg",
        contact: {
          contactEmail: "dreamlike.reflection@velarivoyages.com",
          contactNumber: "+1-764-615-7166",
        },
      },
    ],
    title: "Dreamlike Reflection of the Oceanic Wonders",
    description:
      "Step into a world of elegance and exploration from Ho Chi Minh City. This symphony through the Asia Pacific unveils stunning stops including Bali, Auckland, Singapore, all with first-class service.",
    rating: 4.8,
    tags: ["holiday-cruise", "cultural", "romantic"],
  },
  {
    basePrice: 3655,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    arrivalLocation: {
      city: "Hong Kong",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
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
        {
          city: "Hong Kong",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Sail into splendor from Ho Chi Minh City on a captivating voyage through Asia Pacific. Let each stop—from Sydney to Melbourne—reveal the unique flavors and colors of the region.",
      distance: "645 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Sydney",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Sydney to Melbourne",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Melbourne to Auckland",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Auckland to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Hannah Hamilton",
        role: "Travel Advisor",
        languages: ["Korean", "Malay", "Tagalog"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/77.jpg",
        contact: {
          contactEmail: "timeless.mythos.of.t@velarivoyages.com",
          contactNumber: "+1-317-926-9249",
        },
      },
    ],
    title: "Timeless Mythos of the Bamboo Shores",
    description:
      "Sail into splendor from Ho Chi Minh City on a captivating voyage through Asia Pacific. Let each stop—from Sydney to Melbourne—reveal the unique flavors and colors of the region.",
    rating: 4.8,
    tags: ["cruise-holiday"],
  },
  {
    basePrice: 5248,
    departureLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    arrivalLocation: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      region: "Asia Pacific",
      coordinates: {
        latitude: 10.8231,
        longitude: 106.6297,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
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
          city: "Yokohama",
          country: "Japan",
          coordinates: {
            latitude: 35.4437,
            longitude: 139.638,
          },
        },
        {
          city: "Sydney",
          country: "Australia",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
        {
          city: "Ho Chi Minh City",
          country: "Vietnam",
          region: "Asia Pacific",
          coordinates: {
            latitude: 10.8231,
            longitude: 106.6297,
          },
        },
      ],
      description:
        "This forbidden cruise from Ho Chi Minh City is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Singapore, Yokohama, Sydney with enriching excursions and award-winning service.",
      distance: "1134 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Singapore",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Singapore to Yokohama",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Yokohama to Sydney",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Sydney to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
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
          description: "Exploring Yokohama",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Samantha Henderson",
        role: "Travel Advisor",
        languages: ["Korean", "Malay", "Tagalog"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "secret.escape.of.the@velarivoyages.com",
          contactNumber: "+1-175-833-1728",
        },
      },
    ],
    title: "Secret Escape of the Lotus-Lined Waters",
    description:
      "This forbidden cruise from Ho Chi Minh City is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Singapore, Yokohama, Sydney with enriching excursions and award-winning service.",
    rating: 4.9,
    tags: ["family-friendly", "glacier-cruise"],
  },
];
