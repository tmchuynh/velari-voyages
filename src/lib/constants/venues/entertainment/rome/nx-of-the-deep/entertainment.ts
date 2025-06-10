// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "50e23e50-d851-4e5c-b1c6-e165b238bbce",
    vesselId: "nx--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "332d8aff-4bc1-4434-8841-b79d1a4be347",
    vesselId: "nx--of-the-deep",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ad403348-beda-4c7c-a85e-2b368c083253",
    vesselId: "nx--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "313b6928-ebc1-44a2-a61f-49da39197971",
    vesselId: "nx--of-the-deep",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "b31b64d2-4172-46ef-9aba-830ab63e1b89",
    vesselId: "nx--of-the-deep",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "330f2e3e-f2f5-4368-89c1-16ea35c77301",
    vesselId: "nx--of-the-deep",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
