import { getShipDetails } from "../api/vecto-cruise-api.js";

/**
 * Retrieves detailed information about a specific ship from the Vecto API.
 *
 * This function calls the `getShipDetails` function from the Vecto API integration,
 * providing a specific ship ID. It returns the detailed information of the ship,
 * including its specifications, amenities, and other relevant details.
 *
 * @param shipId - The ID of the ship to retrieve details for.
 * @returns A promise that resolves to an object containing detailed information about the ship.
 *          Returns null if the ship is not found or if an error occurs during the fetch.
 */
export async function fetchShipDetailsFromVecto(shipId: string) {
  try {
    const details = await getShipDetails(shipId);
    return details;
  } catch (error) {
    console.error("Error fetching ship details from Vecto:", error);
    return null;
  }
}
