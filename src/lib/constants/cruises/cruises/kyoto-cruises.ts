import { Cruise } from "@/lib/interfaces/services/cruises";

export const kyotoCruises: Cruise[] = [
  {
    basePrice: 7494,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
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
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
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
          city: "Sydney",
          country: "Australia",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "From bustling Kyoto to serene Asia Pacific shores, this cruise invites you to relax, explore, and indulge. Stops at Tokyo, Hong Kong, Bali, Sydney deliver a balanced blend of culture and comfort.",
      distance: "1208 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Kyoto to Tokyo",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Tokyo to Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Hong Kong to Bali",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Bali to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Bella Griffin",
        role: "Reservations Agent",
        languages: ["Korean", "Tagalog", "Indonesian", "Hindi"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "celestial.pilgrimage@velarivoyages.com",
          contactNumber: "+1-453-796-1419",
        },
      },
    ],
    title: "Celestial Pilgrimage of the Zen-Stilled Veil",
    description:
      "From bustling Kyoto to serene Asia Pacific shores, this cruise invites you to relax, explore, and indulge. Stops at Tokyo, Hong Kong, Bali, Sydney deliver a balanced blend of culture and comfort.",
    rating: 4.7,
    tags: ["short-getaway", "historical", "cruise-line"],
  },
  {
    basePrice: 2547,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    arrivalLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
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
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
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
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
      ],
      description:
        "Begin your currents in Kyoto, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Sydney, Shanghai, Bangkok, Tokyo and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1040 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Kyoto to Sydney",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Sydney to Shanghai",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Shanghai to Bangkok",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Bangkok to Tokyo",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Tokyo to Kyoto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Zoe Henderson",
        role: "Reservations Agent",
        languages: ["Korean", "Tagalog", "Indonesian", "Hindi"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "idyllic.journey.of.t@velarivoyages.com",
          contactNumber: "+1-416-613-6462",
        },
      },
    ],
    title: "Idyllic Journey of the Pagoda-Silhouetted Skylines",
    description:
      "Begin your currents in Kyoto, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Sydney, Shanghai, Bangkok, Tokyo and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.3,
    tags: ["historical", "cruise-ship"],
  },
  {
    basePrice: 6925,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    arrivalLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
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
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
      ],
      description:
        "Start in the vibrant city of Kyoto and venture into the iconic Asia Pacific. Discover authentic local cultures, cuisine, and coastal wonders in Shanghai, Sydney, Singapore, Ho Chi Minh City.",
      distance: "551 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Kyoto to Shanghai",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Shanghai to Sydney",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Sydney to Singapore",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Singapore to Ho Chi Minh City",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Kyoto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Aria Porter",
        role: "Reservations Agent",
        languages: ["Korean", "Tagalog", "Indonesian", "Hindi"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "dreamlike.pilgrimage@velarivoyages.com",
          contactNumber: "+1-464-609-3604",
        },
      },
    ],
    title: "Dreamlike Pilgrimage of the Mystic East",
    description:
      "Start in the vibrant city of Kyoto and venture into the iconic Asia Pacific. Discover authentic local cultures, cuisine, and coastal wonders in Shanghai, Sydney, Singapore, Ho Chi Minh City.",
    rating: 5.0,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 4861,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
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
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
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
          city: "Singapore",
          country: "Singapore",
          coordinates: {
            latitude: 1.3521,
            longitude: 103.8198,
          },
        },
      ],
      description:
        "This timeless cruise from Kyoto is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Sydney, Bangkok, Hong Kong, Singapore with enriching excursions and award-winning service.",
      distance: "1476 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Kyoto to Sydney",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Sydney to Bangkok",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Bangkok to Hong Kong",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Hong Kong to Singapore",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kyoto",
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
          description: "Exploring Bangkok",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Singapore",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Linda Fox",
        role: "Reservations Agent",
        languages: ["Korean", "Tagalog", "Indonesian", "Hindi"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/53.jpg",
        contact: {
          contactEmail: "exquisite.lullaby.of@velarivoyages.com",
          contactNumber: "+1-373-131-6853",
        },
      },
    ],
    title: "Exquisite Lullaby of the Zen-Stilled Veil",
    description:
      "This timeless cruise from Kyoto is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Sydney, Bangkok, Hong Kong, Singapore with enriching excursions and award-winning service.",
    rating: 4.4,
    tags: ["short-getaway", "repositioning"],
  },
  {
    basePrice: 4715,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
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
    category: "anniversary-cruise",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
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
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
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
        "Let the waves lead you from Kyoto on this lavish labyrinth. Traverse the iconic waters of Asia Pacific and discover the beauty of Bali, Auckland, Bangkok, Hong Kong.",
      distance: "742 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Kyoto to Bali",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Bali to Auckland",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Auckland to Bangkok",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Bangkok to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Thandiwe Hudson",
        role: "Reservations Agent",
        languages: ["Korean", "Tagalog", "Indonesian", "Hindi"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/67.jpg",
        contact: {
          contactEmail: "pristine.reflection.@velarivoyages.com",
          contactNumber: "+1-947-574-8832",
        },
      },
    ],
    title: "Pristine Reflection of the Zen-Stilled Veil",
    description:
      "Let the waves lead you from Kyoto on this lavish labyrinth. Traverse the iconic waters of Asia Pacific and discover the beauty of Bali, Auckland, Bangkok, Hong Kong.",
    rating: 4.3,
    tags: ["general", "cruise-vacation", "weekend-cruise"],
  },
  {
    basePrice: 9613,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    arrivalLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
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
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
      ],
      description:
        "Depart from Kyoto on this thoughtfully designed enigma across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Bangkok, Sydney, Hong Kong.",
      distance: "1407 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Kyoto to Bangkok",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Bangkok to Sydney",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Sydney to Hong Kong",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Hong Kong to Kyoto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Sydney",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Brenda Lawson",
        role: "Reservations Agent",
        languages: ["Korean", "Tagalog", "Indonesian", "Hindi"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/96.jpg",
        contact: {
          contactEmail: "dreamlike.odyssey.of@velarivoyages.com",
          contactNumber: "+1-202-257-7340",
        },
      },
    ],
    title: "Dreamlike Odyssey of the Cultural Heart of Japan",
    description:
      "Depart from Kyoto on this thoughtfully designed enigma across the Asia Pacific. Savor coastal charm, cultural treasures, and ocean views with stops at Bangkok, Sydney, Hong Kong.",
    rating: 4.2,
    tags: ["cruise-excursion", "glacier-cruise", "culinary"],
  },
  {
    basePrice: 3727,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
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
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
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
          city: "Bali",
          country: "Indonesia",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
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
        "This spectacular cruise from Kyoto is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Ho Chi Minh City, Bali, Hong Kong with enriching excursions and award-winning service.",
      distance: "1400 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Kyoto to Ho Chi Minh City",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Bali",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Bali to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Aria Curtis",
        role: "Reservations Agent",
        languages: ["Korean", "Tagalog", "Indonesian", "Hindi"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "pristine.quest.of.th@velarivoyages.com",
          contactNumber: "+1-194-905-6560",
        },
      },
    ],
    title: "Pristine Quest of the Zen-Stilled Veil",
    description:
      "This spectacular cruise from Kyoto is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Ho Chi Minh City, Bali, Hong Kong with enriching excursions and award-winning service.",
    rating: 4.8,
    tags: ["fall-cruise", "VIP"],
  },
  {
    basePrice: 9325,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    arrivalLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
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
          city: "Shanghai",
          country: "China",
          coordinates: {
            latitude: 31.2304,
            longitude: 121.4737,
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
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
      ],
      description:
        "Set off on a embrace from Kyoto that captures the essence of Asia Pacific. Discover cultural gems and culinary delights across Yokohama, Shanghai, Ho Chi Minh City.",
      distance: "808 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Kyoto to Yokohama",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Yokohama to Shanghai",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Shanghai to Ho Chi Minh City",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Kyoto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Michelle Hayes",
        role: "Reservations Agent",
        languages: ["Korean", "Tagalog", "Indonesian", "Hindi"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "riveting.reflection.@velarivoyages.com",
          contactNumber: "+1-543-370-6855",
        },
      },
    ],
    title: "Riveting Reflection of the Zen Shores",
    description:
      "Set off on a embrace from Kyoto that captures the essence of Asia Pacific. Discover cultural gems and culinary delights across Yokohama, Shanghai, Ho Chi Minh City.",
    rating: 4.9,
    tags: ["sightseeing"],
  },
  {
    basePrice: 5426,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    arrivalLocation: {
      city: "Ho Chi Minh City",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "anniversary-cruise",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
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
          city: "Ho Chi Minh City",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This transcendent tranquility begins in Kyoto and ventures deep into the heart of Asia Pacific. Wander through colorful markets, historic streets, and serene coastlines at Bangkok, Ho Chi Minh City.",
      distance: "1477 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Kyoto to Bangkok",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Bangkok to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kyoto",
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
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Stephanie Bennett",
        role: "Reservations Agent",
        languages: ["Korean", "Tagalog", "Indonesian", "Hindi"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "mesmerizing.mystique@velarivoyages.com",
          contactNumber: "+1-942-421-3241",
        },
      },
    ],
    title: "Mesmerizing Mystique of the Temple Haven",
    description:
      "This transcendent tranquility begins in Kyoto and ventures deep into the heart of Asia Pacific. Wander through colorful markets, historic streets, and serene coastlines at Bangkok, Ho Chi Minh City.",
    rating: 4.7,
    tags: ["cruise-line"],
  },
  {
    basePrice: 6604,
    departureLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    arrivalLocation: {
      city: "Kyoto",
      country: "Japan",
      region: "Asia Pacific",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
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
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
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
          city: "Kyoto",
          country: "Japan",
          region: "Asia Pacific",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
      ],
      description:
        "Launch into adventure from Kyoto and sail deep into the heart of the Asia Pacific. With ports of call like Auckland, Bangkok, Tokyo, Melbourne, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "637 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Kyoto to Auckland",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Auckland to Bangkok",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Bangkok to Tokyo",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Tokyo to Melbourne",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Melbourne to Kyoto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Chloe Hunter",
        role: "Reservations Agent",
        languages: ["Korean", "Tagalog", "Indonesian", "Hindi"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "extraordinary.sanctu@velarivoyages.com",
          contactNumber: "+1-529-189-5359",
        },
      },
    ],
    title: "Extraordinary Sanctuary of the Zen-Stilled Veil",
    description:
      "Launch into adventure from Kyoto and sail deep into the heart of the Asia Pacific. With ports of call like Auckland, Bangkok, Tokyo, Melbourne, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.7,
    tags: ["short-getaway"],
  },
];
