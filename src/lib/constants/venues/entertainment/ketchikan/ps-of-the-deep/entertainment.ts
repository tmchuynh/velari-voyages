// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "978ac96f-9f5e-4807-8cd3-9d4d5110a866",
    vesselId: "ps--of-the-deep",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7a30cf42-dc95-4bee-8861-036f20c4a9de",
    vesselId: "ps--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1e74a2da-1e2c-4a83-b3a9-fc14f4582c10",
    vesselId: "ps--of-the-deep",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7070fe8b-80ad-41a0-8ce6-494d14c24490",
    vesselId: "ps--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
