// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a1a0bf26-bd0c-4937-be96-45e691de9079",
    vesselId: "nb--gale",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "287fa5ae-acbc-4cf3-803c-427df700db51",
    vesselId: "nb--gale",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f7de2f4a-41ea-4015-b764-033073dcfd8e",
    vesselId: "nb--gale",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6a443117-d6db-4a6c-ab40-dbbb646a4581",
    vesselId: "nb--gale",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "75a994b3-2c87-4862-87d4-9dd6ecc00996",
    vesselId: "nb--gale",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
