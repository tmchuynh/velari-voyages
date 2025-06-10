// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "11582233-92d7-49b9-94bb-ec974fa386f3",
    vesselId: "ms-the--mariner",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "69bd5270-e29b-4be2-9c4e-13e3bc6b6453",
    vesselId: "ms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d93acead-353c-415d-a2e4-767984f928ac",
    vesselId: "ms-the--mariner",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "17b5146f-05e9-4598-8816-a5a321a6ef14",
    vesselId: "ms-the--mariner",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "b877725e-ff1a-4d25-b371-3f1b756e4399",
    vesselId: "ms-the--mariner",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "32b66422-79a2-4b22-a89a-6e9951fc77ea",
    vesselId: "ms-the--mariner",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
