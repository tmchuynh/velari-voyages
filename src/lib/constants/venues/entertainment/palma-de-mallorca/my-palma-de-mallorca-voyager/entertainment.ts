// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d2ed3e4d-5ad8-40b1-a531-e8c409c603e2",
    vesselId: "my-palma-de-mallorca-voyager",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bb5e3cad-6730-40c1-bad7-bdb1ab312131",
    vesselId: "my-palma-de-mallorca-voyager",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c37e61f0-e182-40f9-adde-31c64377b689",
    vesselId: "my-palma-de-mallorca-voyager",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "678bce7c-9daf-454d-b95a-ed2b09653bf0",
    vesselId: "my-palma-de-mallorca-voyager",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0178fb93-c512-48a8-bf24-d673ad12d0d4",
    vesselId: "my-palma-de-mallorca-voyager",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5452de99-214f-4795-bc42-37450f2ce93e",
    vesselId: "my-palma-de-mallorca-voyager",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
