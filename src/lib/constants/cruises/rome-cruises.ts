import { Cruise } from "@/lib/interfaces/services/cruises";

export const romeCruises: Cruise[] = [
  {
    basePrice: 9449,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Let the winds of the Mediterranean carry you from Rome to the most stunning ports in the region. With destinations like Mykonos, Lisbon, this tranquility redefines luxury travel.",
      distance: "1007 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Rome to Mykonos",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Mykonos to Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Lisbon to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Anthony Montgomery",
        role: "Cruise Specialist",
        languages: ["English", "Finnish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/79.jpg",
        contact: {
          contactEmail: "radiancedrenched.pul@velarivoyages.com",
          contactNumber: "+1-693-346-4598",
        },
      },
    ],
    title: "Radiance-Drenched Pulse of the Sunset Over Seven Hills",
    description:
      "Let the winds of the Mediterranean carry you from Rome to the most stunning ports in the region. With destinations like Mykonos, Lisbon, this tranquility redefines luxury travel.",
    rating: 4.2,
    tags: ["general"],
  },
  {
    basePrice: 2950,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
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
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
        {
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Join us in Rome for a reunion of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Dubrovnik, Barcelona, Mykonos, Malta where timeless traditions meet modern luxuries.",
      distance: "535 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Rome to Dubrovnik",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Barcelona to Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Mykonos to Malta",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Malta to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Raymond Murray",
        role: "Cruise Specialist",
        languages: ["English", "Finnish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
        contact: {
          contactEmail: "panoramic.excursion.@velarivoyages.com",
          contactNumber: "+1-615-247-1630",
        },
      },
    ],
    title: "Panoramic Excursion of the Temple of Time",
    description:
      "Join us in Rome for a reunion of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Dubrovnik, Barcelona, Mykonos, Malta where timeless traditions meet modern luxuries.",
    rating: 4.9,
    tags: ["culinary", "cruise-excursion"],
  },
  {
    basePrice: 2437,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
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
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Unwind and explore on this journey through Mediterranean, departing from Rome. With every stop—from Athens to Dubrovnik—you’ll collect memories that last a lifetime.",
      distance: "1262 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Rome to Athens",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Athens to Lisbon",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Lisbon to Malta",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Malta to Dubrovnik",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kenneth Wallace",
        role: "Cruise Specialist",
        languages: ["English", "Finnish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/21.jpg",
        contact: {
          contactEmail: "secluded.reverie.of.@velarivoyages.com",
          contactNumber: "+1-580-889-1778",
        },
      },
    ],
    title: "Secluded Reverie of the Temple of Time",
    description:
      "Unwind and explore on this journey through Mediterranean, departing from Rome. With every stop—from Athens to Dubrovnik—you’ll collect memories that last a lifetime.",
    rating: 4.3,
    tags: ["cruise-ship", "cruise-holiday"],
  },
  {
    basePrice: 4556,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Dubrovnik",
      country: "Croatia",
      coordinates: {
        latitude: 42.6507,
        longitude: 18.0944,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
      ],
      description:
        "Join us in Rome for a eclipse of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Santorini, Dubrovnik where timeless traditions meet modern luxuries.",
      distance: "1485 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Rome to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Santorini to Dubrovnik",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Oliver Curtis",
        role: "Cruise Specialist",
        languages: ["English", "Finnish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
        contact: {
          contactEmail: "radiancedrenched.jou@velarivoyages.com",
          contactNumber: "+1-311-455-1642",
        },
      },
    ],
    title: "Radiance-Drenched Journey of the Marble Cities",
    description:
      "Join us in Rome for a eclipse of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Santorini, Dubrovnik where timeless traditions meet modern luxuries.",
    rating: 5.0,
    tags: ["sightseeing"],
  },
  {
    basePrice: 2800,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Your renaissance begins in Rome, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Barcelona to the historic streets of Lisbon, each stop in the Mediterranean will leave a lasting impression.",
      distance: "983 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Rome to Barcelona",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Barcelona to Lisbon",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Lisbon to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Aiden Watson",
        role: "Cruise Specialist",
        languages: ["English", "Finnish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/55.jpg",
        contact: {
          contactEmail: "mythic.saga.of.the.a@velarivoyages.com",
          contactNumber: "+1-603-197-5900",
        },
      },
    ],
    title: "Mythic Saga of the Ancient Shores",
    description:
      "Your renaissance begins in Rome, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Barcelona to the historic streets of Lisbon, each stop in the Mediterranean will leave a lasting impression.",
    rating: 4.9,
    tags: ["wellness"],
  },
  {
    basePrice: 8993,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
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
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Explore a new side of Mediterranean with this exquisite infinite starting in Rome. Visit charming ports such as Malta, Lisbon, Mykonos, each offering its own unique rhythm.",
      distance: "611 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Rome to Malta",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Malta to Lisbon",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Lisbon to Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Mykonos to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Andrew Dixon",
        role: "Cruise Specialist",
        languages: ["English", "Finnish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "spectacular.awakenin@velarivoyages.com",
          contactNumber: "+1-462-471-8402",
        },
      },
    ],
    title: "Spectacular Awakening of the Crystalline Bays",
    description:
      "Explore a new side of Mediterranean with this exquisite infinite starting in Rome. Visit charming ports such as Malta, Lisbon, Mykonos, each offering its own unique rhythm.",
    rating: 4.9,
    tags: ["luxury"],
  },
  {
    basePrice: 8384,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Athens",
      country: "Greece",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
      ],
      description:
        "Let the winds of the Mediterranean carry you from Rome to the most stunning ports in the region. With destinations like Mykonos, Dubrovnik, Athens, this enigma redefines luxury travel.",
      distance: "817 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Rome to Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Mykonos to Dubrovnik",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Harry Graham",
        role: "Cruise Specialist",
        languages: ["English", "Finnish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "floating.frontier.of@velarivoyages.com",
          contactNumber: "+1-573-139-5644",
        },
      },
    ],
    title: "Floating Frontier of the Temple of Time",
    description:
      "Let the winds of the Mediterranean carry you from Rome to the most stunning ports in the region. With destinations like Mykonos, Dubrovnik, Athens, this enigma redefines luxury travel.",
    rating: 4.0,
    tags: ["family-friendly", "expedition", "VIP"],
  },
  {
    basePrice: 8085,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Join us in Rome for a reunion of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Venice, Malta where timeless traditions meet modern luxuries.",
      distance: "670 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Rome to Venice",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Venice to Malta",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Malta to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "James Dixon",
        role: "Cruise Specialist",
        languages: ["English", "Finnish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/42.jpg",
        contact: {
          contactEmail: "captivating.excursio@velarivoyages.com",
          contactNumber: "+1-855-502-7515",
        },
      },
    ],
    title: "Captivating Excursion of the Temple of Time",
    description:
      "Join us in Rome for a reunion of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Venice, Malta where timeless traditions meet modern luxuries.",
    rating: 4.6,
    tags: ["expedition", "general"],
  },
  {
    basePrice: 1705,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
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
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
        {
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
        "Cruise into cultural richness aboard this alluring tranquility departing Rome. Savor local cuisine and uncover regional beauty from Santorini to Athens.",
      distance: "1082 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Rome to Santorini",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Santorini to Athens",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Athens to Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Mykonos to Milan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Milan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Johnny Dean",
        role: "Cruise Specialist",
        languages: ["English", "Finnish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/44.jpg",
        contact: {
          contactEmail: "immersive.sanctum.of@velarivoyages.com",
          contactNumber: "+1-199-204-2912",
        },
      },
    ],
    title: "Immersive Sanctum of the Sunset Over Seven Hills",
    description:
      "Cruise into cultural richness aboard this alluring tranquility departing Rome. Savor local cuisine and uncover regional beauty from Santorini to Athens.",
    rating: 4.7,
    tags: ["wildlife"],
  },
  {
    basePrice: 5588,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Lisbon",
      country: "Portugal",
      coordinates: {
        latitude: 38.7169,
        longitude: -9.1399,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
      ],
      description:
        "Depart from iconic Rome and traverse the Mediterranean with visits to Florence, Mykonos, Lisbon. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1081 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Rome to Florence",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Florence to Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Mykonos to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Florence",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Nathan Gibson",
        role: "Cruise Specialist",
        languages: ["English", "Finnish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        contact: {
          contactEmail: "moonlit.discovery.of@velarivoyages.com",
          contactNumber: "+1-844-365-9092",
        },
      },
    ],
    title: "Moonlit Discovery of the Temple of Time",
    description:
      "Depart from iconic Rome and traverse the Mediterranean with visits to Florence, Mykonos, Lisbon. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.1,
    tags: ["cruise-vacation", "fall-cruise"],
  },
  {
    basePrice: 9667,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
        {
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Join us in Rome for a enigma of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Malta, Santorini, Dubrovnik where timeless traditions meet modern luxuries.",
      distance: "848 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Rome to Malta",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Malta to Santorini",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Santorini to Dubrovnik",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Thomas Lawson",
        role: "Cruise Specialist",
        languages: ["English", "Finnish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "azure.enigma.of.the.@velarivoyages.com",
          contactNumber: "+1-664-443-7857",
        },
      },
    ],
    title: "Azure Enigma of the Stone-Written History",
    description:
      "Join us in Rome for a enigma of a lifetime. Sail across the serene waters of Mediterranean, stopping at ports like Malta, Santorini, Dubrovnik where timeless traditions meet modern luxuries.",
    rating: 4.7,
    tags: ["holiday-cruise", "adventure"],
  },
  {
    basePrice: 8563,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
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
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
          city: "Venice",
          country: "Italy",
          coordinates: {
            latitude: 45.4408,
            longitude: 12.3155,
          },
        },
      ],
      description:
        "From bustling Rome to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Florence, Mykonos, Milan, Venice deliver a balanced blend of culture and comfort.",
      distance: "1371 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Rome to Florence",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Florence to Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Mykonos to Milan",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Milan to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Florence",
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
          description: "Exploring Milan",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Venice",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Dylan Murray",
        role: "Cruise Specialist",
        languages: ["English", "Finnish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/77.jpg",
        contact: {
          contactEmail: "majestic.lullaby.of.@velarivoyages.com",
          contactNumber: "+1-178-383-8306",
        },
      },
    ],
    title: "Majestic Lullaby of the Sunset Terraces",
    description:
      "From bustling Rome to serene Mediterranean shores, this cruise invites you to relax, explore, and indulge. Stops at Florence, Mykonos, Milan, Venice deliver a balanced blend of culture and comfort.",
    rating: 4.4,
    tags: ["cruise-line", "expedition"],
  },
  {
    basePrice: 3587,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
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
          city: "Lisbon",
          country: "Portugal",
          coordinates: {
            latitude: 38.7169,
            longitude: -9.1399,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Rome on this whispering journey across Mediterranean. Uncover the beauty and history of Santorini, Barcelona, Lisbon with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1281 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Rome to Santorini",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Santorini to Barcelona",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Barcelona to Lisbon",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Lisbon to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Lisbon",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Paul Collins",
        role: "Cruise Specialist",
        languages: ["English", "Finnish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/62.jpg",
        contact: {
          contactEmail: "legendary.odyssey.of@velarivoyages.com",
          contactNumber: "+1-376-293-9447",
        },
      },
    ],
    title: "Legendary Odyssey of the Ancient Empire’s Core",
    description:
      "Sail away from the charming harbor of Rome on this whispering journey across Mediterranean. Uncover the beauty and history of Santorini, Barcelona, Lisbon with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.3,
    tags: ["cruise-ship", "general"],
  },
  {
    basePrice: 5945,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
        {
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Sail into splendor from Rome on a golden voyage through Mediterranean. Let each stop—from Athens to Malta—reveal the unique flavors and colors of the region.",
      distance: "528 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Rome to Athens",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Athens to Malta",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Malta to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Malta",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Christian Graves",
        role: "Cruise Specialist",
        languages: ["English", "Finnish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/36.jpg",
        contact: {
          contactEmail: "idyllic.sanctuary.of@velarivoyages.com",
          contactNumber: "+1-417-108-4204",
        },
      },
    ],
    title: "Idyllic Sanctuary of the Ancient Empire’s Core",
    description:
      "Sail into splendor from Rome on a golden voyage through Mediterranean. Let each stop—from Athens to Malta—reveal the unique flavors and colors of the region.",
    rating: 4.3,
    tags: ["relaxation", "weekend-cruise", "wellness"],
  },
  {
    basePrice: 7077,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Athens",
      country: "Greece",
      coordinates: {
        latitude: 37.9838,
        longitude: 23.7275,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
      ],
      description:
        "Set course from Rome for an inspiring legendary journey across Mediterranean. Whether exploring ancient ruins in Milan or soaking up coastal views in Athens, every day offers a perfect mix of discovery and relaxation.",
      distance: "860 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Rome to Milan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Milan to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Athens",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Harry Clark",
        role: "Cruise Specialist",
        languages: ["English", "Finnish", "Danish", "German"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
        contact: {
          contactEmail: "velvet.panorama.of.t@velarivoyages.com",
          contactNumber: "+1-823-940-5030",
        },
      },
    ],
    title: "Velvet Panorama of the Marble Cities",
    description:
      "Set course from Rome for an inspiring legendary journey across Mediterranean. Whether exploring ancient ruins in Milan or soaking up coastal views in Athens, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.2,
    tags: ["culinary", "sightseeing", "cruise-holiday"],
  },
  {
    basePrice: 9709,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Malta",
      country: "Malta",
      coordinates: {
        latitude: 35.9375,
        longitude: 14.3754,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
        {
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
      ],
      description:
        "Sail away from Rome into the beautiful expanse of Mediterranean. Along the way, enjoy rich cultural experiences in Mykonos, Athens, Malta, where history, nature, and cuisine collide.",
      distance: "1396 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Rome to Mykonos",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Mykonos to Athens",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Athens to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Carol Murray",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Finnish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/16.jpg",
        contact: {
          contactEmail: "midnight.frontier.of@velarivoyages.com",
          contactNumber: "+1-536-139-9453",
        },
      },
    ],
    title: "Midnight Frontier of the Eternal City",
    description:
      "Sail away from Rome into the beautiful expanse of Mediterranean. Along the way, enjoy rich cultural experiences in Mykonos, Athens, Malta, where history, nature, and cuisine collide.",
    rating: 4.2,
    tags: ["cruise-experience", "repositioning", "sightseeing"],
  },
  {
    basePrice: 5703,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Dubrovnik",
          country: "Croatia",
          coordinates: {
            latitude: 42.6507,
            longitude: 18.0944,
          },
        },
        {
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
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
          city: "Florence",
          country: "Italy",
          coordinates: {
            latitude: 43.769562,
            longitude: 11.255814,
          },
        },
      ],
      description:
        "Let this golden voyage redefine your idea of travel. From Rome, explore the Mediterranean in luxurious comfort, stopping at Dubrovnik, Athens, Venice, Florence where every port offers a new chapter.",
      distance: "732 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Rome to Dubrovnik",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Dubrovnik to Athens",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Athens to Venice",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Venice to Florence",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Florence",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Layla Mason",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Finnish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
        contact: {
          contactEmail: "aweinspiring.pilgrim@velarivoyages.com",
          contactNumber: "+1-962-638-6378",
        },
      },
    ],
    title: "Awe-Inspiring Pilgrimage of the Olive-Draped Hills",
    description:
      "Let this golden voyage redefine your idea of travel. From Rome, explore the Mediterranean in luxurious comfort, stopping at Dubrovnik, Athens, Venice, Florence where every port offers a new chapter.",
    rating: 4.4,
    tags: ["cruise-adventure", "cruise-line"],
  },
  {
    basePrice: 4109,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Athens",
          country: "Greece",
          coordinates: {
            latitude: 37.9838,
            longitude: 23.7275,
          },
        },
        {
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
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
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this moonlit mirage beginning in Rome. Visit breathtaking Mediterranean locales such as Milan, Athens, Mykonos, Venice on this unforgettable itinerary.",
      distance: "673 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Rome to Milan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Milan to Athens",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Athens to Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Mykonos to Venice",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Venice to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Athens",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Venice",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Charlotte Stewart",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Finnish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        contact: {
          contactEmail: "whispering.panorama.@velarivoyages.com",
          contactNumber: "+1-706-200-6753",
        },
      },
    ],
    title: "Whispering Panorama of the Classical Crossroads",
    description:
      "Enjoy seamless luxury on this moonlit mirage beginning in Rome. Visit breathtaking Mediterranean locales such as Milan, Athens, Mykonos, Venice on this unforgettable itinerary.",
    rating: 5.0,
    tags: ["short-getaway"],
  },
  {
    basePrice: 3590,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Malta",
      country: "Malta",
      coordinates: {
        latitude: 35.9375,
        longitude: 14.3754,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
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
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
        {
          city: "Malta",
          country: "Malta",
          coordinates: {
            latitude: 35.9375,
            longitude: 14.3754,
          },
        },
      ],
      description:
        "Depart Rome on a relaxing excursion through the Mediterranean region. Highlights include the stunning coastlines of Milan, Mykonos, Malta, all while enjoying first-class amenities on board.",
      distance: "584 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Rome to Milan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Milan to Mykonos",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Mykonos to Malta",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Milan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Malta",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Scarlett Fisher",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Finnish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/67.jpg",
        contact: {
          contactEmail: "tidewashed.voyage.of@velarivoyages.com",
          contactNumber: "+1-731-486-9299",
        },
      },
    ],
    title: "Tide-Washed Voyage of the Ancient Empire’s Core",
    description:
      "Depart Rome on a relaxing excursion through the Mediterranean region. Highlights include the stunning coastlines of Milan, Mykonos, Malta, all while enjoying first-class amenities on board.",
    rating: 4.5,
    tags: ["glacier-cruise", "historical"],
  },
  {
    basePrice: 5365,
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Mediterranean",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
        {
          city: "Santorini",
          country: "Greece",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
          },
        },
        {
          city: "Mykonos",
          country: "Greece",
          coordinates: {
            latitude: 37.4467,
            longitude: 25.3289,
          },
        },
        {
          city: "Rome",
          country: "Italy",
          region: "Mediterranean",
          coordinates: {
            latitude: 41.9028,
            longitude: 12.4964,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from Rome. This symphony through the Mediterranean unveils stunning stops including Santorini, Mykonos, all with first-class service.",
      distance: "1243 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Rome to Santorini",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Santorini to Mykonos",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Mykonos to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Rome",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Santorini",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Rome",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Emily Clark",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Finnish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
        contact: {
          contactEmail: "eternal.lullaby.of.t@velarivoyages.com",
          contactNumber: "+1-208-350-4791",
        },
      },
    ],
    title: "Eternal Lullaby of the Eternal City",
    description:
      "Step into a world of elegance and exploration from Rome. This symphony through the Mediterranean unveils stunning stops including Santorini, Mykonos, all with first-class service.",
    rating: 4.7,
    tags: ["cruise-journey", "family-friendly"],
  },
];
