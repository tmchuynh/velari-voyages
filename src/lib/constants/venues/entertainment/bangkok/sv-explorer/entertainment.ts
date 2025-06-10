// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4ee01eba-d1ce-4331-8dd8-9d2a519f26dd",
    vesselId: "sv--explorer",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "790a9e7d-3061-44a5-998a-09d318a5cc01",
    vesselId: "sv--explorer",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bffb24db-8db3-44f4-ac75-2f246ae0ccec",
    vesselId: "sv--explorer",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "413a6f36-0e7a-482b-b880-85bcdcaecafa",
    vesselId: "sv--explorer",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
