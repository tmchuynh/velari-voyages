import { CruisCategory } from "@/lib/interfaces/services/cruises";
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
    description:
      "Perfect for quick escapes, these short cruises offer a rejuvenating mix of entertainment, fine dining, and relaxation—all in just a few days.",
    icon: FaHeart,
  },
  {
    id: "fjords-tour",
    title: "Fjords Tour",
    description:
      "Sail through awe-inspiring fjords surrounded by towering cliffs, waterfalls, and serene villages. Ideal for nature lovers and photography enthusiasts.",
    icon: FaMountain,
  },
  {
    id: "repositioning-cruise",
    title: "Repositioning Cruise",
    description:
      "Embark on a unique journey as ships transition between seasons and destinations. Enjoy extended days at sea and exceptional value for long-haul travel.",
    icon: FaLandmark,
  },
  {
    id: "anniversary-cruise",
    title: "Anniversary Cruise",
    description:
      "Celebrate love with romantic dinners, elegant staterooms, and couples' experiences designed to mark your special occasion in unforgettable style.",
    icon: FaGem,
  },
  {
    id: "glacier-cruise",
    title: "Glacier Cruise",
    description:
      "Discover icy wilderness and calving glaciers up close. These cruises offer breathtaking views of nature’s raw power in regions like Alaska and the Arctic.",
    icon: FaLeaf,
  },
  {
    id: "tropical-cruise",
    title: "Tropical Cruise",
    description:
      "Escape to sun-kissed beaches and turquoise waters. Ideal for relaxation, snorkeling, and island hopping in the Caribbean or South Pacific.",
    icon: FaSpa,
  },
  {
    id: "luxury-cruise",
    title: "Luxury Cruise",
    description:
      "Savor five-star dining, personal service, and exclusive amenities. These cruises are tailored for those seeking the highest standard in cruising.",
    icon: FaGem,
  },
  {
    id: "vip-cruise",
    title: "VIP Cruise",
    description:
      "Designed for elite travelers, VIP cruises offer ultra-exclusive experiences, from private excursions to world-class suites and concierge service.",
    icon: FaHeart,
  },
  {
    id: "theme-cruise",
    title: "Theme Cruise",
    description:
      "Immerse yourself in cruises built around your passions—music, wellness, food, or pop culture—featuring specialized programming and guest experts.",
    icon: FaPalette,
  },
  {
    id: "holiday-cruise",
    title: "Holiday Cruise",
    description:
      "Celebrate major holidays at sea with themed events, festive menus, and memorable family-friendly entertainment in a joyful onboard atmosphere.",
    icon: FaUtensils,
  },
  {
    id: "fall-foliage-cruise",
    title: "Fall Foliage Cruise",
    description:
      "Set sail during peak autumn to witness nature’s vibrant transformation. Cruise through New England or Canada surrounded by golden and crimson hues.",
    icon: FaLeaf,
  },
];

// Map for quick lookup
export const cruiseCategoryMap = cruiseCategories.reduce(
  (map, category) => {
    map[category.id] = category;
    return map;
  },
  {} as Record<string, CruisCategory>,
);
