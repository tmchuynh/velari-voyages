// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "33fca183-4802-49ce-8fac-cc013a9903f5",
    vesselId: "mv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "bc5a41b2-bf17-4666-b130-ab3bacf56166",
    vesselId: "mv--of-the-deep",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "c4b64a9b-dcd4-4748-8dc0-b6087701ad11",
    vesselId: "mv--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "03747525-f060-41c0-8c04-7ee125e16215",
    vesselId: "mv--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
