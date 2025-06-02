import { Details, Flags, Location, TimePeriod } from "@/lib/types/types";
import { IconType } from "react-icons/lib";
import { ContactPersonnel } from "../people/staff";

export interface YachtRoute {
  route: Location[];
  description: string;
  distance: string;
  totalDuration: string;
  timeAtSea: TimePeriod[];
  timeOnLand: TimePeriod[];
}
export interface TourCategory {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  icon: React.ComponentType;
}

export interface BaseTour {
  departureLocation: Location;
  arrivalLocation: Location;
  icon?: IconType;
  images: string[];
  price: string;
  availableDates?: string[];
  itinerary: YachtRoute;
  cancellationPolicy?: string;
  tourCategoryId: TourCategory["id"];
  contactPersonnel: ContactPersonnel[];
}

export type Tour = BaseTour & Flags & Details;
