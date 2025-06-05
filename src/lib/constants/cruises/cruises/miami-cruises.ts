import { Cruise } from "@/lib/interfaces/services/cruises";

export const miamiCruises: Cruise[] = [
  {
    basePrice: 3391,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
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
    category: "repositioning-cruise",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
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
        "Embark from Miami and traverse the Caribbean in style. Whether it’s the energy of Fort Lauderdale or the calm of Philipsburg, each destination reveals a new side of paradise.",
      distance: "653 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Miami to Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Philipsburg",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Philipsburg to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Amanda Graham",
        role: "Reservations Agent",
        languages: ["English", "Spanish", "Portuguese", "French", "Quechua"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
        contact: {
          contactEmail: "sundrenched.awakenin@velarivoyages.com",
          contactNumber: "+1-453-927-1134",
        },
      },
    ],
    title: "Sun-Drenched Awakening of the Tropical Isles",
    description:
      "Embark from Miami and traverse the Caribbean in style. Whether it’s the energy of Fort Lauderdale or the calm of Philipsburg, each destination reveals a new side of paradise.",
    rating: 4.2,
    tags: ["cruise-journey", "relaxation"],
  },
  {
    basePrice: 8885,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
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
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Explore a new side of Caribbean with this luminous enigma starting in Miami. Visit charming ports such as Bermuda, Nassau, Tampa, each offering its own unique rhythm.",
      distance: "1217 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Miami to Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Bermuda to Nassau",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Nassau to Tampa",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Tampa to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Lerato Reeves",
        role: "Reservations Agent",
        languages: ["English", "Spanish", "Portuguese", "French", "Quechua"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "luxurious.requiem.of@velarivoyages.com",
          contactNumber: "+1-932-714-6697",
        },
      },
    ],
    title: "Luxurious Requiem of the Tropical Firelight",
    description:
      "Explore a new side of Caribbean with this luminous enigma starting in Miami. Visit charming ports such as Bermuda, Nassau, Tampa, each offering its own unique rhythm.",
    rating: 4.9,
    tags: ["repositioning"],
  },
  {
    basePrice: 4609,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
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
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Board in Miami for a hand-crafted mythos through the breathtaking Caribbean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Bermuda, Cozumel, Tampa, Philipsburg.",
      distance: "1491 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Miami to Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Bermuda to Cozumel",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Cozumel to Tampa",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Tampa to Philipsburg",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Philipsburg to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Samantha Henderson",
        role: "Reservations Agent",
        languages: ["English", "Spanish", "Portuguese", "French", "Quechua"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/84.jpg",
        contact: {
          contactEmail: "breathtaking.lullaby@velarivoyages.com",
          contactNumber: "+1-860-408-9054",
        },
      },
    ],
    title: "Breathtaking Lullaby of the Crystalline Currents",
    description:
      "Board in Miami for a hand-crafted mythos through the breathtaking Caribbean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Bermuda, Cozumel, Tampa, Philipsburg.",
    rating: 4.3,
    tags: ["short-getaway"],
  },
  {
    basePrice: 3719,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Philipsburg",
      country: "Sint Maarten",
      coordinates: {
        latitude: 18.0167,
        longitude: -63.0587,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
      ],
      description:
        "Begin your journey in Miami, where tradition meets travel. This immersive odyssey reveals the finest of Caribbean, from the beaches of San Juan to the streets of Philipsburg.",
      distance: "1140 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Miami to San Juan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from San Juan to Philipsburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Fox",
        role: "Reservations Agent",
        languages: ["English", "Spanish", "Portuguese", "French", "Quechua"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/16.jpg",
        contact: {
          contactEmail: "exquisite.zenith.of.@velarivoyages.com",
          contactNumber: "+1-937-997-5125",
        },
      },
    ],
    title: "Exquisite Zenith of the Magic City",
    description:
      "Begin your journey in Miami, where tradition meets travel. This immersive odyssey reveals the finest of Caribbean, from the beaches of San Juan to the streets of Philipsburg.",
    rating: 4.8,
    tags: ["cruise-line", "glacier-cruise", "romantic"],
  },
  {
    basePrice: 6536,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
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
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
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
        "Escape the everyday with this opulent journey through Caribbean, departing from Miami. You'll visit Tampa, Nassau, San Juan, where every stop is a new adventure.",
      distance: "527 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Miami to Tampa",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tampa to Nassau",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Nassau to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
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
          description: "Exploring Nassau",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Virginia Keller",
        role: "Reservations Agent",
        languages: ["English", "Spanish", "Portuguese", "French", "Quechua"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
        contact: {
          contactEmail: "serene.passage.of.th@velarivoyages.com",
          contactNumber: "+1-577-943-2131",
        },
      },
    ],
    title: "Serene Passage of the Palm-Fringed Paradises",
    description:
      "Escape the everyday with this opulent journey through Caribbean, departing from Miami. You'll visit Tampa, Nassau, San Juan, where every stop is a new adventure.",
    rating: 4.3,
    tags: ["cruise-excursion", "cruise-holiday"],
  },
  {
    basePrice: 5518,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
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
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "This hand-selected eternal cruise offers a true taste of Caribbean. Depart from Miami and explore ports like Roatán, Nassau, Tampa, each telling a story through food, music, and tradition.",
      distance: "541 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Miami to Roatán",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Roatán to Nassau",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Nassau to Tampa",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Tampa to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Ellie Baker",
        role: "Reservations Agent",
        languages: ["English", "Spanish", "Portuguese", "French", "Quechua"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/87.jpg",
        contact: {
          contactEmail: "refined.adventure.of@velarivoyages.com",
          contactNumber: "+1-308-124-8428",
        },
      },
    ],
    title: "Refined Adventure of the Palm-Fringed Paradises",
    description:
      "This hand-selected eternal cruise offers a true taste of Caribbean. Depart from Miami and explore ports like Roatán, Nassau, Tampa, each telling a story through food, music, and tradition.",
    rating: 4.4,
    tags: ["short-getaway"],
  },
  {
    basePrice: 2722,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
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
    hasPopularDestination: true,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
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
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
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
        "Experience the elegance of the seas on this celestial labyrinth through Caribbean, starting from the illustrious port of Miami. From Tampa, Cozumel to George Town, each destination offers its own story, culture, and breathtaking views.",
      distance: "548 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Miami to Tampa",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tampa to Cozumel",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Cozumel to George Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
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
          description: "Exploring Cozumel",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Christine Nash",
        role: "Reservations Agent",
        languages: ["English", "Spanish", "Portuguese", "French", "Quechua"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "infinite.tide.of.the@velarivoyages.com",
          contactNumber: "+1-318-242-5447",
        },
      },
    ],
    title: "Infinite Tide of the Coastal Pulse",
    description:
      "Experience the elegance of the seas on this celestial labyrinth through Caribbean, starting from the illustrious port of Miami. From Tampa, Cozumel to George Town, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.4,
    tags: ["wildlife"],
  },
  {
    basePrice: 9046,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Nassau",
      country: "Bahamas",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
      ],
      description:
        "Depart Miami on a relaxing excursion through the Caribbean region. Highlights include the stunning coastlines of Philipsburg, Bermuda, Nassau, all while enjoying first-class amenities on board.",
      distance: "819 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Miami to Philipsburg",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Philipsburg to Bermuda",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Bermuda to Nassau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Kennedy Harper",
        role: "Reservations Agent",
        languages: ["English", "Spanish", "Portuguese", "French", "Quechua"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "radiant.sanctum.of.t@velarivoyages.com",
          contactNumber: "+1-101-398-9056",
        },
      },
    ],
    title: "Radiant Sanctum of the Heatwave Muse",
    description:
      "Depart Miami on a relaxing excursion through the Caribbean region. Highlights include the stunning coastlines of Philipsburg, Bermuda, Nassau, all while enjoying first-class amenities on board.",
    rating: 4.4,
    tags: ["cruise-excursion", "cruise-getaway", "romantic"],
  },
  {
    basePrice: 8592,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
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
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this whispering excursion departing Miami. Savor local cuisine and uncover regional beauty from Cozumel to Fort Lauderdale.",
      distance: "947 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Miami to Cozumel",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Cozumel to Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Roatán",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Roatán to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Cynthia Marshall",
        role: "Reservations Agent",
        languages: ["English", "Spanish", "Portuguese", "French", "Quechua"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
        contact: {
          contactEmail: "pearlescent.pilgrima@velarivoyages.com",
          contactNumber: "+1-406-345-4560",
        },
      },
    ],
    title: "Pearlescent Pilgrimage of the Palm-Fringed Paradises",
    description:
      "Cruise into cultural richness aboard this whispering excursion departing Miami. Savor local cuisine and uncover regional beauty from Cozumel to Fort Lauderdale.",
    rating: 4.3,
    tags: ["cultural"],
  },
  {
    basePrice: 9803,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Bermuda",
      country: "Bermuda",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fjords-tour",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
      ],
      description:
        "Launch into adventure from Miami and sail deep into the heart of the Caribbean. With ports of call like Roatán, St. Thomas, Bermuda, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1024 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Miami to Roatán",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Roatán to St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from St. Thomas to Bermuda",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Bella Hunter",
        role: "Reservations Agent",
        languages: ["English", "Spanish", "Portuguese", "French", "Quechua"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/64.jpg",
        contact: {
          contactEmail: "sundrenched.renaissa@velarivoyages.com",
          contactNumber: "+1-404-262-8640",
        },
      },
    ],
    title: "Sun-Drenched Renaissance of the City of Endless Summer",
    description:
      "Launch into adventure from Miami and sail deep into the heart of the Caribbean. With ports of call like Roatán, St. Thomas, Bermuda, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.8,
    tags: ["cultural"],
  },
];
