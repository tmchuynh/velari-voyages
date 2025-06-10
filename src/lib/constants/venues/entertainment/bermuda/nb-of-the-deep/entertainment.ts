// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "9310e247-744c-4369-97ca-0cdfbf8f4a7e",
    vesselId: "nb--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6cb44096-aa6d-406f-96d7-369c382877db",
    vesselId: "nb--of-the-deep",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0a6d1540-d645-43cc-83c4-3ebdc416ffc3",
    vesselId: "nb--of-the-deep",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2fce6976-3503-48a7-a2c7-dae74f05e1b1",
    vesselId: "nb--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0d5546e0-8b29-4cae-822d-cf31a60db4a0",
    vesselId: "nb--of-the-deep",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
