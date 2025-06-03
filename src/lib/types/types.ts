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
  location: Location;
  contactInfo: ContactInfo;
};

export type Flags = {
  isFamilyFriendly?: boolean;
  isPetFriendly?: boolean;
  isCulturalExperience?: boolean;
  isAdultOnly?: boolean;
  isSinglesCruise?: boolean;
};

export type CruiseCategoryFlags = {
  isWeekendCruise?: boolean;
  isFjordsTour?: boolean;
  isRepositioningCruise?: boolean;
  isAnniversaryCruise?: boolean;
  isGlacierCruise?: boolean;
  isTropicalCruise?: boolean;
  isLuxuryCruise?: boolean;
  isVIPCruise?: boolean;
  isThemeCruise?: boolean;
  isHolidayCruise?: boolean;
  isFallFoliageCruise?: boolean;
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
  isPopular?: boolean;
  state?: string;
  region?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  subtitle?: string;
  quote?: string;
  address?: string;
  postalCode?: string;
  timezone?: string;
  timezoneAbbreviation?: string;
  additionalInfo?: string;
};

export type ContactInfo = {
  contactNumber?: string;
  contactEmail?: string;
};

export type TimePeriod = {
  start: string;
  end: string;
  duration?: string;
  description?: string;
};

export type Resturant = {
  name: string;
  description: string;
  cuisine: string;
  priceRange: "$" | "$$" | "$$$" | "$$$$";
  rating: number;
  openingHours?: string;
  contactInfo?: ContactInfo;
  menu?: ResturantMenu;
  images?: string[];
  tags?: string[];
  isVegetarianFriendly?: boolean;
  isVeganFriendly?: boolean;
  isGlutenFreeFriendly?: boolean;
  isHalalFriendly?: boolean;
  isKosherFriendly?: boolean;
  isFineDining?: boolean;
  isAdultOnly?: boolean;
  isIndoorSeating?: boolean;
  isReservationsAccepted?: boolean;
  isRomantic?: boolean;
  isPopular?: boolean;
};

export type ResturantMenu = {
  title: string;
  description: string;
  category: {
    name: string;
    items: {
      name: string;
      description: string;
      price: number;
      imageUrl?: string;
      isVegetarian?: boolean;
      isVegan?: boolean;
      isGlutenFree?: boolean;
      isHalal?: boolean;
      isKosher?: boolean;
    }[];
  };
};