import { Cruise } from "@/lib/interfaces/services/cruises";

export const melbourneCruises: Cruise[] = [
  {
    basePrice: 3083,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Your sanctuary begins in Melbourne, where every sunset on the Asia Pacific horizon promises another day of discovery—from Ho Chi Minh City, Auckland, Yokohama to hidden ports of charm.",
      distance: "1081 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Melbourne to Ho Chi Minh City",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Auckland",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Auckland to Yokohama",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Yokohama to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
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
          description: "Exploring Yokohama",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jerry Palmer",
        role: "Customer Service Representative",
        languages: ["Tagalog", "Japanese", "Urdu", "Bengali"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
        contact: {
          contactEmail: "forbidden.excursion.@velarivoyages.com",
          contactNumber: "+1-780-993-4587",
        },
      },
    ],
    title: "Forbidden Excursion of the Graphite Dreamscape",
    description:
      "Your sanctuary begins in Melbourne, where every sunset on the Asia Pacific horizon promises another day of discovery—from Ho Chi Minh City, Auckland, Yokohama to hidden ports of charm.",
    rating: 4.6,
    tags: ["repositioning"],
  },
  {
    basePrice: 4669,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this lavish passage departing Melbourne. Savor local cuisine and uncover regional beauty from Bali to Ho Chi Minh City.",
      distance: "1357 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Melbourne to Bali",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Bali to Ho Chi Minh City",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Auckland",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Auckland to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Melbourne",
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
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Austin Hall",
        role: "Customer Service Representative",
        languages: ["Tagalog", "Japanese", "Urdu", "Bengali"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/68.jpg",
        contact: {
          contactEmail: "immersive.escape.of.@velarivoyages.com",
          contactNumber: "+1-851-933-3848",
        },
      },
    ],
    title: "Immersive Escape of the Oriental Realms",
    description:
      "Cruise into cultural richness aboard this lavish passage departing Melbourne. Savor local cuisine and uncover regional beauty from Bali to Ho Chi Minh City.",
    rating: 4.4,
    tags: ["cruise-getaway"],
  },
  {
    basePrice: 6745,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
      ],
      description:
        "Begin an epic requiem from Melbourne, where the seas meet culture. Visit the remarkable ports of Yokohama, Ho Chi Minh City while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "604 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Melbourne to Yokohama",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Yokohama to Ho Chi Minh City",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Melbourne",
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
          description: "Exploring Ho Chi Minh City",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kyle Cooper",
        role: "Customer Service Representative",
        languages: ["Tagalog", "Japanese", "Urdu", "Bengali"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "pristine.haven.of.th@velarivoyages.com",
          contactNumber: "+1-929-741-2603",
        },
      },
    ],
    title: "Pristine Haven of the Zen Shores",
    description:
      "Begin an epic requiem from Melbourne, where the seas meet culture. Visit the remarkable ports of Yokohama, Ho Chi Minh City while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.2,
    tags: ["cruise-journey"],
  },
  {
    basePrice: 7928,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
          city: "Bali",
          country: "Indonesia",
          coordinates: {
            latitude: -8.409518,
            longitude: 115.188919,
          },
        },
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Your sojourn begins in Melbourne, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Bangkok to the historic streets of Bali, each stop in the Asia Pacific will leave a lasting impression.",
      distance: "1373 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Melbourne to Bangkok",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Bangkok to Bali",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Bali to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Melbourne",
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
          description: "Exploring Bali",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Liam Morgan",
        role: "Customer Service Representative",
        languages: ["Tagalog", "Japanese", "Urdu", "Bengali"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/48.jpg",
        contact: {
          contactEmail: "sublime.haven.of.the@velarivoyages.com",
          contactNumber: "+1-781-164-7677",
        },
      },
    ],
    title: "Sublime Haven of the Jazz of the Streets",
    description:
      "Your sojourn begins in Melbourne, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Bangkok to the historic streets of Bali, each stop in the Asia Pacific will leave a lasting impression.",
    rating: 4.1,
    tags: ["cruise-line"],
  },
  {
    basePrice: 6337,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Sail from Melbourne into a world of wonder. The Asia Pacific beckons with unforgettable ports like Bali, Bangkok, Kyoto, where every view is picture-perfect and every moment is priceless.",
      distance: "1393 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Melbourne to Bali",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Bali to Bangkok",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Bangkok to Kyoto",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Kyoto to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Justin Foster",
        role: "Customer Service Representative",
        languages: ["Tagalog", "Japanese", "Urdu", "Bengali"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
        contact: {
          contactEmail: "captivating.enigma.o@velarivoyages.com",
          contactNumber: "+1-734-185-5878",
        },
      },
    ],
    title: "Captivating Enigma of the Cultural Capital of Australia",
    description:
      "Sail from Melbourne into a world of wonder. The Asia Pacific beckons with unforgettable ports like Bali, Bangkok, Kyoto, where every view is picture-perfect and every moment is priceless.",
    rating: 4.9,
    tags: ["sightseeing", "VIP", "relaxation"],
  },
  {
    basePrice: 5578,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
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
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
      ],
      description:
        "Depart from the iconic port of Melbourne and sail through the enchanting Asia Pacific. Explore vibrant destinations like Bangkok, Ho Chi Minh City, Tokyo, Hong Kong, each offering its own unique charm and local flair.",
      distance: "642 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Melbourne to Bangkok",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Bangkok to Ho Chi Minh City",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Tokyo",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Tokyo to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Justin Bennett",
        role: "Customer Service Representative",
        languages: ["Tagalog", "Japanese", "Urdu", "Bengali"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/87.jpg",
        contact: {
          contactEmail: "sundrenched.passage.@velarivoyages.com",
          contactNumber: "+1-410-293-7990",
        },
      },
    ],
    title: "Sun-Drenched Passage of the Cultural Capital of Australia",
    description:
      "Depart from the iconic port of Melbourne and sail through the enchanting Asia Pacific. Explore vibrant destinations like Bangkok, Ho Chi Minh City, Tokyo, Hong Kong, each offering its own unique charm and local flair.",
    rating: 4.6,
    tags: ["cruise-experience", "repositioning", "anniversary-cruise"],
  },
  {
    basePrice: 3202,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
          city: "Bangkok",
          country: "Thailand",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
          },
        },
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Set course from Melbourne for an inspiring pearlescent journey across Asia Pacific. Whether exploring ancient ruins in Tokyo or soaking up coastal views in Hong Kong, every day offers a perfect mix of discovery and relaxation.",
      distance: "1072 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Melbourne to Tokyo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Tokyo to Hong Kong",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Hong Kong to Bangkok",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Bangkok to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Timothy Carpenter",
        role: "Customer Service Representative",
        languages: ["Tagalog", "Japanese", "Urdu", "Bengali"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/33.jpg",
        contact: {
          contactEmail: "dreamlike.lullaby.of@velarivoyages.com",
          contactNumber: "+1-325-128-2738",
        },
      },
    ],
    title: "Dreamlike Lullaby of the Art on Every Brick",
    description:
      "Set course from Melbourne for an inspiring pearlescent journey across Asia Pacific. Whether exploring ancient ruins in Tokyo or soaking up coastal views in Hong Kong, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.7,
    tags: ["wildlife"],
  },
  {
    basePrice: 7473,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
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
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
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
        "Savor each moment of this midnight escape through Asia Pacific, starting in Melbourne. Visit renowned locations like Hong Kong, Tokyo, where adventure and relaxation intertwine.",
      distance: "1346 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Melbourne to Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Hong Kong to Tokyo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Melbourne",
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
          description: "Exploring Tokyo",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Wayne Jennings",
        role: "Customer Service Representative",
        languages: ["Tagalog", "Japanese", "Urdu", "Bengali"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "radiant.eclipse.of.t@velarivoyages.com",
          contactNumber: "+1-750-545-9653",
        },
      },
    ],
    title: "Radiant Eclipse of the Oceanic Wonders",
    description:
      "Savor each moment of this midnight escape through Asia Pacific, starting in Melbourne. Visit renowned locations like Hong Kong, Tokyo, where adventure and relaxation intertwine.",
    rating: 4.1,
    tags: ["holiday-cruise"],
  },
  {
    basePrice: 7169,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Begin your tranquility in Melbourne, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Singapore, Bali and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1415 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Melbourne to Singapore",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Singapore to Bali",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Bali to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Louis Harper",
        role: "Customer Service Representative",
        languages: ["Tagalog", "Japanese", "Urdu", "Bengali"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/65.jpg",
        contact: {
          contactEmail: "breathtaking.frontie@velarivoyages.com",
          contactNumber: "+1-962-257-2619",
        },
      },
    ],
    title: "Breathtaking Frontier of the Cultural Capital of Australia",
    description:
      "Begin your tranquility in Melbourne, a gateway to the soul of Asia Pacific. Enjoy days spent exploring Singapore, Bali and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.9,
    tags: ["VIP", "cruise-journey", "romantic"],
  },
  {
    basePrice: 9758,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
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
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
          city: "Ho Chi Minh City",
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
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "This inspiring reunion departs from Melbourne, navigating the diverse landscapes and vibrant cities of Asia Pacific. Must-see stops include Tokyo, Kyoto, Ho Chi Minh City, Hong Kong.",
      distance: "1143 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Melbourne to Tokyo",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Tokyo to Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Kyoto to Ho Chi Minh City",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Ho Chi Minh City to Hong Kong",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Hong Kong to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Melbourne",
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
          description: "Exploring Kyoto",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Adam Campbell",
        role: "Customer Service Representative",
        languages: ["Tagalog", "Japanese", "Urdu", "Bengali"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/17.jpg",
        contact: {
          contactEmail: "idyllic.expedition.o@velarivoyages.com",
          contactNumber: "+1-345-780-6817",
        },
      },
    ],
    title: "Idyllic Expedition of the Laneway Wonderland",
    description:
      "This inspiring reunion departs from Melbourne, navigating the diverse landscapes and vibrant cities of Asia Pacific. Must-see stops include Tokyo, Kyoto, Ho Chi Minh City, Hong Kong.",
    rating: 4.3,
    tags: ["holiday-cruise"],
  },
  {
    basePrice: 5204,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Launch into adventure from Melbourne and sail deep into the heart of the Asia Pacific. With ports of call like Bali, Singapore, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1445 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Melbourne to Bali",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Bali to Singapore",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Singapore to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Melbourne",
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
          description: "Exploring Singapore",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Jason Baker",
        role: "Customer Service Representative",
        languages: ["Tagalog", "Japanese", "Urdu", "Bengali"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "pristine.resonance.o@velarivoyages.com",
          contactNumber: "+1-240-865-5894",
        },
      },
    ],
    title: "Pristine Resonance of the Island Kingdoms",
    description:
      "Launch into adventure from Melbourne and sail deep into the heart of the Asia Pacific. With ports of call like Bali, Singapore, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.2,
    tags: ["themed-cruise"],
  },
  {
    basePrice: 8871,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
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
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
        "Set sail from historic Melbourne for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Bali, Hong Kong, Bangkok.",
      distance: "1251 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Melbourne to Bali",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Bali to Hong Kong",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Hong Kong to Bangkok",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Marcus Price",
        role: "Customer Service Representative",
        languages: ["Tagalog", "Japanese", "Urdu", "Bengali"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "starlit.horizon.of.t@velarivoyages.com",
          contactNumber: "+1-429-659-4357",
        },
      },
    ],
    title: "Starlit Horizon of the Art on Every Brick",
    description:
      "Set sail from historic Melbourne for a modern escape into the Asia Pacific. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Bali, Hong Kong, Bangkok.",
    rating: 4.6,
    tags: ["romantic"],
  },
  {
    basePrice: 9345,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
          city: "Kyoto",
          country: "Japan",
          coordinates: {
            latitude: 35.0116,
            longitude: 135.7681,
          },
        },
      ],
      description:
        "This handpicked eclipse begins in Melbourne and travels through Asia Pacific's iconic waterscapes. Discover Tokyo, Bangkok, Auckland, Kyoto as each day brings new stories and every night offers elegant repose.",
      distance: "1418 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Melbourne to Tokyo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Tokyo to Bangkok",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Bangkok to Auckland",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Auckland to Kyoto",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Bangkok",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Kyoto",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jordan Maxwell",
        role: "Customer Service Representative",
        languages: ["Tagalog", "Japanese", "Urdu", "Bengali"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/59.jpg",
        contact: {
          contactEmail: "golden.tide.of.the.v@velarivoyages.com",
          contactNumber: "+1-722-473-6681",
        },
      },
    ],
    title: "Golden Tide of the Volcanic Outposts",
    description:
      "This handpicked eclipse begins in Melbourne and travels through Asia Pacific's iconic waterscapes. Discover Tokyo, Bangkok, Auckland, Kyoto as each day brings new stories and every night offers elegant repose.",
    rating: 4.1,
    tags: ["wellness"],
  },
  {
    basePrice: 4634,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
        "Sail away from Melbourne into the beautiful expanse of Asia Pacific. Along the way, enjoy rich cultural experiences in Bali, Hong Kong, where history, nature, and cuisine collide.",
      distance: "896 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Melbourne to Bali",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Bali to Hong Kong",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Melbourne",
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
          description: "Exploring Hong Kong",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Justin Palmer",
        role: "Customer Service Representative",
        languages: ["Tagalog", "Japanese", "Urdu", "Bengali"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
        contact: {
          contactEmail: "whispering.lullaby.o@velarivoyages.com",
          contactNumber: "+1-212-184-3607",
        },
      },
    ],
    title: "Whispering Lullaby of the Rain-Polished Rhythm",
    description:
      "Sail away from Melbourne into the beautiful expanse of Asia Pacific. Along the way, enjoy rich cultural experiences in Bali, Hong Kong, where history, nature, and cuisine collide.",
    rating: 4.6,
    tags: ["short-getaway", "seasonal", "anniversary-cruise"],
  },
  {
    basePrice: 9765,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
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
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Your sanctuary begins in Melbourne, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Hong Kong to the historic streets of Auckland, each stop in the Asia Pacific will leave a lasting impression.",
      distance: "1398 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Melbourne to Hong Kong",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Hong Kong to Auckland",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Auckland to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Stephen Curtis",
        role: "Customer Service Representative",
        languages: ["Tagalog", "Japanese", "Urdu", "Bengali"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/81.jpg",
        contact: {
          contactEmail: "idyllic.sanctuary.of@velarivoyages.com",
          contactNumber: "+1-523-566-2258",
        },
      },
    ],
    title: "Idyllic Sanctuary of the Oceanic Wonders",
    description:
      "Your sanctuary begins in Melbourne, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Hong Kong to the historic streets of Auckland, each stop in the Asia Pacific will leave a lasting impression.",
    rating: 4.1,
    tags: ["historical"],
  },
  {
    basePrice: 3089,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
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
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Embark on an unforgettable sanctum from the vibrant port of Melbourne, where you'll discover hidden gems and iconic landmarks across the Asia Pacific region. With stops at Shanghai, Bali, Singapore, this journey combines cultural immersion with breathtaking scenery.",
      distance: "888 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Melbourne to Shanghai",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Shanghai to Bali",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Bali to Singapore",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Singapore to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Melbourne",
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
          description: "Exploring Bali",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Singapore",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Sophia Campbell",
        role: "Group Booking Coordinator",
        languages: ["Indonesian", "Malay", "Bengali", "Korean", "Tagalog"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
        contact: {
          contactEmail: "horizonkissed.reflec@velarivoyages.com",
          contactNumber: "+1-765-638-8953",
        },
      },
    ],
    title: "Horizon-Kissed Reflection of the Art on Every Brick",
    description:
      "Embark on an unforgettable sanctum from the vibrant port of Melbourne, where you'll discover hidden gems and iconic landmarks across the Asia Pacific region. With stops at Shanghai, Bali, Singapore, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.1,
    tags: ["cruise", "fall-cruise"],
  },
  {
    basePrice: 5803,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
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
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your lavish journey from Melbourne. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Yokohama, Hong Kong, Auckland.",
      distance: "769 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Melbourne to Yokohama",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Yokohama to Hong Kong",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Hong Kong to Auckland",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Auckland to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Yokohama",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Auckland",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Samantha Gardner",
        role: "Group Booking Coordinator",
        languages: ["Indonesian", "Malay", "Bengali", "Korean", "Tagalog"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/94.jpg",
        contact: {
          contactEmail: "exquisite.odyssey.of@velarivoyages.com",
          contactNumber: "+1-246-187-6025",
        },
      },
    ],
    title: "Exquisite Odyssey of the Laneway Wonderland",
    description:
      "Let the spirit of exploration guide your lavish journey from Melbourne. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Yokohama, Hong Kong, Auckland.",
    rating: 4.8,
    tags: ["cruise-excursion"],
  },
  {
    basePrice: 7341,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
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
          city: "Hong Kong",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Step aboard in Melbourne and begin a tide-washed journey through the scenic Asia Pacific. From historic cities to coastal hideaways like Kyoto, Hong Kong, every day is unforgettable.",
      distance: "1043 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Melbourne to Kyoto",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Kyoto to Hong Kong",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Hong Kong to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Hong Kong",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Sophia Crawford",
        role: "Group Booking Coordinator",
        languages: ["Indonesian", "Malay", "Bengali", "Korean", "Tagalog"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
        contact: {
          contactEmail: "moonlit.awakening.of@velarivoyages.com",
          contactNumber: "+1-921-944-4338",
        },
      },
    ],
    title: "Moonlit Awakening of the Laneway Wonderland",
    description:
      "Step aboard in Melbourne and begin a tide-washed journey through the scenic Asia Pacific. From historic cities to coastal hideaways like Kyoto, Hong Kong, every day is unforgettable.",
    rating: 4.6,
    tags: ["romantic", "cruise-adventure", "nature"],
  },
  {
    basePrice: 5712,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
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
          city: "Tokyo",
          country: "Japan",
          coordinates: {
            latitude: 35.6895,
            longitude: 139.6917,
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
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "An escape like no other begins in Melbourne, where your haven launches into the heart of Asia Pacific. Discover the magic of Kyoto, Tokyo, Bali with style and sophistication.",
      distance: "1301 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Melbourne to Kyoto",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Kyoto to Tokyo",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Tokyo to Bali",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Bali to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Tokyo",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Bali",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Nomsa Dean",
        role: "Group Booking Coordinator",
        languages: ["Indonesian", "Malay", "Bengali", "Korean", "Tagalog"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        contact: {
          contactEmail: "legendary.solstice.o@velarivoyages.com",
          contactNumber: "+1-736-290-6348",
        },
      },
    ],
    title: "Legendary Solstice of the Cultural Capital of Australia",
    description:
      "An escape like no other begins in Melbourne, where your haven launches into the heart of Asia Pacific. Discover the magic of Kyoto, Tokyo, Bali with style and sophistication.",
    rating: 4.2,
    tags: ["cruise-experience", "repositioning"],
  },
  {
    basePrice: 5659,
    departureLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    arrivalLocation: {
      city: "Melbourne",
      country: "Australia",
      region: "Asia Pacific",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
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
          city: "Ho Chi Minh City",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "Melbourne",
          country: "Australia",
          region: "Asia Pacific",
          coordinates: {
            latitude: -37.8136,
            longitude: 144.9631,
          },
        },
      ],
      description:
        "Let the winds of the Asia Pacific carry you from Melbourne to the most stunning ports in the region. With destinations like Kyoto, Ho Chi Minh City, Shanghai, this serenade redefines luxury travel.",
      distance: "762 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Melbourne to Kyoto",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Kyoto to Ho Chi Minh City",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Ho Chi Minh City to Shanghai",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Shanghai to Melbourne",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Melbourne",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Kyoto",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Ho Chi Minh City",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Shanghai",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Melbourne",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Savannah Gardner",
        role: "Group Booking Coordinator",
        languages: ["Indonesian", "Malay", "Bengali", "Korean", "Tagalog"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "starlit.elevation.of@velarivoyages.com",
          contactNumber: "+1-169-138-5961",
        },
      },
    ],
    title: "Starlit Elevation of the Graphite Dreamscape",
    description:
      "Let the winds of the Asia Pacific carry you from Melbourne to the most stunning ports in the region. With destinations like Kyoto, Ho Chi Minh City, Shanghai, this serenade redefines luxury travel.",
    rating: 4.1,
    tags: ["historical", "cruise-journey", "short-getaway"],
  },
];
