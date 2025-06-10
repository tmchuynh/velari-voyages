// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "038ea5a1-5062-45b8-a486-caa2f0cfc140",
    vesselId: "sv--explorer",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "95d03e1f-a83d-40fa-b775-b51f0b58cebb",
    vesselId: "sv--explorer",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "94471678-c265-4438-8a22-4b4aaadeecdc",
    vesselId: "sv--explorer",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7d253ecb-adbb-4bed-aa89-3f46fde93b49",
    vesselId: "sv--explorer",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f2fe0d48-84bb-45f2-b6f8-14dbd42224b7",
    vesselId: "sv--explorer",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "49c8ca0e-4ea3-4199-a329-7581f41f85be",
    vesselId: "sv--explorer",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
