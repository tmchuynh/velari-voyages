import { cityFiles } from "@/lib/constants/info/city";
import { ArtGallery } from "@/lib/interfaces/services/venues";
import { Location } from "@/lib/types/types";
import {
  formatKebebToTitleCase,
  formatTitleToCamelCase,
  formatToSlug,
  removeAccents,
} from "../format";

/**
 * Retrieves a list of art galleries for a given city.
 *
 * This function dynamically imports a module containing art gallery data specific to the provided city.
 * It formats the city name to match the expected module and export naming conventions.
 * If the module or the specific export is not found, it logs an error and returns an empty array.
 *
 * @param {string} city - The name of the city for which to retrieve art galleries.
 * @returns {Promise<ArtGallery[]>} A promise that resolves to an array of art galleries for the specified city.
 *
 * @throws Will log an error if the city name is invalid, the module cannot be imported, or the expected export is missing.
 *
 * @example
 * const artGalleries = await getArtGalleries("New York");
 * console.log(artGalleries);
 */
export async function getArtGalleries(city: string): Promise<ArtGallery[]> {
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

  const artGalleryID = `${cityFormatted}ArtGalleries`;
  const sluggedCity =
    formatToSlug(cityWithoutAccents.replace("'", "-")) + "-art-galleries";

  console.log(
    `Looking for art galleries in: @/lib/constants/venues/art-galleries/${sluggedCity}`,
  );
  console.log(
    `Export expected: export const ${artGalleryID}: ArtGallery[] = [];`,
  );

  try {
    const artGalleryModule = await import(
      `@/lib/constants/venues/art-galleries/${sluggedCity}`
    );
    // Return the specific named export that matches artGalleryID
    if (artGalleryModule[artGalleryID]) {
      return artGalleryModule[artGalleryID];
    } else {
      // Try alternate naming conventions
      const alternateArtGalleryID = `${sluggedCity.replace(/-art-galleries$/, "")}ArtGalleries`;
      if (artGalleryModule[alternateArtGalleryID]) {
        return artGalleryModule[alternateArtGalleryID];
      }

      console.error(
        `Export not found in module. Looking for: ${artGalleryID} or ${alternateArtGalleryID}`,
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading art gallery data: ${error}. Tried: @/lib/constants/venues/art-galleries/${sluggedCity} with export ${artGalleryID}`,
    );
    return [];
  }
}

/**
 * Retrieves a list of art galleries based on the provided city information.
 *
 * This function expects a `Location` object that must contain a `city` property.
 * If the `cityInfo` object or its `city` property is not provided or is invalid,
 * an error message is logged to the console, and an empty array is returned.
 * Otherwise, it delegates to the `getArtGalleries` function, passing the city name
 * to fetch the corresponding art gallery data.
 *
 * @param cityInfo - An object of type `Location` containing the city for which to find art galleries.
 *                   The `city` property within this object is essential.
 * @returns A promise that resolves to an array of `ArtGallery` objects.
 *          Returns an empty array if `cityInfo` or `cityInfo.city` is invalid,
 *          or if no art galleries are found for the given city.
 */
export async function getArtGalleriesByLocation(
  cityInfo: Location,
): Promise<ArtGallery[]> {
  if (!cityInfo || !cityInfo.city) {
    console.error("Invalid city information provided");
    return [];
  }

  return getArtGalleries(cityInfo.city);
}

/**
 * Retrieves all art galleries from all cities.
 *
 * This function iterates through all available cities and fetches their art gallery data.
 * It uses the city list from the constants and dynamically imports each city's art gallery module.
 *
 * @returns {Promise<ArtGallery[]>} A promise that resolves to an array of all art galleries across all cities.
 *
 * @example
 * const allArtGalleries = await getAllArtGalleries();
 * console.log(allArtGalleries);
 */
export async function getAllArtGalleries(): Promise<ArtGallery[]> {
  const allArtGalleries: ArtGallery[] = [];

  for (const city of cityFiles) {
    try {
      const artGalleries = await getArtGalleries(city);
      allArtGalleries.push(...artGalleries);
    } catch (error) {
      console.error(`Error loading art galleries for ${city}:`, error);
    }
  }

  return allArtGalleries;
}

/**
 * Finds an art gallery by its ID.
 *
 * This function searches through all art galleries across all cities to find one with the specified ID.
 *
 * @param {string} id - The unique identifier of the art gallery to find.
 * @returns {Promise<ArtGallery | null>} A promise that resolves to the art gallery object if found, or null if not found.
 *
 * @example
 * const artGallery = await getArtGalleryById("gallery-123");
 * if (artGallery) {
 *   console.log(artGallery.name);
 * }
 */
export async function getArtGalleryById(
  id: string,
): Promise<ArtGallery | null> {
  if (!id) {
    console.error("Art gallery ID is required");
    return null;
  }

  const allArtGalleries = await getAllArtGalleries();
  return allArtGalleries.find((gallery) => gallery.id === id) || null;
}

/**
 * Finds art galleries by vessel ID.
 *
 * This function searches through all art galleries across all cities to find those associated with a specific vessel.
 *
 * @param {string} vesselId - The unique identifier of the vessel.
 * @returns {Promise<ArtGallery[]>} A promise that resolves to an array of art galleries for the specified vessel.
 *
 * @example
 * const vesselArtGalleries = await getArtGalleriesByVesselId("vessel-123");
 * console.log(vesselArtGalleries);
 */
export async function getArtGalleriesByVesselId(
  vesselId: string,
): Promise<ArtGallery[]> {
  if (!vesselId) {
    console.error("Vessel ID is required");
    return [];
  }

  const allArtGalleries = await getAllArtGalleries();
  return allArtGalleries.filter((gallery) => gallery.vesselId === vesselId);
}
