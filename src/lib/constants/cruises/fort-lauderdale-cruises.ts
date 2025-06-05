import { Cruise } from "@/lib/interfaces/services/cruises";

export const fortLauderdaleCruises: Cruise[] = [
  {
    basePrice: 3798,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    arrivalLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "Philipsburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Fort Lauderdale on this celestial journey across Caribbean. Uncover the beauty and history of Tampa, Philipsburg with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1226 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Tampa",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tampa to Philipsburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Philipsburg to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Jason Chambers",
        role: "Sales Consultant",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/36.jpg",
        contact: {
          contactEmail: "spectacular.infinite@velarivoyages.com",
          contactNumber: "+1-355-258-5618",
        },
      },
    ],
    title: "Spectacular Infinite of the Tropical Constellation",
    description:
      "Sail away from the charming harbor of Fort Lauderdale on this celestial journey across Caribbean. Uncover the beauty and history of Tampa, Philipsburg with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.6,
    tags: ["luxury", "glacier-cruise", "cultural"],
  },
  {
    basePrice: 2693,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    arrivalLocation: {
      city: "Tampa",
      country: "United States",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
        {
          city: "Nassau",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "Step aboard in Fort Lauderdale and begin a verdant journey through the scenic Caribbean. From historic cities to coastal hideaways like Nassau, Tampa, every day is unforgettable.",
      distance: "1361 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Nassau",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Nassau to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Russell Graham",
        role: "Sales Consultant",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/77.jpg",
        contact: {
          contactEmail: "majestic.tranquility@velarivoyages.com",
          contactNumber: "+1-263-360-5707",
        },
      },
    ],
    title: "Majestic Tranquility of the Harbor Mirage",
    description:
      "Step aboard in Fort Lauderdale and begin a verdant journey through the scenic Caribbean. From historic cities to coastal hideaways like Nassau, Tampa, every day is unforgettable.",
    rating: 4.1,
    tags: ["cruise-vacation"],
  },
  {
    basePrice: 2900,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    arrivalLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Bermuda",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Nassau",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
      ],
      description:
        "Depart from iconic Fort Lauderdale and traverse the Caribbean with visits to San Juan, St. Thomas, Bermuda, Nassau. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1044 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to San Juan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from San Juan to St. Thomas",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from St. Thomas to Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Bermuda to Nassau",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Nassau to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Alexander Jennings",
        role: "Sales Consultant",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/46.jpg",
        contact: {
          contactEmail: "gilded.lullaby.of.th@velarivoyages.com",
          contactNumber: "+1-417-493-2768",
        },
      },
    ],
    title: "Gilded Lullaby of the Sunlit Seaway",
    description:
      "Depart from iconic Fort Lauderdale and traverse the Caribbean with visits to San Juan, St. Thomas, Bermuda, Nassau. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.8,
    tags: ["glacier-cruise"],
  },
  {
    basePrice: 9995,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    arrivalLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
        {
          city: "Cozumel",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "Bermuda",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
      ],
      description:
        "This oasis takes you beyond the ordinary, starting in Fort Lauderdale. With breathtaking stops in Cozumel, Roatán, Tampa, Bermuda, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "598 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Cozumel",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Cozumel to Roatán",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Roatán to Tampa",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Tampa to Bermuda",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Elijah Porter",
        role: "Sales Consultant",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "sublime.adventure.of@velarivoyages.com",
          contactNumber: "+1-524-250-3236",
        },
      },
    ],
    title: "Sublime Adventure of the Canal-Threaded Escape",
    description:
      "This oasis takes you beyond the ordinary, starting in Fort Lauderdale. With breathtaking stops in Cozumel, Roatán, Tampa, Bermuda, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.4,
    tags: ["cruise-holiday"],
  },
  {
    basePrice: 4866,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    arrivalLocation: {
      city: "Philipsburg",
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
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
        {
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cozumel",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Bermuda",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Philipsburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "From the lively departure port of Fort Lauderdale, this curated exploration showcases the finest of Caribbean. With visits to St. Thomas, Cozumel, Bermuda, Philipsburg, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "618 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to St. Thomas",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from St. Thomas to Cozumel",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Cozumel to Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Bermuda to Philipsburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Daniel Curtis",
        role: "Sales Consultant",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "charming.symphony.of@velarivoyages.com",
          contactNumber: "+1-749-894-8262",
        },
      },
    ],
    title: "Charming Symphony of the Harbor Mirage",
    description:
      "From the lively departure port of Fort Lauderdale, this curated exploration showcases the finest of Caribbean. With visits to St. Thomas, Cozumel, Bermuda, Philipsburg, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.8,
    tags: ["cruise-experience", "short-getaway", "long-distance"],
  },
  {
    basePrice: 7552,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    arrivalLocation: {
      city: "Roatán",
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
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
        {
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Embark from Fort Lauderdale and traverse the Caribbean in style. Whether it’s the energy of George Town or the calm of Roatán, each destination reveals a new side of paradise.",
      distance: "1347 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to George Town",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from George Town to Roatán",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Roatán",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Robert Fisher",
        role: "Sales Consultant",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
        contact: {
          contactEmail: "serene.horizon.of.th@velarivoyages.com",
          contactNumber: "+1-104-246-6626",
        },
      },
    ],
    title: "Serene Horizon of the Harbor Mirage",
    description:
      "Embark from Fort Lauderdale and traverse the Caribbean in style. Whether it’s the energy of George Town or the calm of Roatán, each destination reveals a new side of paradise.",
    rating: 4.5,
    tags: ["cruise-holiday", "romantic"],
  },
  {
    basePrice: 3339,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Philipsburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Your whisper begins in Fort Lauderdale, where every sunset on the Caribbean horizon promises another day of discovery—from San Juan, Philipsburg, Miami to hidden ports of charm.",
      distance: "1252 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to San Juan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from San Juan to Philipsburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Philipsburg to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Randy Crawford",
        role: "Sales Consultant",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/0.jpg",
        contact: {
          contactEmail: "enchanting.reflectio@velarivoyages.com",
          contactNumber: "+1-693-600-2735",
        },
      },
    ],
    title: "Enchanting Reflection of the Canal-Threaded Escape",
    description:
      "Your whisper begins in Fort Lauderdale, where every sunset on the Caribbean horizon promises another day of discovery—from San Juan, Philipsburg, Miami to hidden ports of charm.",
    rating: 4.5,
    tags: ["tropical", "cultural"],
  },
  {
    basePrice: 7656,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
        {
          city: "Bermuda",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Depart Fort Lauderdale on a relaxing serenade through the Caribbean region. Highlights include the stunning coastlines of Bermuda, Miami, all while enjoying first-class amenities on board.",
      distance: "1467 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Bermuda to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Darrell Palmer",
        role: "Sales Consultant",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/79.jpg",
        contact: {
          contactEmail: "velvet.legacy.of.the@velarivoyages.com",
          contactNumber: "+1-913-109-5163",
        },
      },
    ],
    title: "Velvet Legacy of the Sunlit Seaway",
    description:
      "Depart Fort Lauderdale on a relaxing serenade through the Caribbean region. Highlights include the stunning coastlines of Bermuda, Miami, all while enjoying first-class amenities on board.",
    rating: 4.2,
    tags: ["historical"],
  },
  {
    basePrice: 1713,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    arrivalLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
        {
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Philipsburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
      ],
      description:
        "Your passage begins in Fort Lauderdale, where every sunset on the Caribbean horizon promises another day of discovery—from Roatán, Philipsburg, Miami, St. Thomas to hidden ports of charm.",
      distance: "772 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Roatán",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Roatán to Philipsburg",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Philipsburg to Miami",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Miami to St. Thomas",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from St. Thomas to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Walter Hamilton",
        role: "Sales Consultant",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "verdant.serenade.of.@velarivoyages.com",
          contactNumber: "+1-783-825-6038",
        },
      },
    ],
    title: "Verdant Serenade of the Tropical Isles",
    description:
      "Your passage begins in Fort Lauderdale, where every sunset on the Caribbean horizon promises another day of discovery—from Roatán, Philipsburg, Miami, St. Thomas to hidden ports of charm.",
    rating: 4.8,
    tags: ["exclusive"],
  },
  {
    basePrice: 5975,
    departureLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    arrivalLocation: {
      city: "Fort Lauderdale",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 26.122439,
        longitude: -80.137317,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "Nassau",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Bermuda",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 26.122439,
            longitude: -80.137317,
          },
        },
      ],
      description:
        "Escape to sea from Fort Lauderdale on a secret voyage exploring the magic of Caribbean. Visit unforgettable locales like Tampa, Nassau, Roatán, Bermuda, where each stop inspires awe.",
      distance: "1243 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Tampa",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Tampa to Nassau",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Nassau to Roatán",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Roatán to Bermuda",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Marcus Maxwell",
        role: "Sales Consultant",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
        contact: {
          contactEmail: "dreamlike.odyssey.of@velarivoyages.com",
          contactNumber: "+1-960-361-7620",
        },
      },
    ],
    title: "Dreamlike Odyssey of the Rum-Laced Breezes",
    description:
      "Escape to sea from Fort Lauderdale on a secret voyage exploring the magic of Caribbean. Visit unforgettable locales like Tampa, Nassau, Roatán, Bermuda, where each stop inspires awe.",
    rating: 4.7,
    tags: ["cruise-excursion"],
  },
];
