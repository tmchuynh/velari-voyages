// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "691070da-2240-47c8-a506-e9ef2f955eb5",
    vesselId: "fv--explorer",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8cf01a50-1676-43f6-bc10-b8cb11b345be",
    vesselId: "fv--explorer",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "11b00824-fafa-4c3d-a80f-bf4b8dc3e6f6",
    vesselId: "fv--explorer",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "df18cfb4-d148-4334-8e18-d7470736f05d",
    vesselId: "fv--explorer",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "71e40fb7-2b38-435b-80f1-c954340823b0",
    vesselId: "fv--explorer",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
