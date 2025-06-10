// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "fbe3a85b-b843-4018-87fd-754278212bf0",
    vesselId: "fv--gale",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7ef218f0-6e31-4f7e-953f-2c45215e273a",
    vesselId: "fv--gale",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c6825c6e-865a-4a94-9790-061dbc76a3ae",
    vesselId: "fv--gale",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ff6ca17c-3841-4896-addf-a38df1bd281b",
    vesselId: "fv--gale",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1b78a073-2af4-4c8c-87c3-417d33368d8b",
    vesselId: "fv--gale",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "1c6a33d7-179b-4c2e-bc95-4b8b28c60086",
    vesselId: "fv--gale",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
