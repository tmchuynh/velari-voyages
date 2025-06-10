// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b2b2cec5-ea16-4f83-9aee-217f3b90d6fb",
    vesselId: "hms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b9f0d82b-fca2-4ae2-8610-4ad55bd0e948",
    vesselId: "hms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1b9a00dc-8ebd-455b-a79d-75b30dc5bf3e",
    vesselId: "hms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "5d5f2f61-c84b-4890-bd6f-74e78455f217",
    vesselId: "hms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b48422d7-8f97-4654-93da-e198beae3d98",
    vesselId: "hms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "408e1b4c-1bb4-4a83-b442-8894336ece08",
    vesselId: "hms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
