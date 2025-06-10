// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d817e7db-08ef-4695-a55a-75bcd549859b",
    vesselId: "ly--explorer",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0c4def68-1c31-45d3-8606-968218147a68",
    vesselId: "ly--explorer",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ac1acc9c-a864-4d4c-a830-a4da67084779",
    vesselId: "ly--explorer",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cf7464e3-1efb-4854-9ed9-032d75cfde8a",
    vesselId: "ly--explorer",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "048eef10-cff7-4d82-81a4-bd6a32175c2c",
    vesselId: "ly--explorer",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c5b1a062-4b89-4bd7-8e7e-7bd1744c45f9",
    vesselId: "ly--explorer",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
