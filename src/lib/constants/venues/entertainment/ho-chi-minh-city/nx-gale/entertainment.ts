// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "84df8cbe-e3ad-482a-91ef-1ed1c405d17f",
    vesselId: "nx--gale",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "8e48969b-5a07-451f-b99a-102ba0d97fbb",
    vesselId: "nx--gale",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "62fcc49c-f23d-4805-943d-9b7d491aca25",
    vesselId: "nx--gale",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "390c4b17-1153-49c3-a33d-eb6a59e88544",
    vesselId: "nx--gale",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6275f781-981e-4de0-944b-160dcb6762a1",
    vesselId: "nx--gale",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "24b6b357-0638-4b99-b20f-66efa05ee13c",
    vesselId: "nx--gale",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
