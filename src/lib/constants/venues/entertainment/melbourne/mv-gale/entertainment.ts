// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "54363b09-c8d2-4dc3-8abb-b8e856679342",
    vesselId: "mv--gale",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "872f5d02-27bc-4311-b7c9-8a697379ad9d",
    vesselId: "mv--gale",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "44c8c4f4-69a7-4564-b02b-8eb3f9bdd0a5",
    vesselId: "mv--gale",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3f6e259c-6c24-4f34-b22d-18937cb807f2",
    vesselId: "mv--gale",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
