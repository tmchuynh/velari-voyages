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
  isPopular?: boolean; // Indicates if the cruise is popular
  hasPopularDestination?: boolean; // Indicates if either departure or arrival is a popular destination
  category: "mainstream" | "premium" | "entry-luxury" | "luxury" | "expedition";
  itinerary: YachtRoute;
  requiredDocuments?: string[];
  requirements?: string[];
  cancellationPolicy?: string;
  tourCategoryId: CruisCategory["id"];
  contactPersonnel: ContactPersonnel[];
}

export type Cruise = BaseCruise & Flags & Details & CruiseCategoryFlags;
