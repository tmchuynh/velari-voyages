// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "de2a12d2-5e10-4daf-8fab-5a029dd525b0",
    vesselId: "hms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f19d0ab7-a988-4e86-a279-56c26912f80f",
    vesselId: "hms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "d197524d-6fbf-4359-a9aa-cd447249ffeb",
    vesselId: "hms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1e9e425b-5c63-4035-b470-2fdb6c43476a",
    vesselId: "hms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "1a428d8c-4ebd-44c0-a0db-242a81a03f90",
    vesselId: "hms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
