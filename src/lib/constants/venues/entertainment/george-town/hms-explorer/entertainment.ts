// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "09fc93eb-118f-4cbf-8729-cdec7e95d311",
    vesselId: "hms--explorer",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "44093d6a-6570-47be-83ab-3c1311277a5e",
    vesselId: "hms--explorer",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7d75fec7-a80a-4bc3-9c96-080e4e2ec8e3",
    vesselId: "hms--explorer",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "52ed8fe6-1054-40d8-975d-2b88c08e721e",
    vesselId: "hms--explorer",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
