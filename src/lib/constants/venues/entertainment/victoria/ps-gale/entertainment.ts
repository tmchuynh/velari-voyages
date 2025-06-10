// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0326ad8e-a78b-4450-9b6e-3deff3851b09",
    vesselId: "ps--gale",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c1256bbf-6a28-48b8-952a-1d04bf279220",
    vesselId: "ps--gale",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8d5489b3-d409-49e6-83b4-b0cc3a85b169",
    vesselId: "ps--gale",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "afa62f1c-a08e-4b50-b632-9bfaa21bd244",
    vesselId: "ps--gale",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c7827a4f-27ab-4876-b437-3e54e3faaa60",
    vesselId: "ps--gale",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "546ae70c-4880-484b-be8e-16d0464b0718",
    vesselId: "ps--gale",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
