// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "737fa5b7-24b0-4990-afa3-5394e6a3b230",
    vesselId: "sy--of-the-deep",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "67c8474f-b0f6-4993-a088-f0537d098d30",
    vesselId: "sy--of-the-deep",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "91bb466c-a4e8-4524-b21a-b5b800b22988",
    vesselId: "sy--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "61f568e1-f2a0-40b0-b878-f83d53948f6d",
    vesselId: "sy--of-the-deep",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "538cc8c2-580e-4983-bc71-0eb47b720eac",
    vesselId: "sy--of-the-deep",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "013ba696-daa7-4a97-b639-d43b179f8bab",
    vesselId: "sy--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
