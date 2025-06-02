import { TeamMember } from "../interfaces/people/staff";

export type NotFoundContextType = {
  isNotFound: boolean;
  setNotFound: (value: boolean) => void;
};

export type Menu = {
  title: string;
  href: string;
  description: string;
  imageUrl?: string;
};

export type FAQs = {
  question: string;
  answer: string;
};

export type FAQSection = {
  title: string;
  faqs: FAQs[];
};

export type Metrics = {
  label: string;
  value: string;
  description: string;
};

export type StaffTeams = {
  category: string;
  subtitle?: string;
  description?: string;
  members: TeamMember[];
};

export type MeetingPoint = {
  location: Location; // additional instructions for the meeting point
  contactInfo: ContactInfo; // optional contact email for the meeting point
};

export type Flags = {
  isFamilyFriendly?: boolean; // optional, for family-friendly cruises
  isPetFriendly?: boolean; // optional, for pet-friendly cruises
  isCulturalExperience?: boolean; // optional, for cultural experience cruises
  isAdultOnly?: boolean; // optional, for adult-only cruises
  isSinglesCruise?: boolean; // optional, for singles cruises
};

export type CruiseCategoryFlags = {
  isWeekendCruise?: boolean; // optional, for weekend cruises
  isFjordsTour?: boolean; // optional, for fjords tours
  isRepositioningCruise?: boolean; // optional, for repositioning cruises
  isAnniversaryCruise?: boolean; // optional, for anniversary cruises
  isGlacierCruise?: boolean; // optional, for glacier cruises
  isTropicalCruise?: boolean; // optional, for tropical cruises
  isLuxuryCruise?: boolean; // optional, for luxury cruises
  isVIPCruise?: boolean; // optional, for VIP cruises
  isThemeCruise?: boolean; // optional, for theme cruises
  isHolidayCruise?: boolean; // optional, for holiday cruises
  isFallFoliageCruise?: boolean; // optional, for fall foliage cruises
};

export type Package = {
  id: string;
  title: string;
  description: string;
  price: number;
  includes: string[];
  excludes?: string[];
};

export type Details = {
  title: string;
  description: string;
  tags?: string[];
  rating: number;
  faqs?: FAQs[];
};

export type Location = {
  city: string;
  country: string;
  isPopular?: boolean; // optional, for popular destinations
  state?: string;
  region?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  subtitle?: string; // optional, for additional location details
  quote?: string; // optional, for a quote about the location
  address?: string;
  postalCode?: string;
  timezone?: string; // optional, for time-sensitive activities
  additionalInfo?: string; // optional, for any extra details
};

export type ContactInfo = {
  contactNumber?: string; // optional, for direct contact
  contactEmail?: string; // optional, for direct contact
};

export type TimePeriod = {
  start: string; // ISO 8601 date string
  end: string; // ISO 8601 date string
  duration?: string; // optional, for duration in weeks and days
  description?: string; // optional, for additional details about the time period
};

export type Resturant = {
  name: string;
  description: string;
  cuisine: string;
  priceRange: "$" | "$$" | "$$$" | "$$$$";
  rating: number;
  openingHours?: string; // optional, for restaurant hours
  contactInfo?: ContactInfo; // optional, for restaurant contact details
  menu?: {
    items: {
      name: string;
      description: string;
      price: number;
    }[];
  }; // optional, for restaurant menu
  images?: string[]; // optional, for restaurant images
  tags?: string[]; // optional, for restaurant tags
  isVegetarianFriendly?: boolean; // optional, for vegetarian-friendly restaurants
  isVeganFriendly?: boolean; // optional, for vegan-friendly restaurants
  isGlutenFreeFriendly?: boolean; // optional, for gluten-free friendly restaurants
  isHalalFriendly?: boolean; // optional, for halal-friendly restaurants
  isKosherFriendly?: boolean; // optional, for kosher-friendly restaurants
  isFineDining?: boolean; // optional, for fine dining restaurants
  isIndoorSeating?: boolean; // optional, for indoor seating restaurants
  isReservationsAccepted?: boolean; // optional, for restaurants that accept reservations
  isRomantic?: boolean; // optional, for romantic restaurants
  isPopular?: boolean; // optional, for popular restaurants
};