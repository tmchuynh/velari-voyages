// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e32ecfe7-66dd-401e-9b2b-17c9f4bfdb2b",
    vesselId: "my--of-the-deep",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4225ed86-af66-4a6a-8598-9228328d61ac",
    vesselId: "my--of-the-deep",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5559473f-46b0-4c20-bac2-70e57482b090",
    vesselId: "my--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "0c739d44-d257-47e2-aae7-d11376ef4abf",
    vesselId: "my--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
