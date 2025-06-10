// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "8934be42-268e-4e23-9ad3-d5ad68180263",
    vesselId: "nb--gale",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "fc0d4a89-02ff-4cc3-867f-fdc0463081b9",
    vesselId: "nb--gale",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2a593ac2-ec5c-4dd6-9d58-545200fe5f40",
    vesselId: "nb--gale",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "176dfca3-b240-4025-b853-b185018e1e80",
    vesselId: "nb--gale",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
