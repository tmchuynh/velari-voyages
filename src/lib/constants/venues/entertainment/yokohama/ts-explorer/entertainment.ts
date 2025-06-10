// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "cc554e4a-4777-486d-a1c3-873ba0d85227",
    vesselId: "ts--explorer",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "908664ea-b73c-43bc-a62a-59e2a0fd0f1c",
    vesselId: "ts--explorer",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3ebeff00-7b3e-45a2-b57d-4af2b8a75659",
    vesselId: "ts--explorer",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c09e0be1-972c-4753-b8cc-60535ff057fa",
    vesselId: "ts--explorer",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fb0f4559-f35d-4d65-b627-f403214041cf",
    vesselId: "ts--explorer",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "46c3d27e-1d2d-4e61-af21-c6e46a1db551",
    vesselId: "ts--explorer",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
