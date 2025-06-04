import { cityFiles } from "../constants/info/city";
import {
  cruiseCategoryMap,
  cruiseCategoryPackages,
} from "../constants/info/cruisePackages";
import { CrewMember } from "../interfaces/people/staff";
import { Cruise } from "../interfaces/services/cruises";
import { Location, Package, Restaurant, RestaurantMenu } from "../types/types";
import {
  formatKebabToCamelCase,
  formatKebebToTitleCase,
  formatTitleToCamelCase,
  formatToSlug,
  normalizeString,
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
 * @returns {Promise<Restaurant[]>} A promise that resolves to an array of restaurants for the cruise's departure city.
 *
 * @throws Will log an error if the cruise data is invalid, the module cannot be imported, or the expected export is missing.
 *
 * @example
 * const cruise = {
 *   departureLocation: {
 *     city: "Barcelona"
 *   }
 * };
 * const restaurants = await getRestaurantsForCruise(cruise);
 * console.log(restaurants);
 */
export async function getRestaurantsForCruise(
  cruise: Cruise
): Promise<Restaurant[]> {
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

  const restaurantID = `${cityFormatted}Restaurants`;
  try {
    const restaurantModule = await import(
      `@/lib/constants/cruises/restaurants/${formatToSlug(
        cityWithoutAccents.replace("'", "-")
      )}/restaurants}
      )}`
    );
    // Return the specific named export that matches restaurantID
    if (restaurantModule[restaurantID]) {
      return restaurantModule[restaurantID] as Restaurant[];
    } else {
      console.error(
        `Export named export const ${restaurantID}: Restaurant[] =[]; not found in module`
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading resource from @/lib/constants/restaurants: ${error} export const ${restaurantID}: Restaurant[] = [];`
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
 * of `RestaurantMenu` items.
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
 * @param restaurant - The restaurant object, which must contain a `name`.
 * @returns A promise that resolves to an array of `RestaurantMenu` items if found,
 *          otherwise resolves to an empty array.
 *
 * @example
 * ```typescript
 * const cruiseData: Cruise = {
 *   // ... other cruise properties
 *   departureLocation: { city: "New York" }
 * };
 * const restaurantData: Restaurant = {
 *   // ... other restaurant properties
 *   name: "The Grand Dining"
 * };
 *
 * getRestaurantMenu(cruiseData, restaurantData)
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
 * `@/lib/constants/cruises/restaurants/{formatted-city-slug}/{formatted-restaurant-slug}.ts`
 * And a specific named export within those modules:
 * `export const {cityFormatted}{RestaurantNameFormatted}Menu: RestaurantMenu[] = [];`
 *
 * Helper functions like `removeAccents`, `formatTitleToCamelCase`, `formatKebebToTitleCase`,
 * and `formatToSlug` are assumed to be available in the scope.
 */
export async function getRestaurantMenu(
  cruise: Cruise,
  restaurant: Restaurant
): Promise<RestaurantMenu[]> {
  if (!cruise || !cruise.departureLocation || !cruise.departureLocation.city) {
    console.error("Invalid cruise data provided");
    return [];
  }

  if (!restaurant || !restaurant.name) {
    console.error("Invalid restaurant data provided");
    return [];
  }

  // Format city name for the file path and variable name
  const cityWithoutAccents = removeAccents(cruise.departureLocation.city);
  const citySlug = formatToSlug(cityWithoutAccents.replace("'", "-"));

  // Format restaurant name for the file path
  const restaurantslug = formatToSlug(restaurant.name.replace("'", "-"));

  // Format for variable name: cityInCamelCase + restaurantInCamelCase + Menu
  // This needs to match the export variable naming convention in the files
  const cityPrefix = citySlug.replace(/-/g, ""); // Remove hyphens for camelCase
  const restaurantName = restaurant.name.replace(/'/g, "").replace(/-/g, " ");
  const restaurantCamel = formatTitleToCamelCase(restaurantName);

  const menuID = `${cityPrefix}${restaurantCamel}Menu`;

  try {
    // Import the module using kebab-case for the file path
    const menuModule = await import(
      `@/lib/constants/cruises/restaurants/${citySlug}/${restaurantslug}`
    );

    // Return the specific named export that matches menuID
    if (menuModule[menuID]) {
      return menuModule[menuID] as RestaurantMenu[];
    } else {
      console.error(
        `Export named '${menuID}' not found in module. Expected: export const ${menuID}: RestaurantMenu[] = [];`
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading restaurant menu from @/lib/constants/cruises/restaurants/${citySlug}/${restaurantslug}: ${error}`
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
  const sluggedCity =
    formatToSlug(cityWithoutAccents.replace("'", "-")) + "-cruises";

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
  // Combined array for all cruises
  const allCruises: Cruise[] = [];

  // Loop through each city file and import its cruises
  for (const city of cityFiles) {
    try {
      // Dynamic import of the cruises file
      const cruisesModule = await import(
        `@/lib/constants/cruises/${removeAccents(city)}-cruises`
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

/**
 * Retrieves a combined list of restaurants from multiple city-specific modules.
 *
 * This function dynamically imports restaurant data from various city files located
 * in the `@/lib/constants/cruises/restaurants/` directory. Each city file is expected
 * to export an array of restaurants named using the convention `<city>Restaurants`.
 *
 * If a city's restaurant data is missing or invalid, a warning is logged. If an error
 * occurs during the import process, it is caught and logged to the console.
 *
 * @async
 * @function getAllRestaurants
 * @returns {Promise<Restaurant[]>} A promise that resolves to a combined array of all restaurants.
 *
 * @throws {Error} Logs an error if a city file cannot be imported or if the expected
 * restaurant data is not found.
 *
 * @example
 * const allRestaurants = await getAllRestaurants();
 * console.log(allRestaurants);
 */
export async function getAllRestaurants(): Promise<Restaurant[]> {
  // Combined array for all restaurants
  const allRestaurants: Restaurant[] = [];

  // Loop through each city file and import its restaurants
  for (const city of cityFiles) {
    try {
      // Dynamic import of the restaurants file
      const restaurantsModule = await import(
        `@/lib/constants/cruises/restaurants/${removeAccents(city)}/restaurants`
      );

      // Get the restaurants array using the city name + Restaurants naming convention
      const cityRestaurants = restaurantsModule[`${city}Restaurants`];

      if (cityRestaurants && Array.isArray(cityRestaurants)) {
        // Add all restaurants from this city to the combined array
        allRestaurants.push(...cityRestaurants);
      } else {
        console.warn(
          `No valid restaurants found for ${city} within @/lib/constants/cruises/restaurants/${city}/restaurants.ts`
        );
      }
    } catch (error) {
      console.error(`Error importing restaurants for ${city}:`, error);
    }
  }

  return allRestaurants;
}

/**
 * Asynchronously retrieves and aggregates restaurant menus from various city-specific modules.
 *
 * This function iterates over a predefined list of city names. For each city, it attempts
 * to dynamically import a module located at `@/lib/constants/cruises/restaurants/${city}/restaurants`.
 * It expects each module to export an array of `RestaurantMenu` objects named `${city}RestaurantMenus`.
 *
 * If a module is successfully imported and the expected array is found, its contents are
 * added to a combined list of all restaurant menus.
 *
 * Warnings are logged to the console if a module is found but does not contain a valid
 * restaurant menus array. Errors during the import process for any city are caught and
 * logged to the console, but the function will continue to process other cities.
 *
 * @returns A promise that resolves to an array of `RestaurantMenu` objects,
 *          containing all menus found across all specified cities. If no menus are found
 *          or errors occur for all cities, it will resolve to an empty array.
 */
export async function getAllRestaurantMenus(): Promise<RestaurantMenu[]> {
  // Combined array for all restaurant menus
  const allRestaurantMenus: RestaurantMenu[] = [];

  // Loop through each city file and import its restaurant menus
  for (const city of cityFiles) {
    try {
      // Dynamic import of the restaurant menus file
      const restaurantsModule = await import(
        `@/lib/constants/cruises/restaurants/${removeAccents(city)}/restaurants`
      );

      // Get the restaurant menus array using the city name + Restaurants naming convention
      const cityRestaurantMenus = restaurantsModule[`${city}RestaurantMenus`];

      if (cityRestaurantMenus && Array.isArray(cityRestaurantMenus)) {
        // Add all restaurant menus from this city to the combined array
        allRestaurantMenus.push(...cityRestaurantMenus);
      } else {
        console.warn(
          `No valid restaurant menus found for ${city} within @/lib/constants/cruises/restaurants/${city}/restaurants.ts`
        );
      }
    } catch (error) {
      console.error(`Error importing restaurant menus for ${city}:`, error);
    }
  }

  return allRestaurantMenus;
}

/**
 * Retrieves all restaurants from a specified city.
 *
 * This function dynamically imports a module containing restaurant data based on the provided city name.
 * It performs formatting and sanitization on the city name to ensure compatibility with the module path and export naming conventions.
 *
 * @param city - The name of the city to retrieve restaurants from. Must be a non-empty string.
 * @returns A promise that resolves to an array of `Restaurant` objects. Returns an empty array if the city name is invalid,
 *          the module cannot be loaded, or the expected export is not found.
 *
 * @throws Will log an error if the city name is invalid, the module cannot be imported, or the expected export is not found.
 *
 * @example
 * ```typescript
 * const restaurants = await getAllRestaurantsFromCity("New York");
 * console.log(restaurants);
 * ```
 */
export async function getAllRestaurantsFromCity(
  city: string
): Promise<Restaurant[]> {
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

  const restaurantID = `${cityFormatted}Restaurants`;
  const sluggedCity = formatToSlug(cityWithoutAccents.replace("'", "-"));

  try {
    // Remove the extra "/restaurants" at the end of the path
    const restaurantModule = await import(
      `@/lib/constants/cruises/restaurants/${sluggedCity}/restaurants`
    );

    // Return the specific named export that matches restaurantID
    if (restaurantModule[restaurantID]) {
      return restaurantModule[restaurantID];
    } else {
      console.error(`Export not found in module. Looking for: ${restaurantID}`);
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading restaurant data: ${error}. Tried: @/lib/constants/cruises/restaurants/${sluggedCity}/restaurants with export ${restaurantID}`
    );
    return [];
  }
}

/**
 * Retrieves all restaurant menus from a specified city.
 *
 * This function dynamically imports a module containing restaurant menu data
 * based on the provided city name. It performs several transformations on the
 * city name to ensure proper formatting and slug generation. If the module or
 * the specific export is not found, it returns an empty array and logs an error.
 *
 * @param city - The name of the city to retrieve restaurant menus for. Must be a non-empty string.
 * @returns A promise that resolves to an array of `RestaurantMenu` objects. Returns an empty array if the city name is invalid or the data cannot be loaded.
 *
 * @throws Will log an error if the module cannot be imported or the expected export is not found.
 *
 * @example
 * ```typescript
 * const menus = await getAllRestaurantMenusFromCity("New York");
 * console.log(menus);
 * ```
 */
export async function getAllRestaurantMenusFromCity(
  city: string
): Promise<RestaurantMenu[]> {
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

  const menuID = `${cityFormatted}Menu`;
  const sluggedCity = formatToSlug(cityWithoutAccents.replace("'", "-"));

  try {
    const menuModule = await import(
      `@/lib/constants/cruises/restaurants/${sluggedCity}/restaurants`
    );
    // Return the specific named export that matches menuID
    if (menuModule[menuID]) {
      return menuModule[menuID];
    } else {
      console.error(`Export not found in module. Looking for: ${menuID}`);
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading restaurant menu data: ${error}. Tried: @/lib/constants/cruises/restaurants/${sluggedCity}/restaurants with export ${menuID}`
    );
    return [];
  }
}

/**
 * Asynchronously retrieves all menu items for a given restaurant.
 *
 * This function takes a `Restaurant` object, formats its name to derive a module path
 * and a specific export name (e.g., "theWakeMenu" for a restaurant named "The Wake").
 * It then dynamically imports the corresponding menu module from a predefined path
 * (`@/lib/constants/cruises/restaurants/`) and attempts to return the exported menu data.
 *
 * If the provided restaurant data is invalid (e.g., missing name), or if the module
 * cannot be loaded, or if the specific menu export is not found within the module,
 * an error is logged to the console, and an empty array is returned.
 *
 * @param restaurant - The restaurant object, which must have a `name` property.
 * @returns A promise that resolves to an array of `RestaurantMenu` items.
 *          Returns an empty array if an error occurs during the process or if data is not found.
 *
 * @example
 * ```typescript
 * const aRestaurant = { name: "The Wake", ...otherRestaurantProps };
 * const menuItems = await getAllMenuItemsFromRestaurant(aRestaurant);
 * if (menuItems.length > 0) {
 *   console.log("Menu items:", menuItems);
 * } else {
 *   console.log("Could not retrieve menu items for The Wake.");
 * }
 * ```
 */
export async function getAllMenuItemsFromRestaurant(
  restaurant: Restaurant
): Promise<RestaurantMenu[]> {
  if (!restaurant || !restaurant.name) {
    console.error("Invalid restaurant data provided");
    return [];
  }

  // First remove accents from the entire restaurant name, then format it
  const restaurantWithoutAccents = removeAccents(restaurant.name);
  const restaurantFormatted =
    restaurantWithoutAccents.replaceAll(" ", "-").charAt(0).toLowerCase() +
    formatTitleToCamelCase(
      formatKebebToTitleCase(restaurantWithoutAccents.slice(1))
    )
      .replace("'", "")
      .replace("-", "");

  const menuID = `${restaurantFormatted}Menu`;
  const sluggedRestaurant = formatToSlug(
    restaurantWithoutAccents.replace("'", "-")
  );

  try {
    const menuModule = await import(
      `@/lib/constants/cruises/restaurants/${sluggedRestaurant}`
    );
    // Return the specific named export that matches menuID
    if (menuModule[menuID]) {
      return menuModule[menuID];
    } else {
      console.error(`Export not found in module. Looking for: ${menuID}`);
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading restaurant menu data: ${error}. Tried: @/lib/constants/cruises/restaurants/${sluggedRestaurant} with export ${menuID}`
    );
    return [];
  }
}

/**
 * Asynchronously retrieves the menu for a specific restaurant in a given city.
 *
 * This simplified function takes a city name and restaurant name directly as strings,
 * rather than requiring full Cruise and Restaurant objects. It formats these names to
 * derive the module path and export name, then dynamically imports the corresponding
 * menu module.
 *
 * @param cityName - The name of the city where the restaurant is located.
 * @param restaurantName - The name of the restaurant for which to retrieve the menu.
 * @returns A promise that resolves to an array of `RestaurantMenu` items if found,
 *          otherwise resolves to an empty array.
 *
 * @example
 * ```typescript
 * const menuItems = await getRestaurantMenuByName("New York", "The Grand Dining");
 * if (menuItems.length > 0) {
 *   console.log("Menu items:", menuItems);
 * } else {
 *   console.log("Menu not found or an error occurred.");
 * }
 * ```
 */
export async function getRestaurantMenuByName(
  cityName: string,
  restaurantName: string
): Promise<RestaurantMenu[]> {
  if (!cityName || typeof cityName !== "string") {
    console.error("Invalid city name provided");
    return [];
  }

  const cityWithoutAccents = formatToSlug(
    removeAccents(cityName.replace("'", "-"))
  );

  if (!restaurantName || typeof restaurantName !== "string") {
    console.error("Invalid restaurant name provided");
    return [];
  }

  // Format city name for the file path and variable name
  const citySlug = formatToSlug(cityWithoutAccents.replace("'", "-"));

  // Format restaurant name for the file path
  const restaurantslug = formatToSlug(
    normalizeString(removeAccents(restaurantName))
      .replace(/'/g, "")
      .replace(/-/g, " ")
  );
  // Format for variable name: cityInCamelCase + restaurantInCamelCase + Menu
  const cityPrefix = formatKebabToCamelCase(citySlug).replace(/-/g, ""); // Remove hyphens for camelCase

  const menuID = `${cityPrefix}${formatKebabToCamelCase(restaurantName)}`;

  try {
    // Import the module using kebab-case for the file path
    const menuModule = await import(
      `@/lib/constants/cruises/restaurants/${citySlug}/${restaurantName}`
    );

    // Return the specific named export that matches menuID
    if (menuModule[menuID]) {
      return menuModule[menuID] as RestaurantMenu[];
    } else {
      console.error(
        `Export named '${menuID}' not found in module. Expected: export const ${menuID}: RestaurantMenu[] = [];`
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading restaurant menu from @/lib/constants/cruises/restaurants/${citySlug}/${restaurantslug}: ${error}`
    );
    return [];
  }
}

export async function getRestaurantByName(
  cityName: string,
  restaurantName: string
): Promise<Restaurant> {
  if (!cityName || typeof cityName !== "string") {
    console.error("Invalid city name provided");
    return {} as Restaurant;
  }

  const cityWithoutAccents = formatToSlug(
    removeAccents(cityName.replace("'", "-"))
  );

  if (!restaurantName || typeof restaurantName !== "string") {
    console.error("Invalid restaurant name provided");
    return {} as Restaurant;
  }

  // Format city name for the file path and variable name
  const citySlug = formatToSlug(cityWithoutAccents.replace("'", "-"));

  // Format for variable name: cityInCamelCase + restaurantInCamelCase
  const cityPrefix = formatKebabToCamelCase(citySlug).replace(/-/g, ""); // Remove hyphens for camelCase

  const restaurantVariable = `${cityPrefix}Restaurants`;

  const restaurantNameFormatted = formatKebebToTitleCase(
    removeAccents(restaurantName || "")
  ).replace("menu", "");

  try {
    // Import the module using kebab-case for the file path
    const restaurantModule = await import(
      `@/lib/constants/cruises/restaurants/${citySlug}/restaurants`
    );

    // Return the specific named export that matches restaurantName
    if (restaurantModule[restaurantVariable]) {
      const data = restaurantModule[restaurantVariable].find(
        (restaurant: Restaurant) =>
          restaurant.name.toLowerCase() ===
          restaurantNameFormatted.toLowerCase()
      );
      // If the restaurant is found, return it
      return data as Restaurant;
    } else {
      console.error(
        `Export named '${restaurantVariable}' not found in module. Expected: export const ${restaurantVariable}: Restaurant = {};`
      );
      return {} as Restaurant;
    }
  } catch (error) {
    console.error(
      `Error loading restaurant data from @/lib/constants/cruises/restaurants/${citySlug}/restaurants: ${error}`
    );
    return {} as Restaurant;
  }
}
