// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2240dff2-b06b-45ef-9db1-197f1fac078c",
    vesselId: "ps--explorer",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e861eaf1-0cda-4045-bc9d-e47ef63ede9a",
    vesselId: "ps--explorer",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "8aaf66f8-25cc-4cfc-8d6a-98bf76cb875c",
    vesselId: "ps--explorer",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "e554dd0a-ee68-4e2a-944c-2e5527e21ec0",
    vesselId: "ps--explorer",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e9857d30-2d4f-48e1-b139-070f2e924cee",
    vesselId: "ps--explorer",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b9480127-a9d7-4830-96c5-780ab3bd8d91",
    vesselId: "ps--explorer",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
