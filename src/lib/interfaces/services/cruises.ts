import { IconType } from "react-icons";

export interface Location {
  city: string;
  country: string;
  region?: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface TimePeriod {
  start: string;
  end: string;
  duration: string;
}

export interface YachtRoute {
  route: Location[];
  description: string;
  distance: string;
  totalDuration: string;
  timeAtSea: TimePeriod[];
  timeOnLand: TimePeriod[];
}

export interface ContactPersonnel {
  id: string;
  name: string;
  role: string;
  languages: Array<{
    code: string;
    name: string;
  }>;
  experienceYears: number;
  profileImage: string;
  contact: {
    contactEmail: string;
    contactNumber: string;
  };
}

export interface CruisCategory {
  id: string;
  title: string;
  description: string;
  icon: IconType;
}

export interface BaseCruise {
  id: string;
  vesselId: string;
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
  tourCategoryId: string;
  contactPersonnel: ContactPersonnel[];
  title: string;
  description: string;
  rating?: number;
  tags?: string[];
  crewMembers?: Array<{
    name: string;
    role: string;
  }>;
}

export type CruiseShipType =
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
  type: CruiseShipType;
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

export type Cruise = BaseCruise;
