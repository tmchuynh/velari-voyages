// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "71cd597d-952a-4c27-87f9-4d88f25318a0",
    vesselId: "ss--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "8f6f3432-a529-4d26-812c-9f9a61b9ae7a",
    vesselId: "ss--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ad3a22af-243e-46bf-99f9-e3d8a3496adb",
    vesselId: "ss--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6af288d1-8794-4337-9fbc-b972a27b5869",
    vesselId: "ss--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "25bb2994-891a-435a-92c7-a9e72da5e717",
    vesselId: "ss--of-the-deep",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
