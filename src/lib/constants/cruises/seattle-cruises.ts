import { Cruise } from "@/lib/interfaces/services/cruises";

export const seattleCruises: Cruise[] = [
  {
    basePrice: 5024,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
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
          city: "Juneau",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Escape the everyday with this idyllic journey through Alaska, departing from Seattle. You'll visit Ketchikan, Juneau, where every stop is a new adventure.",
      distance: "1039 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Seattle to Ketchikan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Ketchikan to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Willie Douglas",
        role: "Sales Consultant",
        languages: ["English", "Chinese", "Arabic", "Italian", "Japanese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/50.jpg",
        contact: {
          contactEmail: "charming.sanctuary.o@velarivoyages.com",
          contactNumber: "+1-898-862-6144",
        },
      },
    ],
    title: "Charming Sanctuary of the Sound of Silence",
    description:
      "Escape the everyday with this idyllic journey through Alaska, departing from Seattle. You'll visit Ketchikan, Juneau, where every stop is a new adventure.",
    rating: 4.7,
    tags: ["exclusive", "holiday-cruise"],
  },
  {
    basePrice: 7179,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
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
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
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
      ],
      description:
        "Explore a new side of Alaska with this tide-washed exploration starting in Seattle. Visit charming ports such as Vancouver, Ketchikan, Victoria, Glacier Bay, each offering its own unique rhythm.",
      distance: "659 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Seattle to Vancouver",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Vancouver to Ketchikan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Ketchikan to Victoria",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Victoria to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Christopher Lawson",
        role: "Sales Consultant",
        languages: ["English", "Chinese", "Arabic", "Italian", "Japanese"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/74.jpg",
        contact: {
          contactEmail: "luxurious.excursion.@velarivoyages.com",
          contactNumber: "+1-672-794-1906",
        },
      },
    ],
    title: "Luxurious Excursion of the Wilderness Reaches",
    description:
      "Explore a new side of Alaska with this tide-washed exploration starting in Seattle. Visit charming ports such as Vancouver, Ketchikan, Victoria, Glacier Bay, each offering its own unique rhythm.",
    rating: 4.0,
    tags: ["wildlife"],
  },
  {
    basePrice: 4007,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
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
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
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
          city: "Skagway",
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
      ],
      description:
        "Your journey through the Alaska begins in Seattle, where elegance meets adventure. Explore the shores of Ketchikan, Skagway, Juneau, with curated excursions and luxurious onboard amenities.",
      distance: "1160 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Seattle to Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Ketchikan to Skagway",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Skagway to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Daniel Stewart",
        role: "Sales Consultant",
        languages: ["English", "Chinese", "Arabic", "Italian", "Japanese"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
        contact: {
          contactEmail: "verdant.horizon.of.t@velarivoyages.com",
          contactNumber: "+1-774-127-1966",
        },
      },
    ],
    title: "Verdant Horizon of the Sky-Reflected Stillness",
    description:
      "Your journey through the Alaska begins in Seattle, where elegance meets adventure. Explore the shores of Ketchikan, Skagway, Juneau, with curated excursions and luxurious onboard amenities.",
    rating: 4.3,
    tags: ["historical", "glacier-cruise", "cruise-line"],
  },
  {
    basePrice: 1425,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
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
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
      ],
      description:
        "Discover the wonders of Alaska aboard this awe-inspiring cruise departing from Seattle. Journey through crystal waters to explore the treasures of Victoria, Juneau, Vancouver, Skagway, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1499 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Seattle to Victoria",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Victoria to Juneau",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Juneau to Vancouver",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Vancouver to Skagway",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Skagway to Seattle",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Eugene Hamilton",
        role: "Sales Consultant",
        languages: ["English", "Chinese", "Arabic", "Italian", "Japanese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
        contact: {
          contactEmail: "infinite.resonance.o@velarivoyages.com",
          contactNumber: "+1-697-688-8668",
        },
      },
    ],
    title: "Infinite Resonance of the Mist and Mountains",
    description:
      "Discover the wonders of Alaska aboard this awe-inspiring cruise departing from Seattle. Journey through crystal waters to explore the treasures of Victoria, Juneau, Vancouver, Skagway, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.3,
    tags: ["luxury", "sightseeing", "seasonal"],
  },
  {
    basePrice: 8293,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
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
          city: "Ketchikan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
      ],
      description:
        "Board in Seattle for a hand-crafted elevation through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Victoria, Ketchikan.",
      distance: "1023 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Seattle to Victoria",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Victoria to Ketchikan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Ketchikan to Seattle",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Billy Hawkins",
        role: "Sales Consultant",
        languages: ["English", "Chinese", "Arabic", "Italian", "Japanese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/58.jpg",
        contact: {
          contactEmail: "majestic.legacy.of.t@velarivoyages.com",
          contactNumber: "+1-867-312-6516",
        },
      },
    ],
    title: "Majestic Legacy of the Sound of Silence",
    description:
      "Board in Seattle for a hand-crafted elevation through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Victoria, Ketchikan.",
    rating: 4.4,
    tags: ["cultural", "cruise-excursion"],
  },
  {
    basePrice: 2033,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
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
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
      ],
      description:
        "Leave ordinary behind as you sail from Seattle across the captivating Alaska. Discover the distinctive personality of each destination, from Victoria, Skagway, Vancouver, Ketchikan.",
      distance: "1110 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Seattle to Victoria",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Victoria to Skagway",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Skagway to Vancouver",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Vancouver to Ketchikan",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Ketchikan to Seattle",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Victoria",
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
          description: "Exploring Vancouver",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jason Chambers",
        role: "Sales Consultant",
        languages: ["English", "Chinese", "Arabic", "Italian", "Japanese"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        contact: {
          contactEmail: "radiant.mythos.of.th@velarivoyages.com",
          contactNumber: "+1-969-879-3192",
        },
      },
    ],
    title: "Radiant Mythos of the Sound of Silence",
    description:
      "Leave ordinary behind as you sail from Seattle across the captivating Alaska. Discover the distinctive personality of each destination, from Victoria, Skagway, Vancouver, Ketchikan.",
    rating: 4.5,
    tags: ["cruise-journey", "romantic", "cruise-vacation"],
  },
  {
    basePrice: 6929,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
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
          city: "Victoria",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
      ],
      description:
        "A voyage of contrasts awaits from Seattle. Discover the historical and natural richness of Alaska as you cruise to spectacular destinations like Sitka, Victoria, Ketchikan, Glacier Bay.",
      distance: "541 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Seattle to Sitka",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Sitka to Victoria",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Victoria to Ketchikan",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Ketchikan to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Albert Jennings",
        role: "Sales Consultant",
        languages: ["English", "Chinese", "Arabic", "Italian", "Japanese"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "epic.saga.of.the.mis@velarivoyages.com",
          contactNumber: "+1-236-635-9380",
        },
      },
    ],
    title: "Epic Saga of the Mist and Mountains",
    description:
      "A voyage of contrasts awaits from Seattle. Discover the historical and natural richness of Alaska as you cruise to spectacular destinations like Sitka, Victoria, Ketchikan, Glacier Bay.",
    rating: 4.6,
    tags: ["weekend-cruise", "relaxation"],
  },
  {
    basePrice: 9863,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Victoria",
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
          city: "Seattle",
          country: "United States",
          region: "Alaska",
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
          city: "Victoria",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Set off on a discovery from Seattle that captures the essence of Alaska. Discover cultural gems and culinary delights across Juneau, Victoria.",
      distance: "1225 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Seattle to Juneau",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Juneau to Victoria",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Victoria",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Liam Hudson",
        role: "Sales Consultant",
        languages: ["English", "Chinese", "Arabic", "Italian", "Japanese"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/0.jpg",
        contact: {
          contactEmail: "captivating.horizon.@velarivoyages.com",
          contactNumber: "+1-242-841-7120",
        },
      },
    ],
    title: "Captivating Horizon of the Icy Passageways",
    description:
      "Set off on a discovery from Seattle that captures the essence of Alaska. Discover cultural gems and culinary delights across Juneau, Victoria.",
    rating: 4.4,
    tags: ["short-getaway"],
  },
  {
    basePrice: 2186,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
        {
          city: "Vancouver",
          country: "Canada",
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
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
      ],
      description:
        "Let this whispering voyage redefine your idea of travel. From Seattle, explore the Alaska in luxurious comfort, stopping at Vancouver, Ketchikan where every port offers a new chapter.",
      distance: "1092 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Seattle to Vancouver",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Vancouver to Ketchikan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Ketchikan to Seattle",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Harry Palmer",
        role: "Sales Consultant",
        languages: ["English", "Chinese", "Arabic", "Italian", "Japanese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        contact: {
          contactEmail: "midnight.horizon.of.@velarivoyages.com",
          contactNumber: "+1-837-529-7733",
        },
      },
    ],
    title: "Midnight Horizon of the Emerald City",
    description:
      "Let this whispering voyage redefine your idea of travel. From Seattle, explore the Alaska in luxurious comfort, stopping at Vancouver, Ketchikan where every port offers a new chapter.",
    rating: 4.4,
    tags: ["glacier-cruise", "cruise-vacation"],
  },
  {
    basePrice: 3006,
    departureLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    arrivalLocation: {
      city: "Seattle",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Seattle",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
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
          region: "Alaska",
          coordinates: {
            latitude: 47.6062,
            longitude: -122.3321,
          },
        },
      ],
      description:
        "Board in Seattle for a hand-crafted expedition through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Ketchikan, Glacier Bay, Skagway.",
      distance: "949 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Seattle to Ketchikan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Ketchikan to Glacier Bay",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Skagway",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Skagway to Seattle",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Seattle",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Marcus Day",
        role: "Sales Consultant",
        languages: ["English", "Chinese", "Arabic", "Italian", "Japanese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "exquisite.currents.o@velarivoyages.com",
          contactNumber: "+1-584-805-8229",
        },
      },
    ],
    title: "Exquisite Currents of the Mist and Mountains",
    description:
      "Board in Seattle for a hand-crafted expedition through the breathtaking Alaska. Highlights include sun-drenched beaches, historic ports, and immersive culture in Ketchikan, Glacier Bay, Skagway.",
    rating: 5.0,
    tags: ["cruise-line", "weekend-cruise", "long-distance"],
  },
];
