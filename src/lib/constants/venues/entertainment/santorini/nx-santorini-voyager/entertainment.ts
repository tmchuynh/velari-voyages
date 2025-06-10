// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "31fb7ffb-d897-4290-8084-ccad2e6da835",
    vesselId: "nx-santorini-voyager",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7d15f0f0-30a8-4a0c-8985-60a534dd68ad",
    vesselId: "nx-santorini-voyager",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "9d46a1e0-ef22-40d8-bb75-541f66d8b5be",
    vesselId: "nx-santorini-voyager",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8a27d981-8a22-439c-b29f-780e4e5d0992",
    vesselId: "nx-santorini-voyager",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "94941a2f-c070-4655-8765-6a171b124e01",
    vesselId: "nx-santorini-voyager",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "907377bb-131c-49c7-b43b-6bcdfc40293f",
    vesselId: "nx-santorini-voyager",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9f1f222f-671d-4316-ac2e-94160e6c5701",
    vesselId: "nx-santorini-voyager",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6b2c4b7f-b70c-49e1-a406-0d89f0325aea",
    vesselId: "nx-santorini-voyager",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
