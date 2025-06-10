// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2910ea47-9d91-4137-9911-e1154c442d0e",
    vesselId: "ts--of-the-deep",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "a70ef5e8-5774-4ab3-83d6-c6f1c4688ac2",
    vesselId: "ts--of-the-deep",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "c6fbcc4d-f79c-4e28-8314-44dc5e8b217b",
    vesselId: "ts--of-the-deep",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "93eb4780-876f-4050-ac1e-372fe0339096",
    vesselId: "ts--of-the-deep",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
