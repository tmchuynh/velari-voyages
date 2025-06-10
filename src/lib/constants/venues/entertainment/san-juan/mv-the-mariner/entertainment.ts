// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f165fb2e-1ce2-4b37-8488-4d00e3676968",
    vesselId: "mv-the--mariner",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "070eedd9-670f-47a2-83f6-66206dfce739",
    vesselId: "mv-the--mariner",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "c1bb865d-771e-4cc1-8261-9ff764d5177c",
    vesselId: "mv-the--mariner",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "76ad9234-4a11-4d21-bbb4-2deeef782700",
    vesselId: "mv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e27309ca-9ff8-449f-a9b6-7ba8aefcab58",
    vesselId: "mv-the--mariner",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "bf61d13d-6b6e-4a8c-aac4-864fdee09765",
    vesselId: "mv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
