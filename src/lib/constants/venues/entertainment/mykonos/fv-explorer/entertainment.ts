// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "170e93fd-f1a0-436b-b5c3-bfc91ab1b2eb",
    vesselId: "fv--explorer",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "75e9ad57-278b-4d71-9f4e-e1b9ee3a5564",
    vesselId: "fv--explorer",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ba4456c0-c8b5-4066-860d-3603228ad2bb",
    vesselId: "fv--explorer",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cec0d7b1-6a7d-460e-8b95-8a67afb33322",
    vesselId: "fv--explorer",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
