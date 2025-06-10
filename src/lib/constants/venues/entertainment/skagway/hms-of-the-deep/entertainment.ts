// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "cd83f8eb-7aef-409e-84f9-261738d9bdaa",
    vesselId: "hms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5cab5e1e-4ecc-4f95-8b82-4701dadc3574",
    vesselId: "hms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d0f966fb-6d43-42f9-b1ba-b0ff67302117",
    vesselId: "hms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ee8d7d3e-e33e-4fd8-89c3-b51bea0ccdd3",
    vesselId: "hms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
