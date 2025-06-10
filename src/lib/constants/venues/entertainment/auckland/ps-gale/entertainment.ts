// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ac2d0afe-348f-41cc-8fa5-8691b1948e97",
    vesselId: "ps--gale",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1eb61e07-9ef2-4528-98fb-ab0410d3980b",
    vesselId: "ps--gale",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "72d407c4-4ce6-4c1d-8c7b-a3376103d35f",
    vesselId: "ps--gale",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "1704ad9d-6d04-499d-acbd-fa4f8210652d",
    vesselId: "ps--gale",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
