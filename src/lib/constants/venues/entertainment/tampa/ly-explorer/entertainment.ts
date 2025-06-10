// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2930005c-08ce-4f3a-ac96-fb167f5ee016",
    vesselId: "ly--explorer",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b5fde921-4fd8-4ac6-a4c2-623d9b12b59b",
    vesselId: "ly--explorer",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "070720ff-8617-4098-ab72-470da7277da8",
    vesselId: "ly--explorer",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7071fdd0-9c03-437e-8186-49aaf132a241",
    vesselId: "ly--explorer",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
