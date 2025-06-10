import { ContactInfo, Details, FAQs, TimePeriod } from "@/lib/types/types";
import { Vessels } from "./cruises";
import { TeamMember } from "../people/staff";

interface BaseVenue {
  id: string;
  vesselId: Vessels["id"];
  contact: ContactInfo;
  name: string;
  imageUrl?: string;
  description: string;
  hours: TimePeriod;
  isPopular?: boolean;
  faqs: FAQs[];
}

export interface Spa extends BaseVenue {
  services: Details[];
}

export interface Casino extends BaseVenue {
  games: string[];
  minimumAge: number;
  dressCode?: string;
  freeDrinks?: boolean;
  prohibitedItems?: string[];
  prohibitedActions?: string[];
  winningRedepmtion: {
    minimumWageringAmount: number;
    maximumWageringAmount: number;
    wageringMethods: string[];
    redemptionMethods: string[];
  };
  hasHighRollerRoom: boolean;
  hasPokerRoom: boolean;
  hasSlotMachines: boolean;
  hasTableGames: boolean;
  hasLiveDealerGames: boolean;
  hasVIPArea: boolean;
  hasEntertainment: boolean;
  hasDiningOptions: boolean;
  tippingRequired: string;
  tippingAmount: number;
  hasBar: boolean;
  hasSmokingArea: boolean;
  rewardProgram: {
    name: string;
    benefits: string[];
    pointsSystem: string;
  };
}

export interface FitnessCenter extends BaseVenue {
  equipment: string[];
  personalTrainers?: string[];
  amenities?: string[];
  is24Hours?: boolean;
  hasLockerRooms?: boolean;
  hasSauna?: boolean;
  hasSteamRoom?: boolean;
  hasPool?: boolean;
  hasYogaStudio?: boolean;
  hasCyclingStudio?: boolean;
  hasPilatesStudio?: boolean;
  hasDanceStudio?: boolean;
  hasGroupClasses?: boolean;
  hasNutritionCounseling?: boolean;
  hasHealthScreenings?: boolean;
  hasFitnessAssessments?: boolean;
  hasChildcareServices?: boolean;
}

export interface Shopping {
  id: string;
  vesselId: Vessels["id"];
  type:
    | "Duty-Free"
    | "Jewelry and Watches"
    | "Fashion and Accessories"
    | "Electronics and Gadgets"
    | "Souvenirs and Gifts"
    | "Health and Beauty"
    | "Sports and Outdoor"
    | "Home and Living";
  stores: {
    id: string;
    name: string;
    description: string;
    hours: TimePeriod;
    contact: ContactInfo;
    hasSales?: boolean;
    isPopular?: boolean;
  }[];
}

export interface Entertainment {
  id: string;
  vesselId: Vessels["id"];
  type:
    | "Live Music"
    | "Dancing"
    | "Comedy"
    | "Game Show"
    | "Movie Theater"
    | "Karaoke"
    | "Magic Show"
    | "Nightclub";
  shows: {
    id: string;
    title: string;
    description: string;
    tickets: {
      isRequired: boolean;
      price: number;
      currency: string;
    };
    isAdultOnly?: boolean;
    duration: string;
    schedule: TimePeriod[];
    performers: TeamMember[];
  }[];
  hasBar?: boolean;
  hasFoodService?: boolean;
  hasAccessibleSeating?: boolean;
}

export interface ArtGallery extends BaseVenue {
  artists: string[];
  hasExhibitions?: boolean;
  hasGuidedTours: boolean;
  tours: Details[];
  hasArtClasses: boolean;
  artClasses: Details[];
}

export interface Library extends BaseVenue {
  libraryType: "Digital" | "Physical";
  hasReadingRooms?: boolean;
  hasStudyAreas?: boolean;
  hasComputers?: boolean;
  libraryCardRequired?: boolean;
  hasEvents?: boolean;
  events: Details[];
  hasBookClubs?: boolean;
  bookClubs: Details[];
}
