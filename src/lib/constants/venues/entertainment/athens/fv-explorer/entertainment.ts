// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e9fa0663-8612-4bd2-90c6-d7adcf0d595e",
    vesselId: "fv--explorer",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "73c80514-eceb-4813-9915-31e6bce76eea",
    vesselId: "fv--explorer",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2dfb6720-333b-4265-874a-a048dd450b5b",
    vesselId: "fv--explorer",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "847717a3-1005-4fec-95ad-65519cc66e10",
    vesselId: "fv--explorer",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "1c4d80e5-e16c-474c-9055-d5c418b31b12",
    vesselId: "fv--explorer",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
