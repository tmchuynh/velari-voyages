// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e2487721-3a75-40cf-9a6b-8ba283dc4b29",
    vesselId: "sy-san-francisco-voyager",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "637b872a-cd55-4c33-a57f-2b85a65e8c06",
    vesselId: "sy-san-francisco-voyager",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f2fbb8d8-a993-4154-ad1e-7e53485b42d2",
    vesselId: "sy-san-francisco-voyager",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cc0444eb-8020-46fe-85c7-7023cdb2d4bd",
    vesselId: "sy-san-francisco-voyager",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
