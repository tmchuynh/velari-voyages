// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "90f2cad8-5992-4420-999d-790d9661eb85",
    vesselId: "sv-amsterdam-voyager",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4ed5af72-6f85-4829-ac0a-85c1702b5932",
    vesselId: "sv-amsterdam-voyager",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "6ff3eaf4-ad1e-4df3-a5b6-39c6c43f9130",
    vesselId: "sv-amsterdam-voyager",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "538d2d28-387f-497d-a1ce-a1bd0053a1e8",
    vesselId: "sv-amsterdam-voyager",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
