// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "bd918a13-6e0a-4582-8645-472656892620",
    vesselId: "cs--of-the-deep",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1f57f31f-71dd-480e-8101-2f00baa2a898",
    vesselId: "cs--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "21bfbbe2-edde-4f56-af5f-62e909dd402f",
    vesselId: "cs--of-the-deep",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "51721dc9-5492-4ca6-8bd1-fc93296f147e",
    vesselId: "cs--of-the-deep",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
