// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7a5ab782-714f-4eb7-be98-f1b4494a7120",
    vesselId: "my--explorer",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e950fbc0-20fe-48a6-bf62-1f22a029c5cc",
    vesselId: "my--explorer",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "78a9271d-9e4d-46b5-944d-5590973e6203",
    vesselId: "my--explorer",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f6df7ddf-508e-4601-8d77-751a8680e989",
    vesselId: "my--explorer",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
