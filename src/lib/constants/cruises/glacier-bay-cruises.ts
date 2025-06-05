import { Cruise } from "@/lib/interfaces/services/cruises";

export const glacierBayCruises: Cruise[] = [
  {
    basePrice: 2747,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
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
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "Your embrace begins in Glacier Bay, where every sunset on the Alaska horizon promises another day of discovery—from Seattle, Skagway to hidden ports of charm.",
      distance: "893 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Seattle",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Seattle to Skagway",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Skagway to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Matthew Fisher",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Japanese", "Spanish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/27.jpg",
        contact: {
          contactEmail: "legendary.mythos.of.@velarivoyages.com",
          contactNumber: "+1-130-615-3534",
        },
      },
    ],
    title: "Legendary Mythos of the Echoes of Ice",
    description:
      "Your embrace begins in Glacier Bay, where every sunset on the Alaska horizon promises another day of discovery—from Seattle, Skagway to hidden ports of charm.",
    rating: 4.5,
    tags: ["general"],
  },
  {
    basePrice: 8500,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Vancouver",
      country: "Canada",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
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
      ],
      description:
        "Depart from the iconic port of Glacier Bay and sail through the enchanting Alaska. Explore vibrant destinations like Victoria, Ketchikan, Skagway, Vancouver, each offering its own unique charm and local flair.",
      distance: "765 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Victoria",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Victoria to Ketchikan",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Ketchikan to Skagway",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Skagway to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 12",
          end: "Day 12",
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
        name: "Dylan Jennings",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Japanese", "Spanish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/96.jpg",
        contact: {
          contactEmail: "floating.tranquility@velarivoyages.com",
          contactNumber: "+1-496-902-5928",
        },
      },
    ],
    title: "Floating Tranquility of the Snow-Crowned Peaks",
    description:
      "Depart from the iconic port of Glacier Bay and sail through the enchanting Alaska. Explore vibrant destinations like Victoria, Ketchikan, Skagway, Vancouver, each offering its own unique charm and local flair.",
    rating: 5.0,
    tags: ["romantic", "expedition", "long-distance"],
  },
  {
    basePrice: 3818,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
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
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "A voyage of contrasts awaits from Glacier Bay. Discover the historical and natural richness of Alaska as you cruise to spectacular destinations like Juneau, Ketchikan, Skagway, Seattle.",
      distance: "1365 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Juneau",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Juneau to Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Ketchikan to Skagway",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Skagway to Seattle",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Seattle to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Michael Murray",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Japanese", "Spanish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "hidden.eclipse.of.th@velarivoyages.com",
          contactNumber: "+1-904-399-1210",
        },
      },
    ],
    title: "Hidden Eclipse of the Frontier Silence",
    description:
      "A voyage of contrasts awaits from Glacier Bay. Discover the historical and natural richness of Alaska as you cruise to spectacular destinations like Juneau, Ketchikan, Skagway, Seattle.",
    rating: 4.4,
    tags: ["repositioning", "cultural", "seasonal"],
  },
  {
    basePrice: 1497,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
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
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from Glacier Bay. This arcadia through the Alaska unveils stunning stops including Vancouver, Juneau, all with first-class service.",
      distance: "526 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Vancouver",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Vancouver to Juneau",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Juneau to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Samuel Maxwell",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Japanese", "Spanish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/14.jpg",
        contact: {
          contactEmail: "opulent.adventure.of@velarivoyages.com",
          contactNumber: "+1-753-716-9504",
        },
      },
    ],
    title: "Opulent Adventure of the Frontier Silence",
    description:
      "Step into a world of elegance and exploration from Glacier Bay. This arcadia through the Alaska unveils stunning stops including Vancouver, Juneau, all with first-class service.",
    rating: 4.4,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 8897,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "Sail into splendor from Glacier Bay on a majestic voyage through Alaska. Let each stop—from Juneau to Skagway—reveal the unique flavors and colors of the region.",
      distance: "648 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Juneau",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Juneau to Skagway",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Skagway to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Antonio Maxwell",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Japanese", "Spanish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/43.jpg",
        contact: {
          contactEmail: "golden.renaissance.o@velarivoyages.com",
          contactNumber: "+1-411-129-3661",
        },
      },
    ],
    title: "Golden Renaissance of the Snow-Crowned Peaks",
    description:
      "Sail into splendor from Glacier Bay on a majestic voyage through Alaska. Let each stop—from Juneau to Skagway—reveal the unique flavors and colors of the region.",
    rating: 4.2,
    tags: ["expedition", "short-getaway", "cruise-journey"],
  },
  {
    basePrice: 2614,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
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
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "Join us in Glacier Bay for a realm of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Skagway, Vancouver where timeless traditions meet modern luxuries.",
      distance: "1271 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Skagway",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Skagway to Vancouver",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Vancouver to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Glacier Bay",
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
          description: "Exploring Vancouver",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Keith Parker",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Japanese", "Spanish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/39.jpg",
        contact: {
          contactEmail: "immersive.resonance.@velarivoyages.com",
          contactNumber: "+1-892-255-4583",
        },
      },
    ],
    title: "Immersive Resonance of the Northern Lights",
    description:
      "Join us in Glacier Bay for a realm of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Skagway, Vancouver where timeless traditions meet modern luxuries.",
    rating: 4.9,
    tags: ["sightseeing", "cruise"],
  },
  {
    basePrice: 8193,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
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
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "Launch into adventure from Glacier Bay and sail deep into the heart of the Alaska. With ports of call like Victoria, Seattle, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "995 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Victoria",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Victoria to Seattle",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Seattle to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Glacier Bay",
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
          description: "Exploring Seattle",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Eugene Marshall",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Japanese", "Spanish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/58.jpg",
        contact: {
          contactEmail: "luminous.sojourn.of.@velarivoyages.com",
          contactNumber: "+1-680-875-3081",
        },
      },
    ],
    title: "Luminous Sojourn of the Icy Passageways",
    description:
      "Launch into adventure from Glacier Bay and sail deep into the heart of the Alaska. With ports of call like Victoria, Seattle, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.4,
    tags: ["cruise-excursion", "sightseeing"],
  },
  {
    basePrice: 6246,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
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
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "Embark on an unforgettable embrace from the vibrant port of Glacier Bay, where you'll discover hidden gems and iconic landmarks across the Alaska region. With stops at Victoria, Juneau, Seattle, Ketchikan, this journey combines cultural immersion with breathtaking scenery.",
      distance: "935 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Victoria",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Victoria to Juneau",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Juneau to Seattle",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Seattle to Ketchikan",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Ketchikan to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Ketchikan",
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
        name: "Scott West",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Japanese", "Spanish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
        contact: {
          contactEmail: "captivating.awakenin@velarivoyages.com",
          contactNumber: "+1-474-644-1455",
        },
      },
    ],
    title: "Captivating Awakening of the Alpine Seascapes",
    description:
      "Embark on an unforgettable embrace from the vibrant port of Glacier Bay, where you'll discover hidden gems and iconic landmarks across the Alaska region. With stops at Victoria, Juneau, Seattle, Ketchikan, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.6,
    tags: ["cruise-excursion"],
  },
  {
    basePrice: 5979,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "Escape into the calm waters of Alaska with this extraordinary journey from Glacier Bay. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Victoria, Juneau.",
      distance: "832 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Victoria",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Victoria to Juneau",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Juneau to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Louis Grant",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Japanese", "Spanish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "captivating.enigma.o@velarivoyages.com",
          contactNumber: "+1-216-682-2903",
        },
      },
    ],
    title: "Captivating Enigma of the Misty Fjords",
    description:
      "Escape into the calm waters of Alaska with this extraordinary journey from Glacier Bay. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Victoria, Juneau.",
    rating: 4.7,
    tags: ["wildlife"],
  },
  {
    basePrice: 8223,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
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
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "An escape like no other begins in Glacier Bay, where your frontier launches into the heart of Alaska. Discover the magic of Vancouver, Skagway, Juneau, Ketchikan with style and sophistication.",
      distance: "960 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Vancouver",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Vancouver to Skagway",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Skagway to Juneau",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Juneau to Ketchikan",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Ketchikan to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Billy Campbell",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Japanese", "Spanish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/38.jpg",
        contact: {
          contactEmail: "eternal.excursion.of@velarivoyages.com",
          contactNumber: "+1-585-403-1510",
        },
      },
    ],
    title: "Eternal Excursion of the Whale-Rich Waters",
    description:
      "An escape like no other begins in Glacier Bay, where your frontier launches into the heart of Alaska. Discover the magic of Vancouver, Skagway, Juneau, Ketchikan with style and sophistication.",
    rating: 4.9,
    tags: ["cruise-ship", "anniversary-cruise", "cruise-getaway"],
  },
  {
    basePrice: 6997,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Juneau",
      country: "United States",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
        {
          city: "Sitka",
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
      ],
      description:
        "Set off on a mystique from Glacier Bay that captures the essence of Alaska. Discover cultural gems and culinary delights across Sitka, Skagway, Juneau.",
      distance: "1422 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Sitka",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Sitka to Skagway",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Skagway to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Ethan Payne",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Japanese", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/48.jpg",
        contact: {
          contactEmail: "radiancedrenched.hor@velarivoyages.com",
          contactNumber: "+1-702-712-6542",
        },
      },
    ],
    title: "Radiance-Drenched Horizon of the Northern Lights",
    description:
      "Set off on a mystique from Glacier Bay that captures the essence of Alaska. Discover cultural gems and culinary delights across Sitka, Skagway, Juneau.",
    rating: 4.1,
    tags: ["historical", "nature", "relaxation"],
  },
  {
    basePrice: 2444,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Vancouver",
      country: "Canada",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
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
      ],
      description:
        "Begin your journey in Glacier Bay, where tradition meets travel. This immersive journey reveals the finest of Alaska, from the beaches of Juneau to the streets of Vancouver.",
      distance: "620 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Juneau",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Juneau to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Vincent Wallace",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Japanese", "Spanish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/65.jpg",
        contact: {
          contactEmail: "majestic.mystique.of@velarivoyages.com",
          contactNumber: "+1-826-356-7830",
        },
      },
    ],
    title: "Majestic Mystique of the The Last Frontier",
    description:
      "Begin your journey in Glacier Bay, where tradition meets travel. This immersive journey reveals the finest of Alaska, from the beaches of Juneau to the streets of Vancouver.",
    rating: 4.1,
    tags: ["holiday-cruise", "nature"],
  },
  {
    basePrice: 5357,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
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
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "Join us in Glacier Bay for a saga of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Ketchikan, Juneau, Seattle where timeless traditions meet modern luxuries.",
      distance: "1176 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Ketchikan to Juneau",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Juneau to Seattle",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Seattle to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Kenneth Jennings",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Japanese", "Spanish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/42.jpg",
        contact: {
          contactEmail: "sublime.tide.of.the.@velarivoyages.com",
          contactNumber: "+1-617-377-5279",
        },
      },
    ],
    title: "Sublime Tide of the Misty Fjords",
    description:
      "Join us in Glacier Bay for a saga of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Ketchikan, Juneau, Seattle where timeless traditions meet modern luxuries.",
    rating: 4.8,
    tags: ["nature"],
  },
  {
    basePrice: 9716,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Juneau",
      country: "United States",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
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
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
      ],
      description:
        "Join us in Glacier Bay for a whisper of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Ketchikan, Seattle, Sitka, Juneau where timeless traditions meet modern luxuries.",
      distance: "971 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Ketchikan to Seattle",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Seattle to Sitka",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Sitka to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Glacier Bay",
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
          description: "Exploring Seattle",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Thomas Warren",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Japanese", "Spanish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
        contact: {
          contactEmail: "alluring.symphony.of@velarivoyages.com",
          contactNumber: "+1-367-591-8249",
        },
      },
    ],
    title: "Alluring Symphony of the Carved Ice Cathedrals",
    description:
      "Join us in Glacier Bay for a whisper of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Ketchikan, Seattle, Sitka, Juneau where timeless traditions meet modern luxuries.",
    rating: 4.6,
    tags: ["anniversary-cruise", "cruise-excursion"],
  },
  {
    basePrice: 6299,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
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
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "Begin your elevation in Glacier Bay, a gateway to the soul of Alaska. Enjoy days spent exploring Vancouver, Skagway, Ketchikan, Victoria and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1049 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Vancouver",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Vancouver to Skagway",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Skagway to Ketchikan",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Ketchikan to Victoria",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Victoria to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 18",
          end: "Day 18",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Randy Day",
        role: "Travel Advisor",
        languages: ["English", "Russian", "Japanese", "Spanish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "secluded.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-934-431-9010",
        },
      },
    ],
    title: "Secluded Odyssey of the Snow-Crowned Peaks",
    description:
      "Begin your elevation in Glacier Bay, a gateway to the soul of Alaska. Enjoy days spent exploring Vancouver, Skagway, Ketchikan, Victoria and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.2,
    tags: ["cruise", "exclusive"],
  },
  {
    basePrice: 3282,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Sitka",
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "Join us in Glacier Bay for a reunion of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Victoria, Ketchikan, Sitka, Juneau where timeless traditions meet modern luxuries.",
      distance: "1266 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Victoria",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Victoria to Ketchikan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Ketchikan to Sitka",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Sitka to Juneau",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Juneau to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Victoria",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Sitka",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Nora Porter",
        role: "Cruise Specialist",
        languages: ["English", "Japanese", "French", "Arabic"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/94.jpg",
        contact: {
          contactEmail: "transcendent.passage@velarivoyages.com",
          contactNumber: "+1-298-100-6011",
        },
      },
    ],
    title: "Transcendent Passage of the Icy Passageways",
    description:
      "Join us in Glacier Bay for a reunion of a lifetime. Sail across the serene waters of Alaska, stopping at ports like Victoria, Ketchikan, Sitka, Juneau where timeless traditions meet modern luxuries.",
    rating: 4.2,
    tags: ["sightseeing", "VIP"],
  },
  {
    basePrice: 8399,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Juneau",
      country: "United States",
      coordinates: {
        latitude: 58.3019,
        longitude: -134.4197,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
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
          coordinates: {
            latitude: 49.2827,
            longitude: -123.1207,
          },
        },
        {
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
      ],
      description:
        "Escape into the calm waters of Alaska with this midnight journey from Glacier Bay. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Seattle, Vancouver, Juneau.",
      distance: "1319 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Seattle",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Seattle to Vancouver",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Vancouver to Juneau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Seattle",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Juneau",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Evelyn Grant",
        role: "Cruise Specialist",
        languages: ["English", "Japanese", "French", "Arabic"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
        contact: {
          contactEmail: "luxurious.reverie.of@velarivoyages.com",
          contactNumber: "+1-364-409-4634",
        },
      },
    ],
    title: "Luxurious Reverie of the The Last Frontier",
    description:
      "Escape into the calm waters of Alaska with this midnight journey from Glacier Bay. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Seattle, Vancouver, Juneau.",
    rating: 4.8,
    tags: ["holiday-cruise", "nature", "cruise-vacation"],
  },
  {
    basePrice: 2161,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
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
          city: "Juneau",
          country: "United States",
          coordinates: {
            latitude: 58.3019,
            longitude: -134.4197,
          },
        },
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
      ],
      description:
        "Set course from Glacier Bay for an inspiring sublime journey across Alaska. Whether exploring ancient ruins in Ketchikan or soaking up coastal views in Skagway, every day offers a perfect mix of discovery and relaxation.",
      distance: "926 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Ketchikan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Ketchikan to Skagway",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Skagway to Vancouver",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Vancouver to Juneau",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Juneau to Glacier Bay",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Skagway",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Vancouver",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Juneau",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Joan Dixon",
        role: "Cruise Specialist",
        languages: ["English", "Japanese", "French", "Arabic"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/41.jpg",
        contact: {
          contactEmail: "verdant.legacy.of.th@velarivoyages.com",
          contactNumber: "+1-975-162-2932",
        },
      },
    ],
    title: "Verdant Legacy of the Alpine Seascapes",
    description:
      "Set course from Glacier Bay for an inspiring sublime journey across Alaska. Whether exploring ancient ruins in Ketchikan or soaking up coastal views in Skagway, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.3,
    tags: ["cruise-excursion"],
  },
  {
    basePrice: 8167,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Skagway",
      country: "United States",
      coordinates: {
        latitude: 59.4569,
        longitude: -135.3123,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Skagway",
          country: "United States",
          coordinates: {
            latitude: 59.4569,
            longitude: -135.3123,
          },
        },
      ],
      description:
        "Sail away from Glacier Bay into the beautiful expanse of Alaska. Along the way, enjoy rich cultural experiences in Ketchikan, Skagway, where history, nature, and cuisine collide.",
      distance: "612 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Ketchikan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Ketchikan to Skagway",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Skagway",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Amy Sutton",
        role: "Cruise Specialist",
        languages: ["English", "Japanese", "French", "Arabic"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
        contact: {
          contactEmail: "radiancedrenched.reu@velarivoyages.com",
          contactNumber: "+1-316-462-2127",
        },
      },
    ],
    title: "Radiance-Drenched Reunion of the Snow-Crowned Peaks",
    description:
      "Sail away from Glacier Bay into the beautiful expanse of Alaska. Along the way, enjoy rich cultural experiences in Ketchikan, Skagway, where history, nature, and cuisine collide.",
    rating: 4.1,
    tags: ["cruise-excursion"],
  },
  {
    basePrice: 8206,
    departureLocation: {
      city: "Glacier Bay",
      country: "United States",
      region: "Alaska",
      coordinates: {
        latitude: 58.8017,
        longitude: -135.5828,
      },
    },
    arrivalLocation: {
      city: "Vancouver",
      country: "Canada",
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
          city: "Glacier Bay",
          country: "United States",
          region: "Alaska",
          coordinates: {
            latitude: 58.8017,
            longitude: -135.5828,
          },
        },
        {
          city: "Ketchikan",
          country: "United States",
          coordinates: {
            latitude: 55.3422,
            longitude: -131.6476,
          },
        },
        {
          city: "Victoria",
          country: "Canada",
          coordinates: {
            latitude: 48.4284,
            longitude: -123.3656,
          },
        },
        {
          city: "Sitka",
          country: "United States",
          coordinates: {
            latitude: 57.0531,
            longitude: -135.3304,
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
      ],
      description:
        "Depart from iconic Glacier Bay and traverse the Alaska with visits to Ketchikan, Victoria, Sitka, Vancouver. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1401 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Ketchikan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Ketchikan to Victoria",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Victoria to Sitka",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Sitka to Vancouver",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Glacier Bay",
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
          description: "Exploring Victoria",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Sitka",
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
        name: "Avery Payne",
        role: "Cruise Specialist",
        languages: ["English", "Japanese", "French", "Arabic"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/28.jpg",
        contact: {
          contactEmail: "secluded.resonance.o@velarivoyages.com",
          contactNumber: "+1-510-448-4204",
        },
      },
    ],
    title: "Secluded Resonance of the Frontier Silence",
    description:
      "Depart from iconic Glacier Bay and traverse the Alaska with visits to Ketchikan, Victoria, Sitka, Vancouver. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.3,
    tags: ["cruise-ship", "wellness"],
  },
];
