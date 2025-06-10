// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "167c293d-7d65-46f9-bfc9-975e2fab0fd3",
    vesselId: "sv--explorer",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a54aa4da-3cd5-4169-9ff2-5983c4009956",
    vesselId: "sv--explorer",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "fab46c99-1f72-447c-bc09-e15fb3bc2558",
    vesselId: "sv--explorer",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b225320f-f4e0-432e-a936-55816dbccdd2",
    vesselId: "sv--explorer",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
