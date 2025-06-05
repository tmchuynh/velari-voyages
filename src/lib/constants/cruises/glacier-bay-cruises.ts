import { Cruise } from "@/lib/interfaces/services/cruises";

export const glacierBayCruises: Cruise[] = [
  {
    basePrice: 4955,
    departureLocation: {
      city: "Glacier Bay",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "This extraordinary quest from Glacier Bay offers the ultimate Glacier Bay exploration. Immerse yourself in the rich cultures and stunning landscapes of Dubrovnik, Mykonos and Milan, creating memories that will last a lifetime.",
      distance: "806 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Mykonos to Milan",
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
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Antonio Campbell",
        role: "Marketing Coordinator",
        languages: ["English", "Arabic", "French"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "crystalline.odyssey.@velarivoyages.com",
          contactNumber: "+1-486-227-9580",
        },
      },
    ],
    title: "Crystalline Odyssey of the Exotic Realms",
    description:
      "This extraordinary quest from Glacier Bay offers the ultimate Glacier Bay exploration. Immerse yourself in the rich cultures and stunning landscapes of Dubrovnik, Mykonos and Milan, creating memories that will last a lifetime.",
    rating: 4.1,
    tags: ["cruise-journey", "romantic"],
  },
  {
    basePrice: 9402,
    departureLocation: {
      city: "Glacier Bay",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "",
      region: "",
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
          city: "Glacier Bay",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Launch into adventure from Glacier Bay and sail deep into the heart of the Glacier Bay. With ports of call like Santorini, Malta, Milan, Mykonos, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "526 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Santorini",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Santorini to Malta",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Malta to Milan",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Milan to Mykonos",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Sailing from Mykonos to Glacier Bay",
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
          description: "Exploring Santorini",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Mykonos",
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
        name: "Terry Clark",
        role: "Marketing Coordinator",
        languages: ["English", "Arabic", "French"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/81.jpg",
        contact: {
          contactEmail: "mythic.sojourn.of.th@velarivoyages.com",
          contactNumber: "+1-999-398-2216",
        },
      },
    ],
    title: "Mythic Sojourn of the Exotic Realms",
    description:
      "Launch into adventure from Glacier Bay and sail deep into the heart of the Glacier Bay. With ports of call like Santorini, Malta, Milan, Mykonos, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.1,
    tags: ["exclusive"],
  },
  {
    basePrice: 2993,
    departureLocation: {
      city: "Glacier Bay",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Join us in Glacier Bay for a arcadia of a lifetime. Sail across the serene waters of Glacier Bay, stopping at ports like Mykonos, Venice, Malta, Dubrovnik where timeless traditions meet modern luxuries.",
      distance: "1445 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Mykonos to Venice",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Venice to Malta",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Malta to Dubrovnik",
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
          description: "Exploring Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Matthew Dunn",
        role: "Marketing Coordinator",
        languages: ["English", "Arabic", "French"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/30.jpg",
        contact: {
          contactEmail: "captivating.journey.@velarivoyages.com",
          contactNumber: "+1-140-367-9249",
        },
      },
    ],
    title: "Captivating Journey of the Exotic Realms",
    description:
      "Join us in Glacier Bay for a arcadia of a lifetime. Sail across the serene waters of Glacier Bay, stopping at ports like Mykonos, Venice, Malta, Dubrovnik where timeless traditions meet modern luxuries.",
    rating: 4.5,
    tags: ["nature"],
  },
  {
    basePrice: 5629,
    departureLocation: {
      city: "Glacier Bay",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "",
      region: "",
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
          city: "Glacier Bay",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Sail from Glacier Bay into a world of wonder. The Glacier Bay beckons with unforgettable ports like Athens, Florence, where every view is picture-perfect and every moment is priceless.",
      distance: "645 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Athens",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Athens to Florence",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Florence to Glacier Bay",
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
          description: "Exploring Athens",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Sebastian Hawkins",
        role: "Marketing Coordinator",
        languages: ["English", "Arabic", "French"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
        contact: {
          contactEmail: "celestial.sojourn.of@velarivoyages.com",
          contactNumber: "+1-650-516-8838",
        },
      },
    ],
    title: "Celestial Sojourn of the Exotic Realms",
    description:
      "Sail from Glacier Bay into a world of wonder. The Glacier Bay beckons with unforgettable ports like Athens, Florence, where every view is picture-perfect and every moment is priceless.",
    rating: 4.1,
    tags: ["themed-cruise", "cruise"],
  },
  {
    basePrice: 9448,
    departureLocation: {
      city: "Glacier Bay",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Florence",
      country: "Italy",
      coordinates: {
        latitude: 43.769562,
        longitude: 11.255814,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Set sail from Glacier Bay on this golden requiem through the heart of Glacier Bay. Experience the perfect blend of relaxation and adventure as you explore Dubrovnik and Florence, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "752 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Florence",
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
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jason Hunter",
        role: "Marketing Coordinator",
        languages: ["English", "Arabic", "French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/46.jpg",
        contact: {
          contactEmail: "sundrenched.tranquil@velarivoyages.com",
          contactNumber: "+1-821-484-4573",
        },
      },
    ],
    title: "Sun-Drenched Tranquility of the Exotic Realms",
    description:
      "Set sail from Glacier Bay on this golden requiem through the heart of Glacier Bay. Experience the perfect blend of relaxation and adventure as you explore Dubrovnik and Florence, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.2,
    tags: ["general", "historical"],
  },
  {
    basePrice: 5776,
    departureLocation: {
      city: "Glacier Bay",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Milan",
      country: "Italy",
      coordinates: {
        latitude: 45.4642,
        longitude: 9.19,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
      ],
      description:
        "Savor each moment of this oceanic escape through Glacier Bay, starting in Glacier Bay. Visit renowned locations like Dubrovnik, Rome, Venice, Milan, where adventure and relaxation intertwine.",
      distance: "595 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Rome",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Rome to Venice",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Venice to Milan",
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
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Harry Cooper",
        role: "Marketing Coordinator",
        languages: ["English", "Arabic", "French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/85.jpg",
        contact: {
          contactEmail: "mythic.sanctum.of.th@velarivoyages.com",
          contactNumber: "+1-697-555-5773",
        },
      },
    ],
    title: "Mythic Sanctum of the Exotic Realms",
    description:
      "Savor each moment of this oceanic escape through Glacier Bay, starting in Glacier Bay. Visit renowned locations like Dubrovnik, Rome, Venice, Milan, where adventure and relaxation intertwine.",
    rating: 4.2,
    tags: ["VIP"],
  },
  {
    basePrice: 5476,
    departureLocation: {
      city: "Glacier Bay",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Glacier Bay",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Mykonos",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
        {
          city: "Barcelona",
          country: "Spain",
          coordinates: {
            latitude: 41.390205,
            longitude: 2.154007,
          },
        },
        {
          city: "Glacier Bay",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Step aboard in Glacier Bay and begin a midnight journey through the scenic Glacier Bay. From historic cities to coastal hideaways like Dubrovnik, Mykonos, Venice, Barcelona, every day is unforgettable.",
      distance: "1383 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Dubrovnik",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Mykonos to Venice",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Venice to Barcelona",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Barcelona to Glacier Bay",
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
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Exploring Glacier Bay",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Tyler Dixon",
        role: "Marketing Coordinator",
        languages: ["English", "Arabic", "French"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
        contact: {
          contactEmail: "tidewashed.wanderlus@velarivoyages.com",
          contactNumber: "+1-477-598-7565",
        },
      },
    ],
    title: "Tide-Washed Wanderlust of the Exotic Realms",
    description:
      "Step aboard in Glacier Bay and begin a midnight journey through the scenic Glacier Bay. From historic cities to coastal hideaways like Dubrovnik, Mykonos, Venice, Barcelona, every day is unforgettable.",
    rating: 4.0,
    tags: ["seasonal", "anniversary-cruise"],
  },
  {
    basePrice: 2465,
    departureLocation: {
      city: "Glacier Bay",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Santorini",
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
          city: "Glacier Bay",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Join us in Glacier Bay for a panorama of a lifetime. Sail across the serene waters of Glacier Bay, stopping at ports like Milan, Santorini where timeless traditions meet modern luxuries.",
      distance: "1364 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Milan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Milan to Santorini",
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
          description: "Exploring Milan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nicholas Henderson",
        role: "Marketing Coordinator",
        languages: ["English", "Arabic", "French"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/92.jpg",
        contact: {
          contactEmail: "radiant.embrace.of.t@velarivoyages.com",
          contactNumber: "+1-869-921-3648",
        },
      },
    ],
    title: "Radiant Embrace of the Exotic Realms",
    description:
      "Join us in Glacier Bay for a panorama of a lifetime. Sail across the serene waters of Glacier Bay, stopping at ports like Milan, Santorini where timeless traditions meet modern luxuries.",
    rating: 4.3,
    tags: ["adventure"],
  },
  {
    basePrice: 8214,
    departureLocation: {
      city: "Glacier Bay",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Venice",
      country: "Italy",
      coordinates: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "This extraordinary mirage from Glacier Bay offers the ultimate Glacier Bay exploration. Immerse yourself in the rich cultures and stunning landscapes of Santorini, Athens and Venice, creating memories that will last a lifetime.",
      distance: "758 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Glacier Bay to Santorini",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Santorini to Athens",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Athens to Venice",
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
          description: "Exploring Santorini",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Oliver Murray",
        role: "Marketing Coordinator",
        languages: ["English", "Arabic", "French"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/21.jpg",
        contact: {
          contactEmail: "heavenly.excursion.o@velarivoyages.com",
          contactNumber: "+1-430-328-9159",
        },
      },
    ],
    title: "Heavenly Excursion of the Exotic Realms",
    description:
      "This extraordinary mirage from Glacier Bay offers the ultimate Glacier Bay exploration. Immerse yourself in the rich cultures and stunning landscapes of Santorini, Athens and Venice, creating memories that will last a lifetime.",
    rating: 4.0,
    tags: ["exclusive", "VIP", "repositioning"],
  },
  {
    basePrice: 7714,
    departureLocation: {
      city: "Glacier Bay",
      country: "",
      region: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    arrivalLocation: {
      city: "Santorini",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Glacier Bay",
          country: "",
          region: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your timeless journey from Glacier Bay. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Athens, Santorini.",
      distance: "761 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Glacier Bay to Athens",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Athens to Santorini",
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
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Carlos Fox",
        role: "Marketing Coordinator",
        languages: ["English", "Arabic", "French"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/37.jpg",
        contact: {
          contactEmail: "celestial.serenade.o@velarivoyages.com",
          contactNumber: "+1-293-786-4625",
        },
      },
    ],
    title: "Celestial Serenade of the Exotic Realms",
    description:
      "Let the spirit of exploration guide your timeless journey from Glacier Bay. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Athens, Santorini.",
    rating: 4.3,
    tags: ["relaxation", "nature", "cruise"],
  },
];
