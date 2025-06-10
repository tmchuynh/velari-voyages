// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "287062ad-d947-44b2-a8d5-381eca9895ba",
    vesselId: "fv-fort-lauderdale-voyager",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "bb733b1f-6e56-4bca-95a4-a3d36290c2d8",
    vesselId: "fv-fort-lauderdale-voyager",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "69e05480-3858-47aa-8691-9003ddd6063c",
    vesselId: "fv-fort-lauderdale-voyager",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e07e6ec4-47af-41b1-9f9f-4a122f23a271",
    vesselId: "fv-fort-lauderdale-voyager",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b1553f29-c722-4d9b-a4f6-dc6e45560b5f",
    vesselId: "fv-fort-lauderdale-voyager",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "15f2ad05-79a6-4c59-8f70-a566baf00588",
    vesselId: "fv-fort-lauderdale-voyager",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
