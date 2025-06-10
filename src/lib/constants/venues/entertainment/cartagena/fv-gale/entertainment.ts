// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "760a995e-d816-4260-b557-09563b554cad",
    vesselId: "fv--gale",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "54f8d8d0-7b63-4926-a2b7-e785305b23c3",
    vesselId: "fv--gale",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6734e2d8-7279-452a-b5b6-a36c1ed91118",
    vesselId: "fv--gale",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7976a366-c182-4ac1-9983-062853418c69",
    vesselId: "fv--gale",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
