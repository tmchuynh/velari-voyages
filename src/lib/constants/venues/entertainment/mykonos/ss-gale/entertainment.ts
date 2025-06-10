// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "96f25ec9-b420-4ddb-a16d-67b9620a2c87",
    vesselId: "ss--gale",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "42e97527-38f8-43f0-b9c3-aabc9f26ffa6",
    vesselId: "ss--gale",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3a03216a-50b1-4cee-9a28-e3a65c39d31f",
    vesselId: "ss--gale",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ec80db64-1560-4ab2-83e4-cb350e1c480b",
    vesselId: "ss--gale",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
