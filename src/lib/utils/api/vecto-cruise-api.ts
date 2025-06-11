/**
 * Vecto Technology Cruise API Integration
 * 
 * This module provides functions to interact with the Vecto Technology cruise API.
 * All functions are designed to handle API responses and errors gracefully.
 */

// Base API configuration
const VECTO_API_BASE_URL = 'https://api.vectotechnology.com';

// Types for API responses
export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  success: boolean;
}

export interface CruiseLine {
  id: string;
  name: string;
  code: string;
  description?: string;
  imageUrl: string;
}

export interface CruiseLineDetails extends CruiseLine {
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  logo?: string;
}

export interface Ship {
  id: string;
  name: string;
  cruiseLineId: string;
  code: string;
  imageUrl?: string;
  capacity?: number;
  yearBuilt?: number;
  length?: number;
  width?: number;
  decks?: number;
}

export interface ShipDetails extends Ship {
  description?: string;
  amenities?: string[];
  specifications?: Record<string, any>;
}

export interface SailingDestination {
  id: string;
  name: string;
  code: string;
  region?: string;
  country?: string;
  imageUrl?: string;
}

export interface DepartureCity {
  id: string;
  name: string;
  code: string;
  country: string;
  state?: string;
  portName?: string;
  imageUrl?: string;
}

export interface SailingRegion {
  id: string;
  name: string;
  code: string;
  description?: string;
}

export interface Itinerary {
  id: string;
  name: string;
  cruiseLineId: string;
  shipId: string;
  duration: number;
  departureDate: string;
  returnDate: string;
  startDate: string;
  endDate: string;
  departureCityId: string;
  destinationIds: string[];
}

export interface ItineraryDetails extends Itinerary {
  description?: string;
  highlights?: string[];
  ports?: Array<{
    cityId: string;
    arrivalDate: string;
    departureDate: string;
    daysInPort: number;
  }>;
}

export interface PassengerCity {
  id: string;
  name: string;
  code: string;
  country: string;
  state?: string;
}

export interface PassengerCountry {
  id: string;
  name: string;
  code: string;
  iso2: string;
  iso3: string;
}

export interface PassengerState {
  id: string;
  name: string;
  code: string;
  countryId: string;
}

export interface RateOption {
  id: string;
  name: string;
  description?: string;
  price: number;
  currency: string;
  category: string;
}

export interface CabinCategory {
  id: string;
  name: string;
  code: string;
  description?: string;
  maxOccupancy: number;
  size?: number;
  amenities?: string[];
}

export interface Cabin {
  id: string;
  number: string;
  categoryId: string;
  deckId: string;
  isAvailable: boolean;
  price?: number;
}

export interface DiningOption {
  id: string;
  name: string;
  description?: string;
  type: string;
  price?: number;
  isIncluded: boolean;
}

export interface SpecialService {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
}

export interface Package {
  id: string;
  name: string;
  description?: string;
  price: number;
  inclusions?: string[];
}

export interface Booking {
  id: string;
  bookingNumber: string;
  itineraryId: string;
  cabinId: string;
  passengers: Array<{
    id: string;
    firstName: string;
    lastName: string;
    title?: string;
    gender?: string;
    dateOfBirth?: string;
    nationality?: string;
    occupation?: string;
  }>;
  totalPrice: number;
  currency: string;
  status: string;
  createdDate: string;
  modifiedDate?: string;
}

// API utility functions
async function makeApiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${VECTO_API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        // Add authentication headers if needed
        // 'Authorization': `Bearer ${apiKey}`,
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      data,
      success: true,
    };
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error);
    return {
      error: error instanceof Error ? error.message : 'Unknown error',
      success: false,
    };
  }
}

// Cruise Line API Functions
export async function getCruiseLines(): Promise<ApiResponse<CruiseLine[]>> {
  return makeApiRequest<CruiseLine[]>('/cruise/getCruiseLines');
}

export async function getCruiseLineDetails(
  cruiseLineId: string
): Promise<ApiResponse<CruiseLineDetails>> {
  return makeApiRequest<CruiseLineDetails>(
    `/cruise/getCruiseLineDetails?cruiseLineId=${cruiseLineId}`
  );
}

// Ship API Functions
export async function getShipDetails(
  shipId: string
): Promise<ApiResponse<ShipDetails>> {
  return makeApiRequest<ShipDetails>(
    `/cruise/getShipDetails?shipId=${shipId}`
  );
}

export async function getCruiseLineShips(
  cruiseLineId: string
): Promise<ApiResponse<Ship[]>> {
  return makeApiRequest<Ship[]>(
    `/cruise/getCruiseLineShips?cruiseLineId=${cruiseLineId}`
  );
}

// Destination and Location API Functions
export async function getSailingDestinations(): Promise<ApiResponse<SailingDestination[]>> {
  return makeApiRequest<SailingDestination[]>('/cruise/getSailingDestinations');
}

export async function getDepartureCities(): Promise<ApiResponse<DepartureCity[]>> {
  return makeApiRequest<DepartureCity[]>('/cruise/getDepartureCities');
}

export async function getSailingRegions(): Promise<ApiResponse<SailingRegion[]>> {
  return makeApiRequest<SailingRegion[]>('/cruise/getSailingRegions');
}

export async function getSailingCityDetails(
  cityId: string
): Promise<ApiResponse<DepartureCity>> {
  return makeApiRequest<DepartureCity>(
    `/cruise/getSailingCityDetails?cityId=${cityId}`
  );
}

// Itinerary API Functions
export async function getItineraries(params?: {
  cruiseLineId?: string;
  shipId?: string;
  departureDate?: string;
  duration?: number;
  departureCityId?: string;
}): Promise<ApiResponse<Itinerary[]>> {
  const queryParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams.append(key, value.toString());
      }
    });
  }
  
  const endpoint = `/cruise/getItineraries${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
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
export async function getPassengerCities(): Promise<ApiResponse<PassengerCity[]>> {
  return makeApiRequest<PassengerCity[]>('/cruise/getPassengerCities');
}

export async function getPassengerCountries(): Promise<ApiResponse<PassengerCountry[]>> {
  return makeApiRequest<PassengerCountry[]>('/cruise/getPassengerCountries');
}

export async function getPassengerStates(
  countryId?: string
): Promise<ApiResponse<PassengerState[]>> {
  const endpoint = countryId 
    ? `/cruise/getPassengerStates?countryId=${countryId}`
    : '/cruise/getPassengerStates';
  return makeApiRequest<PassengerState[]>(endpoint);
}

export async function getPassengerTitles(): Promise<ApiResponse<Array<{ id: string; name: string }>>> {
  return makeApiRequest<Array<{ id: string; name: string }>>('/cruise/getPassengerTitles');
}

export async function getGenderCodes(): Promise<ApiResponse<Array<{ id: string; name: string }>>> {
  return makeApiRequest<Array<{ id: string; name: string }>>('/cruise/getGenderCodes');
}

export async function getPhoneTypes(): Promise<ApiResponse<Array<{ id: string; name: string }>>> {
  return makeApiRequest<Array<{ id: string; name: string }>>('/cruise/getPhoneTypes');
}

export async function getPassengerOccupations(): Promise<ApiResponse<Array<{ id: string; name: string }>>> {
  return makeApiRequest<Array<{ id: string; name: string }>>('/cruise/getPassengerOccupations');
}

// Rate and Pricing API Functions
export async function getAvailableRateOptions(params: {
  itineraryId: string;
  cabinCategoryId?: string;
}): Promise<ApiResponse<RateOption[]>> {
  const queryParams = new URLSearchParams();
  queryParams.append('itineraryId', params.itineraryId);
  if (params.cabinCategoryId) {
    queryParams.append('cabinCategoryId', params.cabinCategoryId);
  }
  
  return makeApiRequest<RateOption[]>(
    `/cruise/getAvailableRateOptions?${queryParams.toString()}`
  );
}

export async function getMrPromotions(params?: {
  cruiseLineId?: string;
  itineraryId?: string;
}): Promise<ApiResponse<Array<{ id: string; name: string; description?: string }>>> {
  const queryParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams.append(key, value.toString());
      }
    });
  }
  
  const endpoint = `/cruise/getMrPromotions${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
  return makeApiRequest<Array<{ id: string; name: string; description?: string }>>(endpoint);
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
  queryParams.append('itineraryId', params.itineraryId);
  if (params.cabinCategoryId) {
    queryParams.append('cabinCategoryId', params.cabinCategoryId);
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

export async function getSpecialServices(
  itineraryId: string
): Promise<ApiResponse<SpecialService[]>> {
  return makeApiRequest<SpecialService[]>(
    `/cruise/getSpecialServices?itineraryId=${itineraryId}`
  );
}

export async function getPackages(
  itineraryId: string
): Promise<ApiResponse<Package[]>> {
  return makeApiRequest<Package[]>(
    `/cruise/getPackages?itineraryId=${itineraryId}`
  );
}

// Booking API Functions
export async function holdCabin(params: {
  itineraryId: string;
  cabinId: string;
  holdMinutes?: number;
}): Promise<ApiResponse<{ holdId: string; expiresAt: string }>> {
  return makeApiRequest<{ holdId: string; expiresAt: string }>(
    '/cruise/holdCabin',
    {
      method: 'POST',
      body: JSON.stringify(params),
    }
  );
}

export async function createBooking(bookingData: {
  itineraryId: string;
  cabinId: string;
  passengers: Array<{
    firstName: string;
    lastName: string;
    title?: string;
    gender?: string;
    dateOfBirth?: string;
    nationality?: string;
    occupation?: string;
  }>;
  contactInfo: {
    email: string;
    phone: string;
    address?: {
      street: string;
      city: string;
      state?: string;
      zipCode: string;
      country: string;
    };
  };
  selectedServices?: string[];
  selectedPackages?: string[];
}): Promise<ApiResponse<Booking>> {
  return makeApiRequest<Booking>('/cruise/createBooking', {
    method: 'POST',
    body: JSON.stringify(bookingData),
  });
}

export async function saveBooking(
  bookingId: string
): Promise<ApiResponse<{ success: boolean }>> {
  return makeApiRequest<{ success: boolean }>('/cruise/saveBooking', {
    method: 'POST',
    body: JSON.stringify({ bookingId }),
  });
}

export async function updateBooking(
  bookingId: string,
  updateData: Partial<Booking>
): Promise<ApiResponse<Booking>> {
  return makeApiRequest<Booking>('/cruise/updateBooking', {
    method: 'PUT',
    body: JSON.stringify({ bookingId, ...updateData }),
  });
}

export async function getStatementAndPricing(
  bookingId: string
): Promise<ApiResponse<{
  statement: Array<{ item: string; amount: number }>;
  totalPrice: number;
  currency: string;
}>> {
  return makeApiRequest<{
    statement: Array<{ item: string; amount: number }>;
    totalPrice: number;
    currency: string;
  }>(`/cruise/getStatementAndPricing?bookingId=${bookingId}`);
}

export async function getBooking(
  bookingId: string
): Promise<ApiResponse<Booking>> {
  return makeApiRequest<Booking>(`/cruise/getBooking?bookingId=${bookingId}`);
}

export async function getBookingHistory(
  bookingId: string
): Promise<ApiResponse<Array<{
  timestamp: string;
  action: string;
  details: string;
  user?: string;
}>>> {
  return makeApiRequest<Array<{
    timestamp: string;
    action: string;
    details: string;
    user?: string;
  }>>(`/cruise/getBookingHistory?bookingId=${bookingId}`);
}

export async function getCancellationPenalties(
  bookingId: string
): Promise<ApiResponse<{
  penalties: Array<{ date: string; penalty: number; percentage: number }>;
  currentPenalty: number;
}>> {
  return makeApiRequest<{
    penalties: Array<{ date: string; penalty: number; percentage: number }>;
    currentPenalty: number;
  }>(`/cruise/getCancellationPenalties?bookingId=${bookingId}`);
}

export async function cancelBooking(
  bookingId: string,
  reason?: string
): Promise<ApiResponse<{ success: boolean; refundAmount?: number }>> {
  return makeApiRequest<{ success: boolean; refundAmount?: number }>(
    '/cruise/cancelBooking',
    {
      method: 'POST',
      body: JSON.stringify({ bookingId, reason }),
    }
  );
}

export async function mrPromotionEligibilityCheck(params: {
  promotionId: string;
  itineraryId: string;
  passengers: Array<{ id: string }>;
}): Promise<ApiResponse<{
  eligible: boolean;
  reasons?: string[];
}>> {
  return makeApiRequest<{
    eligible: boolean;
    reasons?: string[];
  }>('/cruise/mrPromotionEligibilityCheck', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}

// Card verification (separate endpoint)
export async function verifyStandalone(cardData: {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  cardholderName: string;
}): Promise<ApiResponse<{
  valid: boolean;
  cardType?: string;
  last4?: string;
}>> {
  return makeApiRequest<{
    valid: boolean;
    cardType?: string;
    last4?: string;
  }>('/card/verifyStandalone', {
    method: 'POST',
    body: JSON.stringify(cardData),
  });
}

// Utility functions for integration with existing codebase
export async function getVectoCruisesByDestination(
  destination: string
): Promise<Itinerary[]> {
  try {
    const response = await getItineraries();
    if (response.success && response.data) {
      // Filter by destination (this would need more sophisticated matching)
      return response.data.filter(itinerary => 
        itinerary.name.toLowerCase().includes(destination.toLowerCase())
      );
    }
    return [];
  } catch (error) {
    console.error('Error fetching Vecto cruises by destination:', error);
    return [];
  }
}

export async function getVectoCruisesByDepartureCity(
  cityName: string
): Promise<Itinerary[]> {
  try {
    const [departureCitiesResponse, itinerariesResponse] = await Promise.all([
      getDepartureCities(),
      getItineraries()
    ]);

    if (departureCitiesResponse.success && itinerariesResponse.success) {
      const city = departureCitiesResponse.data?.find(c => 
        c.name.toLowerCase().includes(cityName.toLowerCase())
      );
      
      if (city && itinerariesResponse.data) {
        return itinerariesResponse.data.filter(
          itinerary => itinerary.departureCityId === city.id
        );
      }
    }
    return [];
  } catch (error) {
    console.error('Error fetching Vecto cruises by departure city:', error);
    return [];
  }
}
