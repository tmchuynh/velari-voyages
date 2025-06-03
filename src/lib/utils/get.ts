import {
  cruiseCategoryMap,
  cruiseCategoryPackages,
} from "../constants/info/cruisePackages";
import { CrewMember } from "../interfaces/people/staff";
import { Cruise } from "../interfaces/services/cruises";
import { Location, Package, Resturant, ResturantMenu } from "../types/types";
import {
  formatKebebToTitleCase,
  formatTitleToCamelCase,
  formatToSlug,
  removeAccents,
} from "./format";

/**
 * Generates an array of random dates starting from next week's Monday.
 *
 * @param count - The number of random dates to generate
 * @param rangeInDays - Optional. The range in days from next Monday to generate dates from. Default is 30 days.
 * @returns An array of date strings in 'YYYY-MM-DD' format
 *
 * @example
 * // Get 5 random dates within 30 days from next Monday
 * const dates = getRandomDatesFromNextWeek(5);
 *
 * @example
 * // Get 3 random dates within 7 days from next Monday
 * const dates = getRandomDatesFromNextWeek(3, 7);
 */
export function getRandomDatesFromNextWeek(
  count: number,
  rangeInDays = 30
): string[] {
  const dates = new Set<string>();

  // Get today's date
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sun) to 6 (Sat)

  // Get next week's Monday
  const daysUntilNextMonday = (8 - dayOfWeek) % 7 || 7;
  const startDate = new Date(today);
  startDate.setDate(today.getDate() + daysUntilNextMonday);

  // Generate random dates
  while (dates.size < count) {
    const randomOffset = Math.floor(Math.random() * rangeInDays); // e.g. within 30 days from start
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + randomOffset);
    dates.add(date.toISOString().split("T")[0]); // Format: YYYY-MM-DD
  }

  return Array.from(dates);
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
        cityWithoutAccents.replace("'", "-")
      )}`
    );
    // Return the specific named export that matches crewID
    if (crewModule[crewID]) {
      return crewModule[crewID] as CrewMember[];
    } else {
      console.error(
        `Export named export const ${crewID}: CrewMember[] =[]; not found in module`
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading resource from @/lib/constants/crewMembers: ${error} export const ${crewID}: CrewMember[] = [];`
    );
    return [];
  }
}

export async function getAllCities(): Promise<Location[]> {
  // List of all city file names (without the .ts extension)
  const cityFiles = [
    "auckland",
    "barcelona",
    "buenos-aires",
    "cape-town",
    "dubai",
    "fort-lauderdale",
    "galveston",
    "hong-kong",
    "lisbon",
    "los-angeles",
    "miami",
    "new-orleans",
    "new-york-city",
    "rome",
    "seattle",
    "singapore",
    "southampton",
    "sydney",
    "tokyo",
    "vancouver",
  ];

  // Combined array for all cities
  const allCities: Location[] = [];

  // Loop through each city file and import its location data
  for (const city of cityFiles) {
    try {
      // Dynamic import of the location file
      const locationModule = await import(
        `@/lib/constants/locations/${removeAccents(city)}`
      );

      // Get the location object using the city name + Location naming convention
      const cityLocation = locationModule[`${city}Location`];

      if (cityLocation && typeof cityLocation === "object") {
        // Add the city location to the combined array
        allCities.push(cityLocation);
      } else {
        console.warn(
          `No valid location found for ${city} within @/lib/constants/locations/${city}.ts`
        );
      }
    } catch (error) {
      console.error(`Error importing location for ${city}:`, error);
    }
  }

  return allCities;
}

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
 * Retrieves a list of restaurants for a given cruise based on its departure location.
 *
 * This function dynamically imports a module containing restaurant data specific to the city
 * of the cruise's departure location. It formats the city name to match the expected module
 * and export naming conventions. If the module or the specific export is not found, it logs
 * an error and returns an empty array.
 *
 * @param {Cruise} cruise - The cruise object containing departure location details.
 * @returns {Promise<Resturant[]>} A promise that resolves to an array of restaurants for the cruise's departure city.
 *
 * @throws Will log an error if the cruise data is invalid, the module cannot be imported, or the expected export is missing.
 *
 * @example
 * const cruise = {
 *   departureLocation: {
 *     city: "Barcelona"
 *   }
 * };
 * const restaurants = await getResturantsForCruise(cruise);
 * console.log(restaurants);
 */
export async function getResturantsForCruise(
  cruise: Cruise
): Promise<Resturant[]> {
  if (!cruise || !cruise.departureLocation || !cruise.departureLocation.city) {
    console.error("Invalid cruise data provided");
    return [];
  }

  // First remove accents from the entire city name, then format it
  const cityWithoutAccents = removeAccents(cruise.departureLocation.city);
  const cityFormatted =
    cityWithoutAccents.replaceAll(" ", "-").charAt(0).toLowerCase() +
    formatTitleToCamelCase(formatKebebToTitleCase(cityWithoutAccents.slice(1)))
      .replace("'", "")
      .replace("-", "");

  const resturantID = `${cityFormatted}Resturants`;
  try {
    const resturantModule = await import(
      `@/lib/constants/cruises/resturants/${formatToSlug(
        cityWithoutAccents.replace("'", "-")
      )}/resturants}
      )}`
    );
    // Return the specific named export that matches resturantID
    if (resturantModule[resturantID]) {
      return resturantModule[resturantID] as Resturant[];
    } else {
      console.error(
        `Export named export const ${resturantID}: Resturant[] =[]; not found in module`
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading resource from @/lib/constants/resturants: ${error} export const ${resturantID}: Resturant[] = [];`
    );
    return [];
  }
}



/**
 * Asynchronously retrieves the menu for a specific restaurant on a given cruise.
 *
 * This function constructs a dynamic import path based on the cruise's departure city
 * and the restaurant's name. It then attempts to load a module from this path
 * and extract a specific named export (menuID) which is expected to be an array
 * of `ResturantMenu` items.
 *
 * The city name is processed by removing accents, replacing spaces with hyphens,
 * and converting to a specific camelCase format. The restaurant name is also
 * converted to camelCase. These formatted names are used to construct both the
 * import path and the `menuID`.
 *
 * If the cruise or restaurant data is invalid, or if the module or the specific
 * menu export cannot be found, an error is logged to the console, and an empty
 * array is returned.
 *
 * @param cruise - The cruise object, which must contain `departureLocation.city`.
 * @param resturant - The restaurant object, which must contain a `name`.
 * @returns A promise that resolves to an array of `ResturantMenu` items if found,
 *          otherwise resolves to an empty array.
 *
 * @example
 * ```typescript
 * const cruiseData: Cruise = {
 *   // ... other cruise properties
 *   departureLocation: { city: "New York" }
 * };
 * const restaurantData: Resturant = {
 *   // ... other restaurant properties
 *   name: "The Grand Dining"
 * };
 *
 * getResturantMenu(cruiseData, restaurantData)
 *   .then(menu => {
 *     if (menu.length > 0) {
 *       console.log("Menu items:", menu);
 *     } else {
 *       console.log("Menu not found or an error occurred.");
 *     }
 *   });
 * ```
 *
 * @remarks
 * The function relies on a specific file structure and naming convention for menu modules:
 * `@/lib/constants/cruises/resturants/{formatted-city-slug}/{formatted-restaurant-slug}.ts`
 * And a specific named export within those modules:
 * `export const {cityFormatted}{RestaurantNameFormatted}Menu: ResturantMenu[] = [];`
 *
 * Helper functions like `removeAccents`, `formatTitleToCamelCase`, `formatKebebToTitleCase`,
 * and `formatToSlug` are assumed to be available in the scope.
 */
export async function getResturantMenu(
  cruise: Cruise,
  resturant: Resturant
): Promise<ResturantMenu[]> {
  if (!cruise || !cruise.departureLocation || !cruise.departureLocation.city) {
    console.error("Invalid cruise data provided");
    return [];
  }

  if (!resturant || !resturant.name) {
    console.error("Invalid restaurant data provided");
    return [];
  }

  // First remove accents from the entire city name, then format it
  const cityWithoutAccents = removeAccents(cruise.departureLocation.city);
  const cityFormatted =
    cityWithoutAccents.replaceAll(" ", "-").charAt(0).toLowerCase() +
    formatTitleToCamelCase(formatKebebToTitleCase(cityWithoutAccents.slice(1)))
      .replace("'", "")
      .replace("-", "");

  const menuID = `${cityFormatted}${formatTitleToCamelCase(
    resturant.name
  )}Menu`;
  try {
    const menuModule = await import(
      `@/lib/constants/cruises/resturants/${formatToSlug(
        cityWithoutAccents.replace("'", "-")
      )}/${formatToSlug(resturant.name.replace("'", "-"))}`
    );
    // Return the specific named export that matches menuID
    if (menuModule[menuID]) {
      return menuModule[menuID] as ResturantMenu[];
    } else {
      console.error(
        `Export named export const ${menuID}: ResturantMenu[] = []; not found in module`
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading resource from @/lib/constants/cruises/resturants/${formatToSlug(
        cityWithoutAccents.replace("'", "-")
      )}/${formatToSlug(
        resturant.name.replace("'", "-")
      )}: ${error} export const ${menuID}: ResturantMenu[] = [];`
    );
    return [];
  }
}


/**
 * Asynchronously retrieves a list of cruises for a given city.
 *
 * This function first formats the city name by removing accents, converting it to a specific
 * camelCase format (e.g., "New York" becomes "newYork"), and then uses this formatted name
 * to construct an expected module export name (e.g., "newYorkCruises").
 * It also generates a slug version of the city name (e.g., "new-york") to dynamically
 * import a module from `@/lib/constants/cruises/`.
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
  const sluggedCity = formatToSlug(cityWithoutAccents.replace("'", "-"));

  console.log(`Looking for cruises in: @/lib/constants/cruises/${sluggedCity}`);
  console.log(`Export expected: export const ${cruiseID}: Cruise[] = [];`);

  try {
    const cruiseModule = await import(`@/lib/constants/cruises/${sluggedCity}`);
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
      `Error loading cruise data: ${error}. Tried: @/lib/constants/cruises/${sluggedCity} with export ${cruiseID}`
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
  // List of all city file names (without the .ts extension)
  const cityFiles = [
    "auckland",
    "barcelona",
    "buenos-aires",
    "cape-town",
    "dubai",
    "fort-lauderdale",
    "galveston",
    "hong-kong",
    "lisbon",
    "los-angeles",
    "miami",
    "new-orleans",
    "new-york-city",
    "rome",
    "seattle",
    "singapore",
    "southampton",
    "sydney",
    "tokyo",
    "vancouver",
  ];

  // Combined array for all cruises
  const allCruises: Cruise[] = [];

  // Loop through each city file and import its cruises
  for (const city of cityFiles) {
    try {
      // Dynamic import of the cruises file
      const cruisesModule = await import(
        `@/lib/constants/cruises/${removeAccents(city)}`
      );

      // Get the cruises array using the city name + TourGuides naming convention
      const cityTourGuides = cruisesModule[`${city}TourGuides`];

      if (cityTourGuides && Array.isArray(cityTourGuides)) {
        // Add all cruises from this city to the combined array
        allCruises.push(...cityTourGuides);
      } else {
        console.warn(
          `No valid cruises found for ${city} within @/lib/constants/cruises/${city}.ts`
        );
      }
    } catch (error) {
      console.error(`Error importing cruises for ${city}:`, error);
    }
  }

  return allCruises;
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
  // List of all city file names (without the .ts extension)
  const cityFiles = [
    "auckland",
    "barcelona",
    "buenos-aires",
    "cape-town",
    "dubai",
    "fort-lauderdale",
    "galveston",
    "hong-kong",
    "lisbon",
    "los-angeles",
    "miami",
    "new-orleans",
    "new-york-city",
    "rome",
    "seattle",
    "singapore",
    "southampton",
    "sydney",
    "tokyo",
    "vancouver",
  ];

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
          `No valid team members found for ${city} within @/lib/constants/staff/crewMembers/${city}.ts`
        );
      }
    } catch (error) {
      console.error(`Error importing team members for ${city}:`, error);
    }
  }

  return allCrewMembers;
}
