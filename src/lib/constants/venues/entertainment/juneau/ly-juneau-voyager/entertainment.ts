// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "cd57f93c-64d4-4ef4-ba37-c4540bb9190c",
    vesselId: "ly-juneau-voyager",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "60b3b08c-0894-402c-92ba-f609e2c8885a",
    vesselId: "ly-juneau-voyager",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4c2e1463-aaff-4d7f-b6a6-4ef0074c0ea1",
    vesselId: "ly-juneau-voyager",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0b368c3a-5646-4ee6-a490-c5c53d90e62a",
    vesselId: "ly-juneau-voyager",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1c5533a1-a38d-4dc3-94b1-7fb818ca39ad",
    vesselId: "ly-juneau-voyager",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c2c51689-e603-414d-96f8-151445aecd0d",
    vesselId: "ly-juneau-voyager",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
