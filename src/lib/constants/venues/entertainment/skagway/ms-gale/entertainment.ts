// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "8762177f-ee4d-44f7-ba11-ff65cd851572",
    vesselId: "ms--gale",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f47d779d-9a50-455d-ae83-7e444fc35227",
    vesselId: "ms--gale",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c574593f-c381-43d9-b00f-cb462e2049e0",
    vesselId: "ms--gale",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f7091a45-965c-4e69-b231-a1c32c013e25",
    vesselId: "ms--gale",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "491dbd2c-57aa-4f01-8a66-b6726718117c",
    vesselId: "ms--gale",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "505bcb14-2896-41c5-9dbb-3a8399a6838d",
    vesselId: "ms--gale",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
