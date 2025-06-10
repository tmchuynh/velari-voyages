// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a6803a63-5cdf-407c-b0b2-90f4edb20a1f",
    vesselId: "fv--explorer",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "244e7e00-e68f-48d9-908f-e7ef0c2618ea",
    vesselId: "fv--explorer",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f82a6d50-5287-4378-afa9-89d4528ee00f",
    vesselId: "fv--explorer",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "448afa88-6c7f-4281-87ef-b86a513cbb77",
    vesselId: "fv--explorer",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "92da2042-04cd-41c1-924d-1f10d77b76e3",
    vesselId: "fv--explorer",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
