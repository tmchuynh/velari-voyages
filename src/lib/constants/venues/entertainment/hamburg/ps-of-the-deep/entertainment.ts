// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "8d723c4a-334a-4443-9fea-04fc6c1473e2",
    vesselId: "ps--of-the-deep",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5b88669c-73d2-4138-a4c0-14809887ca0f",
    vesselId: "ps--of-the-deep",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "50f0b795-f37c-4013-9b74-b8b4d68f28ad",
    vesselId: "ps--of-the-deep",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "60c93c6f-d148-451d-8740-d5c7184cc085",
    vesselId: "ps--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4922cc0e-80af-453e-a6ac-0c14fa883a4b",
    vesselId: "ps--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a8d8a64c-a911-4dab-9562-672cf4f10789",
    vesselId: "ps--of-the-deep",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
