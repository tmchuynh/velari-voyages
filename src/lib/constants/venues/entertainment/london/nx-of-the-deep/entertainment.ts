// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "9c24e8a7-34c1-44a3-86a8-637275bb0d36",
    vesselId: "nx--of-the-deep",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1c56ae3e-f48f-4c2b-9670-c1a818e9ac0f",
    vesselId: "nx--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7040b1ee-c430-4cd2-9326-f458b3b54839",
    vesselId: "nx--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9e95c80c-9e1e-4bc6-b781-271fbb9fad60",
    vesselId: "nx--of-the-deep",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
