// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e421aedb-632f-499d-be6c-dcb703fde30b",
    vesselId: "ts--explorer",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d259b7ad-6c8b-4900-9dfd-2892a4d72fd3",
    vesselId: "ts--explorer",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d4c81ce5-0e66-414a-beca-5350efa0bf8e",
    vesselId: "ts--explorer",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "8989f3b6-d526-412b-9e40-d08690d8f931",
    vesselId: "ts--explorer",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d7296161-c959-4390-880d-f27a9c8d9ea8",
    vesselId: "ts--explorer",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7e34fba2-a13f-4a78-ada0-80ae8f6b0eb1",
    vesselId: "ts--explorer",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
