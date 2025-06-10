// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7278b3a6-7afd-43b0-bd55-6bff0d75f7e9",
    vesselId: "ms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "62b79dfb-71e8-4973-91a6-d4d11c1966ff",
    vesselId: "ms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0c9ccccd-6a8e-480c-931a-ab2c676fc706",
    vesselId: "ms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "080ec66e-552d-480f-9744-906c6412f447",
    vesselId: "ms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
