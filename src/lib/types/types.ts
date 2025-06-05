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

export type Restaurant = {
  name: string;
  description: string;
  cuisine:
    | "Afghan"
    | "African"
    | "Algerian"
    | "American"
    | "Asian"
    | "Argentinian"
    | "Australian"
    | "Bangladeshi"
    | "Belgian"
    | "Bosnian"
    | "Brazilian"
    | "British"
    | "Burmese"
    | "Canadian"
    | "Caribbean"
    | "Cajun"
    | "Catalan"
    | "Chilean"
    | "Chinese"
    | "Colombian"
    | "Creole"
    | "Croatian"
    | "Cuban"
    | "Czech"
    | "Dutch"
    | "Ethiopian"
    | "Filipino"
    | "French"
    | "Fusion"
    | "Georgian"
    | "German"
    | "Ghanaian"
    | "Greek"
    | "Hawaiian"
    | "Indian"
    | "Indonesian"
    | "Iranian"
    | "Irish"
    | "Israeli"
    | "Italian"
    | "Japanese"
    | "Korean"
    | "Lebanese"
    | "Malaysian"
    | "Mayan"
    | "Pacific"
    | "Maori"
    | "Mediterranean"
    | "Mexican"
    | "Middle Eastern"
    | "Moroccan"
    | "Nepalese"
    | "New Zealand"
    | "Nigerian"
    | "Pakistani"
    | "Palestinian"
    | "Peruvian"
    | "Polish"
    | "Portuguese"
    | "Puerto Rican"
    | "Roman"
    | "Romanian"
    | "Russian"
    | "Scandinavian"
    | "Scottish"
    | "Seafood"
    | "Serbian"
    | "Singaporean"
    | "Southern"
    | "Slovak"
    | "Somali"
    | "Spanish"
    | "Sri Lankan"
    | "Swiss"
    | "Danish"
    | "Syrian"
    | "Taiwanese"
    | "Thai"
    | "Tibetan"
    | "Tunisian"
    | "Turkish"
    | "Tuscan"
    | "Ukrainian"
    | "Uzbek"
    | "Venetian"
    | "Vietnamese";
  priceRange: "$" | "$$" | "$$$" | "$$$$";
  rating: number;
  openingHours?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
  contactInfo?: ContactInfo;
  menu?: RestaurantMenu;
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

export type RestaurantMenu = {
  title: string;
  description: string;
  category: {
    name: string;
    description?: string;
    items: {
      name: string;
      description?: string;
      price: number;
      imageUrl?: string;
      isVegetarian: boolean;
      isVegan: boolean;
      isGlutenFree: boolean;
      isHalal: boolean;
      isKosher: boolean;
    }[];
  }[];
};
