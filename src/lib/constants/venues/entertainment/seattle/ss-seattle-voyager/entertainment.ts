// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d7cbb4dc-90ae-40a9-bdd4-2376d585f5dc",
    vesselId: "ss-seattle-voyager",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "bb996a54-6c4c-4cd4-89d6-76f3650cfe7d",
    vesselId: "ss-seattle-voyager",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "3e684b3a-6768-441a-9186-1af2de4ace64",
    vesselId: "ss-seattle-voyager",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "52b14db7-68a1-41e2-b30e-c92ba87bf2c6",
    vesselId: "ss-seattle-voyager",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c88e4ac1-f6bd-4cb9-bfdc-419f03fb0968",
    vesselId: "ss-seattle-voyager",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "147d9993-2a67-4305-ba00-cd25f076992f",
    vesselId: "ss-seattle-voyager",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
