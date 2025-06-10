// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0d38da05-9d98-4fa5-ae6b-70cf83c9bc07",
    vesselId: "ms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "3e5be9fb-3cae-4ebc-a1c0-4bdf5be4a0f4",
    vesselId: "ms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "06d081fb-8312-411b-b4a8-f7eb4133b2e3",
    vesselId: "ms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6caa5149-fbb4-4e2c-886b-44daeb5fae99",
    vesselId: "ms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "caaca057-6825-4444-aaf5-7dd7284f7338",
    vesselId: "ms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
