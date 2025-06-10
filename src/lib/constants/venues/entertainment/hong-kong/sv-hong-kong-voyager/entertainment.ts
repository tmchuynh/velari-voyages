// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ced23dad-131c-4f48-8fce-1e9134b161a4",
    vesselId: "sv-hong-kong-voyager",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "665c80b0-3025-4bc7-a6a5-1c385ecbd2af",
    vesselId: "sv-hong-kong-voyager",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "eaa2563e-2f5a-42b4-a383-7f1bdd662835",
    vesselId: "sv-hong-kong-voyager",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "70d8d0d7-09e4-4046-b4d6-9de055812e5f",
    vesselId: "sv-hong-kong-voyager",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1a293a1b-2e9f-4e44-beba-462a3a8a92d2",
    vesselId: "sv-hong-kong-voyager",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
