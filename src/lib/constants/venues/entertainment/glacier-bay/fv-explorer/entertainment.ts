// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ae63d57b-ea1d-4c1e-9137-90de3ba337c6",
    vesselId: "fv--explorer",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "af21cfa2-465b-4f4a-aca2-0068a97670e7",
    vesselId: "fv--explorer",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "39a8d6b3-05a5-484b-be48-2540fb10cc5c",
    vesselId: "fv--explorer",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d18dd92c-6bdd-4dbd-811d-299ba8e3359f",
    vesselId: "fv--explorer",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "13ea1f9b-7fb8-4e4f-a878-b68d47739446",
    vesselId: "fv--explorer",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "7b2e2039-6a9b-4bdc-a360-91b3cadee446",
    vesselId: "fv--explorer",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
