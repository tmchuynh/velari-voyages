// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "aa167801-bb9d-4aa0-9a3c-06f285e6c404",
    vesselId: "rv-sydney-voyager",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8c307725-8ded-4581-8314-abf9a3291f39",
    vesselId: "rv-sydney-voyager",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "b20c9768-a854-4ba9-ac54-1ef7c2f5ffe6",
    vesselId: "rv-sydney-voyager",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "973b4535-f29f-4c2e-896e-ace0e9e6519a",
    vesselId: "rv-sydney-voyager",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "26df7ef6-c580-4506-bf91-022e6e049e64",
    vesselId: "rv-sydney-voyager",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "0719a82b-b565-4c47-83c5-ae4f927a1ade",
    vesselId: "rv-sydney-voyager",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
