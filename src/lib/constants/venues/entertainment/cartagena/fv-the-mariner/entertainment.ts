// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d89f5048-60e9-4f63-8bb2-2bba2be4e67c",
    vesselId: "fv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "73db2009-4cb6-4da9-9f18-d4070d4fd130",
    vesselId: "fv-the--mariner",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2632e32e-77cf-4999-a27d-0736e1e15971",
    vesselId: "fv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f6c696c5-c97e-45f4-94c5-20318f4f0393",
    vesselId: "fv-the--mariner",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
