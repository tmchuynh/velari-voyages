// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ec440654-6bc2-47e8-8c2c-9a4b30950fcd",
    vesselId: "cs-the--mariner",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c4846bd1-61e0-4b57-9b20-845e4466ccfc",
    vesselId: "cs-the--mariner",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "086e1851-3f6e-4ec9-b0a1-a0ecf414b504",
    vesselId: "cs-the--mariner",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b131d558-d737-40ea-81d3-554a37037732",
    vesselId: "cs-the--mariner",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "fcdedf12-fe56-4f13-8e4e-9c9fc120ec26",
    vesselId: "cs-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
