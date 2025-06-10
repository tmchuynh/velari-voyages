// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d8ca388c-d13a-4e51-87d0-68787caf3860",
    vesselId: "sy-reykjavik-voyager",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f6291ad6-0641-4ace-a6a6-1fde426128e3",
    vesselId: "sy-reykjavik-voyager",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "15609388-4145-4b59-8a8a-01a4d8565821",
    vesselId: "sy-reykjavik-voyager",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dd82c84c-eeef-4d36-aa25-8f7a1929edd4",
    vesselId: "sy-reykjavik-voyager",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6b1333d2-7fbd-4d9b-bc5f-2563b70b4ce4",
    vesselId: "sy-reykjavik-voyager",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "cc20af9d-b31d-4f93-87d5-6fcf0e966333",
    vesselId: "sy-reykjavik-voyager",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
