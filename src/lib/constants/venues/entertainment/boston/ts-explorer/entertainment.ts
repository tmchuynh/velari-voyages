// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ca4fb0a1-fa37-4c29-9890-06f6a98a56c1",
    vesselId: "ts--explorer",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5085f445-0e06-41f2-812f-b0460f591187",
    vesselId: "ts--explorer",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "da393322-b6df-4b3f-befb-4c5d24709697",
    vesselId: "ts--explorer",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7a32ccb5-7fb3-47bb-9fc8-c974b9e1e977",
    vesselId: "ts--explorer",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "934128c3-eb7c-4548-a72e-ff7323a1293a",
    vesselId: "ts--explorer",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1a5a9c1d-d620-4f6a-bed2-d38be7a4a590",
    vesselId: "ts--explorer",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
