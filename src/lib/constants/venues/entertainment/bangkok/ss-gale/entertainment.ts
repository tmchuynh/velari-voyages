// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e955f2d1-8842-4cb2-b00e-924f055cbb4d",
    vesselId: "ss--gale",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4cbeb770-6760-490b-8ed8-7c0e3e1ac40a",
    vesselId: "ss--gale",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f559515a-55e1-4e62-8fc4-cb81946c07d3",
    vesselId: "ss--gale",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "343958ac-6cf8-49db-833a-7db280458fe4",
    vesselId: "ss--gale",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
