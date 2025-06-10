// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "27c92fdf-f95b-4cb8-b1eb-5710a051b7a4",
    vesselId: "my-portsmouth-voyager",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6730ca8b-b499-4e62-b5e7-64e3a6b8ff6f",
    vesselId: "my-portsmouth-voyager",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "abb8881a-c7bb-4d51-81a8-f21abe0c0be9",
    vesselId: "my-portsmouth-voyager",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8fadd1d3-98ef-43f8-9903-6dc36b55e844",
    vesselId: "my-portsmouth-voyager",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
