import {
  generateMockCruiseDestinations,
  generateMockCruiseLines,
  generateMockDeparturePorts,
  getCruiseDestinationDetails,
  getCruiseLineDetails,
  getCruiseLineShips,
  getExpediaCruisesByDeparturePort,
  getExpediaCruisesByDestination,
  getShipDetails,
  type CruiseDestination as ExpediaCruiseDestination,
  type CruiseItinerary as ExpediaCruiseItinerary,
  type CruiseLine as ExpediaCruiseLine,
  type CruisePort as ExpediaCruisePort,
  type CruiseShip as ExpediaCruiseShip,
  type DestinationActivity as ExpediaDestinationActivity,
} from "../api/expedia-cruise-api";

/**
 * Retrieves a list of popular cruise destinations from the Expedia API.
 *
 * This function calls the `getPopularCruiseDestinations` function from the Expedia API integration,
 * which fetches the most popular cruise destinations. The result is then mapped to a simplified
 * format containing only the essential details for each destination.
 *
 * @param limit - Optional limit for the number of destinations to return
 * @param region - Optional region filter (e.g., "Caribbean", "Mediterranean")
 * @returns A promise that resolves to an array of objects, each representing a popular cruise destination
 *          with its ID, name, description, and image URL. Returns an empty array if no destinations
 *          are found or if an error occurs during the fetch.
 */
export async function fetchPopularCruiseDestinationsFromExpedia(
  limit?: number,
  region?: string
) {
  try {
    // For demonstration purposes, we'll use mock data
    // In a real implementation, this would call the actual Expedia API
    const destinations = await generateMockCruiseDestinations();

    let filteredDestinations = destinations;

    if (region) {
      filteredDestinations = destinations.filter(
        (dest) =>
          dest.region.toLowerCase().includes(region.toLowerCase()) ||
          dest.name.toLowerCase().includes(region.toLowerCase())
      );
    }

    if (limit) {
      filteredDestinations = filteredDestinations.slice(0, limit);
    }

    return filteredDestinations.map(
      (destination: ExpediaCruiseDestination) => ({
        id: destination.id,
        name: destination.name,
        description: destination.description,
        imageUrl: destination.image_url,
        country: destination.country,
        region: destination.region,
        popularityScore: destination.popularity_score,
        bestTimeToVisit: destination.best_time_to_visit,
        coordinates: destination.coordinates,
      })
    );
  } catch (error) {
    console.error(
      "Error fetching popular cruise destinations from Expedia:",
      error
    );
    return [];
  }
}

/**
 * Retrieves a list of popular cruise lines from the Expedia API.
 *
 * This function calls the `getPopularCruiseLines` function from the Expedia API integration,
 * which fetches the most popular cruise lines. The result is then mapped to a simplified
 * format containing only the essential details for each cruise line.
 *
 * @param limit - Optional limit for the number of cruise lines to return
 * @param priceRange - Optional price range filter ("budget", "mid-range", "luxury", "ultra-luxury")
 * @returns A promise that resolves to an array of objects, each representing a popular cruise line
 *          with its ID, name, description, logo, and other details. Returns an empty array if no
 *          cruise lines are found or if an error occurs during the fetch.
 */
export async function fetchPopularCruiseLinesFromExpedia(
  limit?: number,
  priceRange?: string
) {
  try {
    // For demonstration purposes, we'll use mock data
    // In a real implementation, this would call the actual Expedia API
    const cruiseLines = await generateMockCruiseLines();

    let filteredLines = cruiseLines;

    if (priceRange) {
      filteredLines = cruiseLines.filter(
        (line) => line.price_range === priceRange
      );
    }

    if (limit) {
      filteredLines = filteredLines.slice(0, limit);
    }

    return filteredLines.map((line: ExpediaCruiseLine) => ({
      id: line.id,
      name: line.name,
      description: line.description,
      logoUrl: line.logo_url,
      logoThumbnail: line.logo_thumbnail,
      websiteUrl: line.website_url,
      foundedYear: line.founded_year,
      headquarters: line.headquarters,
      fleetSize: line.fleet_size,
      passengerCapacityRange: line.passenger_capacity_range,
      specialties: line.specialties,
      popularDestinations: line.popular_destinations,
      priceRange: line.price_range,
      rating: line.rating,
      reviewCount: line.review_count,
    }));
  } catch (error) {
    console.error("Error fetching popular cruise lines from Expedia:", error);
    return [];
  }
}

/**
 * Retrieves a list of popular cruise departure ports from the Expedia API.
 *
 * This function calls the `getPopularDeparturePorts` function from the Expedia API integration,
 * which fetches the most popular departure ports for cruises. The result is then mapped to a
 * simplified format containing only the essential details for each port.
 *
 * @param limit - Optional limit for the number of ports to return
 * @param region - Optional region filter
 * @param country - Optional country filter
 * @returns A promise that resolves to an array of objects, each representing a popular departure port
 *          with its ID, name, city, country, and facilities. Returns an empty array if no ports
 *          are found or if an error occurs during the fetch.
 */
export async function fetchPopularDeparturePortsFromExpedia(
  limit?: number,
  region?: string,
  country?: string
) {
  try {
    // For demonstration purposes, we'll use mock data
    // In a real implementation, this would call the actual Expedia API
    const ports = await generateMockDeparturePorts();

    let filteredPorts = ports;

    if (country) {
      filteredPorts = ports.filter((port) =>
        port.country.toLowerCase().includes(country.toLowerCase())
      );
    }

    if (limit) {
      filteredPorts = filteredPorts.slice(0, limit);
    }

    return filteredPorts.map((port: ExpediaCruisePort) => ({
      id: port.id,
      name: port.name,
      city: port.city,
      country: port.country,
      coordinates: port.coordinates,
      portType: port.port_type,
      facilities: port.facilities,
      popularCruiseLines: port.popular_cruise_lines,
      averageDockingDuration: port.average_docking_duration,
      portImage: port.port_image,
    }));
  } catch (error) {
    console.error(
      "Error fetching popular departure ports from Expedia:",
      error
    );
    return [];
  }
}

/**
 * Retrieves detailed information about activities available in a cruise destination city.
 *
 * This function calls the `getDestinationActivities` function from the Expedia API integration,
 * providing a specific destination ID. It returns activities and attractions available in that
 * destination, including tours, excursions, and local experiences.
 *
 * @param destinationId - The ID of the destination to retrieve activities for
 * @param filters - Optional filters for category, duration, and price range
 * @returns A promise that resolves to an array of activity objects for the specified destination.
 *          Returns an empty array if no activities are found or if an error occurs during the fetch.
 */
export async function fetchDestinationActivitiesFromExpedia(
  destinationId: string,
  filters?: {
    category?: string;
    durationRange?: { min: number; max: number };
    priceRange?: { min: number; max: number };
  }
) {
  try {
    // Mock data for demonstration purposes
    const mockActivities: ExpediaDestinationActivity[] = [
      {
        id: "snorkeling-tour",
        name: "Snorkeling Adventure",
        description:
          "Explore vibrant coral reefs and marine life in crystal-clear waters",
        category: "adventure",
        duration_hours: 4,
        price_range: { min: 65, max: 95, currency: "USD" },
        difficulty_level: "easy",
        age_suitability: { min_age: 8, family_friendly: true },
        booking_required: true,
        image_url: "/images/activities/snorkeling.jpg",
        rating: 4.7,
        review_count: 2341,
        location: { latitude: 18.1096, longitude: -77.2975 },
      },
      {
        id: "cultural-walking-tour",
        name: "Historic City Walking Tour",
        description: "Discover the rich history and culture of the old town",
        category: "cultural",
        duration_hours: 3,
        price_range: { min: 25, max: 45, currency: "USD" },
        difficulty_level: "easy",
        age_suitability: { family_friendly: true },
        booking_required: false,
        image_url: "/images/activities/walking-tour.jpg",
        rating: 4.5,
        review_count: 1876,
        location: { latitude: 18.1096, longitude: -77.2975 },
      },
      {
        id: "cooking-class",
        name: "Local Cuisine Cooking Class",
        description:
          "Learn to prepare traditional dishes with local ingredients",
        category: "food",
        duration_hours: 5,
        price_range: { min: 85, max: 120, currency: "USD" },
        difficulty_level: "moderate",
        age_suitability: { min_age: 12, family_friendly: true },
        booking_required: true,
        image_url: "/images/activities/cooking-class.jpg",
        rating: 4.8,
        review_count: 945,
        location: { latitude: 18.1096, longitude: -77.2975 },
      },
    ];

    let filteredActivities = mockActivities;

    if (filters?.category) {
      filteredActivities = filteredActivities.filter(
        (activity) => activity.category === filters.category
      );
    }

    if (filters?.durationRange) {
      filteredActivities = filteredActivities.filter(
        (activity) =>
          activity.duration_hours >= filters.durationRange!.min &&
          activity.duration_hours <= filters.durationRange!.max
      );
    }

    if (filters?.priceRange) {
      filteredActivities = filteredActivities.filter(
        (activity) =>
          activity.price_range.min >= filters.priceRange!.min &&
          activity.price_range.max <= filters.priceRange!.max
      );
    }

    return filteredActivities.map((activity: ExpediaDestinationActivity) => ({
      id: activity.id,
      name: activity.name,
      description: activity.description,
      category: activity.category,
      durationHours: activity.duration_hours,
      priceRange: activity.price_range,
      difficultyLevel: activity.difficulty_level,
      ageSuitability: activity.age_suitability,
      bookingRequired: activity.booking_required,
      imageUrl: activity.image_url,
      rating: activity.rating,
      reviewCount: activity.review_count,
      location: activity.location,
    }));
  } catch (error) {
    console.error("Error fetching destination activities from Expedia:", error);
    return [];
  }
}

/**
 * Retrieves detailed information about a specific cruise line from the Expedia API.
 *
 * This function calls the `getCruiseLineDetails` function from the Expedia API integration,
 * providing a specific cruise line ID. It returns detailed information about the cruise line,
 * including fleet information, specialties, and popular destinations.
 *
 * @param cruiseLineId - The ID of the cruise line to retrieve details for
 * @returns A promise that resolves to an object containing detailed information about the cruise line.
 *          Returns null if the cruise line is not found or if an error occurs during the fetch.
 */
export async function fetchCruiseLineDetailsFromExpedia(cruiseLineId: string) {
  try {
    const response = await getCruiseLineDetails(cruiseLineId);

    if (response.success && response.data) {
      const line = response.data;
      return {
        id: line.id,
        name: line.name,
        description: line.description,
        logoUrl: line.logo_url,
        logoThumbnail: line.logo_thumbnail,
        websiteUrl: line.website_url,
        foundedYear: line.founded_year,
        headquarters: line.headquarters,
        fleetSize: line.fleet_size,
        passengerCapacityRange: line.passenger_capacity_range,
        specialties: line.specialties,
        popularDestinations: line.popular_destinations,
        priceRange: line.price_range,
        rating: line.rating,
        reviewCount: line.review_count,
      };
    }

    return null;
  } catch (error) {
    console.error("Error fetching cruise line details from Expedia:", error);
    return null;
  }
}

/**
 * Retrieves a list of ships for a given cruise line from the Expedia API.
 *
 * This function uses the `getCruiseLineShips` function from the Expedia API integration to
 * fetch the ships. It requires a valid cruise line ID.
 *
 * @param cruiseLineId - The ID of the cruise line for which to retrieve ships
 * @returns A promise that resolves to an array of ship objects for the specified cruise line.
 *          Returns an empty array if no ships are found or if an error occurs during the fetch.
 */
export async function fetchShipsFromExpedia(cruiseLineId: string) {
  try {
    const response = await getCruiseLineShips(cruiseLineId);

    return response.success && response.data
      ? response.data.map((ship: ExpediaCruiseShip) => ({
          id: ship.id,
          name: ship.name,
          cruiseLineId: ship.cruise_line_id,
          yearBuilt: ship.year_built,
          yearRefurbished: ship.year_refurbished,
          grossTonnage: ship.gross_tonnage,
          length: ship.length,
          width: ship.width,
          passengerCapacity: ship.passenger_capacity,
          crewSize: ship.crew_size,
          decks: ship.decks,
          cabins: ship.cabins,
          suiteCount: ship.suite_count,
          amenities: ship.amenities,
          diningOptions: ship.dining_options,
          entertainment: ship.entertainment,
          shipImage: ship.ship_image,
          shipImageGallery: ship.ship_image_gallery,
        }))
      : [];
  } catch (error) {
    console.error("Error fetching ships from Expedia:", error);
    return [];
  }
}

/**
 * Retrieves cruises from the Expedia API based on a selected destination.
 *
 * This function uses the `getExpediaCruisesByDestination` function from the Expedia API integration
 * to fetch the cruises. It requires a valid destination name or ID.
 *
 * @param destinationId - The name or ID of the destination for which to retrieve cruises
 * @returns A promise that resolves to an array of cruise objects for the specified destination.
 *          Returns an empty array if no cruises are found or if an error occurs during the fetch.
 */
export async function fetchCruisesByDestinationFromExpedia(
  destinationId: string
) {
  try {
    const cruises = await getExpediaCruisesByDestination(destinationId);

    return cruises.map((cruise: ExpediaCruiseItinerary) => ({
      id: cruise.id,
      title: cruise.title,
      cruiseLineId: cruise.cruise_line_id,
      shipId: cruise.ship_id,
      durationNights: cruise.duration_nights,
      departurePort: cruise.departure_port,
      returnPort: cruise.return_port,
      departureDate: cruise.departure_date,
      returnDate: cruise.return_date,
      portsOfCall: cruise.ports_of_call,
      seaDays: cruise.sea_days,
      priceRange: cruise.price_range,
      currency: cruise.currency,
      bookingStatus: cruise.booking_status,
    }));
  } catch (error) {
    console.error("Error fetching cruises by destination from Expedia:", error);
    return [];
  }
}

/**
 * Retrieves cruises from the Expedia API based on a selected departure port.
 *
 * This function uses the `getExpediaCruisesByDeparturePort` function from the Expedia API integration
 * to fetch the cruises. It requires a valid departure port name.
 *
 * @param portName - The name of the departure port for which to retrieve cruises
 * @returns A promise that resolves to an array of cruise objects for the specified departure port.
 *          Returns an empty array if no cruises are found or if an error occurs during the fetch.
 */
export async function fetchCruisesByDeparturePortFromExpedia(portName: string) {
  try {
    const cruises = await getExpediaCruisesByDeparturePort(portName);

    return cruises.map((cruise: ExpediaCruiseItinerary) => ({
      id: cruise.id,
      title: cruise.title,
      cruiseLineId: cruise.cruise_line_id,
      shipId: cruise.ship_id,
      durationNights: cruise.duration_nights,
      departurePort: cruise.departure_port,
      returnPort: cruise.return_port,
      departureDate: cruise.departure_date,
      returnDate: cruise.return_date,
      portsOfCall: cruise.ports_of_call,
      seaDays: cruise.sea_days,
      priceRange: cruise.price_range,
      currency: cruise.currency,
      bookingStatus: cruise.booking_status,
    }));
  } catch (error) {
    console.error(
      "Error fetching cruises by departure port from Expedia:",
      error
    );
    return [];
  }
}

/**
 * Retrieves detailed information about a specific ship from the Expedia API.
 *
 * This function calls the `getShipDetails` function from the Expedia API integration,
 * providing a specific ship ID. It returns detailed information about the ship,
 * including its specifications, amenities, and other relevant details.
 *
 * @param shipId - The ID of the ship to retrieve details for
 * @returns A promise that resolves to an object containing detailed information about the ship.
 *          Returns null if the ship is not found or if an error occurs during the fetch.
 */
export async function fetchShipDetailsFromExpedia(shipId: string) {
  try {
    const response = await getShipDetails(shipId);

    if (response.success && response.data) {
      const ship = response.data;
      return {
        id: ship.id,
        name: ship.name,
        cruiseLineId: ship.cruise_line_id,
        yearBuilt: ship.year_built,
        yearRefurbished: ship.year_refurbished,
        grossTonnage: ship.gross_tonnage,
        length: ship.length,
        width: ship.width,
        passengerCapacity: ship.passenger_capacity,
        crewSize: ship.crew_size,
        decks: ship.decks,
        cabins: ship.cabins,
        suiteCount: ship.suite_count,
        amenities: ship.amenities,
        diningOptions: ship.dining_options,
        entertainment: ship.entertainment,
        shipImage: ship.ship_image,
        shipImageGallery: ship.ship_image_gallery,
      };
    }

    return null;
  } catch (error) {
    console.error("Error fetching ship details from Expedia:", error);
    return null;
  }
}

/**
 * Retrieves detailed information about a specific cruise destination from the Expedia API.
 *
 * This function calls the `getCruiseDestinationDetails` function from the Expedia API integration,
 * providing a specific destination ID. It returns detailed information about the destination,
 * including ports, climate, and attractions.
 *
 * @param destinationId - The ID of the destination to retrieve details for
 * @returns A promise that resolves to an object containing detailed information about the destination.
 *          Returns null if the destination is not found or if an error occurs during the fetch.
 */
export async function fetchDestinationDetailsFromExpedia(
  destinationId: string
) {
  try {
    const response = await getCruiseDestinationDetails(destinationId);

    if (response.success && response.data) {
      const destination = response.data;
      return {
        id: destination.id,
        name: destination.name,
        country: destination.country,
        region: destination.region,
        popularityScore: destination.popularity_score,
        coordinates: destination.coordinates,
        description: destination.description,
        imageUrl: destination.image_url,
        bestTimeToVisit: destination.best_time_to_visit,
        averageTemperature: destination.average_temperature,
        currency: destination.currency,
        languages: destination.languages,
        cruisePorts: destination.cruise_ports,
      };
    }

    return null;
  } catch (error) {
    console.error("Error fetching destination details from Expedia:", error);
    return null;
  }
}

// Helper function for integration with existing codebase
export async function fetchCruiseLinesFromExpedia() {
  return fetchPopularCruiseLinesFromExpedia();
}

/**
 * Fetches all available cruises from the Expedia API
 *
 * This function combines multiple data sources to create a comprehensive list of cruises,
 * including cruise itineraries, ships, and related information.
 *
 * @param limit - Optional limit for the number of cruises to return
 * @returns A promise that resolves to an array of cruise objects
 */
export async function fetchAllCruisesFromExpedia(limit?: number) {
  try {
    // In a real implementation, this would call multiple Expedia API endpoints
    // For now, we'll generate comprehensive mock cruise data
    const cruises = await generateMockCruises(limit || 100);

    return cruises.map((cruise: any) => ({
      id: cruise.id,
      name: cruise.name,
      description: cruise.description,
      cruise_line: cruise.cruise_line,
      cruise_line_id: cruise.cruise_line_id,
      ship_name: cruise.ship_name,
      ship_id: cruise.ship_id,
      destination: cruise.destination,
      destinations: cruise.destinations,
      departure_port: cruise.departure_port,
      departure_port_id: cruise.departure_port_id,
      starting_price: cruise.starting_price,
      price: cruise.price,
      duration_days: cruise.duration_days,
      nights: cruise.nights,
      rating: cruise.rating,
      review_count: cruise.review_count,
      image_url: cruise.image_url,
      ship_image: cruise.ship_image,
      departure_date: cruise.departure_date,
      return_date: cruise.return_date,
      itinerary: cruise.itinerary,
      amenities: cruise.amenities,
      inclusions: cruise.inclusions,
      available_dates: cruise.available_dates,
    }));
  } catch (error) {
    console.error("Error fetching all cruises from Expedia:", error);
    return [];
  }
}

/**
 * Generates mock cruise data for demonstration purposes
 * In a real implementation, this would be replaced by actual Expedia API calls
 */
async function generateMockCruises(limit: number = 100) {
  const cruiseLines = await generateMockCruiseLines();
  const destinations = await generateMockCruiseDestinations();
  const ports = await generateMockDeparturePorts();

  const cruises = [];

  for (let i = 0; i < limit; i++) {
    const cruiseLine =
      cruiseLines[Math.floor(Math.random() * cruiseLines.length)];
    const destination =
      destinations[Math.floor(Math.random() * destinations.length)];
    const departurePort = ports[Math.floor(Math.random() * ports.length)];

    const durationDays = Math.floor(Math.random() * 14) + 3; // 3-16 days
    const basePrice = Math.floor(Math.random() * 8000) + 500; // $500-$8500

    cruises.push({
      id: `cruise-${i + 1}`,
      name: generateCruiseName(destination.name, durationDays),
      description: `Experience the beauty of ${destination.name} on this ${durationDays}-day cruise aboard the ${cruiseLine.name} fleet. Discover stunning coastlines, vibrant cultures, and unforgettable adventures.`,
      cruise_line: cruiseLine.name,
      cruise_line_id: cruiseLine.id,
      ship_name: `MS ${cruiseLine.name.split(" ")[0]} ${Math.floor(Math.random() * 10) + 1}`,
      ship_id: `ship-${cruiseLine.id}-${Math.floor(Math.random() * 10) + 1}`,
      destination: destination.name,
      destinations: [destination.name],
      departure_port: departurePort.name,
      departure_port_id: departurePort.id,
      starting_price: basePrice,
      price: basePrice,
      duration_days: durationDays,
      nights: durationDays - 1,
      rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // 3.0-5.0
      review_count: Math.floor(Math.random() * 5000) + 100,
      image_url: destination.image_url,
      ship_image: `https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop`,
      departure_date: new Date(
        Date.now() + Math.random() * 365 * 24 * 60 * 60 * 1000
      )
        .toISOString()
        .split("T")[0],
      return_date: new Date(
        Date.now() +
          Math.random() * 365 * 24 * 60 * 60 * 1000 +
          durationDays * 24 * 60 * 60 * 1000
      )
        .toISOString()
        .split("T")[0],
      itinerary: generateItinerary(
        departurePort.name,
        destination.name,
        durationDays
      ),
      amenities: [
        "24/7 Room Service",
        "WiFi",
        "Swimming Pool",
        "Fitness Center",
        "Spa",
        "Multiple Restaurants",
        "Entertainment",
        "Casino",
      ].slice(0, Math.floor(Math.random() * 8) + 3),
      inclusions: [
        "All Meals",
        "Accommodation",
        "Entertainment",
        "Port Charges",
      ],
      available_dates: generateAvailableDates(),
    });
  }

  return cruises;
}

function generateCruiseName(destination: string, days: number): string {
  const prefixes = [
    "Magnificent",
    "Spectacular",
    "Ultimate",
    "Luxury",
    "Grand",
    "Premium",
    "Enchanting",
    "Majestic",
  ];

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  return `${prefix} ${destination} - ${days} Day Adventure`;
}

function generateItinerary(
  departurePort: string,
  destination: string,
  days: number
) {
  const itinerary = [`Day 1: Depart from ${departurePort}`];

  for (let i = 2; i < days; i++) {
    if (Math.random() > 0.5) {
      itinerary.push(`Day ${i}: At Sea - Enjoy ship amenities`);
    } else {
      itinerary.push(`Day ${i}: Explore ${destination}`);
    }
  }

  itinerary.push(`Day ${days}: Return to ${departurePort}`);

  return itinerary;
}

function generateAvailableDates() {
  const dates = [];
  const now = new Date();

  for (let i = 0; i < 12; i++) {
    const date = new Date(now);
    date.setMonth(date.getMonth() + i);
    dates.push(date.toISOString().split("T")[0]);
  }

  return dates;
}
