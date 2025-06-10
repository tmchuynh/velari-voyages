// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3436f2af-b50f-46b4-b103-29b2174bd4b5",
    vesselId: "ms--gale",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0965eb3a-2d43-4e7e-acad-1c036ebd4334",
    vesselId: "ms--gale",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "539fd9ea-cb84-4f4b-aae6-2050d10d0b99",
    vesselId: "ms--gale",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "c889779d-b93f-4293-9543-7f0944f8318b",
    vesselId: "ms--gale",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
