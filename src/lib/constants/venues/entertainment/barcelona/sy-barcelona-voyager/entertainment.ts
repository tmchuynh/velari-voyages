// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "42d14f02-6ed5-4f8e-9a48-c60b3446fe37",
    vesselId: "sy-barcelona-voyager",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "a5a05241-acfd-4798-a6e3-fdf332da2fea",
    vesselId: "sy-barcelona-voyager",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2e3f5e74-1959-4896-9d9f-7dc639a69e0a",
    vesselId: "sy-barcelona-voyager",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5f297692-56de-4a2c-8cc3-51e5a7e78e99",
    vesselId: "sy-barcelona-voyager",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "211caa10-96d3-40d1-83a6-090e72f2a5c9",
    vesselId: "sy-barcelona-voyager",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
