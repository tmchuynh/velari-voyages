// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c3a08c5f-8ae2-4ce3-b258-d9aac1edc799",
    vesselId: "cs--gale",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "07f5a114-7bcb-4eed-9ed2-f8be97b753dc",
    vesselId: "cs--gale",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2e7fd2c8-264b-4455-8d06-8b64d0be13a8",
    vesselId: "cs--gale",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1ea87dc4-c160-45aa-b606-73dc089810d3",
    vesselId: "cs--gale",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
