// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a53403e8-0d80-4b16-9d87-a60373a9566b",
    vesselId: "ts-st-petersburg-voyager",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c4588da9-ef72-4fa7-82db-c76bf233415b",
    vesselId: "ts-st-petersburg-voyager",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0d49e449-43ba-4366-b894-1bb85c78ef75",
    vesselId: "ts-st-petersburg-voyager",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "36ca82f0-9f88-480f-8438-7551609848a1",
    vesselId: "ts-st-petersburg-voyager",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2ad6860f-343f-4a6f-9dc9-a3163a6c253b",
    vesselId: "ts-st-petersburg-voyager",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "481488df-394a-4c3b-9d75-f6c2ed919b7b",
    vesselId: "ts-st-petersburg-voyager",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
