import { cityFiles } from "@/lib/constants/info/city";
import { Spa } from "@/lib/interfaces/services/venues";
import { Location } from "@/lib/types/types";
import { formatTitleToCamelCase, formatToSlug, removeAccents } from "../format";

/**
 * Retrieves a list of spas for a given city.
 *
 * This function dynamically imports a module containing spa data specific to the provided city.
 * It formats the city name to match the expected module and export naming conventions.
 * If the module or the specific export is not found, it logs an error and returns an empty array.
 *
 * @param {string} city - The name of the city for which to retrieve spas.
 * @returns {Promise<Spa[]>} A promise that resolves to an array of spas for the specified city.
 *
 * @throws Will log an error if the city name is invalid, the module cannot be imported, or the expected export is missing.
 *
 * @example
 * const spas = await getSpas("Miami");
 * console.log(spas);
 */
export async function getSpas(city: string): Promise<Spa[]> {
  if (!city || typeof city !== "string") {
    console.error("Invalid city name provided:", city);
    return [];
  }

  try {
    const formattedCitySlug = formatToSlug(removeAccents(city));
    const camelCaseExportName = formatTitleToCamelCase(city);

    const spaModule = await import(
      `@/lib/constants/venues/spas/${formattedCitySlug}-spas`
    );

    const exportName = `${camelCaseExportName}Spas`;
    const spas = spaModule[exportName];

    if (!spas) {
      console.error(
        `Export "${exportName}" not found in ${formattedCitySlug}-spas module`,
      );
      return [];
    }

    return spas;
  } catch (error) {
    console.error(`Error importing spa data for city "${city}":`, error);
    return [];
  }
}

/**
 * Retrieves a list of spas for a specific location.
 *
 * This function calls the getSpas function with the city from the provided location.
 *
 * @param {Location} location - The location object containing the city name.
 * @returns {Promise<Spa[]>} A promise that resolves to an array of spas for the specified location.
 *
 * @example
 * const location = { city: "Miami", country: "United States" };
 * const spas = await getSpasByLocation(location);
 * console.log(spas);
 */
export async function getSpasByLocation(location: Location): Promise<Spa[]> {
  return getSpas(location.city);
}

/**
 * Retrieves all spas from all available cities.
 *
 * This function iterates through all city files, imports their spa data,
 * and combines them into a single array.
 *
 * @returns {Promise<Spa[]>} A promise that resolves to an array of all spas from all cities.
 *
 * @example
 * const allSpas = await getAllSpas();
 * console.log(allSpas.length);
 */
export async function getAllSpas(): Promise<Spa[]> {
  const allSpas: Spa[] = [];

  for (const city of cityFiles) {
    try {
      const citySpas = await getSpas(city);
      allSpas.push(...citySpas);
    } catch (error) {
      console.error(`Error loading spa data for city "${city}":`, error);
    }
  }

  return allSpas;
}

/**
 * Retrieves a specific spa by its ID.
 *
 * This function searches through all spas from all cities to find one with the matching ID.
 *
 * @param {string} id - The unique identifier of the spa.
 * @returns {Promise<Spa | undefined>} A promise that resolves to the spa with the specified ID, or undefined if not found.
 *
 * @example
 * const spa = await getSpaById("b489d1f4-7481-4408-bb02-6da7fb8136a8");
 * if (spa) {
 *   console.log(spa.name);
 * }
 */
export async function getSpaById(id: string): Promise<Spa | undefined> {
  if (!id || typeof id !== "string") {
    console.error("Invalid spa ID provided:", id);
    return undefined;
  }

  const allSpas = await getAllSpas();
  return allSpas.find((spa) => spa.id === id);
}

/**
 * Retrieves all spas for a specific vessel.
 *
 * This function searches through all spas from all cities to find those associated with the specified vessel ID.
 *
 * @param {string} vesselId - The unique identifier of the vessel.
 * @returns {Promise<Spa[]>} A promise that resolves to an array of spas for the specified vessel.
 *
 * @example
 * const vesselSpas = await getSpasByVesselId("cs--explorer");
 * console.log(vesselSpas);
 */
export async function getSpasByVesselId(vesselId: string): Promise<Spa[]> {
  if (!vesselId || typeof vesselId !== "string") {
    console.error("Invalid vessel ID provided:", vesselId);
    return [];
  }

  const allSpas = await getAllSpas();
  return allSpas.filter((spa) => spa.vesselId === vesselId);
}
