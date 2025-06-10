// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3836a82b-909c-4ed2-9107-7af53587337e",
    vesselId: "nx--gale",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "154e307f-5459-4ceb-8461-3c8d73d59de6",
    vesselId: "nx--gale",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a922887b-ee6f-4fcc-beb8-fe6dc1435814",
    vesselId: "nx--gale",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "576bce41-7a4e-4bc4-8818-5cb3f48893b6",
    vesselId: "nx--gale",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c50e8365-14a7-4828-8df6-8958fe0e5454",
    vesselId: "nx--gale",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
