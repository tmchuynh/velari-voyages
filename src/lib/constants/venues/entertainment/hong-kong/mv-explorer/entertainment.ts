// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6e91cfa4-2949-4f0b-a201-c4f272f6334c",
    vesselId: "mv--explorer",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "470879dd-c17a-4868-9aad-fcc6df2d65e2",
    vesselId: "mv--explorer",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c0266a8c-bee1-47bb-9deb-48d9f084d6f7",
    vesselId: "mv--explorer",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e794aa67-0925-419d-b58e-fdd78ff7afdc",
    vesselId: "mv--explorer",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
