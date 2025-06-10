import { ContactInfo, Details, FAQs, TimePeriod } from "@/lib/types/types";

interface BaseVenue {
  id: string;
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
  rewardProgram?: {
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

export interface ShoppingArea extends BaseVenue {
  stores: Details[];
  hasDutyFree?: boolean;
  hasLuxuryBrands?: boolean;
  hasLocalCrafts?: boolean;
  hasSouvenirShops?: boolean;
  hasElectronicsStores?: boolean;
  hasClothingStores?: boolean;
  hasJewelryStores?: boolean;
  hasCosmeticsStores?: boolean;
  hasGourmetFoodStores?: boolean;
}

export interface EntertainmentVenue extends BaseVenue {
  shows: Details[];
}
export interface ArtGallery extends BaseVenue {
  exhibitions: Details[];
  hasGuidedTours?: boolean;
  hasWorkshops?: boolean;
  hasArtClasses?: boolean;
  hasGiftShop?: boolean;
  hasCafé?: boolean;
}

export interface Library extends BaseVenue {
  hasReadingRooms?: boolean;
  hasStudyAreas?: boolean;
  hasComputerAccess?: boolean;
  hasWiFi?: boolean;
  hasPrintingServices?: boolean;
  hasCopyingServices?: boolean;
  hasScanningServices?: boolean;
  hasMeetingRooms?: boolean;
  hasChildrensArea?: boolean;
  hasTeenArea?: boolean;
  hasAdultArea?: boolean;
  hasSpecialCollections?: boolean;
}
