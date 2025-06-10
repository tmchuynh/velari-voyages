// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "dbd763ac-703b-4721-8946-ee5c901d5000",
    vesselId: "my--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c6448a53-2fcf-4b73-9bfd-4fc303372138",
    vesselId: "my--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b81c454a-9675-42cd-8943-d7ccfe0a1902",
    vesselId: "my--of-the-deep",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8961e447-9881-4fa1-a72e-dd5e90221ecb",
    vesselId: "my--of-the-deep",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "acb1b139-1a2e-4035-90ea-629151b2a5c9",
    vesselId: "my--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d275d753-58ac-4ad0-82d7-9ff0283975b2",
    vesselId: "my--of-the-deep",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
