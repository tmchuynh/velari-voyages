// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "1c1d1fd2-20cf-451b-8bbb-1b8eead687d8",
    vesselId: "my--gale",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "eff85990-5e9e-41c1-91d6-375ff1e82e04",
    vesselId: "my--gale",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f208b458-8ae4-4458-a894-38229a1345c8",
    vesselId: "my--gale",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "149aefcd-5732-4f71-a4e0-2f2239dc8c66",
    vesselId: "my--gale",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a1396c07-65e1-425a-809e-eb3140d82f80",
    vesselId: "my--gale",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "db676da4-e535-45ac-a89f-6230d60101d7",
    vesselId: "my--gale",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
