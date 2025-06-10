// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "1c4e60f7-35da-4f82-827d-18241343e304",
    vesselId: "ps--gale",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "9fdad185-3551-4ac8-ab43-b915a0696166",
    vesselId: "ps--gale",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "257c7b17-64a5-4be7-a947-cfacc0400cdc",
    vesselId: "ps--gale",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0f3ad751-9b95-4b0b-9425-c464393be387",
    vesselId: "ps--gale",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e73ab272-9bd8-4a97-8db3-1a27d7de742d",
    vesselId: "ps--gale",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
