// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5de72288-af03-40e2-b209-d72fd6f76777",
    vesselId: "hms-auckland-voyager",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "27925d5c-4c04-4a0c-afc0-3c709b0f49ed",
    vesselId: "hms-auckland-voyager",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "6335a527-0161-4054-8b14-a8fa251ee0c1",
    vesselId: "hms-auckland-voyager",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7b735b90-e88a-44eb-ac12-82578b5b1ed6",
    vesselId: "hms-auckland-voyager",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "57a534cb-02c9-4082-8ab0-df1bf73b0d8b",
    vesselId: "hms-auckland-voyager",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "aaa9aa5e-bc30-4296-a55e-977dc4363611",
    vesselId: "hms-auckland-voyager",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
