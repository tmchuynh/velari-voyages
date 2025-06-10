// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "94d8b923-2a44-4950-bbee-56210bcdbd6b",
    vesselId: "nx-rio-de-janeiro-voyager",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1f7adca8-810c-4bf6-bf1b-5a381efe5130",
    vesselId: "nx-rio-de-janeiro-voyager",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ade63cb3-aa94-4a80-b0ae-504701572ef7",
    vesselId: "nx-rio-de-janeiro-voyager",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1f491bf7-2b13-4732-94f6-b9fc2025532e",
    vesselId: "nx-rio-de-janeiro-voyager",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
