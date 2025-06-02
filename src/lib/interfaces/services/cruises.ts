import {
  CruiseCategoryFlags,
  Details,
  Flags,
  Location,
  TimePeriod,
} from "@/lib/types/types";
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
  tags?: string[];
  icon: React.ComponentType;
}

export interface BaseCruise {
  basePrice: number;
  departureLocation: Location;
  arrivalLocation: Location;
  isPopular?: boolean;
  hasPopularDestination?: boolean;
  category: "mainstream" | "premium" | "entry-luxury" | "luxury" | "expedition";
  itinerary: YachtRoute;
  requiredDocuments?: string[];
  requirements?: string[];
  cancellationPolicy?: string;
  tourCategoryId: CruisCategory["id"];
  contactPersonnel: ContactPersonnel[];
}

export type Cruise = BaseCruise & Flags & Details & CruiseCategoryFlags;

export interface Vessels {
  name: string;
  description: string;
  type:
    | "Mainstream Cruise Ship"
    | "Mega Cruise Ship"
    | "Ocean Cruise Ship"
    | "Luxury Cruise Ship"
    | "Small Cruise Ship"
    | "Adventure Cruise Ship"
    | "Expedition Cruise Ship"
    | "River Cruise Ship";
  capacity: number;
  length: number;
  width: number;
  speed: number;
  yearBuilt?: number;
  homePort: Location;
  specifications?: {
    engineType?: string;
    fuelCapacity?: number;
    waterCapacity?: number;
    propulsionType?: string;
    hullMaterial?: string;
    classification?: string;
    safetyEquipment?: string[];
    navigationEquipment?: string[];
    communicationEquipment?: string[];
    entertainmentEquipment?: string[];
    accessibilityFeatures?: string[];
    environmentalFeatures?: string[];
  };
  isLuxuryVessel?: boolean;
  isPetFriendly?: boolean;
}