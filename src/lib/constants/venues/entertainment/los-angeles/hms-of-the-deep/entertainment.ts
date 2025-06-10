// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "782bdd7a-2dc5-4d34-a9c6-4c9d222e396d",
    vesselId: "hms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a397cd4a-122f-4228-8fdd-9fab222267fd",
    vesselId: "hms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "018851f3-455e-40d6-a5f5-7e35a5c78db1",
    vesselId: "hms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4cc83750-0dbf-4f20-b1a7-bb92e400ab4c",
    vesselId: "hms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8190d2e6-afc7-48bb-9008-700ef3c17081",
    vesselId: "hms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1a44ebe3-00ae-4682-b818-ee6d663fb1bb",
    vesselId: "hms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
