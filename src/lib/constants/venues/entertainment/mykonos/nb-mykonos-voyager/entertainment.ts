// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ff3c088e-0541-429f-8d5e-e5dea7e9cfe3",
    vesselId: "nb-mykonos-voyager",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8201c1cc-08af-4840-89bd-5546e1d09364",
    vesselId: "nb-mykonos-voyager",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a91d9e0c-eb30-4265-a8f0-2f896efdfd25",
    vesselId: "nb-mykonos-voyager",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6136c194-f1f7-430d-8ad3-d63ddab32393",
    vesselId: "nb-mykonos-voyager",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
