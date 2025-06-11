/**
 * Vecto Technology Cruise API Integration
 *
 * This module provides functions to interact with the Vecto Technology cruise API.
 * All functions are designed to handle API responses and errors gracefully.
 */

// Base API configuration
const VECTO_API_BASE_URL = process.env.VECTO_API_BASE_URL || "https://api.vectotechnology.com";
const VECTO_CONVERSATION_ID = process.env.VECTO_CONVERSATION_ID || "demo-conversation-001";
const VECTO_API_KEY = process.env.VECTO_API_KEY;
const USE_MOCK_DATA = process.env.VECTO_USE_MOCK_DATA === "true";

// Types for API responses
export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  success: boolean;
}

export interface DepartureCity {
  city_id: number;
  city_name: string;
}

export interface SailingCity extends DepartureCity {
  city_description: string | null;
  city_attractions: string | null;
  city_activities: string | null;
  city_adventure: string | null;
  city_shopping: string | null;
  city_currency: string | null;
  city_food: string | null;
  city_image: string;
  regions: {
    region_id: number;
    region_name: string;
  };
}

export interface Passenger {
  first_name: string;
  middle_name?: string;
  last_name: string;
  gender: "M" | "F";
  age: number | string;
  title: string;
  birth_date: Date;
  city_code: string;
  insurance_coverage: "N" | "Y";
  phone_type?: string;
  phone?: string;
  primary_contact?: "N" | "Y";
  country_code?: string;
  state_prov_code?: string;
  service_code: string;
  date?: string;
  years?: number;
  package?: Package[];
  special_service?: SpecialService[];
  passenger_city_code?: string;
  cabing_bed_type_code?: number;
  agent_email?: string;
  booking_agent?: string;
  credit_card_payment?: CreditCard;
  number?: number;
  action_code: string;
}

export interface CreditCard {
  payment_amount: number;
  card_number: string;
  card_exp_month: string;
  card_exp_year: string;
  cardholder_name: string;
  billing_address1: string;
  billing_address2?: string;
  billing_city: string;
  billing_state_prov_code?: string;
  billing_zip_code?: string;
  billing_country_code: string;
}

export interface SailingDestination {
  destination_id: number;
  destination_name: string;
}

export interface SailingRegion {
  region_id: number;
  region_name: string;
}

export interface CruiseLine {
  cruise_line_id: string;
  cruise_line_name: string;
  cruise_line_online_booking_code: string;
  cruise_line_logo_thumb: string;
  cruise_line_logo: string;
  cruise_line_description?: string;
  cruise_line_url: string;
}

export interface CruiseLineShips {
  ship_id: number;
  ship_name: string;
}

export interface Ship {
  ship_id: number;
  ship_name: string;
}

export interface ShipDetails extends Ship {
  ship_description: string;
  ship_image_thumb: string;
  ship_image: string;
  ship_year_built: number | null;
  ship_year_refurbished: number | null;
  ship_registry: string | null;
  ship_tonnage: number | null;
  ship_num_cabins: number | null;
  ship_num_handicap_cabins: number | null;
  ship_capacity: number | null;
  ship_num_elevators: number | null;
  ship_num_restaruants: number | null;
  ship_num_bars: number | null;
  ship_num_pools: number | null;
  ship_num_theaters: number | null;
  ship_has_meeting_rooms: "N" | "Y" | null;
  ship_has_casino: "N" | "Y" | null;
  ship_has_disco: "N" | "Y" | null;
  ship_has_fitness_center: "N" | "Y" | null;
  ship_has_childrens_program: "N" | "Y" | null;
  ship_has_internet_cafe: "N" | "Y" | null;
  ship_has_spa: "N" | "Y" | null;
  ship_has_library: "N" | "Y" | null;
  ship_code: string | null;
  ship_decks: ShipDeck[];
  ship_cabin_categories: ShipCabinCategory[];
}

export interface ShipDeck {
  ship_deck_name: string;
  ship_deck_order: number;
  ship_deck_image: string;
}

export interface ShipCabinCategory {
  ship_cabin_category_name: string;
  ship_cabin_category_image: string;
  ship_cabin_category_description: string;
}

export interface SailingRegion {
  depart_month: string;
  depart_year: string;
  online_booking_only: "N" | "Y";
  verified_itineraries_only: "N" | "Y";
  depart_city_id: number;
  length_of_cruise: string;
  cruise_line_id: number;
  ship_id: number;
}

export interface Itinerary {
  itinerary_id: number;
  itinerary_title: string;
  itinerary_verified: "N" | "Y";
  itinerary_canceled: "N" | "Y";
  itinerary_destination_id: number;
  itinerary_destination_name: string;
  itinerary_depart_date: string;
  itinerary_depart_city: string;
  itinerary_return_date: string;
  itinerary_return_city: string;
  itinerary_num_nights: number;

  itinerary_days: {
    itinerary_day_number: number;
    itinerary_day_date: string;
    itinerary_day_arrival_time: string;
    itinerary_day_departure_time: string;
    city_id: number;
    city_name: string;
    city_description: string | null;
    city_image: string;
  }[];
  cruise_line: CruiseLine;
  ship: Ship;
  promotions_collection: Promotion[];
}

export interface Promotion {
  promotion_id: number;
  promotion_type: string;
  code: string;
  name: string;
  start: string;
  expiration: string;
  description: string;
  consumer_description: string;
  booking_start: string;
  booking_end: string;
  sailing_start: string;
  sailing_end: string;
  cruise_lines: string;
  ships: string;
  criteria: string;
  reward_points: number;
  reward_active: boolean;
  destination: string;
  inside: boolean;
  oceanview: boolean;
  balcony: boolean;
  suite: boolean;
  cabin_category: string;
  from_cruise_length: number;
  to_cruise_length: number;
  offer_id: string;
  num_itineraries: number;
  intineraries_collection: Itinerary[];
}

export interface ItineraryDetails extends Itinerary {
  itinerary_ports_of_call: string;
  low_inside_price: number;
  low_oceanview_price: number;
  low_balcony_price: number;
  low_suite_price: number;
}

export interface PassengerCity {
  code: string;
  name: string;
  state_province_code?: string;
  country_code: string;
}

export interface PassengerCountry {
  code: string;
  name: string;
  currency_code: string;
}

export interface PassengerState {
  code: string;
  name: string;
  country_code: string;
}

export interface PassengerOccupations {
  code: string;
  name: string;
}

export interface PassengerTitle {
  code: string;
  name: string;
  gender_code: string;
}

export interface PhoneTypes {
  code: string;
  name: string;
}

export interface RateOption {
  rate_option_code: string;
  rate_option_name: string;
  rate_option_type: string;
  begin_date: string;
  end_date: string;
  notes: string;
  non_refund_type_code: string;
  non_refund_type_name: string;
  mr_eligible: boolean;
  cruise_line_advisories: string[];
}

export interface RateOptionRules {
  rate_option_rule: string;
  text: string;
}

export interface CabinCategory {
  cabin_category_code: string;
  cabin_category_upgrade_code: string;
  cabin_category_guaranteed_only: "N" | "Y";
  cabin_category_name: string;
  cabin_category_location: string;
  cabin_category_description: string;
  cabin_category_image: string;
  cabin_category_rate_option_code: string;
  cabin_category_rate_option_type: string;
  cabin_category_rate_option_non_refund_type_code: string;
  cabin_category_rate_option_non_refund_type_name: string;
  passenger_pricing: {
    age_group: "Senior" | "Adult" | "Child" | "Infant";
    cabin_category_price: number;
    port_charges: number;
    mr_eligible: boolean;
  }[];
}

export interface Cabin {
  cabin_number: string;
  cabin_min_passengers: number;
  cabin_max_passengers: number;
  cabin_deck_name: string;
  cabin_location: string;
  cabin_number_bed_options: number;
  cabin_bed_type_options: string;
  cabin_bed_types: {
    bed_type_code: number;
    bed_type_name: string;
  }[];
}

export interface DiningOption {
  dining_table_code: number;
  dining_table_name: string;
  dining_seats: {
    dining_seat_code: number;
    dining_seat_status_code: number;
    sitting_instance: string;
    dining_seat_name: string;
    dining_seat_status: string;
  }[];
}

export interface SpecialService {
  service_code: string;
  service_type_code: string;
  service_type_name: string;
  description: string;
  effective_date: Date;
  discontinue_date: Date;
  minimum_passengers: number;
  date_required: "Y" | "N";
  years_required: "Y" | "N";
  service_rate: string;
  passenger_service_rate: string;
}

export interface Package {
  package_code: string;
  package_name: string;
  package_type_code: number;
  package_type_name: string;
  group_code: string;
  pre_post_code: string;
  start_date_time: string;
  end_date_time: string;
  minimum_passengers: number | null;
  night_count: number;
  complimentary: "N" | "Y";
  remarks: string | null;
  package_rates: {
    package_rate_type_code: number;
    package_rate_type_name: string;
    amount: number;
  }[];
}

export interface Booking {
  booking_number?: string;
  itinerary_id: number;
  cabin_category_rate_option_code: string;
  cabin_category_code: string;
  cabin_number: string;
  dining_seat_code: number;
  dining_table_code: number;
  sitting_instance?: string;
  passenger: Passenger[];
}

// API utility functions
async function makeApiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    // If mock data mode is enabled, return mock data for development
    if (USE_MOCK_DATA) {
      console.warn(`API Mock Mode: Returning mock data for ${endpoint}`);
      return getMockData<T>(endpoint);
    }

    const url = `${VECTO_API_BASE_URL}${endpoint}`;
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "conversation_id": VECTO_CONVERSATION_ID,
    };

    // Add API key if available
    if (VECTO_API_KEY) {
      headers['Authorization'] = `Bearer ${VECTO_API_KEY}`;
    }

    const response = await fetch(url, {
      headers: {
        ...headers,
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Check for API error responses
    if (data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
      const errorMessages = data.errors.map((err: any) => `${err.code}: ${err.description}`).join(', ');
      throw new Error(`API Error: ${errorMessages}`);
    }

    return {
      data,
      success: true,
    };
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error);
    return {
      error: error instanceof Error ? error.message : "Unknown error",
      success: false,
    };
  }
}

// Cruise Line API Functions
export async function getCruiseLines(): Promise<ApiResponse<CruiseLine[]>> {
  return makeApiRequest<CruiseLine[]>("/cruise/getCruiseLines");
}

export async function getCruiseLineDetails(
  cruiseLineId: string
): Promise<ApiResponse<CruiseLine>> {
  return makeApiRequest<CruiseLine>(
    `/cruise/getCruiseLineDetails?cruiseLineId=${cruiseLineId}`
  );
}

// Ship API Functions
export async function getShipDetails(
  shipId: number
): Promise<ApiResponse<ShipDetails>> {
  return makeApiRequest<ShipDetails>(
    `/cruise/getShipDetails?ship_id=${shipId}`
  );
}

export async function getCruiseLineShips(params: {
  cruise_line_id: string;
  depart_month?: string;
  depart_year?: string;
  verified_itineraries_only?: "N" | "Y";
  region_id?: number;
}): Promise<ApiResponse<Ship[]>> {
  const queryParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams.append(key, value.toString());
      }
    });
  }

  return makeApiRequest<Ship[]>(
    `/cruise/getCruiseLineShips?${queryParams.toString()}`
  );
}

// Destination and Location API Functions
export async function getSailingDestinations(): Promise<
  ApiResponse<SailingDestination[]>
> {
  return makeApiRequest<SailingDestination[]>("/cruise/getSailingDestinations");
}

export async function getDepartureCities(): Promise<
  ApiResponse<DepartureCity[]>
> {
  return makeApiRequest<DepartureCity[]>("/cruise/getDepartureCities");
}

export async function getSailingRegions(): Promise<
  ApiResponse<SailingRegion[]>
> {
  return makeApiRequest<SailingRegion[]>("/cruise/getSailingRegions");
}

export async function getSailingCityDetails(
  city_id: string
): Promise<ApiResponse<SailingCity>> {
  return makeApiRequest<SailingCity>(
    `/cruise/getSailingCityDetails?city_id=${city_id}`
  );
}

// Itinerary API Functions
export async function getItineraries(params?: {
  country_code: string;
  state_province_code: string;
}): Promise<ApiResponse<Itinerary[]>> {
  const queryParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams.append(key, value.toString());
      }
    });
  }

  const endpoint = `/cruise/getItineraries${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
  return makeApiRequest<Itinerary[]>(endpoint);
}

export async function getItineraryDetails(
  itineraryId: string
): Promise<ApiResponse<ItineraryDetails>> {
  return makeApiRequest<ItineraryDetails>(
    `/cruise/getItineraryDetails?itineraryId=${itineraryId}`
  );
}

// Passenger Information API Functions
export async function getPassengerCities(): Promise<
  ApiResponse<PassengerCity[]>
> {
  return makeApiRequest<PassengerCity[]>("/cruise/getPassengerCities");
}

export async function getPassengerCountries(): Promise<
  ApiResponse<PassengerCountry[]>
> {
  return makeApiRequest<PassengerCountry[]>("/cruise/getPassengerCountries");
}

export async function getPassengerStates(
  countryId?: string
): Promise<ApiResponse<PassengerState[]>> {
  const endpoint = countryId
    ? `/cruise/getPassengerStates?countryId=${countryId}`
    : "/cruise/getPassengerStates";
  return makeApiRequest<PassengerState[]>(endpoint);
}

export async function getPassengerTitles(): Promise<
  ApiResponse<Array<{ id: string; name: string }>>
> {
  return makeApiRequest<Array<{ id: string; name: string }>>(
    "/cruise/getPassengerTitles"
  );
}

export async function getGenderCodes(): Promise<
  ApiResponse<Array<{ id: string; name: string }>>
> {
  return makeApiRequest<Array<{ id: string; name: string }>>(
    "/cruise/getGenderCodes"
  );
}

export async function getPhoneTypes(): Promise<
  ApiResponse<Array<{ id: string; name: string }>>
> {
  return makeApiRequest<Array<{ id: string; name: string }>>(
    "/cruise/getPhoneTypes"
  );
}

export async function getPassengerOccupations(): Promise<
  ApiResponse<Array<{ id: string; name: string }>>
> {
  return makeApiRequest<Array<{ id: string; name: string }>>(
    "/cruise/getPassengerOccupations"
  );
}

// Rate and Pricing API Functions
export async function getAvailableRateOptions(params: {
  itinerary_id: string;
  num_passengers: number;
  num_adults: number;
  num_seniors: number;
  num_kids: number;
  num_infants: number;
  passenger_city_code: string;
  past_passenger_number: string;
  passenger_state: string;
  passenger_occupation: string;
}): Promise<ApiResponse<RateOption[]>> {
  const queryParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams.append(key, value.toString());
      }
    });
  }

  return makeApiRequest<RateOption[]>(
    `/cruise/getAvailableRateOptions?${queryParams.toString()}`
  );
}

export async function getMrPromotions(params?: {
  booking_start: string;
  booking_end: string;
  sailing_start: string;
  sailing_end: string;
}): Promise<ApiResponse<Promotion[]>> {
  const queryParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams.append(key, value.toString());
      }
    });
  }

  const endpoint = `/cruise/getMrPromotions${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
  return makeApiRequest<Promotion[]>(endpoint);
}

export async function getRateOptionRules(
  rateOptionId: string
): Promise<ApiResponse<Array<{ rule: string; description: string }>>> {
  return makeApiRequest<Array<{ rule: string; description: string }>>(
    `/cruise/getRateOptionRules?rateOptionId=${rateOptionId}`
  );
}

// Cabin API Functions
export async function getAvailableCabinCategories(
  itineraryId: string
): Promise<ApiResponse<CabinCategory[]>> {
  return makeApiRequest<CabinCategory[]>(
    `/cruise/getAvailableCabinCategories?itineraryId=${itineraryId}`
  );
}

export async function getAvailableCabins(params: {
  itineraryId: string;
  cabinCategoryId?: string;
}): Promise<ApiResponse<Cabin[]>> {
  const queryParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams.append(key, value.toString());
      }
    });
  }

  return makeApiRequest<Cabin[]>(
    `/cruise/getAvailableCabins?${queryParams.toString()}`
  );
}

// Service and Package API Functions
export async function getDiningOptions(
  itineraryId: string
): Promise<ApiResponse<DiningOption[]>> {
  return makeApiRequest<DiningOption[]>(
    `/cruise/getDiningOptions?itineraryId=${itineraryId}`
  );
}

export async function getSpecialServices(params: {
  itinerary_id: number;
  cabin_category_rate_option_code: string;
  cabin_category_code: string;
  cabin_number: string;
  passenger: Passenger[];
}): Promise<ApiResponse<SpecialService[]>> {
  const queryParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams.append(key, value.toString());
      }
    });
  }

  return makeApiRequest<SpecialService[]>(
    `/cruise/getSpecialServices?itineraryId=${queryParams.toString() ? `?${queryParams.toString()}` : ""}`
  );
}

export async function getPackages(params?: {
  itinerary_id: number;
  cabin_category_rate_option_code: string;
  cabin_category_code: string;
  cabin_number: string;
  passenger: Passenger[];
}): Promise<ApiResponse<Package[]>> {
  const queryParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams.append(key, value.toString());
      }
    });
  }

  return makeApiRequest<Package[]>(
    `/cruise/getPackages?itineraryId=${queryParams.toString() ? `?${queryParams.toString()}` : ""}`
  );
}

// Booking API Functions
export async function holdCabin(params: {
  itineraryId: string;
  cabinId: string;
  holdMinutes?: number;
}): Promise<ApiResponse<{ holdId: string; expiresAt: string }>> {
  return makeApiRequest<{ holdId: string; expiresAt: string }>(
    "/cruise/holdCabin",
    {
      method: "POST",
      body: JSON.stringify(params),
    }
  );
}

export async function createBooking(
  bookingData: Booking
): Promise<ApiResponse<Booking>> {
  return makeApiRequest<Booking>("/cruise/createBooking", {
    method: "POST",
    body: JSON.stringify(bookingData),
  });
}

export async function saveBooking(
  params: Booking
): Promise<ApiResponse<{ success: boolean }>> {
  return makeApiRequest<{ success: boolean }>("/cruise/saveBooking", {
    method: "POST",
    body: JSON.stringify(params),
  });
}

export async function updateBooking(
  bookingId: string,
  updateData: Partial<Booking>
): Promise<ApiResponse<Booking>> {
  return makeApiRequest<Booking>("/cruise/updateBooking", {
    method: "PUT",
    body: JSON.stringify({ bookingId, ...updateData }),
  });
}

export async function getStatementAndPricing(
  bookingData: Booking
): Promise<ApiResponse<Booking>> {
  return makeApiRequest<Booking>(`/cruise/getStatementAndPricing`, {
    method: "POST",
    body: JSON.stringify(bookingData),
  });
}

export async function getBooking(bookingId: string): Promise<ApiResponse<Booking>> {
  return makeApiRequest<Booking>(`/cruise/getBooking?bookingId=${bookingId}`);
}

export async function getBookingHistory(
  booking_number: string,
  itinerary_id: number
): Promise<
  ApiResponse<{
    booking_history_entries: Array<{
      entry_date_time: Date;
      actions: string[];
    }>;
  }>
> {
  return makeApiRequest<{
    booking_history_entries: Array<{
      entry_date_time: Date;
      actions: string[];
    }>;
  }>(
    `/cruise/getBookingHistory?booking_number=${booking_number}&itinerary_id=${itinerary_id}`
  );
}

export async function getCancellationPenalties(
  bookingId: string,
  itinerary_id: number
): Promise<
  ApiResponse<{
    refund_amount: number;
    penalty: number;
    percentage: number;
  }>
> {
  return makeApiRequest<{
    refund_amount: number;
    penalty: number;
    percentage: number;
  }>(
    `/cruise/getCancellationPenalties?booking_number=${bookingId}&itinerary_id=${itinerary_id}`
  );
}

export async function cancelBooking(
  booking_number: string,
  itinerary_id: number
): Promise<
  ApiResponse<{ booking_cancelled: "N" | "Y"; booking_cancel_ref_num: string }>
> {
  return makeApiRequest<{
    booking_cancelled: "N" | "Y";
    booking_cancel_ref_num: string;
  }>("/cruise/cancelBooking", {
    method: "POST",
    body: JSON.stringify({ booking_number, itinerary_id }),
  });
}

export async function mrPromotionEligibilityCheck(params: {
  cc_number: string;
}): Promise<
  ApiResponse<{
    eligible: boolean;
    wallet_id: string;
  }>
> {
  return makeApiRequest<{
    eligible: boolean;
    wallet_id: string;
  }>("/cruise/mrPromotionEligibilityCheck", {
    method: "POST",
    body: JSON.stringify(params),
  });
}

// Card verification (separate endpoint)
export async function verifyStandalone(cardData: {
  cardNumber: string;
  source: string;
}): Promise<
  ApiResponse<{
    card_type: string;
    card_image: string;
    gcd_eligible: boolean;
    rate_codes: {
      code: string;
      amenity: string;
    }[];
  }>
> {
  return makeApiRequest<{
    card_type: string;
    card_image: string;
    gcd_eligible: boolean;
    rate_codes: {
      code: string;
      amenity: string;
    }[];
  }>("/card/verifyStandalone", {
    method: "POST",
    body: JSON.stringify(cardData),
  });
}

// Mock data for development
function getMockData<T>(endpoint: string): ApiResponse<T> {
  console.log(`Returning mock data for endpoint: ${endpoint}`);
  
  // Mock cruise lines data
  if (endpoint === "/cruise/getCruiseLines") {
    return {
      data: [
        {
          cruise_line_id: "1",
          cruise_line_name: "Royal Caribbean International",
          cruise_line_description: "The world's largest cruise line offering innovative ships and unforgettable experiences.",
          cruise_line_image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          cruise_line_logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
          cruise_line_id: "2",
          cruise_line_name: "Norwegian Cruise Line",
          cruise_line_description: "Freestyle cruising with no formal dress codes and flexible dining options.",
          cruise_line_image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          cruise_line_logo: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
          cruise_line_id: "3",
          cruise_line_name: "Carnival Cruise Line",
          cruise_line_description: "Fun ships with exciting entertainment, great dining, and affordable prices.",
          cruise_line_image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          cruise_line_logo: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
      ] as T,
      success: true,
    };
  }

  // Mock itineraries data
  if (endpoint.includes("/cruise/getItineraries")) {
    return {
      data: [
        {
          itinerary_id: "1",
          itinerary_name: "Caribbean Adventure",
          itinerary_description: "Explore the beautiful Caribbean islands with crystal clear waters and white sand beaches.",
          itinerary_duration: 7,
          itinerary_starting_port: "Miami",
          itinerary_ending_port: "Miami",
          itinerary_image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          itinerary_price_from: 599,
          itinerary_currency: "USD",
          cruise_line_id: "1",
          ship_id: "1"
        },
        {
          itinerary_id: "2",
          itinerary_name: "Mediterranean Splendor",
          itinerary_description: "Discover the Mediterranean's most beautiful ports from Barcelona to Rome.",
          itinerary_duration: 10,
          itinerary_starting_port: "Barcelona",
          itinerary_ending_port: "Rome",
          itinerary_image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          itinerary_price_from: 899,
          itinerary_currency: "USD",
          cruise_line_id: "2",
          ship_id: "2"
        }
      ] as T,
      success: true,
    };
  }

  // Mock ship data
  if (endpoint.includes("/cruise/getCruiseLineShips")) {
    return {
      data: [
        {
          ship_id: "1",
          ship_name: "Harmony of the Seas",
          ship_description: "One of the world's largest cruise ships with incredible amenities and entertainment.",
          ship_image: "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          ship_capacity: 6780,
          ship_tonnage: 226963,
          ship_length: 362,
          ship_width: 66,
          cruise_line_id: "1"
        },
        {
          ship_id: "2",
          ship_name: "Norwegian Epic",
          ship_description: "A freestyle cruise ship with innovative design and entertainment options.",
          ship_image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          ship_capacity: 4100,
          ship_tonnage: 155873,
          ship_length: 329,
          ship_width: 40,
          cruise_line_id: "2"
        }
      ] as T,
      success: true,
    };
  }

  // Mock destinations data
  if (endpoint === "/cruise/getSailingDestinations") {
    return {
      data: [
        {
          destination_id: "1",
          destination_name: "Caribbean",
          destination_description: "Tropical paradise with beautiful beaches and crystal clear waters.",
          destination_image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
          destination_id: "2",
          destination_name: "Mediterranean",
          destination_description: "Historic ports with rich culture and stunning architecture.",
          destination_image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
      ] as T,
      success: true,
    };
  }

  // Mock departure cities data
  if (endpoint === "/cruise/getDepartureCities") {
    return {
      data: [
        { city_id: 1, city_name: "Miami" },
        { city_id: 2, city_name: "Fort Lauderdale" },
        { city_id: 3, city_name: "Barcelona" },
        { city_id: 4, city_name: "Rome" },
        { city_id: 5, city_name: "Southampton" }
      ] as T,
      success: true,
    };
  }

  // Default mock response
  return {
    data: [] as T,
    success: true,
  };
}
