// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "596e25ba-5224-41a7-862d-49f9b0b85598",
    vesselId: "rv--gale",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "000f5a0b-f43e-48df-bb72-15dcdad1f374",
    vesselId: "rv--gale",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0fc1cb1a-da14-4d21-8d38-62597babc83b",
    vesselId: "rv--gale",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e9073036-80d4-4d14-843a-454a750bb596",
    vesselId: "rv--gale",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
