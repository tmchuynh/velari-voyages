import { Cruise } from "@/lib/interfaces/services/cruises";

export const aucklandCruises: Cruise[] = [
  {
    basePrice: 6421,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    arrivalLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
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
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
      ],
      description:
        "Board in Auckland for a hand-crafted serenade through the breathtaking Asia Pacific. Highlights include sun-drenched beaches, historic ports, and immersive culture in Ho Chi Minh City, Bangkok, Yokohama.",
      distance: "1178 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Auckland to Ho Chi Minh City",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Bangkok",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Bangkok to Yokohama",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Yokohama to Auckland",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Auckland",
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
          description: "Exploring Bangkok",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Auckland",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Gregory Fox",
        role: "Group Booking Coordinator",
        languages: ["Vietnamese", "Thai", "Korean", "Japanese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/81.jpg",
        contact: {
          contactEmail: "sublime.resonance.of@velarivoyages.com",
          contactNumber: "+1-203-722-4064",
        },
      },
    ],
    title: "Sublime Resonance of the Wind-Danced Waterfront",
    description:
      "Board in Auckland for a hand-crafted serenade through the breathtaking Asia Pacific. Highlights include sun-drenched beaches, historic ports, and immersive culture in Ho Chi Minh City, Bangkok, Yokohama.",
    rating: 4.2,
    tags: ["nature"],
  },
  {
    basePrice: 3256,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    arrivalLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
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
          city: "Shanghai",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
      ],
      description:
        "Depart from the iconic port of Auckland and sail through the enchanting Asia Pacific. Explore vibrant destinations like Sydney, Shanghai, each offering its own unique charm and local flair.",
      distance: "783 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Auckland to Sydney",
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
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
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
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Auckland",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Miguel Clark",
        role: "Group Booking Coordinator",
        languages: ["Vietnamese", "Thai", "Korean", "Japanese"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
        contact: {
          contactEmail: "radiant.expedition.o@velarivoyages.com",
          contactNumber: "+1-804-721-6831",
        },
      },
    ],
    title: "Radiant Expedition of the Oriental Realms",
    description:
      "Depart from the iconic port of Auckland and sail through the enchanting Asia Pacific. Explore vibrant destinations like Sydney, Shanghai, each offering its own unique charm and local flair.",
    rating: 4.1,
    tags: ["long-distance", "cruise-adventure", "expedition"],
  },
  {
    basePrice: 1969,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
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
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
        {
          city: "Shanghai",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
        "Join us in Auckland for a arcadia of a lifetime. Sail across the serene waters of Asia Pacific, stopping at ports like Shanghai, Hong Kong where timeless traditions meet modern luxuries.",
      distance: "879 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Auckland to Shanghai",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Shanghai to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Frank Russell",
        role: "Group Booking Coordinator",
        languages: ["Vietnamese", "Thai", "Korean", "Japanese"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/93.jpg",
        contact: {
          contactEmail: "exquisite.passage.of@velarivoyages.com",
          contactNumber: "+1-306-208-9952",
        },
      },
    ],
    title: "Exquisite Passage of the Gateway to New Zealand",
    description:
      "Join us in Auckland for a arcadia of a lifetime. Sail across the serene waters of Asia Pacific, stopping at ports like Shanghai, Hong Kong where timeless traditions meet modern luxuries.",
    rating: 4.7,
    tags: ["weekend-cruise", "general"],
  },
  {
    basePrice: 3244,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    arrivalLocation: {
      city: "Bangkok",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
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
          city: "Bangkok",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This verdant cruise from Auckland is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Melbourne, Bangkok with enriching excursions and award-winning service.",
      distance: "1092 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Auckland to Melbourne",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Melbourne to Bangkok",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Keith Lawson",
        role: "Group Booking Coordinator",
        languages: ["Vietnamese", "Thai", "Korean", "Japanese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
        contact: {
          contactEmail: "breathtaking.renaiss@velarivoyages.com",
          contactNumber: "+1-596-567-4966",
        },
      },
    ],
    title: "Breathtaking Renaissance of the City of Sails",
    description:
      "This verdant cruise from Auckland is your ticket to the captivating charm of the Asia Pacific. Discover the delights of Melbourne, Bangkok with enriching excursions and award-winning service.",
    rating: 4.4,
    tags: ["seasonal", "family-friendly"],
  },
  {
    basePrice: 5672,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
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
          city: "Melbourne",
          country: "Australia",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
        {
          city: "Shanghai",
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
      ],
      description:
        "Set off on a labyrinth from Auckland that captures the essence of Asia Pacific. Discover cultural gems and culinary delights across Yokohama, Melbourne, Shanghai, Ho Chi Minh City.",
      distance: "1279 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Auckland to Yokohama",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Yokohama to Melbourne",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Melbourne to Shanghai",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Shanghai to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jason Nash",
        role: "Group Booking Coordinator",
        languages: ["Vietnamese", "Thai", "Korean", "Japanese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/38.jpg",
        contact: {
          contactEmail: "captivating.expediti@velarivoyages.com",
          contactNumber: "+1-264-371-2239",
        },
      },
    ],
    title: "Captivating Expedition of the Gateway to New Zealand",
    description:
      "Set off on a labyrinth from Auckland that captures the essence of Asia Pacific. Discover cultural gems and culinary delights across Yokohama, Melbourne, Shanghai, Ho Chi Minh City.",
    rating: 4.0,
    tags: ["tropical", "relaxation", "cultural"],
  },
  {
    basePrice: 6798,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
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
      ],
      description:
        "Escape the everyday with this unforgettable journey through Asia Pacific, departing from Auckland. You'll visit Yokohama, Tokyo, where every stop is a new adventure.",
      distance: "1480 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Auckland to Yokohama",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Yokohama to Tokyo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Ronald Hawkins",
        role: "Group Booking Coordinator",
        languages: ["Vietnamese", "Thai", "Korean", "Japanese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/92.jpg",
        contact: {
          contactEmail: "ornate.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-598-434-6690",
        },
      },
    ],
    title: "Ornate Odyssey of the Volcanic Outposts",
    description:
      "Escape the everyday with this unforgettable journey through Asia Pacific, departing from Auckland. You'll visit Yokohama, Tokyo, where every stop is a new adventure.",
    rating: 4.5,
    tags: ["cruise-excursion", "nature", "weekend-cruise"],
  },
  {
    basePrice: 7757,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    arrivalLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
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
        {
          city: "Bangkok",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
      ],
      description:
        "This hand-selected mystical cruise offers a true taste of Asia Pacific. Depart from Auckland and explore ports like Singapore, Bangkok, each telling a story through food, music, and tradition.",
      distance: "708 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Auckland to Singapore",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Singapore to Bangkok",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Bangkok to Auckland",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Auckland",
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
          description: "Exploring Bangkok",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Auckland",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Joshua Reed",
        role: "Group Booking Coordinator",
        languages: ["Vietnamese", "Thai", "Korean", "Japanese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/90.jpg",
        contact: {
          contactEmail: "luxurious.escape.of.@velarivoyages.com",
          contactNumber: "+1-279-560-7357",
        },
      },
    ],
    title: "Luxurious Escape of the City of Sails",
    description:
      "This hand-selected mystical cruise offers a true taste of Asia Pacific. Depart from Auckland and explore ports like Singapore, Bangkok, each telling a story through food, music, and tradition.",
    rating: 4.7,
    tags: ["cruise-getaway", "cruise-vacation"],
  },
  {
    basePrice: 1928,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
        {
          city: "Bangkok",
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
        "From the lively departure port of Auckland, this curated pulse showcases the finest of Asia Pacific. With visits to Bangkok, Melbourne, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1476 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Auckland to Bangkok",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Bangkok to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Anthony Clark",
        role: "Group Booking Coordinator",
        languages: ["Vietnamese", "Thai", "Korean", "Japanese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/21.jpg",
        contact: {
          contactEmail: "exquisite.excursion.@velarivoyages.com",
          contactNumber: "+1-984-637-6710",
        },
      },
    ],
    title: "Exquisite Excursion of the Gateway to New Zealand",
    description:
      "From the lively departure port of Auckland, this curated pulse showcases the finest of Asia Pacific. With visits to Bangkok, Melbourne, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.5,
    tags: ["weekend-cruise"],
  },
  {
    basePrice: 3949,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    arrivalLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
        {
          city: "Shanghai",
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
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
          coordinates: {
            latitude: -36.848461,
            longitude: 174.763336,
          },
        },
      ],
      description:
        "Your legacy begins in Auckland, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Shanghai to the historic streets of Kyoto, each stop in the Asia Pacific will leave a lasting impression.",
      distance: "1208 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Auckland to Shanghai",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Shanghai to Kyoto",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Kyoto to Auckland",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Auckland",
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
          description: "Exploring Kyoto",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Auckland",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Liam Graham",
        role: "Group Booking Coordinator",
        languages: ["Vietnamese", "Thai", "Korean", "Japanese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/39.jpg",
        contact: {
          contactEmail: "riveting.panorama.of@velarivoyages.com",
          contactNumber: "+1-783-531-6963",
        },
      },
    ],
    title: "Riveting Panorama of the Island Kingdoms",
    description:
      "Your legacy begins in Auckland, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Shanghai to the historic streets of Kyoto, each stop in the Asia Pacific will leave a lasting impression.",
    rating: 4.8,
    tags: ["relaxation"],
  },
  {
    basePrice: 3204,
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      region: "Asia Pacific",
      coordinates: {
        latitude: -36.848461,
        longitude: 174.763336,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Auckland",
          country: "New Zealand",
          region: "Asia Pacific",
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
          city: "Sydney",
          country: "Australia",
          coordinates: {
            latitude: -33.8688,
            longitude: 151.2093,
          },
        },
      ],
      description:
        "An escape like no other begins in Auckland, where your zenith launches into the heart of Asia Pacific. Discover the magic of Hong Kong, Sydney with style and sophistication.",
      distance: "614 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Auckland to Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Hong Kong to Sydney",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Sydney",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "James Grant",
        role: "Group Booking Coordinator",
        languages: ["Vietnamese", "Thai", "Korean", "Japanese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/62.jpg",
        contact: {
          contactEmail: "majestic.mythos.of.t@velarivoyages.com",
          contactNumber: "+1-212-577-7950",
        },
      },
    ],
    title: "Majestic Mythos of the City of Sails",
    description:
      "An escape like no other begins in Auckland, where your zenith launches into the heart of Asia Pacific. Discover the magic of Hong Kong, Sydney with style and sophistication.",
    rating: 4.5,
    tags: ["cruise-line", "themed-cruise", "nature"],
  },
];
