import { Cruise } from "@/lib/interfaces/services/cruises";

export const bostonCruises: Cruise[] = [
  {
    basePrice: 9460,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    arrivalLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
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
          city: "Rome",
          country: "Italy",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
          },
        },
      ],
      description:
        "Set sail from Boston on this midnight zenith through the heart of East Coast USA. Experience the perfect blend of relaxation and adventure as you explore Mykonos and Florence and Malta and Rome, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1488 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Boston to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Mykonos to Florence",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Florence to Malta",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Malta to Rome",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Rome to Boston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Boston",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Matthew Wallace",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
        contact: {
          contactEmail: "ornate.lullaby.of.th@velarivoyages.com",
          contactNumber: "+1-463-735-1455",
        },
      },
    ],
    title: "Ornate Lullaby of the Patriot Ports",
    description:
      "Set sail from Boston on this midnight zenith through the heart of East Coast USA. Experience the perfect blend of relaxation and adventure as you explore Mykonos and Florence and Malta and Rome, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.9,
    tags: ["holiday-cruise"],
  },
  {
    basePrice: 1901,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
          },
        },
        {
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
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
          city: "Mykonos",
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
        "Step into a world of elegance and exploration from Boston. This infinite through the East Coast USA unveils stunning stops including Lisbon, Santorini, Mykonos, Dubrovnik, all with first-class service.",
      distance: "1057 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Boston to Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Lisbon to Santorini",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Santorini to Mykonos",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Mykonos to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Thabo Reed",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/80.jpg",
        contact: {
          contactEmail: "radiancedrenched.reu@velarivoyages.com",
          contactNumber: "+1-612-702-4184",
        },
      },
    ],
    title: "Radiance-Drenched Reunion of the Harbor of History",
    description:
      "Step into a world of elegance and exploration from Boston. This infinite through the East Coast USA unveils stunning stops including Lisbon, Santorini, Mykonos, Dubrovnik, all with first-class service.",
    rating: 4.0,
    tags: ["adventure"],
  },
  {
    basePrice: 9851,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
      ],
      description:
        "Begin your journey in Boston, where tradition meets travel. This immersive tranquility reveals the finest of East Coast USA, from the beaches of Athens to the streets of Florence.",
      distance: "1243 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Boston to Athens",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Athens to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Mark Knight",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/94.jpg",
        contact: {
          contactEmail: "ornate.tranquility.o@velarivoyages.com",
          contactNumber: "+1-252-758-3634",
        },
      },
    ],
    title: "Ornate Tranquility of the Lighthouse Trails",
    description:
      "Begin your journey in Boston, where tradition meets travel. This immersive tranquility reveals the finest of East Coast USA, from the beaches of Athens to the streets of Florence.",
    rating: 4.0,
    tags: ["historical", "expedition"],
  },
  {
    basePrice: 2763,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    arrivalLocation: {
      city: "Athens",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
          city: "Athens",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this moonlit mystique beginning in Boston. Visit breathtaking East Coast USA locales such as Rome, Athens on this unforgettable itinerary.",
      distance: "1371 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Boston to Rome",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Rome to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Marcus Baker",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/89.jpg",
        contact: {
          contactEmail: "harmonic.reflection.@velarivoyages.com",
          contactNumber: "+1-110-525-7745",
        },
      },
    ],
    title: "Harmonic Reflection of the Founding Footsteps",
    description:
      "Enjoy seamless luxury on this moonlit mystique beginning in Boston. Visit breathtaking East Coast USA locales such as Rome, Athens on this unforgettable itinerary.",
    rating: 4.0,
    tags: ["cruise-vacation", "anniversary-cruise", "weekend-cruise"],
  },
  {
    basePrice: 7372,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
        "Set sail from historic Boston for a modern escape into the East Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Mykonos, Athens, Venice.",
      distance: "1097 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Boston to Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Mykonos to Athens",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Athens to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Thabo Foster",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "radiancedrenched.que@velarivoyages.com",
          contactNumber: "+1-176-867-7969",
        },
      },
    ],
    title: "Radiance-Drenched Quest of the Seaboard Heritage",
    description:
      "Set sail from historic Boston for a modern escape into the East Coast USA. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in Mykonos, Athens, Venice.",
    rating: 4.5,
    tags: ["VIP", "wellness"],
  },
  {
    basePrice: 3054,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    arrivalLocation: {
      city: "Malta",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
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
      ],
      description:
        "Escape to sea from Boston on a idyllic voyage exploring the magic of East Coast USA. Visit unforgettable locales like Santorini, Lisbon, Malta, where each stop inspires awe.",
      distance: "580 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Boston to Santorini",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Santorini to Lisbon",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Lisbon to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Ethan Cooper",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
        contact: {
          contactEmail: "panoramic.odyssey.of@velarivoyages.com",
          contactNumber: "+1-771-391-4444",
        },
      },
    ],
    title: "Panoramic Odyssey of the Harbor of History",
    description:
      "Escape to sea from Boston on a idyllic voyage exploring the magic of East Coast USA. Visit unforgettable locales like Santorini, Lisbon, Malta, where each stop inspires awe.",
    rating: 4.3,
    tags: ["cruise-ship", "anniversary-cruise"],
  },
  {
    basePrice: 4139,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    arrivalLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
          city: "Mykonos",
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
          city: "Milan",
          country: "Italy",
          coordinates: {
            latitude: 45.4642,
            longitude: 9.19,
          },
        },
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
          },
        },
      ],
      description:
        "Let the winds of the East Coast USA carry you from Boston to the most stunning ports in the region. With destinations like Malta, Mykonos, Rome, Milan, this oasis redefines luxury travel.",
      distance: "977 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Boston to Malta",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Malta to Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Mykonos to Rome",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Rome to Milan",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Milan to Boston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Rome",
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
          description: "Exploring Boston",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "William Bennett",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
        contact: {
          contactEmail: "heavenly.pulse.of.th@velarivoyages.com",
          contactNumber: "+1-235-950-3139",
        },
      },
    ],
    title: "Heavenly Pulse of the Autumnal Voyages",
    description:
      "Let the winds of the East Coast USA carry you from Boston to the most stunning ports in the region. With destinations like Malta, Mykonos, Rome, Milan, this oasis redefines luxury travel.",
    rating: 4.2,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 8319,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    arrivalLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
          city: "Malta",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this majestic sojourn beginning in Boston. Visit breathtaking East Coast USA locales such as Athens, Malta on this unforgettable itinerary.",
      distance: "1273 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Boston to Athens",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Athens to Malta",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Malta to Boston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Boston",
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
          description: "Exploring Malta",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Boston",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Marcus Sutton",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/39.jpg",
        contact: {
          contactEmail: "forbidden.labyrinth.@velarivoyages.com",
          contactNumber: "+1-812-337-2362",
        },
      },
    ],
    title: "Forbidden Labyrinth of the Cobbled Seaside Towns",
    description:
      "Enjoy seamless luxury on this majestic sojourn beginning in Boston. Visit breathtaking East Coast USA locales such as Athens, Malta on this unforgettable itinerary.",
    rating: 4.3,
    tags: ["cruise-journey", "cruise-vacation"],
  },
  {
    basePrice: 9885,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
          city: "Santorini",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "An unforgettable realm awaits as you cruise from Boston across East Coast USA. Dive into history, flavor, and culture with stops including Florence, Santorini.",
      distance: "1496 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Boston to Florence",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Florence to Santorini",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Santorini",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Albert Hall",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/96.jpg",
        contact: {
          contactEmail: "luxurious.passage.of@velarivoyages.com",
          contactNumber: "+1-178-288-2705",
        },
      },
    ],
    title: "Luxurious Passage of the Lantern-Lit Legacy",
    description:
      "An unforgettable realm awaits as you cruise from Boston across East Coast USA. Dive into history, flavor, and culture with stops including Florence, Santorini.",
    rating: 4.3,
    tags: ["wildlife", "cruise-getaway", "cruise-adventure"],
  },
  {
    basePrice: 6751,
    departureLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    arrivalLocation: {
      city: "Boston",
      country: "United States",
      region: "East Coast USA",
      coordinates: {
        latitude: 42.361145,
        longitude: -71.057083,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
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
          city: "Dubrovnik",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Boston",
          country: "United States",
          region: "East Coast USA",
          coordinates: {
            latitude: 42.361145,
            longitude: -71.057083,
          },
        },
      ],
      description:
        "Savor each moment of this horizon-kissed escape through East Coast USA, starting in Boston. Visit renowned locations like Athens, Dubrovnik, where adventure and relaxation intertwine.",
      distance: "958 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Boston to Athens",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Athens to Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Boston",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Boston",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Boston",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Mark Baker",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Aymara", "Haitian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/25.jpg",
        contact: {
          contactEmail: "oceanic.saga.of.the.@velarivoyages.com",
          contactNumber: "+1-647-118-9150",
        },
      },
    ],
    title: "Oceanic Saga of the Revolutionary Port",
    description:
      "Savor each moment of this horizon-kissed escape through East Coast USA, starting in Boston. Visit renowned locations like Athens, Dubrovnik, where adventure and relaxation intertwine.",
    rating: 4.4,
    tags: ["cruise-line", "luxury"],
  },
];
