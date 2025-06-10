// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5e23514e-973b-4c34-9b2b-0e22b376b724",
    vesselId: "rms--gale",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "748a9c3d-21ba-4146-84c2-0d5d062227c1",
    vesselId: "rms--gale",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "462c5b2d-c620-431e-a075-166853b68218",
    vesselId: "rms--gale",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9676f18b-62d9-425c-a369-af1f769c2b94",
    vesselId: "rms--gale",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3db1d8e9-7f74-4364-9101-a98724a4f86c",
    vesselId: "rms--gale",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
