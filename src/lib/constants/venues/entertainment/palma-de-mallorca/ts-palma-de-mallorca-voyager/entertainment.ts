// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4d706450-6092-4c9f-a538-336f97e60643",
    vesselId: "ts-palma-de-mallorca-voyager",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "44d293db-4239-4a0f-8abb-1d6edf47a25c",
    vesselId: "ts-palma-de-mallorca-voyager",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1b193a5f-9a47-4a5d-8bab-b1f1181dab7d",
    vesselId: "ts-palma-de-mallorca-voyager",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ec4ba44a-cb98-45c2-ab93-1870bdc9c2f4",
    vesselId: "ts-palma-de-mallorca-voyager",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0f07c947-a340-485d-b10f-e75448126fa1",
    vesselId: "ts-palma-de-mallorca-voyager",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
