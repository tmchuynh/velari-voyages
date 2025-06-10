// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "23e8a80a-c4f3-499d-8127-17f454a04f8b",
    vesselId: "hms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "166c6358-bc08-4df1-9ab8-acee7d174774",
    vesselId: "hms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b320fa4a-7fbe-4802-a595-64ccad6f377c",
    vesselId: "hms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5abf3523-0fe9-47da-a7a5-7b82e6c16378",
    vesselId: "hms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bc69c5f0-0566-4836-a4e7-b99473ab207e",
    vesselId: "hms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2af8a075-4c0d-4f13-8380-0b0af9a7c8fc",
    vesselId: "hms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "41271224-d894-4c89-ab83-fb42cf8e1699",
    vesselId: "hms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c0b51227-00d8-49c6-ac58-9aacad5cd756",
    vesselId: "hms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
