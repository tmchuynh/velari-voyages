// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c294bc34-8d7f-44b1-9bd9-24039d3f52f8",
    vesselId: "nb--gale",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ae85ec5a-45da-4845-a2a5-7338a43825d8",
    vesselId: "nb--gale",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6748a22a-156e-465e-928e-cd03d8fe9ce5",
    vesselId: "nb--gale",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "f87b5d1e-f6a8-4ad5-9c38-17cb39ec25b2",
    vesselId: "nb--gale",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
