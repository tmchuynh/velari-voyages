import { Details, Flags, Location } from "@/lib/types/types";
import { IconType } from "react-icons/lib";

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
  duration: string;
  price: string;
  availableDates?: string[];
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  itinerary?: string[];
  cancellationPolicy?: string;
  tourCategoryId: TourCategory["id"];
}

export type Tour = BaseTour & Flags & Details;
