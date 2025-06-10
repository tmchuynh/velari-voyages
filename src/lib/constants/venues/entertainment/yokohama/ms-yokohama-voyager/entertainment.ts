// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4f330e1a-3152-44ca-b4ec-8e5331424fb9",
    vesselId: "ms-yokohama-voyager",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "27757dd8-de11-4fff-b0d9-7a753cdf2fd3",
    vesselId: "ms-yokohama-voyager",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dcd58e06-1899-421a-acab-266d9908a89c",
    vesselId: "ms-yokohama-voyager",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5ecdf197-22e2-4843-9eb8-55169e529726",
    vesselId: "ms-yokohama-voyager",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
