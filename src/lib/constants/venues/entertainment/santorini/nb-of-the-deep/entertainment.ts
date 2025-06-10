// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "bcaa2b36-05bb-4395-88ac-05fbfd6363cb",
    vesselId: "nb--of-the-deep",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1c3f8642-23eb-4efa-9149-e80f903ad3fa",
    vesselId: "nb--of-the-deep",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e4c8e7be-ce03-4c80-9ee3-bc5109d5b0e1",
    vesselId: "nb--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d45ed515-4d37-41eb-a443-b4910300fdac",
    vesselId: "nb--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5d37c8db-5a36-44c2-912a-3ab56f77f3e7",
    vesselId: "nb--of-the-deep",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
