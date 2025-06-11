/**
 * Expedia Cruise Data Service
 *
 * This service provides comprehensive cruise data functionality using the Expedia API
 * as the primary data source. It replaces the previous Vecto API integration and
 * focuses specifically on cruise-related travel data.
 */

import {
  getCruiseItineraryDetails,
  getCruiseLineDetails,
  getDestinationActivities,
  getPopularCruiseDestinations,
  getPopularCruiseLines,
  getPopularDeparturePorts,
  getShipDetails,
  searchCruises,
  type CruiseDestination,
  type CruiseItinerary,
  type CruiseLine,
  type CruisePort,
  type CruiseSearchFilters,
  type CruiseShip,
  type DestinationActivity,
} from "../utils/api/expedia-cruise-api";

export interface CruiseDataService {
  // Popular destinations for cruise travelers
  getPopularDestinations(
    limit?: number,
    region?: string
  ): Promise<CruiseDestination[]>;

  // Most popular cruise lines
  getPopularCruiseLines(
    limit?: number,
    priceRange?: string
  ): Promise<CruiseLine[]>;

  // Popular departure ports
  getPopularDeparturePorts(
    limit?: number,
    region?: string
  ): Promise<CruisePort[]>;

  // Things to do in cruise destination cities
  getDestinationActivities(
    destinationId: string,
    category?: string
  ): Promise<DestinationActivity[]>;

  // Search for cruises with filters
  searchCruises(filters: CruiseSearchFilters): Promise<CruiseItinerary[]>;

  // Get detailed cruise information
  getCruiseDetails(cruiseId: string): Promise<CruiseItinerary | null>;

  // Get cruise line details
  getCruiseLineInfo(cruiseLineId: string): Promise<CruiseLine | null>;

  // Get ship details
  getShipInfo(shipId: string): Promise<CruiseShip | null>;

  // Get cruises by destination
  getCruisesByDestination(destination: string): Promise<CruiseItinerary[]>;

  // Get cruises by departure port
  getCruisesByDeparturePort(portId: string): Promise<CruiseItinerary[]>;
}

class ExpediaCruiseDataService implements CruiseDataService {
  async getPopularDestinations(
    limit?: number,
    region?: string
  ): Promise<CruiseDestination[]> {
    try {
      const response = await getPopularCruiseDestinations({ limit, region });
      if (response.success && response.data) {
        return response.data;
      }
      return [];
    } catch (error) {
      console.error("Error fetching popular cruise destinations:", error);
      return [];
    }
  }

  async getPopularCruiseLines(
    limit?: number,
    priceRange?: string
  ): Promise<CruiseLine[]> {
    try {
      const response = await getPopularCruiseLines({
        limit,
        price_range: priceRange,
      });
      if (response.success && response.data) {
        return response.data;
      }
      return [];
    } catch (error) {
      console.error("Error fetching popular cruise lines:", error);
      return [];
    }
  }

  async getPopularDeparturePorts(
    limit?: number,
    region?: string
  ): Promise<CruisePort[]> {
    try {
      const response = await getPopularDeparturePorts({ limit, region });
      if (response.success && response.data) {
        return response.data;
      }
      return [];
    } catch (error) {
      console.error("Error fetching popular departure ports:", error);
      return [];
    }
  }

  async getDestinationActivities(
    destinationId: string,
    category?: string
  ): Promise<DestinationActivity[]> {
    try {
      const response = await getDestinationActivities(destinationId, {
        category,
      });
      if (response.success && response.data) {
        return response.data;
      }
      return [];
    } catch (error) {
      console.error("Error fetching destination activities:", error);
      return [];
    }
  }

  async searchCruises(
    filters: CruiseSearchFilters
  ): Promise<CruiseItinerary[]> {
    try {
      const response = await searchCruises(filters);
      if (response.success && response.data) {
        return response.data;
      }
      return [];
    } catch (error) {
      console.error("Error searching cruises:", error);
      return [];
    }
  }

  async getCruiseDetails(cruiseId: string): Promise<CruiseItinerary | null> {
    try {
      const response = await getCruiseItineraryDetails(cruiseId);
      if (response.success && response.data) {
        return response.data;
      }
      return null;
    } catch (error) {
      console.error("Error fetching cruise details:", error);
      return null;
    }
  }

  async getCruiseLineInfo(cruiseLineId: string): Promise<CruiseLine | null> {
    try {
      const response = await getCruiseLineDetails(cruiseLineId);
      if (response.success && response.data) {
        return response.data;
      }
      return null;
    } catch (error) {
      console.error("Error fetching cruise line info:", error);
      return null;
    }
  }

  async getShipInfo(shipId: string): Promise<CruiseShip | null> {
    try {
      const response = await getShipDetails(shipId);
      if (response.success && response.data) {
        return response.data;
      }
      return null;
    } catch (error) {
      console.error("Error fetching ship info:", error);
      return null;
    }
  }

  async getCruisesByDestination(
    destination: string
  ): Promise<CruiseItinerary[]> {
    return this.searchCruises({
      destinations: [destination],
    });
  }

  async getCruisesByDeparturePort(portId: string): Promise<CruiseItinerary[]> {
    return this.searchCruises({
      departure_ports: [portId],
    });
  }
}

// Create and export a singleton instance
export const cruiseDataService = new ExpediaCruiseDataService();

// Export convenience functions for backward compatibility
export async function fetchPopularCruiseDestinations(
  limit?: number,
  region?: string
) {
  return cruiseDataService.getPopularDestinations(limit, region);
}

export async function fetchPopularCruiseLines(
  limit?: number,
  priceRange?: string
) {
  return cruiseDataService.getPopularCruiseLines(limit, priceRange);
}

export async function fetchPopularDeparturePorts(
  limit?: number,
  region?: string
) {
  return cruiseDataService.getPopularDeparturePorts(limit, region);
}

export async function fetchDestinationActivities(
  destinationId: string,
  category?: string
) {
  return cruiseDataService.getDestinationActivities(destinationId, category);
}

export async function searchCruisesWithFilters(filters: CruiseSearchFilters) {
  return cruiseDataService.searchCruises(filters);
}

export async function getCruisesByDestination(destination: string) {
  return cruiseDataService.getCruisesByDestination(destination);
}

export async function getCruisesByDeparturePort(portId: string) {
  return cruiseDataService.getCruisesByDeparturePort(portId);
}

// Export types for use in components
export type {
  CruiseDestination,
  CruiseItinerary,
  CruiseLine,
  CruisePort,
  CruiseSearchFilters,
  CruiseShip,
  DestinationActivity,
};
