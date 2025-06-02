import { CruisCategory } from "@/lib/interfaces/services/tours";
import {
  FaGem,
  FaHeart,
  FaLandmark,
  FaLeaf,
  FaMountain,
  FaPalette,
  FaSpa,
  FaUtensils,
} from "react-icons/fa";

export const cruiseCategories: CruisCategory[] = [
  {
    id: "weekend-cruise",
    title: "Weekend Cruise",
    description: "Short getaways for relaxation and fun.",
    icon: FaHeart,
  },
  {
    id: "fjords-tour",
    title: "Fjords Tour",
    description: "Explore breathtaking fjords and natural wonders.",
    icon: FaMountain,
  },
  {
    id: "repositioning-cruise",
    title: "Repositioning Cruise",
    description: "Long-distance cruises between different regions.",
    icon: FaLandmark,
  },
  {
    id: "anniversary-cruise",
    title: "Anniversary Cruise",
    description: "Celebrate special occasions with luxury experiences.",
    icon: FaGem,
  },
  {
    id: "glacier-cruise",
    title: "Glacier Cruise",
    description: "Witness majestic glaciers and icy landscapes.",
    icon: FaLeaf,
  },
  {
    id: "tropical-cruise",
    title: "Tropical Cruise",
    description: "Relax in tropical paradises with sun and sea.",
    icon: FaSpa,
  },
  {
    id: "luxury-cruise",
    title: "Luxury Cruise",
    description: "Indulge in high-end amenities and services.",
    icon: FaGem,
  },
  {
    id: "vip-cruise",
    title: "VIP Cruise",
    description: "Exclusive experiences for discerning travelers.",
    icon: FaHeart,
  },
  {
    id: "theme-cruise",
    title: "Theme Cruise",
    description: "Cruises centered around specific themes or interests.",
    icon: FaPalette,
  },
  {
    id: "holiday-cruise",
    title: "Holiday Cruise",
    description: "Celebrate holidays with festive cruises.",
    icon: FaUtensils,
  },
  {
    id: "fall-foliage-cruise",
    title: "Fall Foliage Cruise",
    description: "Experience the beauty of autumn leaves on a cruise.",
    icon: FaLeaf,
  },
];

// Map for quick lookup
export const cruiseCategoryMap = cruiseCategories.reduce((map, category) => {
  map[category.id] = category;
  return map;
}, {} as Record<string, CruisCategory>);
