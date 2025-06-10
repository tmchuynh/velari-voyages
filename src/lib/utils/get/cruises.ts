import { cityFiles } from "@/lib/constants/info/city";
import {
  cruiseCategoryMap,
  cruiseCategoryPackages,
} from "@/lib/constants/info/cruisePackages";
import { Cruise, Vessels } from "@/lib/interfaces/services/cruises";
import { Location, Package } from "@/lib/types/types";
import {
  formatKebabToCamelCase,
  formatKebebToTitleCase,
  formatTitleToCamelCase,
  formatToSlug,
  removeAccents,
} from "../format";

/**
 * Retrieves a list of cruises based on the provided city information.
 *
 * This function expects a `Location` object that must contain a `city` property.
 * If the `cityInfo` object or its `city` property is not provided or is invalid,
 * an error message is logged to the console, and an empty array is returned.
 * Otherwise, it delegates to the `getCruises` function, passing the city name
 * to fetch the corresponding cruise data.
 *
 * @param cityInfo - An object of type `Location` containing the city for which to find cruises.
 *                   The `city` property within this object is essential.
 * @returns A promise that resolves to an array of `Cruise` objects.
 *          Returns an empty array if `cityInfo` or `cityInfo.city` is invalid,
 *          or if no cruises are found for the given city.
 */
export async function getCruisesByLocation(
  cityInfo: Location
): Promise<Cruise[]> {
  if (!cityInfo || !cityInfo.city) {
    console.error("Invalid city information provided");
    return [];
  }

  return getCruises(cityInfo.city);
}

/**
 * Retrieves a list of packages associated with a specific cruise category.
 *
 * @param category - The name of the cruise category for which packages are to be retrieved.
 * @returns An array of `Package` objects corresponding to the given cruise category.
 *
 * The function uses a mapping of cruise categories to package IDs (`cruiseCategoryPackages`)
 * and another mapping of package IDs to `Package` objects (`cruiseCategoryMap`) to derive
 * the result. If the category does not exist in `cruiseCategoryPackages`, an empty array
 * is returned. Invalid or undefined package IDs are filtered out.
 */
export function getPackagesForCruiseCategory(category: string): Package[] {
  const packageIds = cruiseCategoryPackages[category] || [];
  return packageIds.map((id) => cruiseCategoryMap[id]).filter(Boolean);
}

/**
 * Asynchronously retrieves a list of cruises for a given city.
 *
 * This function first formats the city name by removing accents, converting it to a specific
 * camelCase format (e.g., "New York" becomes "newYork"), and then uses this formatted name
 * to construct an expected module export name (e.g., "newYorkCruises").
 * It also generates a slug version of the city name (e.g., "new-york") to dynamically
 * import a module from `@/lib/constants/cruises/cruises`.
 *
 * If the module is found, it attempts to return the array of `Cruise` objects exported
 * under the constructed `cruiseID`. If that specific export is not found, it tries an
 * alternate `cruiseID` based on the slugged city name.
 *
 * Logs errors to the console if the city name is invalid, the module cannot be loaded,
 * or the expected export is not found within the loaded module.
 *
 * @param city - The name of the city for which to retrieve cruises.
 *               It should be a non-empty string.
 * @returns A promise that resolves to an array of `Cruise` objects if found,
 *          or an empty array if the city is invalid, the data module cannot be loaded,
 *          or the specific cruise data export is not found.
 *
 * @example
 * ```typescript
 * async function displayCruises() {
 *   const parisCruises = await getCruises("Paris");
 *   console.log(parisCruises);
 *
 *   const newYorkCruises = await getCruises("New York");
 *   console.log(newYorkCruises);
 * }
 * ```
 */
export async function getCruises(city: string): Promise<Cruise[]> {
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

  const cruiseID = `${cityFormatted}Cruises`;
  const sluggedCity =
    formatToSlug(cityWithoutAccents.replace("'", "-")) + "-cruises";

  console.log(
    `Looking for cruises in: @/lib/constants/cruisescruises/cruises/${sluggedCity}`
  );
  console.log(`Export expected: export const ${cruiseID}: Cruise[] = [];`);

  try {
    const cruiseModule = await import(
      `@/lib/constants/cruises/cruises/${sluggedCity}`
    );
    // Return the specific named export that matches cruiseID
    if (cruiseModule[cruiseID]) {
      return cruiseModule[cruiseID];
    } else {
      // Try alternate naming conventions
      const alternateCruiseID = `${sluggedCity}Cruises`;
      if (cruiseModule[alternateCruiseID]) {
        return cruiseModule[alternateCruiseID];
      }

      console.error(
        `Export not found in module. Looking for: ${cruiseID} or ${alternateCruiseID}`
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading cruise data: ${error}. Tried: @/lib/constants/cruises/cruises/${sluggedCity} with export ${cruiseID}`
    );
    return [];
  }
}

/**
 * Filters a list of cruises by a specified category ID.
 *
 * @param cruises - An array of `Cruise` objects to filter. Must be a valid array.
 * @param category - The category ID to filter the cruises by.
 * @returns An array of `Cruise` objects that belong to the specified category.
 *          Returns an empty array if the input is invalid or no cruises match the category.
 *
 * @remarks
 * - Logs an error to the console if the `cruises` parameter is not a valid array.
 * - Logs a warning to the console if no cruises are found for the specified category.
 */
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

/**
 * Asynchronously retrieves all cruise data by dynamically importing cruise information
 * from predefined city-specific files.
 *
 * This function iterates over a list of city names, constructs file paths to
 * corresponding cruise data modules (e.g., `@/lib/constants/cruises/auckland.ts`),
 * and imports them. It expects each module to export an array of `Cruise` objects
 * named using the convention `${cityName}TourGuides` (e.g., `aucklandTourGuides`).
 *
 * The function aggregates all cruises from these modules into a single array.
 * It includes error handling for failed imports and logs a warning if a module
 * does not contain a valid cruise array or if the expected export is missing.
 *
 * @returns A promise that resolves to an array of `Cruise` objects,
 *          combining all cruises from all successfully imported city files.
 *          If no cruises are found or errors occur during the import of all files,
 *          it may return an empty array.
 */
export async function getAllCruises(): Promise<Cruise[]> {
  // Combined array for all cruises
  const allCruises: Cruise[] = [];

  // Loop through each city file and import its cruises
  for (const city of cityFiles) {
    try {
      // Dynamic import of the cruises file
      const cruisesModule = await import(
        `@/lib/constants/cruises/cruises/${removeAccents(city)}-cruises`
      );

      // Get the cruises array using the city name + Cruises naming convention
      const cityCruises =
        cruisesModule[`${formatKebabToCamelCase(removeAccents(city))}Cruises`];

      if (cityCruises && Array.isArray(cityCruises)) {
        // Add all cruises from this city to the combined array
        allCruises.push(...cityCruises);
      } else {
        console.warn(
          `No valid cruises found for ${city} within @/lib/constants/cruises/${city}-cruises.ts`
        );
      }
    } catch (error) {
      console.error(`Error importing cruises for ${city}:`, error);
    }
  }

  return allCruises;
}

export function getVesselTypeDescription(type: string): string {
  switch (type) {
    case "Mainstream Cruise Ship":
      return "Our core fleet of versatile ships offers broad appeal for multigenerational travelers, featuring a wide range of dining options, entertainment venues, and curated experiences at an exceptional value.";
    case "Mega Cruise Ship":
      return "Our largest and most dynamic vessels, offering an immersive floating-city experience with themed neighborhoods, expansive dining options, world-class performances, and innovative onboard attractions for all types of travelers.";
    case "Ocean Cruise Ship":
      return "Refined mid-size vessels designed for open-sea exploration and longer itineraries, with a focus on spacious public areas, ocean-view accommodations, and enriching destination-driven programming.";
    case "Luxury Cruise Ship":
      return "Elegantly appointed ships that set the standard for premium travel at sea — featuring gourmet dining, elevated design, personalized service, and a focus on comfort, privacy, and cultural depth.";
    case "Small Cruise Ship":
      return "Intimate, design-forward vessels with fewer guests, allowing access to off-the-beaten-path ports and offering a relaxed, highly personalized atmosphere perfect for sophisticated travelers seeking connection and calm.";
    case "Adventure Cruise Ship":
      return "Purpose-built ships for active travelers, equipped with expedition gear, water sports facilities, and programming that emphasizes outdoor exploration, physical engagement, and immersive natural encounters.";
    case "Expedition Cruise Ship":
      return "Ice-class and remote-capable vessels designed for discovery in the planet's most pristine corners — led by onboard experts, with science-led programming, robust safety systems, and environmentally sensitive operations.";
    case "River Cruise Ship":
      return "Gracefully designed ships crafted for inland navigation, offering ever-changing views, culturally immersive shore excursions, and regionally inspired cuisine in a relaxed and elegant setting.";
    default:
      return "Our specialized fleet offers a diverse range of vessels, each uniquely tailored to provide transformative, destination-aligned experiences across the world's oceans, rivers, and remote waterways.";
  }
}

export async function getAllVessels() {
  const allVessels: Vessels[] = [];

  // Loop through each city file and import its cruises
  for (const city of cityFiles) {
    try {
      // Dynamic import of the cruises file
      const vesselsModule = await import(
        `@/lib/constants/cruises/vessels/${removeAccents(city)}-vessels`
      );

      // Get the vessels array using the city name + Vessels naming convention
      const cityVessels =
        vesselsModule[`${formatKebabToCamelCase(removeAccents(city))}Vessels`];

      if (cityVessels && Array.isArray(cityVessels)) {
        allVessels.push(...cityVessels);
      } else {
        console.warn(
          `No valid vessels found for ${city} within @/lib/constants/cruises/${city}-vessels.ts`
        );
      }
    } catch (error) {
      console.error(`Error importing vessels for ${city}:`, error);
    }
  }

  return allVessels;
}

export async function getCruiseById(cruiseId: string): Promise<Cruise | null> {
  const allCruises = await getAllCruises();
  const cruise = allCruises.find((c) => c.id === cruiseId);
  return cruise || null;
}