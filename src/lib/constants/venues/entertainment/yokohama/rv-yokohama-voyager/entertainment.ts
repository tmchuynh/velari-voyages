// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b121c13e-fcdd-4522-8295-4eaa531f10a5",
    vesselId: "rv-yokohama-voyager",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d3641d53-9761-4537-ae70-e6b7c3d16c01",
    vesselId: "rv-yokohama-voyager",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ce33fd72-610b-4d69-8509-9a361b8ec1c4",
    vesselId: "rv-yokohama-voyager",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "efea7c56-67b5-4b13-99ad-f310e39d600c",
    vesselId: "rv-yokohama-voyager",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b49691f7-b429-4c34-b665-b397dc954ca5",
    vesselId: "rv-yokohama-voyager",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
