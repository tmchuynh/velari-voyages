// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ce9af936-622d-4b9d-b14f-15406769e2c8",
    vesselId: "hms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "96c01b2e-4115-4201-9254-8ef705c1bd5b",
    vesselId: "hms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "bb566ee2-bbdf-4b2b-81be-f221860002f7",
    vesselId: "hms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "bb206faa-1a41-4da5-a784-54aac966e0e8",
    vesselId: "hms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
