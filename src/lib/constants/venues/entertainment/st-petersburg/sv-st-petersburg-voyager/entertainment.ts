// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5a8ad99b-3bdb-40dc-998b-5890115de89f",
    vesselId: "sv-st-petersburg-voyager",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "057f30c2-5e46-4b42-b25a-4aedc47390c3",
    vesselId: "sv-st-petersburg-voyager",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c364f3f5-b8a8-43db-8059-9780110ab028",
    vesselId: "sv-st-petersburg-voyager",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "cde52a67-c4ae-4de6-a701-1f828b090f47",
    vesselId: "sv-st-petersburg-voyager",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f3c4246a-8e70-46e8-add4-9c68e1fd37c6",
    vesselId: "sv-st-petersburg-voyager",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
