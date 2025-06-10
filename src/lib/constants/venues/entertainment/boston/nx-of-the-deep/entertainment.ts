// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5dc7fafd-7403-4256-9ac6-ca5f9caaa268",
    vesselId: "nx--of-the-deep",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "defda765-8acc-4ff7-83f4-a5ca6e29ba2a",
    vesselId: "nx--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c42ca947-eeb5-4bcf-ad10-ce875c45aa98",
    vesselId: "nx--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1fc42e2c-0afc-4432-bb5e-277af0410861",
    vesselId: "nx--of-the-deep",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
