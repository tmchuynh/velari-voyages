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

export async function getTourData(city: string): Promise<any> {
  // First remove accents from the entire city name, then format it
  const cityWithoutAccents = removeAccents(city);
  const cityFormatted =
    cityWithoutAccents.replaceAll(" ", "-").charAt(0).toLowerCase() +
    formatTitleToCamelCase(formatKebebToTitleCase(cityWithoutAccents.slice(1)))
      .replace("'", "")
      .replace("-", "");

  const tourID = `${cityFormatted}Cruises`;

  try {
    const tourModule = await import(
      `@/lib/constants/cruises/${formatToSlug(
        cityWithoutAccents.replace("'", "-")
      )}`
    );
    // Return the specific named export that matches tourID
    if (tourModule[tourID]) {
      return tourModule[tourID];
    } else {
      console.error(
        `Export named export const ${tourID}: Tour[] =[]; not found in module`
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading resource from @/lib/constants/tours: ${error} export const ${tourID}: Tour[] = [];`
    );
    return [];
  }
}
