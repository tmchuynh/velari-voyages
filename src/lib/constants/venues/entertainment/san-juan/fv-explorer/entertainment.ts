// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "46b4aaee-131c-47e2-bdfc-121c19834922",
    vesselId: "fv--explorer",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b336f4c9-52ca-48d5-88eb-6a998c5aa425",
    vesselId: "fv--explorer",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a4c0a070-47d1-4b65-976c-1858907b5fd9",
    vesselId: "fv--explorer",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2d3032f0-1284-4b85-8a6d-8e51b7a81d47",
    vesselId: "fv--explorer",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6ba21593-5e84-4c2f-b757-3be157981d54",
    vesselId: "fv--explorer",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d514a538-12a6-4ee5-a607-b5cee5da213e",
    vesselId: "fv--explorer",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "7c105103-c0df-4f99-9599-bf81f003d69c",
    vesselId: "fv--explorer",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8d2f6025-9b66-4b87-bd6f-64f1d467626b",
    vesselId: "fv--explorer",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
