import { amsterdamVessels } from "@/lib/constants/cruises/vessels/amsterdam-vessels";
import { aucklandVessels } from "@/lib/constants/cruises/vessels/auckland-vessels";
import { bermudaVessels } from "@/lib/constants/cruises/vessels/bermuda-vessels";
import { bostonVessels } from "@/lib/constants/cruises/vessels/boston-vessels";
import { buenosAiresVessels } from "@/lib/constants/cruises/vessels/buenos-aires-vessels";
import { copenhagenVessels } from "@/lib/constants/cruises/vessels/copenhagen-vessels";
import { cozumelVessels } from "@/lib/constants/cruises/vessels/cozumel-vessels";
import { dublinVessels } from "@/lib/constants/cruises/vessels/dublin-vessels";
import { florenceVessels } from "@/lib/constants/cruises/vessels/florence-vessels";
import { fortLauderdaleVessels } from "@/lib/constants/cruises/vessels/fort-lauderdale-vessels";
import { galvestonVessels } from "@/lib/constants/cruises/vessels/galveston-vessels";
import { georgeTownVessels } from "@/lib/constants/cruises/vessels/george-town-vessels";
import { helsinkiVessels } from "@/lib/constants/cruises/vessels/helsinki-vessels";
import { hoChiMinhCityVessels } from "@/lib/constants/cruises/vessels/ho-chi-minh-city-vessels";
import { londonVessels } from "@/lib/constants/cruises/vessels/london-vessels";
import { maltaVessels } from "@/lib/constants/cruises/vessels/malta-vessels";
import { melbourneVessels } from "@/lib/constants/cruises/vessels/melbourne-vessels";
import { montevideoVessels } from "@/lib/constants/cruises/vessels/montevideo-vessels";
import { newOrleansVessels } from "@/lib/constants/cruises/vessels/new-orleans-vessels";
import { newYorkCityVessels } from "@/lib/constants/cruises/vessels/new-york-city-vessels";
import { parisVessels } from "@/lib/constants/cruises/vessels/paris-vessels";
import { quebecCityVessels } from "@/lib/constants/cruises/vessels/quebec-city-vessels";
import { rioDeJaneiroVessels } from "@/lib/constants/cruises/vessels/rio-de-janeiro-vessels";
import { romeVessels } from "@/lib/constants/cruises/vessels/rome-vessels";
import { shanghaiVessels } from "@/lib/constants/cruises/vessels/shanghai-vessels";
import { stPetersburgVessels } from "@/lib/constants/cruises/vessels/st-petersburg-vessels";
import { sydneyVessels } from "@/lib/constants/cruises/vessels/sydney-vessels";
import { tokyoVessels } from "@/lib/constants/cruises/vessels/tokyo-vessels";
import { veniceVessels } from "@/lib/constants/cruises/vessels/venice-vessels";
import { yokohamaVessels } from "@/lib/constants/cruises/vessels/yokohama-vessels";
import { cruiseTypeMapping } from "@/lib/constants/info/cruiseVessels";
import { CruiseVessel, Vessels } from "@/lib/interfaces/services/cruises";

// Map city names to their vessel arrays
const cityVesselsMap: Record<string, Vessels[]> = {
  Amsterdam: amsterdamVessels,
  Auckland: aucklandVessels,
  Bermuda: bermudaVessels,
  Boston: bostonVessels,
  "Buenos Aires": buenosAiresVessels,
  Copenhagen: copenhagenVessels,
  Cozumel: cozumelVessels,
  Dublin: dublinVessels,
  Florence: florenceVessels,
  "Fort Lauderdale": fortLauderdaleVessels,
  Galveston: galvestonVessels,
  "George Town": georgeTownVessels,
  Helsinki: helsinkiVessels,
  "Ho Chi Minh City": hoChiMinhCityVessels,
  London: londonVessels,
  Malta: maltaVessels,
  Melbourne: melbourneVessels,
  Montevideo: montevideoVessels,
  "New Orleans": newOrleansVessels,
  "New York City": newYorkCityVessels,
  Paris: parisVessels,
  "Quebec City": quebecCityVessels,
  "Rio De Janeiro": rioDeJaneiroVessels,
  Rome: romeVessels,
  Shanghai: shanghaiVessels,
  "St Petersburg": stPetersburgVessels,
  Sydney: sydneyVessels,
  Tokyo: tokyoVessels,
  Venice: veniceVessels,
  Yokohama: yokohamaVessels,
};

/**
 * Gets a vessel for a specific cruise based on departure city and cruise category
 * @param departureCity The city of departure
 * @param cruiseCategory The cruise category ID
 * @returns A cruise vessel matching the criteria, or null if none found
 */
export function getVesselForCruise(
  departureCity: string,
  cruiseCategory: string
): Vessels | null {
  // Get vessels for the departure city
  const cityVessels = cityVesselsMap[departureCity];
  if (!cityVessels) return null;

  // Find vessel types that support this cruise category
  const compatibleVesselTypes = Object.entries(cruiseTypeMapping)
    .filter(([, categories]) => categories.includes(cruiseCategory))
    .map(([vesselType]) => vesselType);

  if (compatibleVesselTypes.length === 0) return null;

  // Find the first vessel in this city that has a compatible type
  const matchingVessel = cityVessels.find((vessel) =>
    compatibleVesselTypes.includes(vessel.type)
  );

  if (!matchingVessel) return null;

  // Convert from Vessels type to CruiseVessel type
  const cruiseVessel: Vessels = {
    id: matchingVessel.type,
    name: matchingVessel.name,
    type: matchingVessel.type,
    capacity: matchingVessel.capacity,
    length: matchingVessel.length,
    topSpeed: matchingVessel.speed,
    yearBuilt: matchingVessel.yearBuilt,
    description: matchingVessel.description,
    imageUrl: `/images/vessels/${matchingVessel.type}.jpg`,
    specifications: {
      engineType: matchingVessel.specifications.engineType,
      fuelCapacity: matchingVessel.specifications.fuelCapacity,
      waterCapacity: matchingVessel.specifications.waterCapacity,
      propulsionType: matchingVessel.specifications.propulsionType,
      hullMaterial: matchingVessel.specifications.hullMaterial,
      classification: matchingVessel.specifications.classification,
      safetyEquipment: matchingVessel.specifications.safetyEquipment,
      navigationEquipment: matchingVessel.specifications.navigationEquipment,
      communicationEquipment:
        matchingVessel.specifications.communicationEquipment,
      entertainmentEquipment:
        matchingVessel.specifications.entertainmentEquipment,
      accessibilityFeatures:
        matchingVessel.specifications.accessibilityFeatures,
      environmentalFeatures:
        matchingVessel.specifications.environmentalFeatures,
    },
    isLuxuryVessel: matchingVessel.isLuxuryVessel,
    isPetFriendly: matchingVessel.isPetFriendly,
    homePort: {
      city: matchingVessel.homePort.city,
      country: matchingVessel.homePort.country,
      coordinates: {
        latitude: matchingVessel.homePort.coordinates.latitude,
        longitude: matchingVessel.homePort.coordinates.longitude,
      },
    },
    speed: matchingVessel.speed,
    width: matchingVessel.width,
  };

  return cruiseVessel;
}
