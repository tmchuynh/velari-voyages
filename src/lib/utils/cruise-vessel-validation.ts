import { BaseCruise, Cruise, Vessels } from "@/lib/interfaces/services/cruises";

/**
 * Validates that a cruise has a valid vessel assignment
 *
 * @param cruise The cruise to validate
 * @param availableVessels Optional array of available vessels to validate against
 * @returns boolean indicating if the cruise has a valid vessel assignment
 */
export function validateCruiseVesselAssignment(
  cruise: Cruise | BaseCruise,
  availableVessels?: Vessels[]
): boolean {
  // Check if vesselId exists and is not empty
  if (
    !cruise.vesselId ||
    typeof cruise.vesselId !== "string" ||
    cruise.vesselId.trim() === ""
  ) {
    console.error(`Cruise ${cruise.id} is missing a valid vesselId`);
    return false;
  }

  // If available vessels are provided, validate that the vessel exists
  if (availableVessels && availableVessels.length > 0) {
    const vesselExists = availableVessels.some(
      (vessel) => vessel.id === cruise.vesselId
    );
    if (!vesselExists) {
      console.error(
        `Cruise ${cruise.id} references non-existent vessel: ${cruise.vesselId}`
      );
      return false;
    }
  }

  return true;
}

/**
 * Validates that all cruises in an array have valid vessel assignments
 *
 * @param cruises Array of cruises to validate
 * @param availableVessels Optional array of available vessels to validate against
 * @returns boolean indicating if all cruises have valid vessel assignments
 */
export function validateAllCruiseVesselAssignments(
  cruises: (Cruise | BaseCruise)[],
  availableVessels?: Vessels[]
): boolean {
  if (!cruises || cruises.length === 0) {
    return true; // Empty array is valid
  }

  const invalidCruises = cruises.filter(
    (cruise) => !validateCruiseVesselAssignment(cruise, availableVessels)
  );

  if (invalidCruises.length > 0) {
    console.error(
      `Found ${invalidCruises.length} cruises with invalid vessel assignments`
    );
    invalidCruises.forEach((cruise) => {
      console.error(
        `- Cruise ID: ${cruise.id}, Vessel ID: ${cruise.vesselId || "MISSING"}`
      );
    });
    return false;
  }

  return true;
}

/**
 * Ensures a cruise has a vessel assignment by providing a default if missing
 * This is a safety function that should ideally never be needed if cruises are properly generated
 *
 * @param cruise The cruise to ensure has a vessel assignment
 * @param defaultVesselId The default vessel ID to use if one is missing
 * @param departureCity Optional departure city to help select appropriate vessel
 * @returns The cruise with guaranteed vessel assignment
 */
export function ensureCruiseVesselAssignment<T extends BaseCruise>(
  cruise: T,
  defaultVesselId: string,
  departureCity?: string
): T {
  if (!cruise.vesselId || cruise.vesselId.trim() === "") {
    console.warn(
      `Cruise ${cruise.id} missing vesselId, assigning default: ${defaultVesselId}`
    );
    return {
      ...cruise,
      vesselId: defaultVesselId,
    };
  }

  return cruise;
}

/**
 * Groups cruises by their assigned vessels
 *
 * @param cruises Array of cruises to group
 * @returns Object with vessel IDs as keys and arrays of cruises as values
 */
export function groupCruisesByVessel(
  cruises: (Cruise | BaseCruise)[]
): Record<string, (Cruise | BaseCruise)[]> {
  return cruises.reduce(
    (groups, cruise) => {
      const vesselId = cruise.vesselId;
      if (!groups[vesselId]) {
        groups[vesselId] = [];
      }
      groups[vesselId].push(cruise);
      return groups;
    },
    {} as Record<string, (Cruise | BaseCruise)[]>
  );
}

/**
 * Gets all unique vessel IDs used by cruises
 *
 * @param cruises Array of cruises
 * @returns Array of unique vessel IDs
 */
export function getUniqueVesselIds(cruises: (Cruise | BaseCruise)[]): string[] {
  const vesselIdSet = new Set<string>();
  cruises.forEach((cruise) => {
    if (cruise.vesselId && cruise.vesselId.trim() !== "") {
      vesselIdSet.add(cruise.vesselId);
    }
  });
  return Array.from(vesselIdSet);
}

/**
 * Factory function to create a cruise with mandatory vessel assignment
 * This ensures that no cruise can be created without a valid vessel
 *
 * @param cruiseData Partial cruise data (vesselId is required)
 * @returns Complete cruise object with guaranteed vessel assignment
 */
export function createCruiseWithVessel(
  cruiseData: Omit<BaseCruise, "id"> & {
    vesselId: string; // Explicitly require vesselId
    id?: string; // Make id optional since we can generate it
  }
): BaseCruise {
  if (!cruiseData.vesselId || cruiseData.vesselId.trim() === "") {
    throw new Error("Cannot create cruise without valid vesselId");
  }

  return {
    id:
      cruiseData.id ||
      `cruise-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    vesselId: cruiseData.vesselId,
    basePrice: cruiseData.basePrice,
    departureLocation: cruiseData.departureLocation,
    arrivalLocation: cruiseData.arrivalLocation,
    isPopular: cruiseData.isPopular,
    hasPopularDestination: cruiseData.hasPopularDestination,
    category: cruiseData.category,
    itinerary: cruiseData.itinerary,
    requiredDocuments: cruiseData.requiredDocuments,
    requirements: cruiseData.requirements,
    cancellationPolicy: cruiseData.cancellationPolicy,
    tourCategoryId: cruiseData.tourCategoryId,
    contactPersonnel: cruiseData.contactPersonnel,
  };
}

/**
 * Type utility to ensure vesselId is never undefined or empty
 * This creates a stronger contract than the base interface
 */
export type CruiseWithGuaranteedVessel<T extends BaseCruise = BaseCruise> =
  T & {
    vesselId: NonNullable<T["vesselId"]>; // Ensures vesselId is never null or undefined
  };

/**
 * Type guard to check if a cruise has a valid vessel assignment
 *
 * @param cruise The cruise to check
 * @returns boolean indicating if cruise has valid vessel
 */
export function cruiseHasValidVessel(
  cruise: BaseCruise | Cruise
): cruise is CruiseWithGuaranteedVessel<typeof cruise> {
  return (
    cruise.vesselId != null &&
    typeof cruise.vesselId === "string" &&
    cruise.vesselId.trim().length > 0
  );
}
