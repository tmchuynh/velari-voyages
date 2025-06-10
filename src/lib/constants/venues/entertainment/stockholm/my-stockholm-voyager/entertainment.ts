// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "173a2ccd-8ae0-487a-8e15-a87aa7178e8f",
    vesselId: "my-stockholm-voyager",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9fe39bb9-cbe8-4438-8161-be07a5864acf",
    vesselId: "my-stockholm-voyager",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cf419851-9f09-4432-aba9-785021018f1b",
    vesselId: "my-stockholm-voyager",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e91771b8-ffed-4c9d-ad10-fd820706773a",
    vesselId: "my-stockholm-voyager",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "76ecf4ea-d261-4f3f-8926-4cb00d5067e6",
    vesselId: "my-stockholm-voyager",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0b896e63-1261-4d25-bb1e-37bc4a33bb8e",
    vesselId: "my-stockholm-voyager",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
