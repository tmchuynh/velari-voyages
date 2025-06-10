// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "fffd2745-d9a9-4b46-9b4b-d637f95d3b5f",
    vesselId: "ms-sitka-voyager",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "fff377c7-c96d-451f-8c33-e923d08e19c8",
    vesselId: "ms-sitka-voyager",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "2967972b-e09f-4b24-a85c-1d595394fea3",
    vesselId: "ms-sitka-voyager",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "272d054c-d787-44c0-91d0-05123b253909",
    vesselId: "ms-sitka-voyager",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "2dd1942f-e05e-4f26-ab05-037ab16f1842",
    vesselId: "ms-sitka-voyager",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
