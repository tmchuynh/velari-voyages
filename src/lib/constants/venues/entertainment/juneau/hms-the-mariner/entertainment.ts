// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e963e9e0-0c66-4412-9285-43a33e13375f",
    vesselId: "hms-the--mariner",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "27b4dcbc-954f-4b33-94f0-0efdbbe6d6ca",
    vesselId: "hms-the--mariner",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "34da4f68-3b38-4f65-b2d1-15565dea95cb",
    vesselId: "hms-the--mariner",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2cb8c01d-83a8-48a6-9103-2586b991e425",
    vesselId: "hms-the--mariner",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f12e44ef-43f4-401e-8095-16b0d8e16669",
    vesselId: "hms-the--mariner",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ac49b993-dfe9-41cd-b189-d0cbbfb17902",
    vesselId: "hms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
