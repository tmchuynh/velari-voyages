// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "03f4c0de-a788-4246-a122-304a3f6f18cc",
    vesselId: "ly--explorer",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "83c9e225-f7d0-43f2-b744-e412f70fd7fb",
    vesselId: "ly--explorer",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b1c867b9-135a-419b-8c5c-2d8a34a2e4fd",
    vesselId: "ly--explorer",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "37d6553c-3d1a-452d-bff0-dbc686fd5b69",
    vesselId: "ly--explorer",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
