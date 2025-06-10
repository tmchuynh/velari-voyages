// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "eecffe6f-f4f0-4854-ba48-34df45c8a6eb",
    vesselId: "hms--gale",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f99eefaa-46ea-4b63-b368-4f3fd4292baa",
    vesselId: "hms--gale",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "398459e3-1717-4b89-bfb5-ebb4a3a8cc13",
    vesselId: "hms--gale",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "a019f790-1058-4247-8f57-5116f043d4b3",
    vesselId: "hms--gale",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f0ae246e-9479-49be-a67c-a47a4cc3de3e",
    vesselId: "hms--gale",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8dc34d56-cb35-45f9-8e58-06df38ea2e55",
    vesselId: "hms--gale",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
