import { Cruise } from "@/lib/interfaces/services/cruises";

export const roatanCruises: Cruise[] = [
  {
    basePrice: 2603,
    departureLocation: {
      city: "Roatan",
      country: "Honduras",
      region: "Caribbean",
      coordinates: {
        latitude: 16.3181,
        longitude: -86.5277,
      },
    },
    arrivalLocation: {
      city: "Roatan",
      country: "Honduras",
      region: "Caribbean",
      coordinates: {
        latitude: 16.3181,
        longitude: -86.5277,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Roatan",
          country: "Honduras",
          region: "Caribbean",
          coordinates: {
            latitude: 16.3181,
            longitude: -86.5277,
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
          city: "St. Thomas",
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
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
        {
          city: "Roatan",
          country: "Honduras",
          region: "Caribbean",
          coordinates: {
            latitude: 16.3181,
            longitude: -86.5277,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from Roatan. This retreat through the Caribbean unveils stunning stops including Philipsburg, St. Thomas, Roatán, Nassau, all with first-class service.",
      distance: "815 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Roatan to Philipsburg",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Philipsburg to St. Thomas",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from St. Thomas to Roatán",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Roatán to Nassau",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Nassau to Roatan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Roatan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Roatan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Elizabeth Harper",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Spanish", "Aymara", "Quechua"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/55.jpg",
        contact: {
          contactEmail: "exquisite.quest.of.t@velarivoyages.com",
          contactNumber: "+1-364-834-2716",
        },
      },
    ],
    title: "Exquisite Quest of the Pirate Passages",
    description:
      "Step into a world of elegance and exploration from Roatan. This retreat through the Caribbean unveils stunning stops including Philipsburg, St. Thomas, Roatán, Nassau, all with first-class service.",
    rating: 4.6,
    tags: ["anniversary-cruise", "seasonal", "cruise"],
  },
  {
    basePrice: 3031,
    departureLocation: {
      city: "Roatan",
      country: "Honduras",
      region: "Caribbean",
      coordinates: {
        latitude: 16.3181,
        longitude: -86.5277,
      },
    },
    arrivalLocation: {
      city: "Roatan",
      country: "Honduras",
      region: "Caribbean",
      coordinates: {
        latitude: 16.3181,
        longitude: -86.5277,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Roatan",
          country: "Honduras",
          region: "Caribbean",
          coordinates: {
            latitude: 16.3181,
            longitude: -86.5277,
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
          city: "Roatán",
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
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
        {
          city: "Roatan",
          country: "Honduras",
          region: "Caribbean",
          coordinates: {
            latitude: 16.3181,
            longitude: -86.5277,
          },
        },
      ],
      description:
        "Explore a new side of Caribbean with this harmonic quest starting in Roatan. Visit charming ports such as St. Thomas, Roatán, George Town, Nassau, each offering its own unique rhythm.",
      distance: "1407 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Roatan to St. Thomas",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from St. Thomas to Roatán",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Roatán to George Town",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from George Town to Nassau",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from Nassau to Roatan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Roatan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Exploring Roatan",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Joan Keller",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Spanish", "Aymara", "Quechua"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/93.jpg",
        contact: {
          contactEmail: "gilded.zenith.of.the@velarivoyages.com",
          contactNumber: "+1-674-360-2770",
        },
      },
    ],
    title: "Gilded Zenith of the Reggae Shores",
    description:
      "Explore a new side of Caribbean with this harmonic quest starting in Roatan. Visit charming ports such as St. Thomas, Roatán, George Town, Nassau, each offering its own unique rhythm.",
    rating: 4.8,
    tags: ["cruise-journey", "VIP"],
  },
  {
    basePrice: 2180,
    departureLocation: {
      city: "Roatan",
      country: "Honduras",
      region: "Caribbean",
      coordinates: {
        latitude: 16.3181,
        longitude: -86.5277,
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
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Roatan",
          country: "Honduras",
          region: "Caribbean",
          coordinates: {
            latitude: 16.3181,
            longitude: -86.5277,
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
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "From the lively departure port of Roatan, this curated awakening showcases the finest of Caribbean. With visits to San Juan, Tampa, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1180 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Roatan to San Juan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from San Juan to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Roatan",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Virginia Dixon",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Spanish", "Aymara", "Quechua"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/22.jpg",
        contact: {
          contactEmail: "horizonkissed.horizo@velarivoyages.com",
          contactNumber: "+1-817-463-5702",
        },
      },
    ],
    title: "Horizon-Kissed Horizon of the Pirate Passages",
    description:
      "From the lively departure port of Roatan, this curated awakening showcases the finest of Caribbean. With visits to San Juan, Tampa, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.3,
    tags: ["cruise-line", "relaxation"],
  },
  {
    basePrice: 3492,
    departureLocation: {
      city: "Roatan",
      country: "Honduras",
      region: "Caribbean",
      coordinates: {
        latitude: 16.3181,
        longitude: -86.5277,
      },
    },
    arrivalLocation: {
      city: "Roatan",
      country: "Honduras",
      region: "Caribbean",
      coordinates: {
        latitude: 16.3181,
        longitude: -86.5277,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Roatan",
          country: "Honduras",
          region: "Caribbean",
          coordinates: {
            latitude: 16.3181,
            longitude: -86.5277,
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
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "Roatan",
          country: "Honduras",
          region: "Caribbean",
          coordinates: {
            latitude: 16.3181,
            longitude: -86.5277,
          },
        },
      ],
      description:
        "Begin a captivating escape through the Caribbean, departing Roatan. With visits to Nassau, San Juan, Miami, each day brings a new adventure and deeper connection to the region.",
      distance: "1009 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Roatan to Nassau",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Nassau to San Juan",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from San Juan to Miami",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Miami to Roatan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Roatan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Roatan",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Joan Mitchell",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Spanish", "Aymara", "Quechua"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/97.jpg",
        contact: {
          contactEmail: "dreamlike.mythos.of.@velarivoyages.com",
          contactNumber: "+1-552-509-7166",
        },
      },
    ],
    title: "Dreamlike Mythos of the Azure Horizons",
    description:
      "Begin a captivating escape through the Caribbean, departing Roatan. With visits to Nassau, San Juan, Miami, each day brings a new adventure and deeper connection to the region.",
    rating: 4.7,
    tags: ["luxury"],
  },
  {
    basePrice: 8614,
    departureLocation: {
      city: "Roatan",
      country: "Honduras",
      region: "Caribbean",
      coordinates: {
        latitude: 16.3181,
        longitude: -86.5277,
      },
    },
    arrivalLocation: {
      city: "Roatan",
      country: "Honduras",
      region: "Caribbean",
      coordinates: {
        latitude: 16.3181,
        longitude: -86.5277,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Roatan",
          country: "Honduras",
          region: "Caribbean",
          coordinates: {
            latitude: 16.3181,
            longitude: -86.5277,
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
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "Roatan",
          country: "Honduras",
          region: "Caribbean",
          coordinates: {
            latitude: 16.3181,
            longitude: -86.5277,
          },
        },
      ],
      description:
        "This secret tranquility begins in Roatan and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at Tampa, Nassau, Philipsburg.",
      distance: "885 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Roatan to Tampa",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tampa to Nassau",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Nassau to Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Philipsburg to Roatan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Roatan",
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
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Roatan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Maya Fisher",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Spanish", "Aymara", "Quechua"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
        contact: {
          contactEmail: "luminous.haven.of.th@velarivoyages.com",
          contactNumber: "+1-207-266-6228",
        },
      },
    ],
    title: "Luminous Haven of the Palm-Fringed Paradises",
    description:
      "This secret tranquility begins in Roatan and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at Tampa, Nassau, Philipsburg.",
    rating: 4.7,
    tags: ["romantic"],
  },
  {
    basePrice: 9996,
    departureLocation: {
      city: "Roatan",
      country: "Honduras",
      region: "Caribbean",
      coordinates: {
        latitude: 16.3181,
        longitude: -86.5277,
      },
    },
    arrivalLocation: {
      city: "Roatan",
      country: "Honduras",
      region: "Caribbean",
      coordinates: {
        latitude: 16.3181,
        longitude: -86.5277,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Roatan",
          country: "Honduras",
          region: "Caribbean",
          coordinates: {
            latitude: 16.3181,
            longitude: -86.5277,
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
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
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
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Roatan",
          country: "Honduras",
          region: "Caribbean",
          coordinates: {
            latitude: 16.3181,
            longitude: -86.5277,
          },
        },
      ],
      description:
        "Experience coastal elegance on this tide from Roatan, where the journey through Caribbean includes stops in Miami, Cozumel, Roatán, Bermuda, each more enchanting than the last.",
      distance: "790 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Roatan to Miami",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Miami to Cozumel",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Cozumel to Roatán",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Roatán to Bermuda",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Bermuda to Roatan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Roatan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Roatan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Deborah Carpenter",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Spanish", "Aymara", "Quechua"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/43.jpg",
        contact: {
          contactEmail: "secluded.whisper.of.@velarivoyages.com",
          contactNumber: "+1-342-695-4454",
        },
      },
    ],
    title: "Secluded Whisper of the Reggae Shores",
    description:
      "Experience coastal elegance on this tide from Roatan, where the journey through Caribbean includes stops in Miami, Cozumel, Roatán, Bermuda, each more enchanting than the last.",
    rating: 4.9,
    tags: ["holiday-cruise", "nature", "expedition"],
  },
  {
    basePrice: 9333,
    departureLocation: {
      city: "Roatan",
      country: "Honduras",
      region: "Caribbean",
      coordinates: {
        latitude: 16.3181,
        longitude: -86.5277,
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
    hasPopularDestination: false,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Roatan",
          country: "Honduras",
          region: "Caribbean",
          coordinates: {
            latitude: 16.3181,
            longitude: -86.5277,
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
      ],
      description:
        "From the lively departure port of Roatan, this curated exploration showcases the finest of Caribbean. With visits to Roatán, Miami, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "576 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Roatan to Roatán",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Roatán to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Roatan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Angela Carpenter",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Spanish", "Aymara", "Quechua"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
        contact: {
          contactEmail: "sundrenched.oasis.of@velarivoyages.com",
          contactNumber: "+1-726-571-1582",
        },
      },
    ],
    title: "Sun-Drenched Oasis of the Pirate Passages",
    description:
      "From the lively departure port of Roatan, this curated exploration showcases the finest of Caribbean. With visits to Roatán, Miami, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.5,
    tags: ["wildlife", "cruise-holiday", "cruise"],
  },
  {
    basePrice: 4126,
    departureLocation: {
      city: "Roatan",
      country: "Honduras",
      region: "Caribbean",
      coordinates: {
        latitude: 16.3181,
        longitude: -86.5277,
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
    category: "vip-cruise",
    itinerary: {
      route: [
        {
          city: "Roatan",
          country: "Honduras",
          region: "Caribbean",
          coordinates: {
            latitude: 16.3181,
            longitude: -86.5277,
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
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
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
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "An unforgettable sojourn awaits as you cruise from Roatan across Caribbean. Dive into history, flavor, and culture with stops including George Town, Bermuda, St. Thomas, Roatán.",
      distance: "900 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Roatan to George Town",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from George Town to Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Bermuda to St. Thomas",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from St. Thomas to Roatán",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Roatan",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring George Town",
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
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Roatán",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Anna Hudson",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Spanish", "Aymara", "Quechua"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/28.jpg",
        contact: {
          contactEmail: "mythic.reunion.of.th@velarivoyages.com",
          contactNumber: "+1-417-533-2366",
        },
      },
    ],
    title: "Mythic Reunion of the Azure Horizons",
    description:
      "An unforgettable sojourn awaits as you cruise from Roatan across Caribbean. Dive into history, flavor, and culture with stops including George Town, Bermuda, St. Thomas, Roatán.",
    rating: 4.5,
    tags: ["wildlife"],
  },
  {
    basePrice: 5707,
    departureLocation: {
      city: "Roatan",
      country: "Honduras",
      region: "Caribbean",
      coordinates: {
        latitude: 16.3181,
        longitude: -86.5277,
      },
    },
    arrivalLocation: {
      city: "Roatan",
      country: "Honduras",
      region: "Caribbean",
      coordinates: {
        latitude: 16.3181,
        longitude: -86.5277,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition-cruise",
    itinerary: {
      route: [
        {
          city: "Roatan",
          country: "Honduras",
          region: "Caribbean",
          coordinates: {
            latitude: 16.3181,
            longitude: -86.5277,
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
          city: "Roatan",
          country: "Honduras",
          region: "Caribbean",
          coordinates: {
            latitude: 16.3181,
            longitude: -86.5277,
          },
        },
      ],
      description:
        "Discover the wonders of Caribbean aboard this breathtaking cruise departing from Roatan. Journey through crystal waters to explore the treasures of St. Thomas, Cozumel, Tampa, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1379 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Roatan to St. Thomas",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from St. Thomas to Cozumel",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Cozumel to Tampa",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Tampa to Roatan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Roatan",
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
          description: "Exploring Cozumel",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Roatan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Aria Campbell",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Spanish", "Aymara", "Quechua"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/43.jpg",
        contact: {
          contactEmail: "celestial.legacy.of.@velarivoyages.com",
          contactNumber: "+1-828-800-3373",
        },
      },
    ],
    title: "Celestial Legacy of the Turquoise Lagoons",
    description:
      "Discover the wonders of Caribbean aboard this breathtaking cruise departing from Roatan. Journey through crystal waters to explore the treasures of St. Thomas, Cozumel, Tampa, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.2,
    tags: ["anniversary-cruise", "long-distance", "wellness"],
  },
  {
    basePrice: 5594,
    departureLocation: {
      city: "Roatan",
      country: "Honduras",
      region: "Caribbean",
      coordinates: {
        latitude: 16.3181,
        longitude: -86.5277,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Roatan",
          country: "Honduras",
          region: "Caribbean",
          coordinates: {
            latitude: 16.3181,
            longitude: -86.5277,
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
          city: "George Town",
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
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "Start in the vibrant city of Roatan and venture into the iconic Caribbean. Discover authentic local cultures, cuisine, and coastal wonders in San Juan, George Town, St. Thomas, Tampa.",
      distance: "1259 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Roatan to San Juan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from San Juan to George Town",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from George Town to St. Thomas",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from St. Thomas to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Roatan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring San Juan",
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
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Madelyn Wallace",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Spanish", "Aymara", "Quechua"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/40.jpg",
        contact: {
          contactEmail: "starlit.journey.of.t@velarivoyages.com",
          contactNumber: "+1-398-927-1111",
        },
      },
    ],
    title: "Starlit Journey of the Sugarcane Skies",
    description:
      "Start in the vibrant city of Roatan and venture into the iconic Caribbean. Discover authentic local cultures, cuisine, and coastal wonders in San Juan, George Town, St. Thomas, Tampa.",
    rating: 4.7,
    tags: ["themed-cruise"],
  },
];
