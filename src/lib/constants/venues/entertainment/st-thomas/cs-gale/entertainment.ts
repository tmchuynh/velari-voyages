// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5f3a2b69-880a-4686-805b-1c980c7f9e6f",
    vesselId: "cs--gale",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dcb5a02d-448a-407e-b02a-a221c410ace5",
    vesselId: "cs--gale",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "738c04a9-42b9-4d0a-b0bd-a3e96d19c7a2",
    vesselId: "cs--gale",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c40729a0-491a-4f2c-a562-25a4a485208c",
    vesselId: "cs--gale",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e24ba72e-dd67-4aad-be91-55c45133d988",
    vesselId: "cs--gale",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6f2274a5-d9e9-45ff-a9fa-63a6dc9b6565",
    vesselId: "cs--gale",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
