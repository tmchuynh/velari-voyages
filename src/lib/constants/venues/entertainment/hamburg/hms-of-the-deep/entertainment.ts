// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "fe8c8845-0acc-4909-8473-d6ec0a750186",
    vesselId: "hms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "098f7823-8734-48f2-8a2f-e3a793621939",
    vesselId: "hms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ac7e2165-7881-4a3e-a323-c4247fd7a98f",
    vesselId: "hms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "a4e7c40c-dde0-4997-9f85-45be06c861a8",
    vesselId: "hms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "c550291f-df15-4d52-8134-967da1317940",
    vesselId: "hms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a5e58093-7b37-48be-9120-be5e4bb4c71e",
    vesselId: "hms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
