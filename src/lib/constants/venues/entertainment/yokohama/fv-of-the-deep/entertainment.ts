// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "096f207d-77ab-4650-b60c-e8d277585d8a",
    vesselId: "fv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9c8e5677-e385-43cf-b0f8-d3c82e7454e7",
    vesselId: "fv--of-the-deep",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7f43d7bf-4560-4fe3-b3fb-926ce5070970",
    vesselId: "fv--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "83b4772c-967a-4154-80c2-aa96ebbc5b37",
    vesselId: "fv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "cef3cfd6-83c0-4fc3-89c9-d4845caf235a",
    vesselId: "fv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "af1fb397-804e-491e-8ccc-d6f8a1f0e8c8",
    vesselId: "fv--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
