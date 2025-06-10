// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c725afdf-980e-4b4a-962f-d11558843d00",
    vesselId: "ss-barcelona-voyager",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b68674ec-e746-4771-851b-203742e4dcc7",
    vesselId: "ss-barcelona-voyager",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8331b573-a005-4354-9cf7-7dd46bc6c45a",
    vesselId: "ss-barcelona-voyager",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "a813e4ca-6f9d-4477-b0b4-937e05642406",
    vesselId: "ss-barcelona-voyager",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
