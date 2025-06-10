// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ad0f6c67-59f7-490b-a59c-2f7555b40436",
    vesselId: "mv--gale",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "658c80ce-f4b3-4149-baf0-28e3df48f83b",
    vesselId: "mv--gale",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ed254bb5-9eaf-49be-8938-e8a449210ed8",
    vesselId: "mv--gale",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "60964324-b11a-4488-b47f-e4156b288542",
    vesselId: "mv--gale",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "2ec20803-c22d-48a7-a80a-9e23087afa16",
    vesselId: "mv--gale",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b92865d8-200c-4cd6-9876-5412320a353a",
    vesselId: "mv--gale",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
