// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f75d43a9-e8b9-445a-b309-fe8f791e86f0",
    vesselId: "ss--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d457d9ef-5ef2-48e7-adda-7360df684e8b",
    vesselId: "ss--of-the-deep",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "015510ae-2fb7-4c30-bb4f-97ea0382ce01",
    vesselId: "ss--of-the-deep",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b2e76754-d7b7-4d7a-9026-f32124fc3251",
    vesselId: "ss--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "64569b87-fb9c-4735-be02-f7132d19546f",
    vesselId: "ss--of-the-deep",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0d7e30a4-d52f-4d8f-81a6-75006dc875df",
    vesselId: "ss--of-the-deep",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
