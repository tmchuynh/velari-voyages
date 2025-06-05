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

export interface Vessels {
  name: string;
  description: string;
  type: CruiseShipType;
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

type CruiseShipType =
  | "ocean-liner"
  | "mainstream-cruise-ship"
  | "mid-size-cruise-ship"
  | "small-ocean-ship"
  | "luxury-cruise-ship"
  | "ultra-luxury-cruise-ship"
  | "superyacht"
  | "mega-yacht"
  | "boutique-cruise-ship"
  | "expedition-ship"
  | "polar-expedition-ship"
  | "ice-class-ship"
  | "eco-friendly-hybrid-ship"
  | "resort-style-ship"
  | "adults-only-ship"
  | "family-cruise-ship"
  | "party-cruise-ship"
  | "short-hop-ferry"
  | "chartered-vessel"
  | "river-cruise-ship"
  | "catamaran"
  | "zodiac-equipped-vessel";
