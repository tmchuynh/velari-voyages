// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "76b03b25-6fb1-4758-b54b-8ba4eee9f580",
    vesselId: "hms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "cd512e7f-ff1e-4cb0-85d4-68811e473e70",
    vesselId: "hms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "814471d2-febc-4f31-b626-bea49ee49d55",
    vesselId: "hms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0f85578a-3f1e-4afe-8889-10f7f1bd0d30",
    vesselId: "hms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
