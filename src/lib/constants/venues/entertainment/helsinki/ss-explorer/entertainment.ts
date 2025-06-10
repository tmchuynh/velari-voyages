// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "265a4382-27b8-48c7-b77f-378c82de36fd",
    vesselId: "ss--explorer",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "93808205-28fb-4f19-b2e2-037a43204ca4",
    vesselId: "ss--explorer",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "17c62f04-7afa-4037-91f6-2106410abc47",
    vesselId: "ss--explorer",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "92f89863-148a-47be-b412-1599cce9b735",
    vesselId: "ss--explorer",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "55ca5b0b-530e-4ff7-b2cb-45d4bb296413",
    vesselId: "ss--explorer",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
