// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c487c992-b03e-4422-bbac-dd136438f24d",
    vesselId: "fv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c48d4733-20b2-474a-a846-db9cf4cf3289",
    vesselId: "fv--of-the-deep",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4a74ef7e-5c6c-43f8-bb88-0aead22ff8ff",
    vesselId: "fv--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "42f44c95-f60f-4bc4-80f1-50e043690753",
    vesselId: "fv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
