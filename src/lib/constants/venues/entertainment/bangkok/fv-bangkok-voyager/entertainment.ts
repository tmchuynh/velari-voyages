// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d98bf1e0-8de3-4592-8edb-1f9de1007b65",
    vesselId: "fv-bangkok-voyager",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "04955fce-204e-482e-b4e5-0f1d3b08fabb",
    vesselId: "fv-bangkok-voyager",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "4ef65a03-7085-4d44-99cf-ec2d1a357681",
    vesselId: "fv-bangkok-voyager",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c37a75c2-7cdd-45a9-8312-31ad4707034f",
    vesselId: "fv-bangkok-voyager",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
