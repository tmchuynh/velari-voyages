// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "09f89f80-ec7f-4983-b637-39845eb01974",
    vesselId: "ss--gale",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "040af7ce-4295-4dff-b25f-ca891b38252f",
    vesselId: "ss--gale",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "17674269-c52f-4e91-94f4-36e43750fdc1",
    vesselId: "ss--gale",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cef65922-f00f-4c67-aa19-d82f5740e722",
    vesselId: "ss--gale",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
