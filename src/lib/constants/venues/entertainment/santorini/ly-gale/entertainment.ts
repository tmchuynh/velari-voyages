// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "be50fd7c-5530-4a6e-a467-d32ec39db8e3",
    vesselId: "ly--gale",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "e7d35014-8307-4e81-b8aa-5fb9a379a30b",
    vesselId: "ly--gale",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "753b28bc-844f-4e03-8737-092adcb8b45e",
    vesselId: "ly--gale",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "36daa3ec-cc66-4dcc-8d37-2a708593970f",
    vesselId: "ly--gale",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d1c55111-49fc-4d42-8fad-4c98cdc27c50",
    vesselId: "ly--gale",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
