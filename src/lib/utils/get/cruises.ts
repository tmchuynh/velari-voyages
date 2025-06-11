import { Cruise } from "@/lib/interfaces/services/cruises";

// Mock cruise data for development
export const mockCruises: Cruise[] = [
  {
    id: "mediterranean-discovery",
    vesselId: "ocean-explorer-1",
    basePrice: 2500,
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: {
        latitude: 41.3851,
        longitude: 2.1734,
      },
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Lazio",
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
    },
    isPopular: true,
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Barcelona",
          country: "Spain",
          coordinates: { latitude: 41.3851, longitude: 2.1734 },
        },
        {
          city: "Nice",
          country: "France",
          coordinates: { latitude: 43.7102, longitude: 7.262 },
        },
        {
          city: "Rome",
          country: "Italy",
          coordinates: { latitude: 41.9028, longitude: 12.4964 },
        },
      ],
      description: "A luxurious Mediterranean journey",
      distance: "1,200 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [],
      timeOnLand: [],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        id: "contact-1",
        name: "Sarah Johnson",
        role: "Cruise Director",
        languages: [
          { code: "en", name: "English" },
          { code: "es", name: "Spanish" },
        ],
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "sarah.johnson@velarivoyages.com",
          contactNumber: "+1-555-0123",
        },
      },
    ],
    title: "Mediterranean Discovery Cruise",
    description:
      "Explore the stunning Mediterranean coastline with visits to historic ports, beautiful beaches, and cultural treasures. This luxury cruise offers world-class dining, entertainment, and excursions.",
    rating: 4.8,
    tags: ["luxury", "mediterranean", "cultural", "historic"],
    crewMembers: [
      { name: "Captain Marco Rodriguez", role: "Captain" },
      { name: "Chef Antoine Dubois", role: "Executive Chef" },
      { name: "Maria Santos", role: "Guest Relations Manager" },
    ],
  },
];

/**
 * Get a cruise by its ID
 * @param cruiseId - The ID of the cruise to retrieve
 * @returns The cruise object or null if not found
 */
export async function getCruiseById(cruiseId: string): Promise<Cruise | null> {
  try {
    // Search through mock cruise data to find the matching cruise
    const cruise = mockCruises.find(
      (cruise) =>
        cruise.id === cruiseId ||
        cruise.title.toLowerCase().replace(/\s+/g, "-") ===
          cruiseId.toLowerCase()
    );

    return cruise || null;
  } catch (error) {
    console.error("Error fetching cruise by ID:", error);
    return null;
  }
}
