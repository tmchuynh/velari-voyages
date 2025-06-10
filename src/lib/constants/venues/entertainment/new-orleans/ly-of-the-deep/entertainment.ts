// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "019d431d-252a-47ed-9c64-dd4b6e7975b0",
    vesselId: "ly--of-the-deep",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "10b4a9c0-3145-4ec1-8718-cc529133f891",
    vesselId: "ly--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1a886353-b96e-418d-aa71-f78c23e02b6a",
    vesselId: "ly--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b39a88e3-ca9f-430a-8927-bf4ec90d1851",
    vesselId: "ly--of-the-deep",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9b10b145-e6a1-4b9f-b4a7-2156cc36112c",
    vesselId: "ly--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
