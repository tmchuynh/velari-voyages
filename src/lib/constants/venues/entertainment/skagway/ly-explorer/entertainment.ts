// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5a210a12-b83a-4c0b-a75d-1240aa809620",
    vesselId: "ly--explorer",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2e5e7414-f58c-4c95-9fc8-7c419d926ac4",
    vesselId: "ly--explorer",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dbbe0153-3952-4bd6-964e-102c6d17dec8",
    vesselId: "ly--explorer",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b3e1bce0-ae77-4569-a374-1817889c6dd2",
    vesselId: "ly--explorer",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2cd315af-1542-433b-8e22-41353e780bb8",
    vesselId: "ly--explorer",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1afe7bfa-d072-4a19-a91a-ecf0da1faa99",
    vesselId: "ly--explorer",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
