// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a0b4f501-4bb9-42c9-9be2-7e649ef1b339",
    vesselId: "sv--explorer",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2e215606-b247-49c8-8c17-d33cbd159c27",
    vesselId: "sv--explorer",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3e0f4645-d266-48e8-90ae-a59d3b158a1f",
    vesselId: "sv--explorer",
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
    id: "df69d1da-a419-4c43-8ebd-f9978f3d0767",
    vesselId: "sv--explorer",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2d31366a-36d5-4456-8eb4-143f1d3b492b",
    vesselId: "sv--explorer",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
