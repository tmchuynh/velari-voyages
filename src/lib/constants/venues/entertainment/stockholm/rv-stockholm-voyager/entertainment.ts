// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "61ceceae-7b0d-4392-991c-e44bb7c05939",
    vesselId: "rv-stockholm-voyager",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "0d118e89-138e-4bcc-9a03-482dee87d068",
    vesselId: "rv-stockholm-voyager",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9b278151-77ae-4c37-9ea9-818aff2ec975",
    vesselId: "rv-stockholm-voyager",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "97a2a1a8-745c-43e3-872c-ef378bd3fec0",
    vesselId: "rv-stockholm-voyager",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
