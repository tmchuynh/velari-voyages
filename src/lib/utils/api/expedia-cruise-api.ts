/**
 * Expedia Cruise API Integration
 *
 * This module provides functions to interact with cruise data using Expedia-style API patterns.
 * All functions are designed to filter and return only cruise-related travel data.
 */

import { Booking, CabinBooking } from "@/lib/services/booking";
import { PaymentInfo } from "@/lib/services/payment";

// Base API configuration for Expedia-style endpoints
const EXPEDIA_API_BASE_URL =
  process.env.EXPEDIA_API_BASE_URL || "https://api.expedia.com/v3";
const EXPEDIA_API_KEY = process.env.EXPEDIA_API_KEY;

// Types for API responses
export interface ExpediaApiResponse<T = any> {
  data?: T;
  error?: string;
  success: boolean;
  total_results?: number;
  page?: number;
  per_page?: number;
}

export interface CruiseDestination {
  id: string;
  name: string;
  country: string;
  region: string;
  popularity_score: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  description: string;
  image_url: string;
  best_time_to_visit: string[];
  average_temperature: {
    high: number;
    low: number;
    unit: "celsius" | "fahrenheit";
  };
  currency: string;
  languages: string[];
  cruise_ports: CruisePort[];
}

export interface CruisePort {
  id: string;
  name: string;
  city: string;
  country: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  port_type: "departure" | "destination" | "both";
  facilities: string[];
  popular_cruise_lines: string[];
  average_docking_duration: number; // hours
  port_image: string;
}

export interface CruiseLine {
  id: string;
  name: string;
  logo_url: string;
  logo_thumbnail: string;
  description: string;
  website_url: string;
  founded_year: number;
  headquarters: string;
  fleet_size: number;
  passenger_capacity_range: {
    min: number;
    max: number;
  };
  specialties: string[];
  popular_destinations: string[];
  price_range: "budget" | "mid-range" | "luxury" | "ultra-luxury";
  rating: number;
  review_count: number;
}

export interface CruiseShip {
  id: string;
  name: string;
  cruise_line_id: string;
  year_built: number;
  year_refurbished?: number;
  gross_tonnage: number;
  length: number;
  width: number;
  passenger_capacity: number;
  crew_size: number;
  decks: number;
  cabins: number;
  suite_count: number;
  amenities: ShipAmenity[];
  dining_options: DiningOption[];
  entertainment: EntertainmentOption[];
  ship_image: string;
  ship_image_gallery: string[];
}

export interface ShipAmenity {
  name: string;
  category:
    | "pool"
    | "spa"
    | "fitness"
    | "shopping"
    | "casino"
    | "library"
    | "theater"
    | "other";
  description: string;
  deck_location?: string;
  additional_cost: boolean;
}

export interface DiningOption {
  name: string;
  cuisine_type: string;
  meal_types: ("breakfast" | "lunch" | "dinner" | "snacks")[];
  dress_code: "casual" | "smart_casual" | "formal";
  additional_cost: boolean;
  specialty: boolean;
}

export interface EntertainmentOption {
  name: string;
  type:
    | "show"
    | "live_music"
    | "dancing"
    | "comedy"
    | "theater"
    | "cinema"
    | "activities";
  schedule: string;
  age_restriction?: string;
  additional_cost: boolean;
}

export interface CruiseItinerary {
  id: string;
  title: string;
  cruise_line_id: string;
  ship_id: string;
  duration_nights: number;
  departure_port: CruisePort;
  return_port: CruisePort;
  departure_date: string;
  return_date: string;
  ports_of_call: PortOfCall[];
  sea_days: number;
  price_range: {
    interior_cabin: {
      min: number;
      max: number;
    };
    oceanview_cabin: {
      min: number;
      max: number;
    };
    balcony_cabin: {
      min: number;
      max: number;
    };
    suite: {
      min: number;
      max: number;
    };
  };
  currency: string;
  inclusions: string[];
  exclusions: string[];
  booking_status: "available" | "limited" | "waitlist" | "sold_out";
}

export interface PortOfCall {
  port: CruisePort;
  arrival_date: string;
  arrival_time: string;
  departure_date: string;
  departure_time: string;
  duration_hours: number;
  recommended_activities: DestinationActivity[];
}

export interface DestinationActivity {
  id: string;
  name: string;
  description: string;
  category:
    | "sightseeing"
    | "adventure"
    | "cultural"
    | "food"
    | "shopping"
    | "nature"
    | "entertainment";
  duration_hours: number;
  price_range: {
    min: number;
    max: number;
    currency: string;
  };
  difficulty_level: "easy" | "moderate" | "challenging";
  age_suitability: {
    min_age?: number;
    family_friendly: boolean;
  };
  booking_required: boolean;
  image_url: string;
  rating: number;
  review_count: number;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface CruiseSearchFilters {
  departure_ports?: string[];
  destinations?: string[];
  cruise_lines?: string[];
  duration_range?: {
    min_nights: number;
    max_nights: number;
  };
  departure_date_range?: {
    start_date: string;
    end_date: string;
  };
  price_range?: {
    min_price: number;
    max_price: number;
    currency: string;
  };
  cabin_type?: ("interior" | "oceanview" | "balcony" | "suite")[];
  passenger_count?: number;
  amenities?: string[];
}

// API utility functions
async function makeExpediaApiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ExpediaApiResponse<T>> {
  // For now, we'll use mock data as the primary source
  // In production, this would make actual API calls to Expedia
  try {
    if (!EXPEDIA_API_KEY || EXPEDIA_API_KEY === "your_expedia_api_key_here") {
      // Use mock data when API key is not configured
      return {
        success: true,
        data: await getMockDataForEndpoint<T>(endpoint),
        total_results: 100,
        page: 1,
        per_page: 20,
      };
    }

    const url = `${EXPEDIA_API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${EXPEDIA_API_KEY}`,
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(
        `API request failed: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return {
      success: true,
      data: data.results || data.data || data,
      total_results: data.total_results,
      page: data.page,
      per_page: data.per_page,
    };
  } catch (error) {
    console.error(
      "Expedia API request failed, falling back to mock data:",
      error
    );
    // Fallback to mock data on error
    return {
      success: true,
      data: await getMockDataForEndpoint<T>(endpoint),
      total_results: 100,
      page: 1,
      per_page: 20,
    };
  }
}

// Helper function to get mock data based on endpoint
async function getMockDataForEndpoint<T>(endpoint: string): Promise<T> {
  if (endpoint.includes("/destinations/popular")) {
    return (await generateMockCruiseDestinations()) as T;
  } else if (endpoint.includes("/cruise-lines/popular")) {
    return (await generateMockCruiseLines()) as T;
  } else if (endpoint.includes("/ports/departure/popular")) {
    return (await generateMockDeparturePorts()) as T;
  } else if (endpoint.includes("/activities")) {
    return (await generateMockDestinationActivities()) as T;
  } else if (endpoint.includes("/search")) {
    return (await generateMockCruiseItineraries()) as T;
  } else {
    // Default empty response
    return [] as T;
  }
}

// Popular Cruise Destinations API Functions
export async function getPopularCruiseDestinations(params?: {
  limit?: number;
  region?: string;
}): Promise<ExpediaApiResponse<CruiseDestination[]>> {
  const queryParams = new URLSearchParams();
  if (params?.limit) queryParams.append("limit", params.limit.toString());
  if (params?.region) queryParams.append("region", params.region);

  const endpoint = `/cruises/destinations/popular${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
  return makeExpediaApiRequest<CruiseDestination[]>(endpoint);
}

export async function getCruiseDestinationDetails(
  destinationId: string
): Promise<ExpediaApiResponse<CruiseDestination>> {
  return makeExpediaApiRequest<CruiseDestination>(
    `/cruises/destinations/${destinationId}`
  );
}

export async function getDestinationActivities(
  destinationId: string,
  filters?: {
    category?: string;
    duration_range?: { min: number; max: number };
    price_range?: { min: number; max: number };
  }
): Promise<ExpediaApiResponse<DestinationActivity[]>> {
  const queryParams = new URLSearchParams();
  if (filters?.category) queryParams.append("category", filters.category);
  if (filters?.duration_range) {
    queryParams.append("min_duration", filters.duration_range.min.toString());
    queryParams.append("max_duration", filters.duration_range.max.toString());
  }
  if (filters?.price_range) {
    queryParams.append("min_price", filters.price_range.min.toString());
    queryParams.append("max_price", filters.price_range.max.toString());
  }

  const endpoint = `/cruises/destinations/${destinationId}/activities${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
  return makeExpediaApiRequest<DestinationActivity[]>(endpoint);
}

// Popular Cruise Lines API Functions
export async function getPopularCruiseLines(params?: {
  limit?: number;
  price_range?: string;
  specialties?: string[];
}): Promise<ExpediaApiResponse<CruiseLine[]>> {
  const queryParams = new URLSearchParams();
  if (params?.limit) queryParams.append("limit", params.limit.toString());
  if (params?.price_range)
    queryParams.append("price_range", params.price_range);
  if (params?.specialties) {
    params.specialties.forEach((specialty) =>
      queryParams.append("specialties", specialty)
    );
  }

  const endpoint = `/cruises/cruise-lines/popular${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
  return makeExpediaApiRequest<CruiseLine[]>(endpoint);
}

export async function getCruiseLineDetails(
  cruiseLineId: string
): Promise<ExpediaApiResponse<CruiseLine>> {
  return makeExpediaApiRequest<CruiseLine>(
    `/cruises/cruise-lines/${cruiseLineId}`
  );
}

export async function getCruiseLineShips(
  cruiseLineId: string
): Promise<ExpediaApiResponse<CruiseShip[]>> {
  return makeExpediaApiRequest<CruiseShip[]>(
    `/cruises/cruise-lines/${cruiseLineId}/ships`
  );
}

// Popular Departure Ports API Functions
export async function getPopularDeparturePorts(params?: {
  limit?: number;
  region?: string;
  country?: string;
}): Promise<ExpediaApiResponse<CruisePort[]>> {
  const queryParams = new URLSearchParams();
  if (params?.limit) queryParams.append("limit", params.limit.toString());
  if (params?.region) queryParams.append("region", params.region);
  if (params?.country) queryParams.append("country", params.country);

  const endpoint = `/cruises/ports/departure/popular${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
  return makeExpediaApiRequest<CruisePort[]>(endpoint);
}

export async function getDeparturePortDetails(
  portId: string
): Promise<ExpediaApiResponse<CruisePort>> {
  return makeExpediaApiRequest<CruisePort>(`/cruises/ports/${portId}`);
}

export async function getCruisesFromPort(
  portId: string,
  filters?: CruiseSearchFilters
): Promise<ExpediaApiResponse<CruiseItinerary[]>> {
  const queryParams = new URLSearchParams();
  if (filters?.duration_range) {
    queryParams.append(
      "min_nights",
      filters.duration_range.min_nights.toString()
    );
    queryParams.append(
      "max_nights",
      filters.duration_range.max_nights.toString()
    );
  }
  if (filters?.departure_date_range) {
    queryParams.append("start_date", filters.departure_date_range.start_date);
    queryParams.append("end_date", filters.departure_date_range.end_date);
  }
  if (filters?.price_range) {
    queryParams.append("min_price", filters.price_range.min_price.toString());
    queryParams.append("max_price", filters.price_range.max_price.toString());
  }

  const endpoint = `/cruises/ports/${portId}/cruises${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
  return makeExpediaApiRequest<CruiseItinerary[]>(endpoint);
}

// Cruise Search and Discovery API Functions
export async function searchCruises(
  filters: CruiseSearchFilters
): Promise<ExpediaApiResponse<CruiseItinerary[]>> {
  return makeExpediaApiRequest<CruiseItinerary[]>("/cruises/search", {
    method: "POST",
    body: JSON.stringify(filters),
  });
}

export async function getCruiseItineraryDetails(
  itineraryId: string
): Promise<ExpediaApiResponse<CruiseItinerary>> {
  return makeExpediaApiRequest<CruiseItinerary>(
    `/cruises/itineraries/${itineraryId}`
  );
}

export async function getShipDetails(
  shipId: string
): Promise<ExpediaApiResponse<CruiseShip>> {
  return makeExpediaApiRequest<CruiseShip>(`/cruises/ships/${shipId}`);
}

// Utility functions for integration with existing codebase
export async function getExpediaCruisesByDestination(
  destination: string
): Promise<CruiseItinerary[]> {
  try {
    const response = await searchCruises({
      destinations: [destination],
    });

    if (response.success && response.data) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching Expedia cruises by destination:", error);
    return [];
  }
}

export async function getExpediaCruisesByDeparturePort(
  portName: string
): Promise<CruiseItinerary[]> {
  try {
    const portsResponse = await getPopularDeparturePorts();

    if (portsResponse.success && portsResponse.data) {
      const port = portsResponse.data.find(
        (p) =>
          p.name.toLowerCase().includes(portName.toLowerCase()) ||
          p.city.toLowerCase().includes(portName.toLowerCase())
      );

      if (port) {
        const cruisesResponse = await getCruisesFromPort(port.id);
        return cruisesResponse.success && cruisesResponse.data
          ? cruisesResponse.data
          : [];
      }
    }
    return [];
  } catch (error) {
    console.error("Error fetching Expedia cruises by departure port:", error);
    return [];
  }
}


// Booking API Functions
export async function createBooking(
  bookingData: Partial<Booking>
): Promise<ExpediaApiResponse<Booking>> {
  try {
    // In a real implementation, this would call the Expedia booking API
    console.log("Creating booking with Expedia API:", bookingData);

    const booking: Booking = {
      id: `booking-${Date.now()}`,
      user_id: bookingData.user_id || "user-123",
      itinerary_id: bookingData.itinerary_id || "",
      cruise_line_id: bookingData.cruise_line_id || "",
      ship_id: bookingData.ship_id || "",
      booking_reference: `EXP${Date.now().toString().slice(-6)}`,
      booking_date: new Date().toISOString(),
      departure_date: bookingData.departure_date || "",
      return_date: bookingData.return_date || "",
      status: "pending",
      total_price: bookingData.total_price || 0,
      currency: bookingData.currency || "USD",
      passengers: bookingData.passengers || [],
      cabin_details: bookingData.cabin_details || ({} as CabinBooking),
      special_requests: bookingData.special_requests || [],
      payment_info: bookingData.payment_info || ({} as PaymentInfo),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    return {
      data: booking,
      success: true,
    };
  } catch (error) {
    console.error("Error creating booking:", error);
    return {
      error: "Failed to create booking",
      success: false,
    };
  }
}

export async function getBooking(
  bookingId: string
): Promise<ExpediaApiResponse<Booking>> {
  try {
    // In a real implementation, this would call the Expedia API
    console.log("Fetching booking from Expedia API:", bookingId);

    // Return mock booking data for demonstration
    const booking: Booking = {
      id: bookingId,
      user_id: "user-123",
      itinerary_id: "itinerary-456",
      cruise_line_id: "norwegian-cruise-line",
      ship_id: "norwegian-escape",
      booking_reference: `EXP${bookingId.slice(-6)}`,
      booking_date: "2024-01-15T10:30:00Z",
      departure_date: "2024-06-10",
      return_date: "2024-06-20",
      status: "confirmed",
      total_price: 2499,
      currency: "USD",
      passengers: [],
      cabin_details: {} as CabinBooking,
      payment_info: {} as PaymentInfo,
      created_at: "2024-01-15T10:30:00Z",
      updated_at: "2024-01-15T10:30:00Z",
    };

    return {
      data: booking,
      success: true,
    };
  } catch (error) {
    console.error("Error fetching booking:", error);
    return {
      error: "Failed to fetch booking",
      success: false,
    };
  }
}

export async function updateBooking(
  bookingId: string,
  updates: Partial<Booking>
): Promise<ExpediaApiResponse<Booking>> {
  try {
    // In a real implementation, this would call the Expedia API
    console.log("Updating booking with Expedia API:", bookingId, updates);

    const existingBooking = await getBooking(bookingId);
    if (!existingBooking.success || !existingBooking.data) {
      throw new Error("Booking not found");
    }

    const updatedBooking: Booking = {
      ...existingBooking.data,
      ...updates,
      updated_at: new Date().toISOString(),
    };

    return {
      data: updatedBooking,
      success: true,
    };
  } catch (error) {
    console.error("Error updating booking:", error);
    return {
      error: "Failed to update booking",
      success: false,
    };
  }
}

export async function cancelBooking(
  bookingId: string
): Promise<ExpediaApiResponse<{ cancelled: boolean; refund_amount: number }>> {
  try {
    // In a real implementation, this would call the Expedia API
    console.log("Cancelling booking with Expedia API:", bookingId);

    return {
      data: {
        cancelled: true,
        refund_amount: 0, // Would be calculated based on cancellation policy
      },
      success: true,
    };
  } catch (error) {
    console.error("Error cancelling booking:", error);
    return {
      error: "Failed to cancel booking",
      success: false,
    };
  }
}

export async function getBookingHistory(
  userId: string
): Promise<ExpediaApiResponse<Booking[]>> {
  try {
    // In a real implementation, this would call the Expedia API
    console.log("Fetching booking history from Expedia API:", userId);

    return {
      data: [], // Mock empty history
      success: true,
    };
  } catch (error) {
    console.error("Error fetching booking history:", error);
    return {
      error: "Failed to fetch booking history",
      success: false,
    };
  }
}

export async function getCancellationPenalties(bookingId: string): Promise<
  ExpediaApiResponse<{
    refund_amount: number;
    penalty: number;
    percentage: number;
  }>
> {
  try {
    // In a real implementation, this would call the Expedia API
    console.log("Fetching cancellation penalties from Expedia API:", bookingId);

    return {
      data: {
        refund_amount: 0,
        penalty: 0,
        percentage: 0,
      },
      success: true,
    };
  } catch (error) {
    console.error("Error fetching cancellation penalties:", error);
    return {
      error: "Failed to fetch cancellation penalties",
      success: false,
    };
  }
}

export async function getStatementAndPricing(
  bookingId: string
): Promise<ExpediaApiResponse<any>> {
  try {
    // In a real implementation, this would call the Expedia API
    console.log("Fetching statement and pricing from Expedia API:", bookingId);

    return {
      data: {},
      success: true,
    };
  } catch (error) {
    console.error("Error fetching statement and pricing:", error);
    return {
      error: "Failed to fetch statement and pricing",
      success: false,
    };
  }
}
