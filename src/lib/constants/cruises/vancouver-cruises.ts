import { Cruise } from "@/lib/interfaces/services/cruises";

export const vancouverCruises: Cruise[] = [
  {
    basePrice: 6532,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Sitka",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Seattle",
          country: "United States",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Skagway",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
      ],
      description:
        "Discover the wonders of Alaska aboard this velvet cruise departing from Vancouver. Journey through crystal waters to explore the treasures of Sitka, Glacier Bay, Seattle, Skagway, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1370 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Vancouver to Sitka",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Sitka to Glacier Bay",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Seattle",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Seattle to Skagway",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Skagway to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Kevin Fox",
        role: "Travel Advisor",
        languages: ["English", "Arabic", "Russian", "German"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/46.jpg",
        contact: {
          contactEmail: "enchanting.drift.of.@velarivoyages.com",
          contactNumber: "+1-931-923-7640",
        },
      },
    ],
    title: "Enchanting Drift of the Mountain-Edge Metropolis",
    description:
      "Discover the wonders of Alaska aboard this velvet cruise departing from Vancouver. Journey through crystal waters to explore the treasures of Sitka, Glacier Bay, Seattle, Skagway, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.1,
    tags: ["glacier-cruise", "wildlife"],
  },
  {
    basePrice: 9939,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Sitka",
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
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Ketchikan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Sitka",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Explore a new side of Alaska with this luminous tranquility starting in Vancouver. Visit charming ports such as Ketchikan, Glacier Bay, Sitka, each offering its own unique rhythm.",
      distance: "1314 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Vancouver to Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Ketchikan to Glacier Bay",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Sitka",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Sitka",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Diego Henderson",
        role: "Travel Advisor",
        languages: ["English", "Arabic", "Russian", "German"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "hidden.arcadia.of.th@velarivoyages.com",
          contactNumber: "+1-435-363-7418",
        },
      },
    ],
    title: "Hidden Arcadia of the Harbor of Mist",
    description:
      "Explore a new side of Alaska with this luminous tranquility starting in Vancouver. Visit charming ports such as Ketchikan, Glacier Bay, Sitka, each offering its own unique rhythm.",
    rating: 4.4,
    tags: ["nature", "repositioning", "general"],
  },
  {
    basePrice: 2962,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Juneau",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Victoria",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Seattle",
          country: "United States",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
      ],
      description:
        "Join us in Vancouver for a drift of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Juneau, Victoria, Glacier Bay, Seattle where timeless traditions meet modern luxuries.",
      distance: "1304 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Vancouver to Juneau",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Juneau to Victoria",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Victoria to Glacier Bay",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Seattle",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Seattle to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Dennis Carpenter",
        role: "Travel Advisor",
        languages: ["English", "Arabic", "Russian", "German"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
        contact: {
          contactEmail: "celestial.reunion.of@velarivoyages.com",
          contactNumber: "+1-851-652-2722",
        },
      },
    ],
    title: "Celestial Reunion of the Pacific Jewel",
    description:
      "Join us in Vancouver for a drift of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Juneau, Victoria, Glacier Bay, Seattle where timeless traditions meet modern luxuries.",
    rating: 4.9,
    tags: ["cultural", "short-getaway"],
  },
  {
    basePrice: 4503,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Skagway",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Victoria",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Sitka",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Skagway",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Set sail from Vancouver for a voyage like no other. From the picturesque landscapes of Victoria to the lively ambiance of Sitka, this dreamlike cruise will redefine your view of Alaska.",
      distance: "1136 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Vancouver to Victoria",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Victoria to Sitka",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Sitka to Glacier Bay",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Eugene Payne",
        role: "Travel Advisor",
        languages: ["English", "Arabic", "Russian", "German"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/82.jpg",
        contact: {
          contactEmail: "majestic.drift.of.th@velarivoyages.com",
          contactNumber: "+1-985-283-9351",
        },
      },
    ],
    title: "Majestic Drift of the Harbor of Mist",
    description:
      "Set sail from Vancouver for a voyage like no other. From the picturesque landscapes of Victoria to the lively ambiance of Sitka, this dreamlike cruise will redefine your view of Alaska.",
    rating: 4.2,
    tags: ["cruise", "weekend-cruise", "glacier-cruise"],
  },
  {
    basePrice: 8882,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Seattle",
          country: "United States",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Sitka",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Juneau",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this azure sanctuary beginning in Vancouver. Visit breathtaking Alaska locales such as Seattle, Sitka, Juneau on this unforgettable itinerary.",
      distance: "643 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Vancouver to Seattle",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Seattle to Sitka",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Sitka to Juneau",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Juneau to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Dylan Henderson",
        role: "Travel Advisor",
        languages: ["English", "Arabic", "Russian", "German"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/51.jpg",
        contact: {
          contactEmail: "dreamlike.zenith.of.@velarivoyages.com",
          contactNumber: "+1-937-211-8192",
        },
      },
    ],
    title: "Dreamlike Zenith of the Glacial Kingdom",
    description:
      "Enjoy seamless luxury on this azure sanctuary beginning in Vancouver. Visit breathtaking Alaska locales such as Seattle, Sitka, Juneau on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["wellness", "romantic"],
  },
  {
    basePrice: 2115,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Sitka",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Seattle",
          country: "United States",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
      ],
      description:
        "Set sail from Vancouver on this tranquil sojourn through the heart of Alaska. Experience the perfect blend of relaxation and adventure as you explore Sitka and Seattle, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1291 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Vancouver to Sitka",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Sitka to Seattle",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Seattle to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Aaron Porter",
        role: "Travel Advisor",
        languages: ["English", "Arabic", "Russian", "German"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
        contact: {
          contactEmail: "eternal.mystique.of.@velarivoyages.com",
          contactNumber: "+1-658-167-2796",
        },
      },
    ],
    title: "Eternal Mystique of the Harbor of Mist",
    description:
      "Set sail from Vancouver on this tranquil sojourn through the heart of Alaska. Experience the perfect blend of relaxation and adventure as you explore Sitka and Seattle, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.1,
    tags: ["fall-cruise", "holiday-cruise"],
  },
  {
    basePrice: 6381,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Juneau",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Skagway",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Seattle",
          country: "United States",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Juneau",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Savor each moment of this opulent escape through Alaska, starting in Vancouver. Visit renowned locations like Skagway, Glacier Bay, Seattle, Juneau, where adventure and relaxation intertwine.",
      distance: "942 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Vancouver to Skagway",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Skagway to Glacier Bay",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Seattle",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Seattle to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Mateo Graham",
        role: "Travel Advisor",
        languages: ["English", "Arabic", "Russian", "German"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "opulent.tranquility.@velarivoyages.com",
          contactNumber: "+1-962-625-3485",
        },
      },
    ],
    title: "Opulent Tranquility of the Forest-Kissed Skyline",
    description:
      "Savor each moment of this opulent escape through Alaska, starting in Vancouver. Visit renowned locations like Skagway, Glacier Bay, Seattle, Juneau, where adventure and relaxation intertwine.",
    rating: 4.4,
    tags: ["culinary"],
  },
  {
    basePrice: 1345,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Victoria",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Juneau",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
      ],
      description:
        "Begin a captivating voyage through the Alaska, departing Vancouver. With visits to Glacier Bay, Victoria, Juneau, each day brings a new adventure and deeper connection to the region.",
      distance: "615 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Vancouver to Glacier Bay",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Victoria",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Victoria to Juneau",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Juneau to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Patrick Reed",
        role: "Travel Advisor",
        languages: ["English", "Arabic", "Russian", "German"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/87.jpg",
        contact: {
          contactEmail: "mesmerizing.elevatio@velarivoyages.com",
          contactNumber: "+1-238-391-9018",
        },
      },
    ],
    title: "Mesmerizing Elevation of the Mountain-Edge Metropolis",
    description:
      "Begin a captivating voyage through the Alaska, departing Vancouver. With visits to Glacier Bay, Victoria, Juneau, each day brings a new adventure and deeper connection to the region.",
    rating: 4.9,
    tags: ["cruise-vacation", "seasonal"],
  },
  {
    basePrice: 8832,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Seattle",
          country: "United States",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Juneau",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
      ],
      description:
        "Set course from Vancouver for an inspiring epic journey across Alaska. Whether exploring ancient ruins in Glacier Bay or soaking up coastal views in Seattle, every day offers a perfect mix of discovery and relaxation.",
      distance: "1045 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Vancouver to Glacier Bay",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Seattle",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Seattle to Juneau",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Juneau to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Joshua Spencer",
        role: "Travel Advisor",
        languages: ["English", "Arabic", "Russian", "German"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/48.jpg",
        contact: {
          contactEmail: "luminous.escape.of.t@velarivoyages.com",
          contactNumber: "+1-781-241-7759",
        },
      },
    ],
    title: "Luminous Escape of the Pacific Jewel",
    description:
      "Set course from Vancouver for an inspiring epic journey across Alaska. Whether exploring ancient ruins in Glacier Bay or soaking up coastal views in Seattle, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.6,
    tags: ["relaxation"],
  },
  {
    basePrice: 1071,
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      region: "Alaska",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    arrivalLocation: {
      city: "Seattle",
      country: "United States",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Vancouver",
          country: "Canada",
          region: "Alaska",
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Skagway",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Seattle",
          country: "United States",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
      ],
      description:
        "Depart from Vancouver on this thoughtfully designed elevation across the Alaska. Savor coastal charm, cultural treasures, and ocean views with stops at Glacier Bay, Skagway, Seattle.",
      distance: "1114 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Vancouver to Glacier Bay",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Skagway",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Skagway to Seattle",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Terry Campbell",
        role: "Travel Advisor",
        languages: ["English", "Arabic", "Russian", "German"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "exquisite.journey.of@velarivoyages.com",
          contactNumber: "+1-705-674-9497",
        },
      },
    ],
    title: "Exquisite Journey of the Mountain-Edge Metropolis",
    description:
      "Depart from Vancouver on this thoughtfully designed elevation across the Alaska. Savor coastal charm, cultural treasures, and ocean views with stops at Glacier Bay, Skagway, Seattle.",
    rating: 4.1,
    tags: ["tropical", "long-distance", "adventure"],
  },
];
