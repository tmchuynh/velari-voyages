import { Cruise } from "@/lib/interfaces/services/cruises";

export const newOrleansCruises: Cruise[] = [
  {
    basePrice: 7051,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "Bermuda",
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
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
          city: "Bermuda",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Your realm begins in New Orleans, where every sunset on the Caribbean horizon promises another day of discovery—from Miami, Tampa, George Town, Bermuda to hidden ports of charm.",
      distance: "1395 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from New Orleans to Miami",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Miami to Tampa",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Tampa to George Town",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from George Town to Bermuda",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Mark Crawford",
        role: "Sales Consultant",
        languages: ["English", "Portuguese", "Spanish", "Quechua", "French"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/95.jpg",
        contact: {
          contactEmail: "hidden.quest.of.the.@velarivoyages.com",
          contactNumber: "+1-435-340-8101",
        },
      },
    ],
    title: "Hidden Quest of the Sapphire Waters",
    description:
      "Your realm begins in New Orleans, where every sunset on the Caribbean horizon promises another day of discovery—from Miami, Tampa, George Town, Bermuda to hidden ports of charm.",
    rating: 4.7,
    tags: ["cruise-adventure", "cruise-experience", "relaxation"],
  },
  {
    basePrice: 9960,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "George Town",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
      ],
      description:
        "Your journey through the Caribbean begins in New Orleans, where elegance meets adventure. Explore the shores of Fort Lauderdale, George Town, with curated excursions and luxurious onboard amenities.",
      distance: "1486 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from New Orleans to Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to George Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kenneth Keller",
        role: "Sales Consultant",
        languages: ["English", "Portuguese", "Spanish", "Quechua", "French"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
        contact: {
          contactEmail: "immersive.elevation.@velarivoyages.com",
          contactNumber: "+1-599-515-4559",
        },
      },
    ],
    title: "Immersive Elevation of the Soul-Stirred Streets",
    description:
      "Your journey through the Caribbean begins in New Orleans, where elegance meets adventure. Explore the shores of Fort Lauderdale, George Town, with curated excursions and luxurious onboard amenities.",
    rating: 4.7,
    tags: ["historical", "cruise-adventure", "wellness"],
  },
  {
    basePrice: 7887,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Fort Lauderdale",
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
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Experience coastal elegance on this odyssey from New Orleans, where the journey through Caribbean includes stops in St. Thomas, George Town, Fort Lauderdale, Nassau, each more enchanting than the last.",
      distance: "1363 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from New Orleans to St. Thomas",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from St. Thomas to George Town",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from George Town to Fort Lauderdale",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Nassau",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Nassau to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Adam Lawson",
        role: "Sales Consultant",
        languages: ["English", "Portuguese", "Spanish", "Quechua", "French"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/65.jpg",
        contact: {
          contactEmail: "enchanting.mythos.of@velarivoyages.com",
          contactNumber: "+1-699-341-3359",
        },
      },
    ],
    title: "Enchanting Mythos of the Voodoo Murmurs",
    description:
      "Experience coastal elegance on this odyssey from New Orleans, where the journey through Caribbean includes stops in St. Thomas, George Town, Fort Lauderdale, Nassau, each more enchanting than the last.",
    rating: 4.4,
    tags: ["cruise-holiday"],
  },
  {
    basePrice: 9083,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Your journey through the Caribbean begins in New Orleans, where elegance meets adventure. Explore the shores of Roatán, Bermuda, George Town, with curated excursions and luxurious onboard amenities.",
      distance: "1461 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from New Orleans to Roatán",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Roatán to Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Bermuda to George Town",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from George Town to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Harold Dunn",
        role: "Sales Consultant",
        languages: ["English", "Portuguese", "Spanish", "Quechua", "French"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
        contact: {
          contactEmail: "idyllic.eclipse.of.t@velarivoyages.com",
          contactNumber: "+1-484-119-9964",
        },
      },
    ],
    title: "Idyllic Eclipse of the Soul-Stirred Streets",
    description:
      "Your journey through the Caribbean begins in New Orleans, where elegance meets adventure. Explore the shores of Roatán, Bermuda, George Town, with curated excursions and luxurious onboard amenities.",
    rating: 4.0,
    tags: ["cultural", "long-distance", "weekend-cruise"],
  },
  {
    basePrice: 7019,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
        {
          city: "Fort Lauderdale",
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
        "Enjoy seamless luxury on this spectacular pilgrimage beginning in New Orleans. Visit breathtaking Caribbean locales such as Fort Lauderdale, Philipsburg on this unforgettable itinerary.",
      distance: "796 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from New Orleans to Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Philipsburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Joshua Coleman",
        role: "Sales Consultant",
        languages: ["English", "Portuguese", "Spanish", "Quechua", "French"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "velvet.sojourn.of.th@velarivoyages.com",
          contactNumber: "+1-562-915-4331",
        },
      },
    ],
    title: "Velvet Sojourn of the Sun-Kissed Archipelago",
    description:
      "Enjoy seamless luxury on this spectacular pilgrimage beginning in New Orleans. Visit breathtaking Caribbean locales such as Fort Lauderdale, Philipsburg on this unforgettable itinerary.",
    rating: 4.9,
    tags: ["cruise"],
  },
  {
    basePrice: 1214,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Depart New Orleans on a relaxing discovery through the Caribbean region. Highlights include the stunning coastlines of Nassau, Miami, Bermuda, Tampa, all while enjoying first-class amenities on board.",
      distance: "826 nautical miles",
      totalDuration: "20 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from New Orleans to Nassau",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Nassau to Miami",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Miami to Bermuda",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Bermuda to Tampa",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Sailing from Tampa to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 19",
          end: "Day 20",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Lucas Dean",
        role: "Sales Consultant",
        languages: ["English", "Portuguese", "Spanish", "Quechua", "French"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/61.jpg",
        contact: {
          contactEmail: "mesmerizing.elevatio@velarivoyages.com",
          contactNumber: "+1-781-581-4157",
        },
      },
    ],
    title: "Mesmerizing Elevation of the Azure Horizons",
    description:
      "Depart New Orleans on a relaxing discovery through the Caribbean region. Highlights include the stunning coastlines of Nassau, Miami, Bermuda, Tampa, all while enjoying first-class amenities on board.",
    rating: 4.1,
    tags: ["weekend-cruise"],
  },
  {
    basePrice: 9433,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "Roatán",
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
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Leave ordinary behind as you sail from New Orleans across the captivating Caribbean. Discover the distinctive personality of each destination, from San Juan, Roatán, Miami.",
      distance: "1091 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from New Orleans to San Juan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from San Juan to Roatán",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Roatán to Miami",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Miami to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Javier Baker",
        role: "Sales Consultant",
        languages: ["English", "Portuguese", "Spanish", "Quechua", "French"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/35.jpg",
        contact: {
          contactEmail: "refined.arcadia.of.t@velarivoyages.com",
          contactNumber: "+1-597-212-2034",
        },
      },
    ],
    title: "Refined Arcadia of the Jazz Capital",
    description:
      "Leave ordinary behind as you sail from New Orleans across the captivating Caribbean. Discover the distinctive personality of each destination, from San Juan, Roatán, Miami.",
    rating: 4.1,
    tags: ["long-distance"],
  },
  {
    basePrice: 5560,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Leave ordinary behind as you sail from New Orleans across the captivating Caribbean. Discover the distinctive personality of each destination, from Miami, Tampa.",
      distance: "1111 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from New Orleans to Miami",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Miami to Tampa",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Tampa to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Walter Carpenter",
        role: "Sales Consultant",
        languages: ["English", "Portuguese", "Spanish", "Quechua", "French"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/79.jpg",
        contact: {
          contactEmail: "crystalline.resonanc@velarivoyages.com",
          contactNumber: "+1-112-110-8547",
        },
      },
    ],
    title: "Crystalline Resonance of the Soul-Stirred Streets",
    description:
      "Leave ordinary behind as you sail from New Orleans across the captivating Caribbean. Discover the distinctive personality of each destination, from Miami, Tampa.",
    rating: 4.7,
    tags: ["family-friendly", "cruise-getaway"],
  },
  {
    basePrice: 3883,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "Fort Lauderdale",
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
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Begin your frontier in New Orleans, a gateway to the soul of Caribbean. Enjoy days spent exploring Roatán, Fort Lauderdale, Nassau, San Juan and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "1436 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from New Orleans to Roatán",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Roatán to Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Nassau",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Nassau to San Juan",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from San Juan to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Jesse Porter",
        role: "Sales Consultant",
        languages: ["English", "Portuguese", "Spanish", "Quechua", "French"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
        contact: {
          contactEmail: "harmonic.retreat.of.@velarivoyages.com",
          contactNumber: "+1-607-877-8039",
        },
      },
    ],
    title: "Harmonic Retreat of the Soul-Stirred Streets",
    description:
      "Begin your frontier in New Orleans, a gateway to the soul of Caribbean. Enjoy days spent exploring Roatán, Fort Lauderdale, Nassau, San Juan and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.8,
    tags: ["fall-cruise"],
  },
  {
    basePrice: 2840,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
      ],
      description:
        "Escape into the calm waters of Caribbean with this luminous journey from New Orleans. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Fort Lauderdale, San Juan.",
      distance: "842 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from New Orleans to Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Richard Sutton",
        role: "Sales Consultant",
        languages: ["English", "Portuguese", "Spanish", "Quechua", "French"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/60.jpg",
        contact: {
          contactEmail: "luxurious.mystique.o@velarivoyages.com",
          contactNumber: "+1-586-361-3187",
        },
      },
    ],
    title: "Luxurious Mystique of the Jazz Capital",
    description:
      "Escape into the calm waters of Caribbean with this luminous journey from New Orleans. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Fort Lauderdale, San Juan.",
    rating: 4.2,
    tags: ["fall-cruise", "holiday-cruise"],
  },
];
