// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "db619d56-b3a4-42ca-ba11-bb19a8db5f79",
    vesselId: "nb-bangkok-voyager",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1d8d86ea-b833-4587-9395-b2a740216fcf",
    vesselId: "nb-bangkok-voyager",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9e73a95c-ca97-4b1c-9e54-7719d3b8c55b",
    vesselId: "nb-bangkok-voyager",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "27c31095-9ded-43b6-b3f3-0d8661652f08",
    vesselId: "nb-bangkok-voyager",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
