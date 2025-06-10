// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0aefb37d-3fad-43b6-a4a7-2b3521a9b710",
    vesselId: "sv--gale",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c5546b7a-e36b-4adb-9453-49a96d469afa",
    vesselId: "sv--gale",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c96e6c6d-c27e-4438-b618-822780d04a74",
    vesselId: "sv--gale",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "ab4214a4-0bb0-41de-8aa1-303e096d3fba",
    vesselId: "sv--gale",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
