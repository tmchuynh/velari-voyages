// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "1f6961c1-af6d-4270-82c5-73f2371bc508",
    vesselId: "ts-san-francisco-voyager",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cb23b752-d6e0-473e-b76e-a9b1c2685026",
    vesselId: "ts-san-francisco-voyager",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e9530220-ccc7-49be-81a9-1b9dc0beb327",
    vesselId: "ts-san-francisco-voyager",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4f3813d0-f296-46fb-acfa-7b7918565f42",
    vesselId: "ts-san-francisco-voyager",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
