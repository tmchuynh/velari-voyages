// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b8d21441-5d82-42c3-9e41-a21454abbb71",
    vesselId: "ss--of-the-deep",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e6f418e9-a33e-454c-a5c1-15cc8f626479",
    vesselId: "ss--of-the-deep",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "267af043-20b9-4143-a08c-dc0ec838e6bc",
    vesselId: "ss--of-the-deep",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d076adf4-d810-4562-b866-e12d09e75fe3",
    vesselId: "ss--of-the-deep",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "050ade2b-cbee-4b10-b770-314e89a0ee8a",
    vesselId: "ss--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
