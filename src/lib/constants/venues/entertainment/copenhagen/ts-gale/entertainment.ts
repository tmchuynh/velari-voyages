// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "debc69ab-6e0a-487d-929a-e1520d0071d6",
    vesselId: "ts--gale",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6c43262c-a080-411a-a631-b55c4895bd32",
    vesselId: "ts--gale",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a3df1051-0243-41a6-b90f-3fe1a135920a",
    vesselId: "ts--gale",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0a4f9a94-c32a-41cf-afc6-cab81d5640f7",
    vesselId: "ts--gale",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "89446bf0-ff18-4d89-8f97-c13d8f2962e9",
    vesselId: "ts--gale",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a7dcb60d-575f-4961-8a39-440504e247d5",
    vesselId: "ts--gale",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
