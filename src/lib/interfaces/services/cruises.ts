import {
  CruiseCategoryFlags,
  Details,
  Flags,
  Location,
  TimePeriod,
} from "@/lib/types/types";
import { IconType } from "react-icons";
import { ContactPersonnel } from "../people/staff";

export interface YachtRoute {
  route: Location[];
  description: string;
  distance: string;
  totalDuration: string;
  timeAtSea: TimePeriod[];
  timeOnLand: TimePeriod[];
}

export interface CruisCategory {
  id: string;
  title: string;
  description: string;
  icon: IconType;
}

export interface BaseCruise {
  id: string;
  /**
   * Required vessel assignment - every cruise must be assigned to a valid vessel
   * @see Vessels interface for valid vessel IDs
   */
  vesselId: Vessels["id"];
  basePrice: number;
  departureLocation: Location;
  arrivalLocation: Location;
  isPopular?: boolean;
  hasPopularDestination?: boolean;
  category:
    | "repositioning-cruise"
    | "anniversary-cruise"
    | "theme-cruise"
    | "holiday-cruise"
    | "fall-foliage-cruise"
    | "glacier-cruise"
    | "tropical-cruise"
    | "vip-cruise"
    | "fjords-tour"
    | "weekend-cruise"
    | "luxury-cruise"
    | "expedition-cruise";
  itinerary: YachtRoute;
  requiredDocuments?: string[];
  requirements?: string[];
  cancellationPolicy?: string;
  tourCategoryId: CruisCategory["id"];
  contactPersonnel: ContactPersonnel[];
}

export type Cruise = BaseCruise & Flags & Details & CruiseCategoryFlags;

export interface CruiseVessel {
  id: string;
  name: string;
  type: string;
  capacity: number;
  amenities: string[];
  length: string;
  yearBuilt: number;
  description: string;
}

export interface Vessels {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  type: string;
  capacity: number;
  topSpeed: number;
  length: number;
  width: number;
  speed: number;
  yearBuilt: number;
  homePort: {
    city: string;
    country: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  specifications: {
    engineType: string;
    fuelCapacity: number;
    waterCapacity: number;
    propulsionType: string;
    hullMaterial: string;
    classification: string;
    safetyEquipment: string[];
    navigationEquipment: string[];
    communicationEquipment: string[];
    entertainmentEquipment: string[];
    accessibilityFeatures: string[];
    environmentalFeatures: string[];
  };
  isLuxuryVessel: boolean;
  isPetFriendly: boolean;
}
