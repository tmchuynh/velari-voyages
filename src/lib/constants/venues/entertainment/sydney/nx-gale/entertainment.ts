// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d1bab9ff-2a04-4527-9e01-3253947cca6d",
    vesselId: "nx--gale",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "21e4a6fc-b60e-444e-9f23-2a6be1f9e3fc",
    vesselId: "nx--gale",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "d2b01d0c-431c-466e-be96-507deef33289",
    vesselId: "nx--gale",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8185412f-362e-4262-9c8b-5bde4d9da7ff",
    vesselId: "nx--gale",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2df9c2c8-a6ac-45bd-b696-e17e9e1af9df",
    vesselId: "nx--gale",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "04d84315-8586-42a3-b06f-2e4873597df8",
    vesselId: "nx--gale",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
