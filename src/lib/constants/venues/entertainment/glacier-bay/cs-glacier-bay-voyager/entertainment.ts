// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "befb9f7f-7689-4942-b36d-b07cb4cba76e",
    vesselId: "cs-glacier-bay-voyager",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "42ddfcf9-7998-44b6-94bf-6fd65ec59ce0",
    vesselId: "cs-glacier-bay-voyager",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a189dd5c-b371-4475-bdf7-f03acd7ce997",
    vesselId: "cs-glacier-bay-voyager",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1542149e-c779-4e8b-acc8-403ad272979c",
    vesselId: "cs-glacier-bay-voyager",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "52a29642-7cc4-4a6d-bceb-51a67a4aaa30",
    vesselId: "cs-glacier-bay-voyager",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "2558be35-9065-4bc1-8d35-9614fc4d10b1",
    vesselId: "cs-glacier-bay-voyager",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
