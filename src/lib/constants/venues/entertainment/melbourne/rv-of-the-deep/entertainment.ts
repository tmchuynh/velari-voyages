// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "1fb5ae90-c485-4c61-8387-40a1cfbc46ef",
    vesselId: "rv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2a8b1843-2118-47e2-af25-f293cb33ccf1",
    vesselId: "rv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "71ce09fd-36f5-4b2d-9aa6-be9f267bdc83",
    vesselId: "rv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8b166009-a6b5-4382-9c96-d52e3e5578aa",
    vesselId: "rv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "11a329c3-0eb4-4bb3-acd2-0efc959fad4b",
    vesselId: "rv--of-the-deep",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a83e9198-9226-4f22-94df-e215ebc3ae83",
    vesselId: "rv--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
