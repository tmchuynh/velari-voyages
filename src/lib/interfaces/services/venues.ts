import { ContactInfo, Details, FAQs, TimePeriod } from "@/lib/types/types";
import { Vessels } from "./cruises";
import { TeamMember } from "../people/staff";
import { Testimonial } from "./testimonials";

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

export interface EntertainmentCategory {
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
  location: {
    deck: number;
    area: string;
  };
  hasBar?: boolean;
  hasFoodService?: boolean;
  hasAccessibleSeating?: boolean;
}

export interface Entertainment extends BaseVenue {
  id: EntertainmentCategory["id"];
  category: EntertainmentCategory["type"];
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
    testimonials: Testimonial[];
    hasVIPSeating?: boolean;
    hasAccessibleSeating?: boolean;
    hasMerchandise: boolean;
    merchandise?: {
      id: string;
      name: string;
      description: string;
      price: number;
      currency: string;
    };
  }[];
}

export interface ArtGallery extends BaseVenue {
  artists: string[];
  hasExhibitions: boolean;
  exhibitions?: EventDetails[];
  hasGuidedTours: boolean;
  tours?: EventDetails[];
  hasArtClasses: boolean;
  artClasses?: ArtClassDetails[];
}

type EventDetails = tour & Details & BasicDetails;
type ArtClassDetails = classDetails & Details & BasicDetails;

type tour = {
  duration: string;
  type?: string;
  featured?: boolean;
  schedule?: string;
  maxParticipants?: number;
};

type classDetails = {
  duration: string;
  skillLevel: string;
  maxParticipants?: number;
  materialsIncluded?: boolean;
  ageRestriction?: string;
};

type BasicDetails = {
  currency?: string;
  bookingRequired?: boolean;
  ticketPrice?: number;
};

export interface Library extends BaseVenue {
  hasStudyAreas?: boolean;
  hasComputers?: boolean;
  donationPolicy?:
    | "Permanent Collection Donations"
    | "'Take a Book/Leave a Book' Programs"
    | "Military Library Donations"
    | "No Donation Policy";

  featuredBooks: {
    title: string;
    author: string;
    description: string;
    tags: string[];
    ageGroup: "12-16" | "14-18" | "18+" | "Adults Only" | "Mature Audiences";
  }[];
  hasMovieRentals?: boolean;
  hasEvents: boolean;
  events?: EventDetails[];
  hasBookClubs: boolean;
  bookClubs?: BookClubDetails[];
}

type club = {
  name: string;
  description: string;
  meetingFrequency: string;
  membershipRequirements?: string;
  contact: ContactInfo;
};

type BookClubDetails = club & Details;
