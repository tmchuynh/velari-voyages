// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "dc6ac024-9c7e-4394-9815-3b658d5e2dd1",
    vesselId: "ss--of-the-deep",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "20e0e412-bf69-4b51-b906-77e27da3ce87",
    vesselId: "ss--of-the-deep",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8d710f99-c223-4082-bf85-809b1f48fbcf",
    vesselId: "ss--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f0af6f03-6cfe-4e38-8302-cc5e58b7b20b",
    vesselId: "ss--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
