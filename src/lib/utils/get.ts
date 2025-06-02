import { CrewMember } from "../interfaces/people/staff";
import { Cruise } from "../interfaces/services/cruises";
import {
  formatKebebToTitleCase,
  formatTitleToCamelCase,
  formatToSlug,
  removeAccents,
} from "./format";

/**
 * Generates an array of random dates starting from next week's Monday.
 *
 * @param count - The number of random dates to generate
 * @param rangeInDays - Optional. The range in days from next Monday to generate dates from. Default is 30 days.
 * @returns An array of date strings in 'YYYY-MM-DD' format
 *
 * @example
 * // Get 5 random dates within 30 days from next Monday
 * const dates = getRandomDatesFromNextWeek(5);
 *
 * @example
 * // Get 3 random dates within 7 days from next Monday
 * const dates = getRandomDatesFromNextWeek(3, 7);
 */
export function getRandomDatesFromNextWeek(
  count: number,
  rangeInDays = 30
): string[] {
  const dates = new Set<string>();

  // Get today's date
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sun) to 6 (Sat)

  // Get next week's Monday
  const daysUntilNextMonday = (8 - dayOfWeek) % 7 || 7;
  const startDate = new Date(today);
  startDate.setDate(today.getDate() + daysUntilNextMonday);

  // Generate random dates
  while (dates.size < count) {
    const randomOffset = Math.floor(Math.random() * rangeInDays); // e.g. within 30 days from start
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + randomOffset);
    dates.add(date.toISOString().split("T")[0]); // Format: YYYY-MM-DD
  }

  return Array.from(dates);
}

export async function getCrewMemberData(city: string): Promise<CrewMember[]> {
  // First remove accents from the entire city name, then format it
  const cityWithoutAccents = removeAccents(city);
  const cityFormatted =
    cityWithoutAccents.replaceAll(" ", "-").charAt(0).toLowerCase() +
    formatTitleToCamelCase(formatKebebToTitleCase(cityWithoutAccents.slice(1)))
      .replace("'", "")
      .replace("-", "");
  const crewID = `${cityFormatted}TeamMembers`;
  try {
    const crewModule = await import(
      `@/lib/constants/crewMembers/${formatToSlug(
        cityWithoutAccents.replace("'", "-")
      )}`
    );
    // Return the specific named export that matches crewID
    if (crewModule[crewID]) {
      return crewModule[crewID] as CrewMember[];
    } else {
      console.error(
        `Export named export const ${crewID}: CrewMember[] =[]; not found in module`
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading resource from @/lib/constants/crewMembers: ${error} export const ${crewID}: CrewMember[] = [];`
    );
    return [];
  }
}

export async function getCruises(city: string): Promise<any> {
  // First remove accents from the entire city name, then format it
  const cityWithoutAccents = removeAccents(city);
  const cityFormatted =
    cityWithoutAccents.replaceAll(" ", "-").charAt(0).toLowerCase() +
    formatTitleToCamelCase(formatKebebToTitleCase(cityWithoutAccents.slice(1)))
      .replace("'", "")
      .replace("-", "");

  const cruiseID = `${cityFormatted}Cruises`;

  try {
    const cruiseModule = await import(
      `@/lib/constants/cruises/${formatToSlug(
        cityWithoutAccents.replace("'", "-")
      )}`
    );
    // Return the specific named export that matches cruiseID
    if (cruiseModule[cruiseID]) {
      return cruiseModule[cruiseID];
    } else {
      console.error(
        `Export named export const ${cruiseID}: Cruise[] =[]; not found in module`
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading resource from @/lib/constants/tours: ${error} export const ${cruiseID}: Tour[] = [];`
    );
    return [];
  }
}

export function getCruisesByCategory(
  cruises: Cruise[],
  category: string
): Cruise[] {
  if (!cruises || !Array.isArray(cruises)) {
    console.error("Invalid tours data provided");
    return [];
  }

  // Filter tours by the specified category ID
  const filteredCruises = cruises.filter(
    (tour) => tour.tourCategoryId === category
  );

  if (filteredCruises.length === 0) {
    console.warn(`No tours found for category ID: ${category}`);
  }
  return filteredCruises;
}

export async function getAllCruises(): Promise<Cruise[]> {
  // List of all city file names (without the .ts extension)
  const cityFiles = [
    "auckland",
    "barcelona",
    "buenos-aires",
    "cape-town",
    "dubai",
    "fort-lauderdale",
    "galveston",
    "hong-kong",
    "lisbon",
    "los-angeles",
    "miami",
    "new-orleans",
    "new-york-city",
    "rome",
    "seattle",
    "singapore",
    "southampton",
    "sydney",
    "tokyo",
    "vancouver",
  ];

  // Combined array for all cruises
  const allCruises: Cruise[] = [];

  // Loop through each city file and import its cruises
  for (const city of cityFiles) {
    try {
      // Dynamic import of the cruises file
      const cruisesModule = await import(
        `@/lib/constants/cruises/${removeAccents(city)}`
      );

      // Get the cruises array using the city name + TourGuides naming convention
      const cityTourGuides = cruisesModule[`${city}TourGuides`];

      if (cityTourGuides && Array.isArray(cityTourGuides)) {
        // Add all cruises from this city to the combined array
        allCruises.push(...cityTourGuides);
      } else {
        console.warn(
          `No valid cruises found for ${city} within @/lib/constants/cruises/${city}.ts`
        );
      }
    } catch (error) {
      console.error(`Error importing cruises for ${city}:`, error);
    }
  }

  return allCruises;
}

export async function getAllTeamMembers(): Promise<CrewMember[]> {
  // List of all city file names (without the .ts extension)
  const cityFiles = [
    "auckland",
    "barcelona",
    "buenos-aires",
    "cape-town",
    "dubai",
    "fort-lauderdale",
    "galveston",
    "hong-kong",
    "lisbon",
    "los-angeles",
    "miami",
    "new-orleans",
    "new-york-city",
    "rome",
    "seattle",
    "singapore",
    "southampton",
    "sydney",
    "tokyo",
    "vancouver",
  ];

  // Combined array for all team members
  const allCrewMembers: CrewMember[] = [];

  // Loop through each city file and import its team members
  for (const city of cityFiles) {
    try {
      // Dynamic import of the team members file
      const crewMembersModule = await import(
        `@/lib/constants/crewMembers/${removeAccents(city)}`
      );

      // Get the team members array using the city name + TeamMembers naming convention
      const cruiseTeamMembers = crewMembersModule[`${city}TeamMembers`];

      if (cruiseTeamMembers && Array.isArray(cruiseTeamMembers)) {
        // Add all team members from this city to the combined array
        allCrewMembers.push(...cruiseTeamMembers);
      } else {
        console.warn(
          `No valid team members found for ${city} within @/lib/constants/staff/crewMembers/${city}.ts`
        );
      }
    } catch (error) {
      console.error(`Error importing team members for ${city}:`, error);
    }
  }

  return allCrewMembers;
}
