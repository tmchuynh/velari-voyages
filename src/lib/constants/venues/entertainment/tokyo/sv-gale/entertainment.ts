// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "077ef96f-8859-4147-871d-58324c3de54e",
    vesselId: "sv--gale",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d13f8a88-c348-4556-9605-034a97c201f9",
    vesselId: "sv--gale",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0c7821bd-02b2-4d2a-8a0a-eb208024ca69",
    vesselId: "sv--gale",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ef462b24-59f6-49dd-9945-82ba183ff404",
    vesselId: "sv--gale",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "7270fb21-97ee-4c3a-beb4-34964ee6578b",
    vesselId: "sv--gale",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
