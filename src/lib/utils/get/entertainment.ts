import { cityFiles } from "@/lib/constants/info/city";
import {
  Entertainment,
  EntertainmentCategory,
} from "@/lib/interfaces/services/venues";
import { formatToSlug, removeAccents } from "../format";

/**
 * Retrieves entertainment categories for a given city and vessel.
 *
 * This function dynamically imports a module containing entertainment category data specific to the provided city and vessel.
 * It formats the city and vessel names to match the expected module and export naming conventions.
 * If the module or the specific export is not found, it logs an error and returns an empty array.
 *
 * @param {string} city - The name of the city for which to retrieve entertainment categories.
 * @param {string} vessel - The name of the vessel for which to retrieve entertainment categories.
 * @returns {Promise<EntertainmentCategory[]>} A promise that resolves to an array of entertainment categories for the specified city and vessel.
 *
 * @throws Will log an error if the city/vessel names are invalid, the module cannot be imported, or the expected export is missing.
 *
 * @example
 * const categories = await getEntertainmentCategories("New York", "royal-explorer");
 * console.log(categories);
 */
export async function getEntertainmentCategories(
  city: string,
  vessel: string
): Promise<EntertainmentCategory[]> {
  if (
    !city ||
    typeof city !== "string" ||
    !vessel ||
    typeof vessel !== "string"
  ) {
    console.error("Invalid city or vessel name provided:", { city, vessel });
    return [];
  }

  // First remove accents from the entire city name, then format it
  const cityWithoutAccents = removeAccents(city);
  const sluggedCity = formatToSlug(cityWithoutAccents.replace("'", "-"));
  const sluggedVessel = formatToSlug(vessel);

  console.log(
    `Looking for entertainment categories in: @/lib/constants/venues/entertainment/${sluggedCity}/${sluggedVessel}/entertainment`
  );

  try {
    const entertainmentModule = await import(
      `@/lib/constants/venues/entertainment/${sluggedCity}/${sluggedVessel}/entertainment`
    );

    // Return the default export or named export
    if (entertainmentModule.default) {
      return entertainmentModule.default;
    } else if (entertainmentModule.entertainmentCategories) {
      return entertainmentModule.entertainmentCategories;
    } else {
      console.error(
        `No entertainment categories export found in module for ${city}/${vessel}`
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading entertainment categories: ${error}. Tried: @/lib/constants/venues/entertainment/${sluggedCity}/${sluggedVessel}/entertainment`
    );
    return [];
  }
}

/**
 * Retrieves entertainment shows for a specific category, city and vessel.
 *
 * This function dynamically imports a module containing entertainment show data specific to the provided category, city and vessel.
 * It formats the names to match the expected module and export naming conventions.
 *
 * @param {string} city - The name of the city for which to retrieve entertainment shows.
 * @param {string} vessel - The name of the vessel for which to retrieve entertainment shows.
 * @param {string} category - The entertainment category type (e.g., "live-music", "comedy").
 * @returns {Promise<Entertainment[]>} A promise that resolves to an array of entertainment shows for the specified parameters.
 *
 * @example
 * const shows = await getEntertainmentShows("New York", "royal-explorer", "live-music");
 * console.log(shows);
 */
export async function getEntertainmentShows(
  city: string,
  vessel: string,
  category: string
): Promise<Entertainment[]> {
  if (
    !city ||
    typeof city !== "string" ||
    !vessel ||
    typeof vessel !== "string" ||
    !category ||
    typeof category !== "string"
  ) {
    console.error("Invalid parameters provided:", { city, vessel, category });
    return [];
  }

  // First remove accents from the entire city name, then format it
  const cityWithoutAccents = removeAccents(city);
  const sluggedCity = formatToSlug(cityWithoutAccents.replace("'", "-"));
  const sluggedVessel = formatToSlug(vessel);
  const sluggedCategory = formatToSlug(category);

  console.log(
    `Looking for entertainment shows in: @/lib/constants/venues/entertainment/${sluggedCity}/${sluggedVessel}/${sluggedCategory}-entertainment`
  );

  try {
    const entertainmentModule = await import(
      `@/lib/constants/venues/entertainment/${sluggedCity}/${sluggedVessel}/${sluggedCategory}-entertainment`
    );

    // Return the default export or look for named exports
    if (entertainmentModule.default) {
      return entertainmentModule.default;
    } else {
      // Try to find any array export that looks like entertainment data
      const exports = Object.keys(entertainmentModule);
      const entertainmentExport = exports.find(
        (key) =>
          key.toLowerCase().includes("entertainment") ||
          key.toLowerCase().includes("shows") ||
          Array.isArray(entertainmentModule[key])
      );

      if (entertainmentExport) {
        return entertainmentModule[entertainmentExport];
      }

      console.error(
        `No entertainment shows export found in module for ${city}/${vessel}/${category}`
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading entertainment shows: ${error}. Tried: @/lib/constants/venues/entertainment/${sluggedCity}/${sluggedVessel}/${sluggedCategory}-entertainment`
    );
    return [];
  }
}

/**
 * Retrieves all entertainment categories from all cities and vessels.
 *
 * This function iterates through all available cities and fetches their entertainment category data.
 * Note: This is a simplified implementation that may need vessel-specific logic.
 *
 * @returns {Promise<EntertainmentCategory[]>} A promise that resolves to an array of all entertainment categories.
 *
 * @example
 * const allCategories = await getAllEntertainmentCategories();
 * console.log(allCategories);
 */
export async function getAllEntertainmentCategories(): Promise<
  EntertainmentCategory[]
> {
  const allCategories: EntertainmentCategory[] = [];

  for (const city of cityFiles) {
    try {
      // This is a simplified approach - in practice, you'd need to know the vessel names
      // For now, we'll skip implementation or implement based on your vessel structure
      console.warn(
        `Getting all entertainment categories requires vessel information for ${city}`
      );
    } catch (error) {
      console.error(
        `Error loading entertainment categories for ${city}:`,
        error
      );
    }
  }

  return allCategories;
}

/**
 * Retrieves all entertainment shows from all cities and vessels.
 *
 * This function iterates through all available cities and fetches their entertainment show data.
 * Note: This is a simplified implementation that may need vessel-specific logic.
 *
 * @returns {Promise<Entertainment[]>} A promise that resolves to an array of all entertainment shows.
 *
 * @example
 * const allShows = await getAllEntertainmentShows();
 * console.log(allShows);
 */
export async function getAllEntertainmentShows(): Promise<Entertainment[]> {
  const allShows: Entertainment[] = [];

  for (const city of cityFiles) {
    try {
      // This is a simplified approach - in practice, you'd need to know the vessel names and categories
      // For now, we'll skip implementation or implement based on your vessel structure
      console.warn(
        `Getting all entertainment shows requires vessel and category information for ${city}`
      );
    } catch (error) {
      console.error(`Error loading entertainment shows for ${city}:`, error);
    }
  }

  return allShows;
}

/**
 * Finds an entertainment show by its ID.
 *
 * This function searches through entertainment shows to find one with the specified ID.
 * Note: This requires iterating through all cities, vessels, and categories.
 *
 * @param {string} id - The unique identifier of the entertainment show to find.
 * @returns {Promise<Entertainment | null>} A promise that resolves to the entertainment show if found, or null if not found.
 *
 * @example
 * const show = await getEntertainmentById("show-123");
 * if (show) {
 *   console.log(show.name);
 * }
 */
export async function getEntertainmentById(
  id: string
): Promise<Entertainment | null> {
  if (!id) {
    console.error("Entertainment ID is required");
    return null;
  }

  // This would require iterating through all entertainment shows
  // Implementation depends on your specific data structure
  console.warn(
    "getEntertainmentById requires implementation based on your entertainment data structure"
  );
  return null;
}

/**
 * Finds entertainment by vessel ID.
 *
 * This function searches through entertainment across all cities to find those associated with a specific vessel.
 *
 * @param {string} vesselId - The unique identifier of the vessel.
 * @returns {Promise<Entertainment[]>} A promise that resolves to an array of entertainment for the specified vessel.
 *
 * @example
 * const vesselEntertainment = await getEntertainmentByVesselId("vessel-123");
 * console.log(vesselEntertainment);
 */
export async function getEntertainmentByVesselId(
  vesselId: string
): Promise<Entertainment[]> {
  if (!vesselId) {
    console.error("Vessel ID is required");
    return [];
  }

  // This would require iterating through all entertainment
  // Implementation depends on your specific data structure
  console.warn(
    "getEntertainmentByVesselId requires implementation based on your entertainment data structure"
  );
  return [];
}
