import { cityFiles } from "@/lib/constants/info/city";
import { Casino } from "@/lib/interfaces/services/venues";
import { Location } from "@/lib/types/types";
import {
  formatKebebToTitleCase,
  formatTitleToCamelCase,
  formatToSlug,
  removeAccents,
} from "../format";

/**
 * Retrieves a list of casinos for a given city.
 *
 * This function dynamically imports a module containing casino data specific to the provided city.
 * It formats the city name to match the expected module and export naming conventions.
 * If the module or the specific export is not found, it logs an error and returns an empty array.
 *
 * @param {string} city - The name of the city for which to retrieve casinos.
 * @returns {Promise<Casino[]>} A promise that resolves to an array of casinos for the specified city.
 *
 * @throws Will log an error if the city name is invalid, the module cannot be imported, or the expected export is missing.
 *
 * @example
 * const casinos = await getCasinos("Las Vegas");
 * console.log(casinos);
 */
export async function getCasinos(city: string): Promise<Casino[]> {
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

  const casinoID = `${cityFormatted}Casinos`;
  const sluggedCity =
    formatToSlug(cityWithoutAccents.replace("'", "-")) + "-casinos";

  console.log(
    `Looking for casinos in: @/lib/constants/venues/casinos/${sluggedCity}`,
  );
  console.log(`Export expected: export const ${casinoID}: Casino[] = [];`);

  try {
    const casinoModule = await import(
      `@/lib/constants/venues/casinos/${sluggedCity}`
    );
    // Return the specific named export that matches casinoID
    if (casinoModule[casinoID]) {
      return casinoModule[casinoID];
    } else {
      // Try alternate naming conventions
      const alternateCasinoID = `${sluggedCity.replace(/-casinos$/, "")}Casinos`;
      if (casinoModule[alternateCasinoID]) {
        return casinoModule[alternateCasinoID];
      }

      console.error(
        `Export not found in module. Looking for: ${casinoID} or ${alternateCasinoID}`,
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading casino data: ${error}. Tried: @/lib/constants/venues/casinos/${sluggedCity} with export ${casinoID}`,
    );
    return [];
  }
}

/**
 * Retrieves a list of casinos based on the provided city information.
 *
 * This function expects a `Location` object that must contain a `city` property.
 * If the `cityInfo` object or its `city` property is not provided or is invalid,
 * an error message is logged to the console, and an empty array is returned.
 * Otherwise, it delegates to the `getCasinos` function, passing the city name
 * to fetch the corresponding casino data.
 *
 * @param cityInfo - An object of type `Location` containing the city for which to find casinos.
 *                   The `city` property within this object is essential.
 * @returns A promise that resolves to an array of `Casino` objects.
 *          Returns an empty array if `cityInfo` or `cityInfo.city` is invalid,
 *          or if no casinos are found for the given city.
 */
export async function getCasinosByLocation(
  cityInfo: Location,
): Promise<Casino[]> {
  if (!cityInfo || !cityInfo.city) {
    console.error("Invalid city information provided");
    return [];
  }

  return getCasinos(cityInfo.city);
}

/**
 * Retrieves all casinos from all cities.
 *
 * This function iterates through all available cities and fetches their casino data.
 * It uses the city list from the constants and dynamically imports each city's casino module.
 *
 * @returns {Promise<Casino[]>} A promise that resolves to an array of all casinos across all cities.
 *
 * @example
 * const allCasinos = await getAllCasinos();
 * console.log(allCasinos);
 */
export async function getAllCasinos(): Promise<Casino[]> {
  const allCasinos: Casino[] = [];

  for (const city of cityFiles) {
    try {
      const casinos = await getCasinos(city);
      allCasinos.push(...casinos);
    } catch (error) {
      console.error(`Error loading casinos for ${city}:`, error);
    }
  }

  return allCasinos;
}

/**
 * Finds a casino by its ID.
 *
 * This function searches through all casinos across all cities to find one with the specified ID.
 *
 * @param {string} id - The unique identifier of the casino to find.
 * @returns {Promise<Casino | null>} A promise that resolves to the casino object if found, or null if not found.
 *
 * @example
 * const casino = await getCasinoById("casino-123");
 * if (casino) {
 *   console.log(casino.name);
 * }
 */
export async function getCasinoById(id: string): Promise<Casino | null> {
  if (!id) {
    console.error("Casino ID is required");
    return null;
  }

  const allCasinos = await getAllCasinos();
  return allCasinos.find((casino) => casino.id === id) || null;
}

/**
 * Finds casinos by vessel ID.
 *
 * This function searches through all casinos across all cities to find those associated with a specific vessel.
 *
 * @param {string} vesselId - The unique identifier of the vessel.
 * @returns {Promise<Casino[]>} A promise that resolves to an array of casinos for the specified vessel.
 *
 * @example
 * const vesselCasinos = await getCasinosByVesselId("vessel-123");
 * console.log(vesselCasinos);
 */
export async function getCasinosByVesselId(
  vesselId: string,
): Promise<Casino[]> {
  if (!vesselId) {
    console.error("Vessel ID is required");
    return [];
  }

  const allCasinos = await getAllCasinos();
  return allCasinos.filter((casino) => casino.vesselId === vesselId);
}
