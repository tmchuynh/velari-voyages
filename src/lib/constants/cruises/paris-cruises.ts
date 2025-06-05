import { Cruise } from "@/lib/interfaces/services/cruises";

export const parisCruises: Cruise[] = [
  {
    basePrice: 8068,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Helsinki",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "London",
          country: "United Kingdom",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
        {
          city: "St. Petersburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Kiel",
          country: "Germany",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "Set course from Paris for an inspiring radiance-drenched journey across Northern Europe. Whether exploring ancient ruins in Helsinki or soaking up coastal views in London, every day offers a perfect mix of discovery and relaxation.",
      distance: "1007 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Paris to Helsinki",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Helsinki to London",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from London to St. Petersburg",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Carlos Gibson",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Dutch"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
        contact: {
          contactEmail: "golden.journey.of.th@velarivoyages.com",
          contactNumber: "+1-391-485-4160",
        },
      },
    ],
    title: "Golden Journey of the Fairy Tale Villages",
    description:
      "Set course from Paris for an inspiring radiance-drenched journey across Northern Europe. Whether exploring ancient ruins in Helsinki or soaking up coastal views in London, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.5,
    tags: ["expedition", "glacier-cruise", "tropical"],
  },
  {
    basePrice: 1125,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Stockholm",
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
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Amsterdam",
          country: "Netherlands",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
        {
          city: "Oslo",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "St. Petersburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Stockholm",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this exquisite sanctuary through Northern Europe, starting from the illustrious port of Paris. From Amsterdam, Oslo, St. Petersburg to Stockholm, each destination offers its own story, culture, and breathtaking views.",
      distance: "1206 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Paris to Amsterdam",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Amsterdam to Oslo",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Oslo to St. Petersburg",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Stockholm",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Stockholm",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Johnny Hunter",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Dutch"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/39.jpg",
        contact: {
          contactEmail: "lavish.labyrinth.of.@velarivoyages.com",
          contactNumber: "+1-335-372-7730",
        },
      },
    ],
    title: "Lavish Labyrinth of the Rosé-Washed Dreams",
    description:
      "Experience the elegance of the seas on this exquisite sanctuary through Northern Europe, starting from the illustrious port of Paris. From Amsterdam, Oslo, St. Petersburg to Stockholm, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.4,
    tags: ["short-getaway"],
  },
  {
    basePrice: 6769,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Copenhagen",
      country: "Denmark",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Helsinki",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Kiel",
          country: "Germany",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
        {
          city: "Amsterdam",
          country: "Netherlands",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
        {
          city: "Copenhagen",
          country: "Denmark",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Paris on this infinite journey across Northern Europe. Uncover the beauty and history of Helsinki, Kiel, Amsterdam, Copenhagen with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1480 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Paris to Helsinki",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Helsinki to Kiel",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Kiel to Amsterdam",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Amsterdam to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "James Hayes",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Dutch"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "luxurious.eclipse.of@velarivoyages.com",
          contactNumber: "+1-470-885-8753",
        },
      },
    ],
    title: "Luxurious Eclipse of the Velvet Shadows",
    description:
      "Sail away from the charming harbor of Paris on this infinite journey across Northern Europe. Uncover the beauty and history of Helsinki, Kiel, Amsterdam, Copenhagen with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.8,
    tags: ["exclusive", "short-getaway"],
  },
  {
    basePrice: 4681,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Oslo",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Stockholm",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "London",
          country: "United Kingdom",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
        {
          city: "Amsterdam",
          country: "Netherlands",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
      ],
      description:
        "Set off on a sojourn from Paris that captures the essence of Northern Europe. Discover cultural gems and culinary delights across Oslo, Stockholm, London, Amsterdam.",
      distance: "738 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Paris to Oslo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Oslo to Stockholm",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Stockholm to London",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from London to Amsterdam",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Albert Hayes",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Dutch"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/93.jpg",
        contact: {
          contactEmail: "secluded.tranquility@velarivoyages.com",
          contactNumber: "+1-404-948-1744",
        },
      },
    ],
    title: "Secluded Tranquility of the Rosé-Washed Dreams",
    description:
      "Set off on a sojourn from Paris that captures the essence of Northern Europe. Discover cultural gems and culinary delights across Oslo, Stockholm, London, Amsterdam.",
    rating: 4.5,
    tags: ["long-distance", "romantic"],
  },
  {
    basePrice: 3698,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Tallinn",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Southampton",
          country: "United Kingdom",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
          },
        },
        {
          city: "London",
          country: "United Kingdom",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
        {
          city: "Berlin",
          country: "Germany",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "This adventure takes you beyond the ordinary, starting in Paris. With breathtaking stops in Tallinn, Southampton, London, Berlin, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "782 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Paris to Tallinn",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Tallinn to Southampton",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Southampton to London",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from London to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Timothy Foster",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Dutch"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/76.jpg",
        contact: {
          contactEmail: "radiancedrenched.oas@velarivoyages.com",
          contactNumber: "+1-230-973-2625",
        },
      },
    ],
    title: "Radiance-Drenched Oasis of the Velvet Shadows",
    description:
      "This adventure takes you beyond the ordinary, starting in Paris. With breathtaking stops in Tallinn, Southampton, London, Berlin, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.6,
    tags: ["historical", "expedition"],
  },
  {
    basePrice: 8722,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Copenhagen",
      country: "Denmark",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Tallinn",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "St. Petersburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Kiel",
          country: "Germany",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
        {
          city: "Copenhagen",
          country: "Denmark",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from Paris. This requiem through the Northern Europe unveils stunning stops including Tallinn, St. Petersburg, Kiel, Copenhagen, all with first-class service.",
      distance: "1121 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Paris to Tallinn",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Tallinn to St. Petersburg",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Kiel",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Kiel to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Blake Dixon",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Dutch"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
        contact: {
          contactEmail: "eternal.excursion.of@velarivoyages.com",
          contactNumber: "+1-567-822-2162",
        },
      },
    ],
    title: "Eternal Excursion of the Windswept Elegance",
    description:
      "Step into a world of elegance and exploration from Paris. This requiem through the Northern Europe unveils stunning stops including Tallinn, St. Petersburg, Kiel, Copenhagen, all with first-class service.",
    rating: 4.8,
    tags: ["glacier-cruise"],
  },
  {
    basePrice: 5854,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Oslo",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Stockholm",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Amsterdam",
          country: "Netherlands",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this celestial haven beginning in Paris. Visit breathtaking Northern Europe locales such as Oslo, Stockholm, Amsterdam on this unforgettable itinerary.",
      distance: "876 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Paris to Oslo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Oslo to Stockholm",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Stockholm to Amsterdam",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Amsterdam to Paris",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Paris",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Wei Collins",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Dutch"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/14.jpg",
        contact: {
          contactEmail: "starlit.adventure.of@velarivoyages.com",
          contactNumber: "+1-849-994-7504",
        },
      },
    ],
    title: "Starlit Adventure of the City of Light",
    description:
      "Enjoy seamless luxury on this celestial haven beginning in Paris. Visit breathtaking Northern Europe locales such as Oslo, Stockholm, Amsterdam on this unforgettable itinerary.",
    rating: 4.3,
    tags: ["wellness", "glacier-cruise"],
  },
  {
    basePrice: 2000,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "London",
      country: "United Kingdom",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Dublin",
          country: "Ireland",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
          },
        },
        {
          city: "Berlin",
          country: "Germany",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
        {
          city: "Copenhagen",
          country: "Denmark",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
        {
          city: "London",
          country: "United Kingdom",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      ],
      description:
        "Escape to sea from Paris on a legendary voyage exploring the magic of Northern Europe. Visit unforgettable locales like Dublin, Berlin, Copenhagen, London, where each stop inspires awe.",
      distance: "708 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Paris to Dublin",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Dublin to Berlin",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Berlin to Copenhagen",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Copenhagen to London",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Scott Curtis",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Dutch"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/79.jpg",
        contact: {
          contactEmail: "pristine.serenade.of@velarivoyages.com",
          contactNumber: "+1-421-816-4446",
        },
      },
    ],
    title: "Pristine Serenade of the City of Light",
    description:
      "Escape to sea from Paris on a legendary voyage exploring the magic of Northern Europe. Visit unforgettable locales like Dublin, Berlin, Copenhagen, London, where each stop inspires awe.",
    rating: 5.0,
    tags: ["family-friendly", "nature"],
  },
  {
    basePrice: 1993,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Copenhagen",
          country: "Denmark",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
        {
          city: "Amsterdam",
          country: "Netherlands",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
        {
          city: "Berlin",
          country: "Germany",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "Let the winds of the Northern Europe carry you from Paris to the most stunning ports in the region. With destinations like Copenhagen, Amsterdam, Berlin, this journey redefines luxury travel.",
      distance: "513 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Paris to Copenhagen",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Copenhagen to Amsterdam",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Amsterdam to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Joel Hall",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Dutch"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
        contact: {
          contactEmail: "floating.haven.of.th@velarivoyages.com",
          contactNumber: "+1-994-881-3491",
        },
      },
    ],
    title: "Floating Haven of the Snow-Kissed Harbors",
    description:
      "Let the winds of the Northern Europe carry you from Paris to the most stunning ports in the region. With destinations like Copenhagen, Amsterdam, Berlin, this journey redefines luxury travel.",
    rating: 4.4,
    tags: ["anniversary-cruise"],
  },
  {
    basePrice: 2711,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      coordinates: {
        latitude: 52.377956,
        longitude: 4.89707,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
        {
          city: "Dublin",
          country: "Ireland",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
          },
        },
        {
          city: "Copenhagen",
          country: "Denmark",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
        {
          city: "Amsterdam",
          country: "Netherlands",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
      ],
      description:
        "This hand-selected starlit cruise offers a true taste of Northern Europe. Depart from Paris and explore ports like Dublin, Copenhagen, Amsterdam, each telling a story through food, music, and tradition.",
      distance: "1321 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Paris to Dublin",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Dublin to Copenhagen",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Copenhagen to Amsterdam",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Larry Reed",
        role: "Sales Consultant",
        languages: ["English", "Danish", "Dutch"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/70.jpg",
        contact: {
          contactEmail: "enchanting.wanderlus@velarivoyages.com",
          contactNumber: "+1-571-581-9161",
        },
      },
    ],
    title: "Enchanting Wanderlust of the Cathedral Echoes",
    description:
      "This hand-selected starlit cruise offers a true taste of Northern Europe. Depart from Paris and explore ports like Dublin, Copenhagen, Amsterdam, each telling a story through food, music, and tradition.",
    rating: 5.0,
    tags: ["cruise", "anniversary-cruise"],
  },
];
