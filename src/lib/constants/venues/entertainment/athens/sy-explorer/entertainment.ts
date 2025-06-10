// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "116b6fe3-05c4-4cfc-837a-f5ccb22dcc51",
    vesselId: "sy--explorer",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "e088b6c5-55a3-4baf-9e6d-054f390b225d",
    vesselId: "sy--explorer",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9923cd81-194a-48c9-bfbe-7d7b0799e543",
    vesselId: "sy--explorer",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "7538c34c-7219-4d1d-8236-f65831adf5cd",
    vesselId: "sy--explorer",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "35aa4050-5721-406e-8499-033c3b939390",
    vesselId: "sy--explorer",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
