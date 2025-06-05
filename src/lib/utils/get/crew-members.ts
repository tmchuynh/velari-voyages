import { cityFiles } from "@/lib/constants/info/city";
import { CrewMember } from "@/lib/interfaces/people/staff";
import {
  formatKebebToTitleCase,
  formatTitleToCamelCase,
  formatToSlug,
  removeAccents,
} from "../format";

/**
 * Retrieves crew member data for a specified city.
 *
 * This function dynamically imports a module containing crew member data
 * based on the formatted city name. It attempts to locate a specific named
 * export within the module that matches the generated crew ID. If the export
 * is found, it returns the crew member data; otherwise, it logs an error and
 * returns an empty array.
 *
 * @param city - The name of the city for which to retrieve crew member data.
 *               Accents and special characters are removed, and the name is
 *               formatted to generate a crew ID.
 * @returns A promise that resolves to an array of `CrewMember` objects.
 *          Returns an empty array if the module or named export is not found.
 *
 * @throws An error is logged if the module fails to load or the named export
 *         does not exist.
 */
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
        cityWithoutAccents.replace("'", "-"),
      )}`
    );
    // Return the specific named export that matches crewID
    if (crewModule[crewID]) {
      return crewModule[crewID] as CrewMember[];
    } else {
      console.error(
        `Export named export const ${crewID}: CrewMember[] =[]; not found in module`,
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading resource from @/lib/constants/crewMembers: ${error} export const ${crewID}: CrewMember[] = [];`,
    );
    return [];
  }
}

/**
 * Retrieves all team members from various city-specific modules and combines them into a single array.
 *
 * This function dynamically imports modules containing crew member data for different cities,
 * aggregates the data, and returns a combined list of all crew members.
 *
 * @async
 * @function
 * @returns {Promise<CrewMember[]>} A promise that resolves to an array of all crew members.
 *
 * @throws {Error} If there is an issue importing a city-specific module, an error is logged to the console.
 *
 * @example
 * const allTeamMembers = await getAllTeamMembers();
 * console.log(allTeamMembers);
 */
export async function getAllTeamMembers(): Promise<CrewMember[]> {
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
          `No valid team members found for ${city} within @/lib/constants/staff/crewMembers/${city}.ts`,
        );
      }
    } catch (error) {
      console.error(`Error importing team members for ${city}:`, error);
    }
  }

  return allCrewMembers;
}
