// Import Vecto API functions
import {
  getCruiseLines,
  getCruiseLineShips,
  getDepartureCities,
  getItineraries,
  getItineraryDetails,
  getSailingDestinations,
  getShipDetails,
  getVectoCruisesByDepartureCity,
  getVectoCruisesByDestination,
  type CruiseLine as VectoCruiseLine,
  type Itinerary as VectoItinerary,
  type Ship as VectoShip,
} from "../api/vecto-cruise-api";

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

/**
 * Retrieves a list of cruise lines available in the Vecto API.
 *
 * This function calls the `getCruiseLines` function from the Vecto API integration,
 * which fetches the list of cruise lines. The result is then mapped to a simplified
 * format containing only the essential details for each cruise line.
 *
 * @returns A promise that resolves to an array of objects, each representing a cruise line
 *          with its ID, name, and image URL. Returns an empty array if no cruise lines
 *          are found or if an error occurs during the fetch.
 */
export async function fetchCruiseLinesFromVecto() {
  try {
    const response = await getCruiseLines();

    return (
      response.data?.map((line: VectoCruiseLine) => ({
        id: line.id,
        name: line.name,
        imageUrl: line.imageUrl,
      })) || []
    );
  } catch (error) {
    console.error("Error fetching cruise lines from Vecto:", error);
    return [];
  }
}

/**
 * Retrieves a list of itineraries for a given cruise line from the Vecto API.
 *
 * This function uses the `getItineraries` function from the Vecto API integration to
 * fetch the itineraries. It requires a valid cruise line ID and an optional date range
 * to filter the itineraries.
 *
 * @param cruiseLineId - The ID of the cruise line for which to retrieve itineraries.
 * @param startDate - (Optional) The start date for filtering itineraries.
 * @param endDate - (Optional) The end date for filtering itineraries.
 * @returns A promise that resolves to an array of itinerary objects for the specified cruise line.
 *          Returns an empty array if no itineraries are found or if an error occurs during the fetch.
 */
export async function fetchItinerariesFromVecto(
  cruiseLineId: string,
  startDate?: string,
  endDate?: string,
) {
  try {
    const response = await getItineraries({
      cruiseLineId: cruiseLineId,
      departureDate: startDate,
    });

    const itineraries = response.data || [];

    return itineraries.map((itinerary: VectoItinerary) => ({
      id: itinerary.id,
      name: itinerary.name,
      duration: itinerary.duration,
      startDate: itinerary.departureDate,
      endDate: itinerary.returnDate,
      ports: itinerary.destinationIds,
    }));
  } catch (error) {
    console.error("Error fetching itineraries from Vecto:", error);
    return [];
  }
}

/**
 * Retrieves detailed information about a specific itinerary from the Vecto API.
 *
 * This function calls the `getItineraryDetails` function from the Vecto API integration,
 * providing a specific itinerary ID. It returns the detailed information of the itinerary,
 * including the cruise line, ship, ports of call, and other relevant details.
 *
 * @param itineraryId - The ID of the itinerary to retrieve details for.
 * @returns A promise that resolves to an object containing detailed information about the itinerary.
 *          Returns null if the itinerary is not found or if an error occurs during the fetch.
 */
export async function fetchItineraryDetailsFromVecto(itineraryId: string) {
  try {
    const details = await getItineraryDetails(itineraryId);
    return details;
  } catch (error) {
    console.error("Error fetching itinerary details from Vecto:", error);
    return null;
  }
}

/**
 * Retrieves a list of ships for a given cruise line from the Vecto API.
 *
 * This function uses the `getCruiseLineShips` function from the Vecto API integration to
 * fetch the ships. It requires a valid cruise line ID.
 *
 * @param cruiseLineId - The ID of the cruise line for which to retrieve ships.
 * @returns A promise that resolves to an array of ship objects for the specified cruise line.
 *          Returns an empty array if no ships are found or if an error occurs during the fetch.
 */
export async function fetchShipsFromVecto(cruiseLineId: string) {
  try {
    const response = await getCruiseLineShips(cruiseLineId);

    return (
      response.data?.map((ship: VectoShip) => ({
        id: ship.id,
        name: ship.name,
        imageUrl: ship.imageUrl,
        cruiseLineId: ship.cruiseLineId,
      })) || []
    );
  } catch (error) {
    console.error("Error fetching ships from Vecto:", error);
    return [];
  }
}

/**
 * Retrieves a list of sailing destinations from the Vecto API.
 *
 * This function uses the `getSailingDestinations` function from the Vecto API integration
 * to fetch the destinations. The result is then mapped to a simplified format containing
 * only the essential details for each destination.
 *
 * @returns A promise that resolves to an array of objects, each representing a sailing destination
 *          with its ID, name, and image URL. Returns an empty array if no destinations are found
 *          or if an error occurs during the fetch.
 */
export async function fetchSailingDestinationsFromVecto() {
  try {
    const response = await getSailingDestinations();

    return (
      response.data?.map((destination) => ({
        id: destination.id,
        name: destination.name,
        imageUrl: destination.imageUrl,
      })) || []
    );
  } catch (error) {
    console.error("Error fetching sailing destinations from Vecto:", error);
    return [];
  }
}

/**
 * Retrieves a list of departure cities from the Vecto API.
 *
 * This function uses the `getDepartureCities` function from the Vecto API integration
 * to fetch the departure cities. The result is then mapped to a simplified format containing
 * only the essential details for each city.
 *
 * @returns A promise that resolves to an array of objects, each representing a departure city
 *          with its ID, name, and image URL. Returns an empty array if no cities are found
 *          or if an error occurs during the fetch.
 */
export async function fetchDepartureCitiesFromVecto() {
  try {
    const response = await getDepartureCities();

    return (
      response.data?.map((city) => ({
        id: city.id,
        name: city.name,
        imageUrl: city.imageUrl,
      })) || []
    );
  } catch (error) {
    console.error("Error fetching departure cities from Vecto:", error);
    return [];
  }
}

/**
 * Retrieves cruises from the Vecto API based on a selected destination.
 *
 * This function uses the `getVectoCruisesByDestination` function from the Vecto API integration
 * to fetch the cruises. It requires a valid destination ID.
 *
 * @param destinationId - The ID of the destination for which to retrieve cruises.
 * @returns A promise that resolves to an array of cruise objects for the specified destination.
 *          Returns an empty array if no cruises are found or if an error occurs during the fetch.
 */
export async function fetchCruisesByDestinationFromVecto(
  destinationId: string,
) {
  try {
    const cruises = await getVectoCruisesByDestination(destinationId);

    return cruises.map((cruise) => ({
      id: cruise.id,
      name: cruise.name,
      duration: cruise.duration,
      shipId: cruise.shipId,
    }));
  } catch (error) {
    console.error("Error fetching cruises by destination from Vecto:", error);
    return [];
  }
}

/**
 * Retrieves cruises from the Vecto API based on a selected departure city.
 *
 * This function uses the `getVectoCruisesByDepartureCity` function from the Vecto API integration
 * to fetch the cruises. It requires a valid departure city ID.
 *
 * @param departureCityId - The ID of the departure city for which to retrieve cruises.
 * @returns A promise that resolves to an array of cruise objects for the specified departure city.
 *          Returns an empty array if no cruises are found or if an error occurs during the fetch.
 */
export async function fetchCruisesByDepartureCityFromVecto(
  departureCityId: string,
) {
  try {
    const cruises = await getVectoCruisesByDepartureCity(departureCityId);

    return cruises.map((cruise) => ({
      id: cruise.id,
      name: cruise.name,
      duration: cruise.duration,
      startDate: cruise.startDate,
      endDate: cruise.endDate,
      shipId: cruise.shipId,
    }));
  } catch (error) {
    console.error(
      "Error fetching cruises by departure city from Vecto:",
      error,
    );
    return [];
  }
}
