import { Cruise } from "@/lib/interfaces/services/cruises";

export const berlinCruises: Cruise[] = [
  {
    basePrice: 3962,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
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
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "Southampton",
          country: "United Kingdom",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
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
        "An escape like no other begins in Berlin, where your currents launches into the heart of Northern Europe. Discover the magic of Kiel, Southampton, Copenhagen with style and sophistication.",
      distance: "648 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Berlin to Kiel",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Kiel to Southampton",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Southampton to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Aiden Hall",
        role: "Customer Service Representative",
        languages: ["English", "German", "Finnish", "Italian", "Russian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/30.jpg",
        contact: {
          contactEmail: "charming.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-859-713-3238",
        },
      },
    ],
    title: "Charming Mirage of the Wall of Stories",
    description:
      "An escape like no other begins in Berlin, where your currents launches into the heart of Northern Europe. Discover the magic of Kiel, Southampton, Copenhagen with style and sophistication.",
    rating: 4.3,
    tags: ["cruise"],
  },
  {
    basePrice: 9213,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "An unforgettable drift awaits as you cruise from Berlin across Northern Europe. Dive into history, flavor, and culture with stops including St. Petersburg, London.",
      distance: "983 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Berlin to St. Petersburg",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from St. Petersburg to London",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from London to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Liam Fox",
        role: "Customer Service Representative",
        languages: ["English", "German", "Finnish", "Italian", "Russian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/86.jpg",
        contact: {
          contactEmail: "charming.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-331-488-9240",
        },
      },
    ],
    title: "Charming Eclipse of the Wall of Stories",
    description:
      "An unforgettable drift awaits as you cruise from Berlin across Northern Europe. Dive into history, flavor, and culture with stops including St. Petersburg, London.",
    rating: 4.9,
    tags: ["wellness"],
  },
  {
    basePrice: 6208,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "Southampton",
          country: "United Kingdom",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
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
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "Discover the wonders of Northern Europe aboard this luminous cruise departing from Berlin. Journey through crystal waters to explore the treasures of St. Petersburg, Southampton, Stockholm, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "897 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Berlin to St. Petersburg",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Southampton",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Southampton to Stockholm",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Stockholm to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kevin Warren",
        role: "Customer Service Representative",
        languages: ["English", "German", "Finnish", "Italian", "Russian"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/58.jpg",
        contact: {
          contactEmail: "celestial.exploratio@velarivoyages.com",
          contactNumber: "+1-921-154-7952",
        },
      },
    ],
    title: "Celestial Exploration of the City of Echoes",
    description:
      "Discover the wonders of Northern Europe aboard this luminous cruise departing from Berlin. Journey through crystal waters to explore the treasures of St. Petersburg, Southampton, Stockholm, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 5.0,
    tags: ["cruise-vacation"],
  },
  {
    basePrice: 8314,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "Launch into adventure from Berlin and sail deep into the heart of the Northern Europe. With ports of call like Stockholm, Dublin, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1084 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Berlin to Stockholm",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Stockholm to Dublin",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Dublin to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Blake Graves",
        role: "Customer Service Representative",
        languages: ["English", "German", "Finnish", "Italian", "Russian"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
        contact: {
          contactEmail: "pristine.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-994-299-7161",
        },
      },
    ],
    title: "Pristine Odyssey of the Modern Mosaic",
    description:
      "Launch into adventure from Berlin and sail deep into the heart of the Northern Europe. With ports of call like Stockholm, Dublin, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.3,
    tags: ["short-getaway", "exclusive"],
  },
  {
    basePrice: 9133,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
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
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "Helsinki",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "Explore a new side of Northern Europe with this azure exploration starting in Berlin. Visit charming ports such as Kiel, Amsterdam, Helsinki, Dublin, each offering its own unique rhythm.",
      distance: "1334 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Berlin to Kiel",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Kiel to Amsterdam",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Amsterdam to Helsinki",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Helsinki to Dublin",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Dublin to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Willie Ellis",
        role: "Customer Service Representative",
        languages: ["English", "German", "Finnish", "Italian", "Russian"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/63.jpg",
        contact: {
          contactEmail: "harmonic.adventure.o@velarivoyages.com",
          contactNumber: "+1-515-324-9486",
        },
      },
    ],
    title: "Harmonic Adventure of the Time-Threaded Metropolis",
    description:
      "Explore a new side of Northern Europe with this azure exploration starting in Berlin. Visit charming ports such as Kiel, Amsterdam, Helsinki, Dublin, each offering its own unique rhythm.",
    rating: 5.0,
    tags: ["weekend-cruise", "cruise-getaway"],
  },
  {
    basePrice: 8143,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "Kiel",
          country: "Germany",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "Escape to sea from Berlin on a luxurious voyage exploring the magic of Northern Europe. Visit unforgettable locales like Southampton, Kiel, where each stop inspires awe.",
      distance: "1212 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Berlin to Southampton",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Southampton to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Adam Carpenter",
        role: "Customer Service Representative",
        languages: ["English", "German", "Finnish", "Italian", "Russian"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/84.jpg",
        contact: {
          contactEmail: "legendary.realm.of.t@velarivoyages.com",
          contactNumber: "+1-323-437-1966",
        },
      },
    ],
    title: "Legendary Realm of the Cultural Capital",
    description:
      "Escape to sea from Berlin on a luxurious voyage exploring the magic of Northern Europe. Visit unforgettable locales like Southampton, Kiel, where each stop inspires awe.",
    rating: 4.9,
    tags: ["expedition"],
  },
  {
    basePrice: 4537,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "Stockholm",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
      ],
      description:
        "Sail away from Berlin into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Kiel, Stockholm, Dublin, Copenhagen, where history, nature, and cuisine collide.",
      distance: "770 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Berlin to Kiel",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Kiel to Stockholm",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Stockholm to Dublin",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Dublin to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Mateo Crawford",
        role: "Customer Service Representative",
        languages: ["English", "German", "Finnish", "Italian", "Russian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
        contact: {
          contactEmail: "gilded.sanctuary.of.@velarivoyages.com",
          contactNumber: "+1-559-783-4421",
        },
      },
    ],
    title: "Gilded Sanctuary of the Modern Mosaic",
    description:
      "Sail away from Berlin into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Kiel, Stockholm, Dublin, Copenhagen, where history, nature, and cuisine collide.",
    rating: 4.3,
    tags: ["VIP", "relaxation", "adventure"],
  },
  {
    basePrice: 6560,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "Amsterdam",
          country: "Netherlands",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
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
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "Board in Berlin for a hand-crafted resonance through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Southampton, Amsterdam, London, St. Petersburg.",
      distance: "974 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Berlin to Southampton",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Southampton to Amsterdam",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Amsterdam to London",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from London to St. Petersburg",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Tyler Baker",
        role: "Customer Service Representative",
        languages: ["English", "German", "Finnish", "Italian", "Russian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
        contact: {
          contactEmail: "hidden.reverie.of.th@velarivoyages.com",
          contactNumber: "+1-561-750-7851",
        },
      },
    ],
    title: "Hidden Reverie of the Baltic Echoes",
    description:
      "Board in Berlin for a hand-crafted resonance through the breathtaking Northern Europe. Highlights include sun-drenched beaches, historic ports, and immersive culture in Southampton, Amsterdam, London, St. Petersburg.",
    rating: 4.5,
    tags: ["fall-cruise", "cruise-excursion"],
  },
  {
    basePrice: 5339,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
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
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "Dublin",
          country: "Ireland",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
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
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "Let the winds of the Northern Europe carry you from Berlin to the most stunning ports in the region. With destinations like London, Dublin, Kiel, this elevation redefines luxury travel.",
      distance: "1116 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Berlin to London",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from London to Dublin",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Dublin to Kiel",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Kiel to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Tyler Gibson",
        role: "Customer Service Representative",
        languages: ["English", "German", "Finnish", "Italian", "Russian"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/86.jpg",
        contact: {
          contactEmail: "aweinspiring.expedit@velarivoyages.com",
          contactNumber: "+1-580-632-5476",
        },
      },
    ],
    title: "Awe-Inspiring Expedition of the Runestone Realms",
    description:
      "Let the winds of the Northern Europe carry you from Berlin to the most stunning ports in the region. With destinations like London, Dublin, Kiel, this elevation redefines luxury travel.",
    rating: 4.0,
    tags: ["tropical", "long-distance", "holiday-cruise"],
  },
  {
    basePrice: 5704,
    departureLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    arrivalLocation: {
      city: "Berlin",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
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
          city: "Dublin",
          country: "Ireland",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
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
          city: "Berlin",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this dreamlike passage departing Berlin. Savor local cuisine and uncover regional beauty from Southampton to Dublin.",
      distance: "1060 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Berlin to Southampton",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Southampton to Dublin",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Dublin to Kiel",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Kiel to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Javier Dunn",
        role: "Customer Service Representative",
        languages: ["English", "German", "Finnish", "Italian", "Russian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/89.jpg",
        contact: {
          contactEmail: "infinite.sanctuary.o@velarivoyages.com",
          contactNumber: "+1-146-667-5777",
        },
      },
    ],
    title: "Infinite Sanctuary of the Cultural Capital",
    description:
      "Cruise into cultural richness aboard this dreamlike passage departing Berlin. Savor local cuisine and uncover regional beauty from Southampton to Dublin.",
    rating: 4.8,
    tags: ["sightseeing"],
  },
];
