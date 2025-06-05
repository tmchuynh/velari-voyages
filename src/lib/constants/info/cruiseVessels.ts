import { CruiseShipType } from "@/lib/interfaces/services/cruises";

export const cruiseTypeMapping: Record<CruiseShipType, string[]> = {
  "ocean-liner": [
    "repositioning-cruise",
    "holiday-cruise",
    "theme-cruise",
    "anniversary-cruise",
  ],
  "mainstream-cruise-ship": [
    "repositioning-cruise",
    "holiday-cruise",
    "theme-cruise",
    "anniversary-cruise",
    "weekend-cruise",
  ],
  "mid-size-cruise-ship": [
    "fall-foliage-cruise",
    "theme-cruise",
    "holiday-cruise",
    "anniversary-cruise",
  ],
  "small-ocean-ship": [
    "fall-foliage-cruise",
    "tropical-cruise",
    "weekend-cruise",
    "fjords-tour",
  ],
  "luxury-cruise-ship": [
    "luxury-cruise",
    "anniversary-cruise",
    "vip-cruise",
    "holiday-cruise",
  ],
  "ultra-luxury-cruise-ship": [
    "vip-cruise",
    "luxury-cruise",
    "anniversary-cruise",
  ],
  superyacht: ["vip-cruise", "anniversary-cruise", "luxury-cruise"],
  "mega-yacht": ["vip-cruise", "luxury-cruise", "anniversary-cruise"],
  "boutique-cruise-ship": [
    "luxury-cruise",
    "anniversary-cruise",
    "theme-cruise",
  ],
  "expedition-ship": ["glacier-cruise", "fjords-tour", "expedition-cruise"],
  "polar-expedition-ship": ["glacier-cruise", "expedition-cruise"],
  "ice-class-ship": ["glacier-cruise", "expedition-cruise"],
  "eco-friendly-hybrid-ship": [
    "fjords-tour",
    "expedition-cruise",
    "glacier-cruise",
  ],
  "resort-style-ship": ["tropical-cruise", "holiday-cruise", "theme-cruise"],
  "adults-only-ship": ["anniversary-cruise", "weekend-cruise", "luxury-cruise"],
  "family-cruise-ship": ["holiday-cruise", "theme-cruise"],
  "party-cruise-ship": ["theme-cruise", "weekend-cruise", "holiday-cruise"],
  "short-hop-ferry": ["weekend-cruise", "party-cruise"],
  "chartered-vessel": ["vip-cruise", "anniversary-cruise", "tropical-cruise"],
  "river-cruise-ship": ["fall-foliage-cruise", "holiday-cruise"],
  catamaran: ["tropical-cruise", "weekend-cruise"],
  "zodiac-equipped-vessel": ["glacier-cruise", "expedition-cruise"],
};
