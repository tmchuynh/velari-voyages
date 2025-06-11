/**
 * Calendarific API Integration
 * 
 * This module provides functions to get holiday information using the Calendarific API
 */

const CALENDARIFIC_API_BASE_URL = "https://calendarific.com/api/v2";
const CALENDARIFIC_API_KEY = process.env.NEXT_PUBLIC_CALENDARIFIC_API_KEY;

export interface CalendarificHoliday {
  name: string;
  description: string;
  country: {
    id: string;
    name: string;
  };
  date: {
    iso: string;
    datetime: {
      year: number;
      month: number;
      day: number;
    };
  };
  type: string[];
  locations: string;
  states: string | "All";
  primary_type: string;
  canonical_url: string;
  urlid: string;
  locations_hash: string;
  hashtags: string[];
}

export interface CalendarificResponse {
  meta: {
    code: number;
  };
  response: {
    holidays: CalendarificHoliday[];
  };
}

export interface HolidaySearchOptions {
  country: string;
  year: number;
  month?: number;
  day?: number;
  location?: string;
  type?: "national" | "local" | "religious" | "observance";
}

/**
 * Get holidays for a specific country and year
 */
export async function getHolidays(options: HolidaySearchOptions): Promise<CalendarificHoliday[]> {
  if (!CALENDARIFIC_API_KEY) {
    console.error("Calendarific API key not found");
    return [];
  }

  try {
    const params = new URLSearchParams({
      api_key: CALENDARIFIC_API_KEY,
      country: options.country,
      year: options.year.toString(),
    });

    if (options.month) {
      params.append("month", options.month.toString());
    }

    if (options.day) {
      params.append("day", options.day.toString());
    }

    if (options.location) {
      params.append("location", options.location);
    }

    if (options.type) {
      params.append("type", options.type);
    }

    const response = await fetch(
      `${CALENDARIFIC_API_BASE_URL}/holidays?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error(`Calendarific API failed: ${response.statusText}`);
    }

    const data: CalendarificResponse = await response.json();
    return data.response?.holidays || [];
  } catch (error) {
    console.error("Error fetching holidays:", error);
    return [];
  }
}

/**
 * Get holidays for a specific date
 */
export async function getHolidaysForDate(
  country: string,
  date: Date
): Promise<CalendarificHoliday[]> {
  return await getHolidays({
    country,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  });
}

/**
 * Get holidays for a date range
 */
export async function getHolidaysForDateRange(
  country: string,
  startDate: Date,
  endDate: Date
): Promise<CalendarificHoliday[]> {
  const holidays: CalendarificHoliday[] = [];
  const years = new Set<number>();

  // Get all unique years in the date range
  for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    years.add(date.getFullYear());
  }

  // Fetch holidays for each year
  for (const year of years) {
    const yearHolidays = await getHolidays({
      country,
      year,
    });

    // Filter holidays within the date range
    const filteredHolidays = yearHolidays.filter((holiday) => {
      const holidayDate = new Date(holiday.date.iso);
      return holidayDate >= startDate && holidayDate <= endDate;
    });

    holidays.push(...filteredHolidays);
  }

  return holidays;
}

/**
 * Get holidays for a specific month
 */
export async function getHolidaysForMonth(
  country: string,
  year: number,
  month: number
): Promise<CalendarificHoliday[]> {
  return await getHolidays({
    country,
    year,
    month,
  });
}

/**
 * Check if a specific date is a holiday
 */
export async function isHoliday(
  country: string,
  date: Date
): Promise<{ isHoliday: boolean; holidays: CalendarificHoliday[] }> {
  const holidays = await getHolidaysForDate(country, date);
  return {
    isHoliday: holidays.length > 0,
    holidays,
  };
}

/**
 * Get holiday calendar data for calendar component
 * Returns a map of date strings to holiday information
 */
export async function getHolidayCalendarData(
  country: string,
  year: number,
  month?: number
): Promise<Map<string, CalendarificHoliday[]>> {
  const holidayMap = new Map<string, CalendarificHoliday[]>();

  const holidays = await getHolidays({
    country,
    year,
    month,
  });

  holidays.forEach((holiday) => {
    const dateKey = holiday.date.iso.split("T")[0]; // Get YYYY-MM-DD format
    const existingHolidays = holidayMap.get(dateKey) || [];
    holidayMap.set(dateKey, [...existingHolidays, holiday]);
  });

  return holidayMap;
}

/**
 * Format date for API requests (YYYY-MM-DD)
 */
export function formatDateForAPI(date: Date): string {
  return date.toISOString().split("T")[0];
}

/**
 * Get country code from country name (common mappings)
 */
export function getCountryCode(countryName: string): string {
  const countryCodeMap: { [key: string]: string } = {
    "United States": "US",
    "United Kingdom": "GB",
    "Canada": "CA",
    "Australia": "AU",
    "Germany": "DE",
    "France": "FR",
    "Italy": "IT",
    "Spain": "ES",
    "Japan": "JP",
    "China": "CN",
    "India": "IN",
    "Brazil": "BR",
    "Mexico": "MX",
    "Russia": "RU",
    "South Korea": "KR",
    "Netherlands": "NL",
    "Belgium": "BE",
    "Switzerland": "CH",
    "Austria": "AT",
    "Norway": "NO",
    "Sweden": "SE",
    "Denmark": "DK",
    "Finland": "FI",
    "Iceland": "IS",
    "Ireland": "IE",
    "Portugal": "PT",
    "Greece": "GR",
    "Turkey": "TR",
    "Egypt": "EG",
    "South Africa": "ZA",
    "New Zealand": "NZ",
    "Thailand": "TH",
    "Singapore": "SG",
    "Malaysia": "MY",
    "Indonesia": "ID",
    "Philippines": "PH",
    "Vietnam": "VN",
    "Croatia": "HR",
  };

  return countryCodeMap[countryName] || countryName;
}
