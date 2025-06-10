// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "059b8d7d-489a-4060-87d3-a7f47bac2b87",
    vesselId: "rv--explorer",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "46b4a944-c24e-4f1e-9ab0-2c2a3a9da2ba",
    vesselId: "rv--explorer",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b0b61b55-59d0-4e55-96cd-e31d6574778a",
    vesselId: "rv--explorer",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "aabc9885-8233-48b7-8764-d4c432c47231",
    vesselId: "rv--explorer",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0c4000a4-ff48-48bf-a94c-42ed338c08e2",
    vesselId: "rv--explorer",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "877ab5a1-15d1-47ef-9041-b77fc439c8c6",
    vesselId: "rv--explorer",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
