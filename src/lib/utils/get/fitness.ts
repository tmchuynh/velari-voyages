import { cityFiles } from "@/lib/constants/info/city";
import { FitnessCenter } from "@/lib/interfaces/services/venues";
import { Location } from "@/lib/types/types";
import {
  formatKebebToTitleCase,
  formatTitleToCamelCase,
  formatToSlug,
  removeAccents,
} from "../format";

/**
 * Retrieves a list of fitness centers for a given city.
 *
 * This function dynamically imports a module containing fitness center data specific to the provided city.
 * It formats the city name to match the expected module and export naming conventions.
 * If the module or the specific export is not found, it logs an error and returns an empty array.
 *
 * @param {string} city - The name of the city for which to retrieve fitness centers.
 * @returns {Promise<FitnessCenter[]>} A promise that resolves to an array of fitness centers for the specified city.
 *
 * @throws Will log an error if the city name is invalid, the module cannot be imported, or the expected export is missing.
 *
 * @example
 * const fitnessCenters = await getFitnessCenters("New York");
 * console.log(fitnessCenters);
 */
export async function getFitnessCenters(
  city: string
): Promise<FitnessCenter[]> {
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

  const fitnessCenterID = `${cityFormatted}FitnessCenters`;
  const sluggedCity =
    formatToSlug(cityWithoutAccents.replace("'", "-")) + "-fitness";

  console.log(
    `Looking for fitness centers in: @/lib/constants/venues/fitness/${sluggedCity}`
  );
  console.log(
    `Export expected: export const ${fitnessCenterID}: FitnessCenter[] = [];`
  );

  try {
    const fitnessModule = await import(
      `@/lib/constants/venues/fitness/${sluggedCity}`
    );
    // Return the specific named export that matches fitnessCenterID
    if (fitnessModule[fitnessCenterID]) {
      return fitnessModule[fitnessCenterID];
    } else {
      // Try alternate naming conventions
      const alternateFitnessCenterID = `${sluggedCity.replace(/-fitness$/, "")}FitnessCenters`;
      if (fitnessModule[alternateFitnessCenterID]) {
        return fitnessModule[alternateFitnessCenterID];
      }

      console.error(
        `Export not found in module. Looking for: ${fitnessCenterID} or ${alternateFitnessCenterID}`
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading fitness center data: ${error}. Tried: @/lib/constants/venues/fitness/${sluggedCity} with export ${fitnessCenterID}`
    );
    return [];
  }
}

/**
 * Retrieves a list of fitness centers based on the provided city information.
 *
 * This function expects a `Location` object that must contain a `city` property.
 * If the `cityInfo` object or its `city` property is not provided or is invalid,
 * an error message is logged to the console, and an empty array is returned.
 * Otherwise, it delegates to the `getFitnessCenters` function, passing the city name
 * to fetch the corresponding fitness center data.
 *
 * @param cityInfo - An object of type `Location` containing the city for which to find fitness centers.
 *                   The `city` property within this object is essential.
 * @returns A promise that resolves to an array of `FitnessCenter` objects.
 *          Returns an empty array if `cityInfo` or `cityInfo.city` is invalid,
 *          or if no fitness centers are found for the given city.
 */
export async function getFitnessCentersByLocation(
  cityInfo: Location
): Promise<FitnessCenter[]> {
  if (!cityInfo || !cityInfo.city) {
    console.error("Invalid city information provided");
    return [];
  }

  return getFitnessCenters(cityInfo.city);
}

/**
 * Retrieves all fitness centers from all cities.
 *
 * This function iterates through all available cities and fetches their fitness center data.
 * It uses the city list from the constants and dynamically imports each city's fitness center module.
 *
 * @returns {Promise<FitnessCenter[]>} A promise that resolves to an array of all fitness centers across all cities.
 *
 * @example
 * const allFitnessCenters = await getAllFitnessCenters();
 * console.log(allFitnessCenters);
 */
export async function getAllFitnessCenters(): Promise<FitnessCenter[]> {
  const allFitnessCenters: FitnessCenter[] = [];

  for (const city of cityFiles) {
    try {
      const fitnessCenters = await getFitnessCenters(city);
      allFitnessCenters.push(...fitnessCenters);
    } catch (error) {
      console.error(`Error loading fitness centers for ${city}:`, error);
    }
  }

  return allFitnessCenters;
}

/**
 * Finds a fitness center by its ID.
 *
 * This function searches through all fitness centers across all cities to find one with the specified ID.
 *
 * @param {string} id - The unique identifier of the fitness center to find.
 * @returns {Promise<FitnessCenter | null>} A promise that resolves to the fitness center object if found, or null if not found.
 *
 * @example
 * const fitnessCenter = await getFitnessCenterById("fitness-123");
 * if (fitnessCenter) {
 *   console.log(fitnessCenter.name);
 * }
 */
export async function getFitnessCenterById(
  id: string
): Promise<FitnessCenter | null> {
  if (!id) {
    console.error("Fitness center ID is required");
    return null;
  }

  const allFitnessCenters = await getAllFitnessCenters();
  return allFitnessCenters.find((center) => center.id === id) || null;
}

/**
 * Finds fitness centers by vessel ID.
 *
 * This function searches through all fitness centers across all cities to find those associated with a specific vessel.
 *
 * @param {string} vesselId - The unique identifier of the vessel.
 * @returns {Promise<FitnessCenter[]>} A promise that resolves to an array of fitness centers for the specified vessel.
 *
 * @example
 * const vesselFitnessCenters = await getFitnessCentersByVesselId("vessel-123");
 * console.log(vesselFitnessCenters);
 */
export async function getFitnessCentersByVesselId(
  vesselId: string
): Promise<FitnessCenter[]> {
  if (!vesselId) {
    console.error("Vessel ID is required");
    return [];
  }

  const allFitnessCenters = await getAllFitnessCenters();
  return allFitnessCenters.filter((center) => center.vesselId === vesselId);
}
