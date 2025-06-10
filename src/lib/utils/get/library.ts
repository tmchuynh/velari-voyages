import { cityFiles } from "@/lib/constants/info/city";
import { Library } from "@/lib/interfaces/services/venues";
import { Location } from "@/lib/types/types";
import {
  formatKebebToTitleCase,
  formatTitleToCamelCase,
  formatToSlug,
  removeAccents,
} from "../format";

/**
 * Retrieves a list of libraries for a given city.
 *
 * This function dynamically imports a module containing library data specific to the provided city.
 * It formats the city name to match the expected module and export naming conventions.
 * If the module or the specific export is not found, it logs an error and returns an empty array.
 *
 * @param {string} city - The name of the city for which to retrieve libraries.
 * @returns {Promise<Library[]>} A promise that resolves to an array of libraries for the specified city.
 *
 * @throws Will log an error if the city name is invalid, the module cannot be imported, or the expected export is missing.
 *
 * @example
 * const libraries = await getLibraries("New York");
 * console.log(libraries);
 */
export async function getLibraries(city: string): Promise<Library[]> {
  if (!city || typeof city !== "string") {
    console.error("Invalid city name provided:", city);
    return [];
  }

  // First remove accents from the entire city name, then format it
  const cityWithoutAccents = removeAccents(city);
  const cityFormatted =
    cityWithoutAccents.replaceAll(" ", "-").charAt(0).toLowerCase() +
    formatTitleToCamelCase(formatKebebToTitleCase(cityWithoutAccents.slice(1)))
      .replace("'", "")
      .replace("-", "");

  const libraryID = `${cityFormatted}Libraries`;
  const sluggedCity =
    formatToSlug(cityWithoutAccents.replace("'", "-")) + "-libraries";

  console.log(
    `Looking for libraries in: @/lib/constants/venues/libraries/${sluggedCity}`
  );
  console.log(`Export expected: export const ${libraryID}: Library[] = [];`);

  try {
    const libraryModule = await import(
      `@/lib/constants/venues/libraries/${sluggedCity}`
    );
    // Return the specific named export that matches libraryID
    if (libraryModule[libraryID]) {
      return libraryModule[libraryID];
    } else {
      // Try alternate naming conventions
      const alternateLibraryID = `${sluggedCity.replace(/-libraries$/, "")}Libraries`;
      if (libraryModule[alternateLibraryID]) {
        return libraryModule[alternateLibraryID];
      }

      console.error(
        `Export not found in module. Looking for: ${libraryID} or ${alternateLibraryID}`
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading library data: ${error}. Tried: @/lib/constants/venues/libraries/${sluggedCity} with export ${libraryID}`
    );
    return [];
  }
}

/**
 * Retrieves a list of libraries based on the provided city information.
 *
 * This function expects a `Location` object that must contain a `city` property.
 * If the `cityInfo` object or its `city` property is not provided or is invalid,
 * an error message is logged to the console, and an empty array is returned.
 * Otherwise, it delegates to the `getLibraries` function, passing the city name
 * to fetch the corresponding library data.
 *
 * @param cityInfo - An object of type `Location` containing the city for which to find libraries.
 *                   The `city` property within this object is essential.
 * @returns A promise that resolves to an array of `Library` objects.
 *          Returns an empty array if `cityInfo` or `cityInfo.city` is invalid,
 *          or if no libraries are found for the given city.
 */
export async function getLibrariesByLocation(
  cityInfo: Location
): Promise<Library[]> {
  if (!cityInfo || !cityInfo.city) {
    console.error("Invalid city information provided");
    return [];
  }

  return getLibraries(cityInfo.city);
}

/**
 * Retrieves all libraries from all cities.
 *
 * This function iterates through all available cities and fetches their library data.
 * It uses the city list from the constants and dynamically imports each city's library module.
 *
 * @returns {Promise<Library[]>} A promise that resolves to an array of all libraries across all cities.
 *
 * @example
 * const allLibraries = await getAllLibraries();
 * console.log(allLibraries);
 */
export async function getAllLibraries(): Promise<Library[]> {
  const allLibraries: Library[] = [];

  for (const city of cityFiles) {
    try {
      const libraries = await getLibraries(city);
      allLibraries.push(...libraries);
    } catch (error) {
      console.error(`Error loading libraries for ${city}:`, error);
    }
  }

  return allLibraries;
}

/**
 * Finds a library by its ID.
 *
 * This function searches through all libraries across all cities to find one with the specified ID.
 *
 * @param {string} id - The unique identifier of the library to find.
 * @returns {Promise<Library | null>} A promise that resolves to the library object if found, or null if not found.
 *
 * @example
 * const library = await getLibraryById("library-123");
 * if (library) {
 *   console.log(library.name);
 * }
 */
export async function getLibraryById(id: string): Promise<Library | null> {
  if (!id) {
    console.error("Library ID is required");
    return null;
  }

  const allLibraries = await getAllLibraries();
  return allLibraries.find((library) => library.id === id) || null;
}

/**
 * Finds libraries by vessel ID.
 *
 * This function searches through all libraries across all cities to find those associated with a specific vessel.
 *
 * @param {string} vesselId - The unique identifier of the vessel.
 * @returns {Promise<Library[]>} A promise that resolves to an array of libraries for the specified vessel.
 *
 * @example
 * const vesselLibraries = await getLibrariesByVesselId("vessel-123");
 * console.log(vesselLibraries);
 */
export async function getLibrariesByVesselId(
  vesselId: string
): Promise<Library[]> {
  if (!vesselId) {
    console.error("Vessel ID is required");
    return [];
  }

  const allLibraries = await getAllLibraries();
  return allLibraries.filter((library) => library.vesselId === vesselId);
}
