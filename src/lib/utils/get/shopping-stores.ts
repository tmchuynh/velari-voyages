import { cityFiles } from "@/lib/constants/info/city";
import { Shopping } from "@/lib/interfaces/services/venues";
import { Location } from "@/lib/types/types";
import { formatTitleToCamelCase, formatToSlug, removeAccents } from "../format";

/**
 * Retrieves a list of shopping stores for a given city.
 *
 * This function dynamically imports a module containing shopping data specific to the provided city.
 * It formats the city name to match the expected module and export naming conventions.
 * If the module or the specific export is not found, it logs an error and returns an empty array.
 *
 * @param {string} city - The name of the city for which to retrieve shopping stores.
 * @returns {Promise<Shopping[]>} A promise that resolves to an array of shopping stores for the specified city.
 *
 * @throws Will log an error if the city name is invalid, the module cannot be imported, or the expected export is missing.
 *
 * @example
 * const shopping = await getShopping("Miami");
 * console.log(shopping);
 */
export async function getShopping(city: string): Promise<Shopping[]> {
  if (!city || typeof city !== "string") {
    console.error("Invalid city name provided:", city);
    return [];
  }

  try {
    const formattedCitySlug = formatToSlug(removeAccents(city));
    const camelCaseExportName = formatTitleToCamelCase(city);

    const shoppingModule = await import(
      `@/lib/constants/venues/shopping/${formattedCitySlug}-shopping`
    );

    const exportName = `${camelCaseExportName}Shopping`;
    const shopping = shoppingModule[exportName];

    if (!shopping) {
      console.error(
        `Export "${exportName}" not found in ${formattedCitySlug}-shopping module`,
      );
      return [];
    }

    return shopping;
  } catch (error) {
    console.error(`Error importing shopping data for city "${city}":`, error);
    return [];
  }
}

/**
 * Retrieves a list of shopping stores for a specific location.
 *
 * This function calls the getShopping function with the city from the provided location.
 *
 * @param {Location} location - The location object containing the city name.
 * @returns {Promise<Shopping[]>} A promise that resolves to an array of shopping stores for the specified location.
 *
 * @example
 * const location = { city: "Miami", country: "United States" };
 * const shopping = await getShoppingByLocation(location);
 * console.log(shopping);
 */
export async function getShoppingByLocation(
  location: Location,
): Promise<Shopping[]> {
  return getShopping(location.city);
}

/**
 * Retrieves all shopping stores from all available cities.
 *
 * This function iterates through all city files, imports their shopping data,
 * and combines them into a single array.
 *
 * @returns {Promise<Shopping[]>} A promise that resolves to an array of all shopping stores from all cities.
 *
 * @example
 * const allShopping = await getAllShopping();
 * console.log(allShopping.length);
 */
export async function getAllShopping(): Promise<Shopping[]> {
  const allShopping: Shopping[] = [];

  for (const city of cityFiles) {
    try {
      const cityShopping = await getShopping(city);
      allShopping.push(...cityShopping);
    } catch (error) {
      console.error(`Error loading shopping data for city "${city}":`, error);
    }
  }

  return allShopping;
}

/**
 * Retrieves a specific shopping store by its ID.
 *
 * This function searches through all shopping stores from all cities to find one with the matching ID.
 *
 * @param {string} id - The unique identifier of the shopping store.
 * @returns {Promise<Shopping | undefined>} A promise that resolves to the shopping store with the specified ID, or undefined if not found.
 *
 * @example
 * const shopping = await getShoppingById("3cc9f106-c57c-4ede-a969-b51cea8b2373");
 * if (shopping) {
 *   console.log(shopping.type);
 * }
 */
export async function getShoppingById(
  id: string,
): Promise<Shopping | undefined> {
  if (!id || typeof id !== "string") {
    console.error("Invalid shopping ID provided:", id);
    return undefined;
  }

  const allShopping = await getAllShopping();
  return allShopping.find((shopping) => shopping.id === id);
}

/**
 * Retrieves all shopping stores for a specific vessel.
 *
 * This function searches through all shopping stores from all cities to find those associated with the specified vessel ID.
 *
 * @param {string} vesselId - The unique identifier of the vessel.
 * @returns {Promise<Shopping[]>} A promise that resolves to an array of shopping stores for the specified vessel.
 *
 * @example
 * const vesselShopping = await getShoppingByVesselId("cs--explorer");
 * console.log(vesselShopping);
 */
export async function getShoppingByVesselId(
  vesselId: string,
): Promise<Shopping[]> {
  if (!vesselId || typeof vesselId !== "string") {
    console.error("Invalid vessel ID provided:", vesselId);
    return [];
  }

  const allShopping = await getAllShopping();
  return allShopping.filter((shopping) => shopping.vesselId === vesselId);
}
