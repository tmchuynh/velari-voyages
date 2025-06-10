// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "32ea3cae-f703-4a8b-ad21-bd7c8e162863",
    vesselId: "my--of-the-deep",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "e52f43df-97c0-40fe-b60f-e239448ddd11",
    vesselId: "my--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "98084621-5039-4b77-9e47-55f627abea3c",
    vesselId: "my--of-the-deep",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "856560f4-8fab-4ff1-a0c6-0b6c8c90e2cc",
    vesselId: "my--of-the-deep",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
