// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "8e186bd3-64d5-4e1d-b347-75c6aaed22f4",
    vesselId: "cs--of-the-deep",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "74333ae7-393c-4c19-9259-790806b97c80",
    vesselId: "cs--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "08331033-6edf-4153-8f8a-6fb809ea18d9",
    vesselId: "cs--of-the-deep",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "704d2c9b-dedc-4b6a-8ace-9dc5bc36d225",
    vesselId: "cs--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "37c1d5a0-c77e-4d59-a303-9facf08795e8",
    vesselId: "cs--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3bfa2eb5-7b5a-4feb-9f42-0108ae5e585a",
    vesselId: "cs--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
