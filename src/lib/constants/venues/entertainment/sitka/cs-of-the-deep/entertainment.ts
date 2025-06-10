// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "08dec18c-3f54-4cd0-b40e-c92cb2ba79d3",
    vesselId: "cs--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a87dec1d-9906-4f06-b923-0c7e25a7113c",
    vesselId: "cs--of-the-deep",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "423c9e31-7409-4ec4-8e8d-44a6225b13e7",
    vesselId: "cs--of-the-deep",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "dcceecf0-5c55-4279-bb90-3322e3c32dc6",
    vesselId: "cs--of-the-deep",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5f32c3ba-1dd8-49d2-9b50-06449f0728bd",
    vesselId: "cs--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
