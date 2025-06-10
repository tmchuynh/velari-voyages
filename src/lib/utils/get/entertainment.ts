import { cityFiles } from "@/lib/constants/info/city";
import {
  Entertainment,
  EntertainmentCategory,
} from "@/lib/interfaces/services/venues";
import { formatToSlug, removeAccents } from "../format";

/**
 * Helper function to get vessel name from vessel ID by searching through all city vessels
 */
async function getVesselNameById(vesselId: string): Promise<string | null> {
  for (const city of cityFiles) {
    try {
      const cityWithoutAccents = removeAccents(city);
      const vesselFilePath = `@/lib/constants/cruises/vessels/${cityWithoutAccents}-vessels`;
      const vesselModule = await import(vesselFilePath);
      
      const vesselData = vesselModule.default || Object.values(vesselModule)[0];
      if (Array.isArray(vesselData)) {
        const vessel = vesselData.find(v => v.id === vesselId);
        if (vessel) {
          return vessel.name;
        }
      }
    } catch (error) {
      // City vessel file doesn't exist, continue searching
      continue;
    }
  }
  return null;
}

/**
 * Retrieves entertainment categories for a given city and vessel.
 *
 * This function dynamically imports a module containing entertainment category data specific to the provided city and vessel.
 * It formats the city and vessel names to match the expected module and export naming conventions.
 * If the module or the specific export is not found, it logs an error and returns an empty array.
 *
 * @param {string} city - The name of the city for which to retrieve entertainment categories.
 * @param {string} vesselIdOrName - The ID or name of the vessel for which to retrieve entertainment categories.
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
  vesselIdOrName: string
): Promise<EntertainmentCategory[]> {
  if (
    !city ||
    typeof city !== "string" ||
    !vesselIdOrName ||
    typeof vesselIdOrName !== "string"
  ) {
    console.error("Invalid city or vessel name provided:", {
      city,
      vesselIdOrName,
    });
    return [];
  }

  // First, try to get vessel name from vessel ID if needed
  let vesselName = vesselIdOrName;

  // If it looks like a vessel ID (contains dashes and short format), try to get the actual name
  if (vesselIdOrName.includes("-") && vesselIdOrName.length < 50) {
    const actualVesselName = await getVesselNameById(vesselIdOrName);
    if (actualVesselName) {
      vesselName = actualVesselName;
    }
  }

  // First remove accents from the entire city name, then format it
  const cityWithoutAccents = removeAccents(city);
  const sluggedCity = formatToSlug(cityWithoutAccents.replace("'", "-"));
  const sluggedVessel = formatToSlug(vesselName);

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
        `No entertainment categories export found in module for ${city}/${vesselName}`
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
      // Get vessel data for this city to know which vessels exist
      const vesselFilePath = `@/lib/constants/cruises/vessels/${city}-vessels`;
      const vesselModule = await import(vesselFilePath);

      // Extract vessel names from the vessel data
      const vesselData = vesselModule.default || Object.values(vesselModule)[0];
      if (Array.isArray(vesselData)) {
        for (const vessel of vesselData) {
          try {
            const cityWithoutAccents = removeAccents(city);
            const sluggedCity = formatToSlug(
              cityWithoutAccents.replace("'", "-")
            );
            const sluggedVessel = formatToSlug(vessel.name);

            const entertainmentModule = await import(
              `@/lib/constants/venues/entertainment/${sluggedCity}/${sluggedVessel}/entertainment`
            );

            const categories =
              entertainmentModule.entertainmentCategories ||
              entertainmentModule.default;
            if (categories && Array.isArray(categories)) {
              allCategories.push(...categories);
            }
          } catch (vesselError) {
            // Vessel entertainment file doesn't exist, skip silently
            continue;
          }
        }
      }
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
      // Get vessel data for this city to know which vessels exist
      const vesselFilePath = `@/lib/constants/cruises/vessels/${city}-vessels`;
      const vesselModule = await import(vesselFilePath);

      // Extract vessel names from the vessel data
      const vesselData = vesselModule.default || Object.values(vesselModule)[0];
      if (Array.isArray(vesselData)) {
        for (const vessel of vesselData) {
          try {
            const cityWithoutAccents = removeAccents(city);
            const sluggedCity = formatToSlug(
              cityWithoutAccents.replace("'", "-")
            );
            const sluggedVessel = formatToSlug(vessel.name);

            // Get entertainment categories first to know which show files exist
            const entertainmentModule = await import(
              `@/lib/constants/venues/entertainment/${sluggedCity}/${sluggedVessel}/entertainment`
            );

            const categories =
              entertainmentModule.entertainmentCategories ||
              entertainmentModule.default;
            if (categories && Array.isArray(categories)) {
              for (const category of categories) {
                try {
                  const sluggedCategory = formatToSlug(category.type);
                  const showModule = await import(
                    `@/lib/constants/venues/entertainment/${sluggedCity}/${sluggedVessel}/${sluggedCategory}-entertainment`
                  );

                  // Look for entertainment shows in the module
                  const shows =
                    showModule.default ||
                    showModule[`${formatToSlug(category.type)}Entertainment`] ||
                    Object.values(showModule).find((exp) => Array.isArray(exp));

                  if (shows && Array.isArray(shows)) {
                    allShows.push(...shows);
                  }
                } catch (showError) {
                  // Show file doesn't exist for this category, skip silently
                  continue;
                }
              }
            }
          } catch (vesselError) {
            // Vessel entertainment file doesn't exist, skip silently
            continue;
          }
        }
      }
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

  const allShows = await getAllEntertainmentShows();
  return allShows.find((show) => show.id === id) || null;
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

  // First get all entertainment categories for this vessel
  const allCategories = await getAllEntertainmentCategories();
  const vesselCategories = allCategories.filter(
    (category) => category.vesselId === vesselId
  );

  if (vesselCategories.length === 0) {
    return [];
  }

  const vesselShows: Entertainment[] = [];

  // For each category of this vessel, get the corresponding entertainment shows
  for (const category of vesselCategories) {
    const allShows = await getAllEntertainmentShows();
    const categoryShows = allShows.filter((show) => show.id === category.id);
    vesselShows.push(...categoryShows);
  }

  return vesselShows;
}
