// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "06475ecf-c776-4075-a3f4-3d2efee11f4b",
    vesselId: "cs-shanghai-voyager",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ecedfb6b-626f-4f72-9a91-6a14934d9b77",
    vesselId: "cs-shanghai-voyager",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "eacedd3c-8206-4d8b-9b55-af4cdfe238b6",
    vesselId: "cs-shanghai-voyager",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "9bbbaf84-ef7b-41a7-9b9e-1f7225b72d1e",
    vesselId: "cs-shanghai-voyager",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "519b2469-c092-47b8-95ee-1392a7824a5c",
    vesselId: "cs-shanghai-voyager",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
