// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6565696f-36e2-4cb4-a34c-5c88e8595c4f",
    vesselId: "ts--explorer",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "070f0045-8c10-4c63-bb61-6bafb583754e",
    vesselId: "ts--explorer",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "759881eb-b937-4a5f-aaac-f1187a216e02",
    vesselId: "ts--explorer",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d6972727-4e36-44c0-a7d2-a97107775824",
    vesselId: "ts--explorer",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "311f4d93-70c3-429e-944c-9a8223f3f5ff",
    vesselId: "ts--explorer",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
