// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "bf6a1785-b67a-4f2e-8f77-025bf658293b",
    vesselId: "rv--gale",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f15b876c-cee3-4f5d-85a8-8b3a07aa785a",
    vesselId: "rv--gale",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9cff4d41-57dc-416e-abda-65a9aeeee585",
    vesselId: "rv--gale",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "25e1ef38-b95a-4342-859d-6a4e6000f46f",
    vesselId: "rv--gale",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "41056f7e-e435-44ce-a0c7-f0d60b5dd7da",
    vesselId: "rv--gale",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "765b1647-e792-4e1b-a947-88a404855a30",
    vesselId: "rv--gale",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
