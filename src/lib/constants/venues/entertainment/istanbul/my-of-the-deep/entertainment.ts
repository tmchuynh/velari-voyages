// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "fdd817c0-5307-40d5-9591-fb46ea36856d",
    vesselId: "my--of-the-deep",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "85ed5347-b705-43f5-9f13-fa76f211e45b",
    vesselId: "my--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b906141a-0348-4772-a3e5-735373879ad6",
    vesselId: "my--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "1292c711-97f7-48ca-b70c-c1f2a0dc2c61",
    vesselId: "my--of-the-deep",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "003e8e8c-ac48-4dc0-9562-d1dc084c8fc9",
    vesselId: "my--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
