// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "1e4bfa24-a32d-45c1-bfd3-acf49dedf072",
    vesselId: "cs--of-the-deep",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "66cd744b-cfc9-411a-8ac9-c32b2408a36d",
    vesselId: "cs--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6e1427ef-a64d-4e95-9e12-80edb679061b",
    vesselId: "cs--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7bbc2e37-4198-4daf-8231-04ba114dab4d",
    vesselId: "cs--of-the-deep",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9afac76b-1cf6-4700-902c-440ab7cea42b",
    vesselId: "cs--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "27cf0372-26b5-4aef-9cdf-e73cee2b77a1",
    vesselId: "cs--of-the-deep",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
