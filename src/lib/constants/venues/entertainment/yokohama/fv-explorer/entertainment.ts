// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6a492fae-92cc-4905-9bff-fcc7c9c8798a",
    vesselId: "fv--explorer",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "3ddc82dc-b310-47e8-84f9-92e02f354094",
    vesselId: "fv--explorer",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "284c02bb-d33b-46df-b36c-c54722cf419e",
    vesselId: "fv--explorer",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "c95a9c92-16ed-452f-9873-6d54468cc06c",
    vesselId: "fv--explorer",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
