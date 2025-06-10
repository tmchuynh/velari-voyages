// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "904e162b-ca91-43b9-a062-fb2c78c42d78",
    vesselId: "sy--of-the-deep",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "85650515-d112-4fcd-b13d-67b06f97b4d8",
    vesselId: "sy--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a15646ec-39d2-4321-bc01-d9d015d41928",
    vesselId: "sy--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "e59beb2f-d7f3-4966-b882-b5bc03bb63bd",
    vesselId: "sy--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
