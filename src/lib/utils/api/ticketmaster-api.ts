/**
 * Ticketmaster Discovery API Integration
 * 
 * This module provides functions to interact with the Ticketmaster Discovery API
 * to find events in cities
 */

const TICKETMASTER_API_BASE_URL = "https://app.ticketmaster.com/discovery/v2";
const TICKETMASTER_API_KEY = process.env.NEXT_PUBLIC_TICKETMASTER_API_KEY;

export interface TicketmasterEvent {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images: Array<{
    ratio: string;
    url: string;
    width: number;
    height: number;
    fallback: boolean;
  }>;
  sales: {
    public: {
      startDateTime: string;
      startTBD: boolean;
      startTBA: boolean;
      endDateTime: string;
    };
  };
  dates: {
    start: {
      localDate: string;
      localTime?: string;
      dateTime: string;
      dateTBD: boolean;
      dateTBA: boolean;
      timeTBA: boolean;
      noSpecificTime: boolean;
    };
    timezone: string;
    status: {
      code: string;
    };
  };
  classifications: Array<{
    primary: boolean;
    segment: {
      id: string;
      name: string;
    };
    genre: {
      id: string;
      name: string;
    };
    subGenre: {
      id: string;
      name: string;
    };
  }>;
  promoter?: {
    id: string;
    name: string;
    description: string;
  };
  promoters?: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  info?: string;
  pleaseNote?: string;
  priceRanges?: Array<{
    type: string;
    currency: string;
    min: number;
    max: number;
  }>;
  products?: Array<{
    name: string;
    id: string;
    url: string;
    type: string;
    classifications: Array<any>;
  }>;
  seatmap?: {
    staticUrl: string;
  };
  accessibility?: {
    ticketLimit: number;
    id: string;
  };
  ticketLimit?: {
    info: string;
    id: string;
  };
  ageRestrictions?: {
    legalAgeEnforced: boolean;
    id: string;
  };
  ticketing?: {
    safeTix: {
      enabled: boolean;
    };
    allInclusivePricing: {
      enabled: boolean;
    };
    id: string;
  };
  _links: {
    self: {
      href: string;
    };
    attractions?: Array<{
      href: string;
    }>;
    venues?: Array<{
      href: string;
    }>;
  };
  _embedded?: {
    venues?: Array<{
      name: string;
      type: string;
      id: string;
      test: boolean;
      url: string;
      locale: string;
      images?: Array<any>;
      postalCode: string;
      timezone: string;
      city: {
        name: string;
      };
      state: {
        name: string;
        stateCode: string;
      };
      country: {
        name: string;
        countryCode: string;
      };
      address: {
        line1: string;
      };
      location: {
        longitude: string;
        latitude: string;
      };
      markets?: Array<{
        name: string;
        id: string;
      }>;
      dmas?: Array<{
        id: number;
      }>;
      social?: {
        twitter?: {
          handle: string;
        };
      };
      boxOfficeInfo?: {
        phoneNumberDetail: string;
        openHoursDetail: string;
        acceptedPaymentDetail: string;
        willCallDetail: string;
      };
      parkingDetail?: string;
      accessibleSeatingDetail?: string;
      generalInfo?: {
        generalRule: string;
        childRule: string;
      };
      upcomingEvents: {
        ticketmaster: number;
        _total: number;
        _filtered: number;
      };
      ada?: {
        adaPhones: string;
        adaCustomCopy: string;
        adaHours: string;
      };
      _links: {
        self: {
          href: string;
        };
      };
    }>;
    attractions?: Array<{
      name: string;
      type: string;
      id: string;
      test: boolean;
      url: string;
      locale: string;
      externalLinks?: {
        youtube?: Array<{
          url: string;
        }>;
        twitter?: Array<{
          url: string;
        }>;
        itunes?: Array<{
          url: string;
        }>;
        facebook?: Array<{
          url: string;
        }>;
        wiki?: Array<{
          url: string;
        }>;
        musicbrainz?: Array<{
          id: string;
        }>;
        homepage?: Array<{
          url: string;
        }>;
      };
      images?: Array<any>;
      classifications: Array<any>;
      upcomingEvents: {
        ticketmaster: number;
        _total: number;
        _filtered: number;
      };
      _links: {
        self: {
          href: string;
        };
      };
    }>;
  };
}

export interface TicketmasterEventsResponse {
  _embedded?: {
    events: TicketmasterEvent[];
  };
  _links: {
    self: {
      href: string;
      templated?: boolean;
    };
    next?: {
      href: string;
      templated?: boolean;
    };
    prev?: {
      href: string;
      templated?: boolean;
    };
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}

export interface EventSearchOptions {
  city?: string;
  stateCode?: string;
  countryCode?: string;
  postalCode?: string;
  radius?: string;
  unit?: "miles" | "km";
  source?: string;
  locale?: string;
  startDateTime?: string;
  endDateTime?: string;
  includeTBA?: "yes" | "no" | "only";
  includeTBD?: "yes" | "no" | "only";
  includeTest?: "yes" | "no" | "only";
  size?: number;
  page?: number;
  sort?: string;
  classificationName?: string;
  classificationId?: string;
  marketId?: string;
  promoterId?: string;
  segmentId?: string;
  segmentName?: string;
  venueId?: string;
  keyword?: string;
}

/**
 * Search for events using Ticketmaster Discovery API
 */
export async function searchEvents(options: EventSearchOptions): Promise<TicketmasterEventsResponse | null> {
  if (!TICKETMASTER_API_KEY) {
    console.error("Ticketmaster API key not found");
    return null;
  }

  try {
    const params = new URLSearchParams({
      apikey: TICKETMASTER_API_KEY,
      ...Object.fromEntries(
        Object.entries(options).filter(([_, value]) => value !== undefined)
      ),
    });

    const response = await fetch(
      `${TICKETMASTER_API_BASE_URL}/events.json?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error(`Ticketmaster API failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error searching events:", error);
    return null;
  }
}

/**
 * Get events by city name
 */
export async function getEventsByCity(
  cityName: string,
  options: Partial<EventSearchOptions> = {}
): Promise<TicketmasterEvent[]> {
  const searchOptions: EventSearchOptions = {
    city: cityName,
    size: 20,
    sort: "date,asc",
    includeTest: "no",
    ...options,
  };

  const response = await searchEvents(searchOptions);
  return response?._embedded?.events || [];
}

/**
 * Get events by coordinates
 */
export async function getEventsByLocation(
  latitude: number,
  longitude: number,
  radius: number = 25,
  options: Partial<EventSearchOptions> = {}
): Promise<TicketmasterEvent[]> {
  const searchOptions: EventSearchOptions = {
    // Use geoPoint parameter for lat/lng searches
    ...options,
    radius: radius.toString(),
    unit: "miles",
    size: 20,
    sort: "date,asc",
    includeTest: "no",
  };

  // Add geoPoint to URL manually since it's not in the interface
  if (!TICKETMASTER_API_KEY) {
    console.error("Ticketmaster API key not found");
    return [];
  }

  try {
    const params = new URLSearchParams({
      apikey: TICKETMASTER_API_KEY,
      geoPoint: `${latitude},${longitude}`,
      ...Object.fromEntries(
        Object.entries(searchOptions).filter(([_, value]) => value !== undefined)
      ),
    });

    const response = await fetch(
      `${TICKETMASTER_API_BASE_URL}/events.json?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error(`Ticketmaster API failed: ${response.statusText}`);
    }

    const data: TicketmasterEventsResponse = await response.json();
    return data._embedded?.events || [];
  } catch (error) {
    console.error("Error searching events by location:", error);
    return [];
  }
}

/**
 * Get event details by ID
 */
export async function getEventById(eventId: string): Promise<TicketmasterEvent | null> {
  if (!TICKETMASTER_API_KEY) {
    console.error("Ticketmaster API key not found");
    return null;
  }

  try {
    const response = await fetch(
      `${TICKETMASTER_API_BASE_URL}/events/${eventId}.json?apikey=${TICKETMASTER_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Ticketmaster API failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error getting event details:", error);
    return null;
  }
}
