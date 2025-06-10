// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "171920d7-ff88-45fd-9428-6fa8b2fa873c",
    vesselId: "nb-bermuda-voyager",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8908c551-cfe8-4549-aae3-2be931ae72d8",
    vesselId: "nb-bermuda-voyager",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "3e8659f2-82b8-4539-bfce-468344cddcb7",
    vesselId: "nb-bermuda-voyager",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "477e758d-9938-4193-944b-e97673f2ba86",
    vesselId: "nb-bermuda-voyager",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "88942d07-9422-4cb0-9089-dfa09ac3aca9",
    vesselId: "nb-bermuda-voyager",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "caf54c95-5873-47d9-8be6-90ec0fac0e98",
    vesselId: "nb-bermuda-voyager",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
